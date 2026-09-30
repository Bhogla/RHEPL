#!/usr/bin/env node
// Case-sensitive image reference audit.
// macOS is case-insensitive, so /Logos/1.PNG resolves even if code says /logos/1.png.
// The live site runs on Hostinger (Apache, Linux) which IS case-sensitive.
// This script simulates the Linux behaviour and flags every ref that would 404 in prod.

import { readdirSync, statSync, readFileSync } from 'node:fs'
import { join, dirname, basename, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(fileURLToPath(new URL('.', import.meta.url)))
const SRC = join(ROOT, 'src')
const PUBLIC = join(ROOT, 'public')

const IMG_RE = /["'`](\/[^"'`\s]+?\.(?:png|jpg|jpeg|webp|svg|gif|avif|PNG|JPG|JPEG|WEBP|SVG|GIF|AVIF))["'`]/g
const CODE_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.html'])

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

function collectRefs() {
  const refs = new Map() // urlPath -> [file:line]
  for (const file of walk(SRC)) {
    const ext = file.slice(file.lastIndexOf('.'))
    if (!CODE_EXT.has(ext)) continue
    const text = readFileSync(file, 'utf8')
    const lines = text.split('\n')
    lines.forEach((line, i) => {
      let m
      IMG_RE.lastIndex = 0
      while ((m = IMG_RE.exec(line))) {
        const url = m[1]
        if (!refs.has(url)) refs.set(url, [])
        refs.get(url).push(`${relative(ROOT, file)}:${i + 1}`)
      }
    })
  }
  return refs
}

function existsCaseSensitive(fsPath) {
  // Walk each segment, at every step verify the segment is present with exact case
  const segs = fsPath.split('/').filter(Boolean)
  let cur = fsPath.startsWith('/') ? '/' : ''
  for (const seg of segs) {
    let entries
    try { entries = readdirSync(cur || '/') } catch { return { ok: false, at: cur } }
    if (!entries.includes(seg)) {
      const ci = entries.find(e => e.toLowerCase() === seg.toLowerCase())
      return { ok: false, at: cur, wanted: seg, actual: ci || null }
    }
    cur = join(cur, seg)
  }
  return { ok: true }
}

const refs = collectRefs()
// Scan template literals for the Logos loop pattern, preserving observed case.
// The public folder is `public/Logos/{1..18}.PNG` — any case drift breaks Hostinger.
for (const file of walk(SRC)) {
  const ext = file.slice(file.lastIndexOf('.'))
  if (!CODE_EXT.has(ext)) continue
  const text = readFileSync(file, 'utf8')
  const lines = text.split('\n')
  lines.forEach((line, i) => {
    const m = line.match(/(\/[A-Za-z0-9_-]+)\/\$\{[^}]+\}(\.[A-Za-z]{2,5})/)
    if (m) {
      const folder = m[1]
      const ext2 = m[2]
      for (let n = 1; n <= 18; n++) {
        const url = `${folder}/${n}${ext2}`
        if (!refs.has(url)) refs.set(url, [])
        refs.get(url).push(`${relative(ROOT, file)}:${i + 1} (template)`)
      }
    }
  })
}

let broken = 0
let caseIssues = 0
const results = []
for (const [url, callers] of [...refs.entries()].sort()) {
  const fs = join(PUBLIC, url)
  const check = existsCaseSensitive(fs)
  if (check.ok) continue
  broken++
  const kind = check.actual ? 'CASE-MISMATCH' : 'MISSING'
  if (kind === 'CASE-MISMATCH') caseIssues++
  results.push({ url, kind, expected: check.wanted, actual: check.actual, callers })
}

console.log(`\nScanned ${refs.size} unique image references from src/.`)
console.log(`Public root: ${relative(ROOT, PUBLIC)}\n`)
if (results.length === 0) {
  console.log('✅ All image references resolve with exact case. Safe on Linux/Apache.')
  process.exit(0)
}
console.log(`❌ ${broken} broken references (${caseIssues} case-mismatch, ${broken - caseIssues} truly missing).\n`)
for (const r of results) {
  console.log(`[${r.kind}] ${r.url}`)
  if (r.actual) console.log(`   wanted segment "${r.expected}", disk has "${r.actual}"`)
  console.log(`   referenced by: ${r.callers.slice(0, 3).join(', ')}${r.callers.length > 3 ? ` (+${r.callers.length - 3})` : ''}`)
}
process.exit(1)
