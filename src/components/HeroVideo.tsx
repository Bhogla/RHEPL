import { useEffect, useRef, useState } from 'react'

/**
 * Seamless-looking hero background video.
 *
 * The source clip's first and last frames don't match, so a native `loop` shows
 * a visible flick at the seam. Instead we stack TWO copies of the same file and
 * crossfade between them: as the front copy nears the end of the clip, the back
 * copy (restarted from t=0) fades in over it, then they swap roles — hiding the
 * restart under a short dissolve. A requestAnimationFrame loop watches
 * currentTime against duration and drives the opacities.
 *
 * Load-in: there is NO poster photo (a mismatched still would "pop" and get
 * replaced when the video starts). Instead a solid dark base — the same colour
 * as the hero itself (bg-ink, under the hero veils) — sits behind everything and
 * the video layer fades in only once its first frame is actually decodable
 * (loadeddata / canplay / playing). So the load reads as a gentle fade from the
 * hero's own dark ground straight into the moving clip, with no image-to-video
 * swap. play() rejections are swallowed so a blocked autoplay never throws.
 *
 * prefers-reduced-motion: reduce → show a single, non-playing video parked on
 * its first frame (a static image, no crossfade, no fade, no rAF).
 *
 * Purely decorative (aria-hidden): object-cover, behind the hero text and veils.
 */
const CROSSFADE = 0.5 // seconds of dissolve at the loop seam

function safePlay(v: HTMLVideoElement | null) {
  if (!v) return
  const p = v.play()
  if (p && typeof p.then === 'function') p.catch(() => {})
}

export function HeroVideo({ src }: { src: string }) {
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [ready, setReady] = useState(false)
  const aRef = useRef<HTMLVideoElement>(null)
  const bRef = useRef<HTMLVideoElement>(null)
  const singleRef = useRef<HTMLVideoElement>(null)

  const onReady = () => setReady(true)

  // Reduced motion: park the single video on its first frame (static, no fade).
  useEffect(() => {
    if (!reduced) return
    const v = singleRef.current
    if (!v) return
    const paint = () => {
      // Nudge to the first frame so a paused <video> reliably paints it.
      try {
        v.currentTime = 0
      } catch {
        /* not seekable yet — harmless */
      }
      setReady(true)
    }
    if (v.readyState >= 2) paint()
    else v.addEventListener('loadeddata', paint, { once: true })
    return () => v.removeEventListener('loadeddata', paint)
  }, [reduced])

  // Dual-video crossfade loop.
  useEffect(() => {
    if (reduced) return
    const a = aRef.current
    const b = bRef.current
    if (!a || !b) return

    let front = a
    let back = b
    front.style.opacity = '1'
    back.style.opacity = '0'
    back.pause()
    try {
      back.currentTime = 0
    } catch {
      /* not seekable yet — harmless */
    }
    safePlay(front)

    let raf = 0
    const tick = () => {
      const dur = front.duration
      if (dur && Number.isFinite(dur) && dur > 0) {
        const remaining = dur - front.currentTime

        // Approaching the seam: bring the back copy in from the start.
        if (remaining <= CROSSFADE) {
          if (back.paused) {
            try {
              back.currentTime = 0
            } catch {
              /* ignore */
            }
            safePlay(back)
          }
          const t = Math.min(1, Math.max(0, 1 - remaining / CROSSFADE))
          back.style.opacity = t.toFixed(3)
          front.style.opacity = (1 - t).toFixed(3)
        }

        // Front finished (or as good as): finalise the swap invisibly.
        if (front.ended || remaining <= 0.04) {
          back.style.opacity = '1'
          front.style.opacity = '0'
          front.pause()
          try {
            front.currentTime = 0
          } catch {
            /* ignore */
          }
          const tmp = front
          front = back
          back = tmp
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced])

  return (
    <div aria-hidden>
      {/* Solid dark base matching the hero — shown until the video's first frame
          paints, so nothing visibly "pops" when playback begins. */}
      <div className="absolute inset-0 -z-20 bg-ink" />

      {reduced ? (
        <video
          ref={singleRef}
          muted
          playsInline
          preload="auto"
          onLoadedData={onReady}
          onCanPlay={onReady}
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-center ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-700 ease-out ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            ref={aRef}
            muted
            playsInline
            preload="auto"
            onLoadedData={onReady}
            onCanPlay={onReady}
            onPlaying={onReady}
            style={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src={src} type="video/mp4" />
          </video>
          <video
            ref={bRef}
            muted
            playsInline
            preload="auto"
            style={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}
