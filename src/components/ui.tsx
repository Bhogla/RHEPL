import { Fragment, type ReactNode } from 'react'
import { Image as ImageIcon } from './icons'

// ---- Trademarked: renders a "®" in the text as a proper superscript ---------
// so registered-trademark product names don't grow the line height of the
// chip/heading they sit in. A no-op passthrough for any string without "®".

export function Trademarked({ children }: { children: string }) {
  const parts = children.split('®')
  if (parts.length === 1) return <>{children}</>
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <sup className="text-[0.6em] align-super">®</sup>}
        </Fragment>
      ))}
    </>
  )
}

// ---- Chip: bordered monospace datasheet badge -------------------------------

type ChipKind = 'default' | 'accent' | 'cert'

const chipStyles: Record<ChipKind, string> = {
  default: 'border-current/30 text-current',
  accent: 'border-asphalt/60 text-asphalt',
  cert: 'border-certgreen/55 text-certgreen',
}

export function Chip({
  children,
  kind = 'default',
  className = '',
}: {
  children: ReactNode
  kind?: ChipKind
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap border px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase leading-none tracking-chip ${chipStyles[kind]} ${className}`}
    >
      {children}
    </span>
  )
}

// ---- FigureLabel: bracketed mono section/figure label ------------------------

export function FigureLabel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-label text-asphalt ${className}`}
    >
      <span aria-hidden className="text-asphalt/60">
        [
      </span>
      {children}
      <span aria-hidden className="text-asphalt/60">
        ]
      </span>
    </span>
  )
}

// ---- DashRule: road-marking dashed divider ----------------------------------

export function DashRule({
  className = '',
  variant = 'accent',
}: {
  className?: string
  variant?: 'accent' | 'mute'
}) {
  return (
    <div
      role="separator"
      className={`${variant === 'accent' ? 'dash-rule' : 'dash-rule-mute'} ${className}`}
    />
  )
}

// ---- SectionHeading: figure label + display heading + optional intro --------

export function SectionHeading({
  figure,
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'warm',
  className = '',
}: {
  figure?: string
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'warm' | 'dark'
  className?: string
}) {
  const introColor = tone === 'warm' ? 'text-warm-mute' : 'text-aggregate'
  const titleColor = tone === 'warm' ? 'text-ink' : 'text-warm'
  return (
    <div
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className}`}
    >
      {figure && <FigureLabel>{figure}</FigureLabel>}
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <span
            className={`font-mono text-xs uppercase tracking-label ${tone === 'warm' ? 'text-warm-mute' : 'text-aggregate'}`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-display text-display-md font-semibold uppercase ${titleColor} ${align === 'center' ? 'max-w-3xl' : ''}`}
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p className={`max-w-prose text-lg leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </div>
  )
}

// ---- ImagePlaceholder: datasheet box for products without a real photo ------

export function ImagePlaceholder({
  label = 'IMAGE ON REQUEST',
  className = '',
  tone = 'dark',
}: {
  label?: string
  className?: string
  tone?: 'dark' | 'warm'
}) {
  const isWarm = tone === 'warm'
  return (
    <div
      aria-hidden
      className={`relative flex items-center justify-center overflow-hidden border border-dashed ${
        isWarm ? 'border-warm-line bg-warm' : 'border-ink-line bg-charcoal'
      } ${className}`}
    >
      {/* faint road-marking field */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)',
          color: isWarm ? '#0E0E10' : '#FFFFFF',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <ImageIcon className={`h-8 w-8 ${isWarm ? 'text-aggregate' : 'text-aggregate'}`} />
        <span className="font-mono text-[0.65rem] uppercase tracking-chip text-aggregate">
          [ {label} ]
        </span>
      </div>
    </div>
  )
}
