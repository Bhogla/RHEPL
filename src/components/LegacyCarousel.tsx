import { useEffect, useRef, useState } from 'react'
import legacy1 from '../assets/legacy/legacy-1.png'
import legacy2 from '../assets/legacy/legacy-2.png'
import legacy3 from '../assets/legacy/legacy-3.png'
import legacy4 from '../assets/legacy/legacy-4.png'

type Slide = { src: string; alt: string; caption: string }

const SLIDES: Slide[] = [
  {
    src: legacy1,
    alt: 'Overhead view of an asphalt paver screed laying fresh mix, with a worker in an orange vest alongside.',
    caption: 'FIG. 01.1 :: PAVER SCREED OPERATION, IN PROGRESS',
  },
  {
    src: legacy2,
    alt: 'Aerial view of a highway paving crew — paver truck, four workers and traffic cones beside a green median.',
    caption: 'FIG. 01.2 :: HIGHWAY RESURFACING, AERIAL VIEW',
  },
  {
    src: legacy3,
    alt: 'Ground-level view of a paver and workers sweeping fresh aggregate into place.',
    caption: 'FIG. 01.3 :: AGGREGATE LAYING, GROUND LEVEL',
  },
  {
    src: legacy4,
    alt: 'Aerial view of an ALLTECH emulsion truck and a seven-person crew spreading red emulsion on a highway.',
    caption: 'FIG. 01.4 :: MICROSURFACING APPLICATION, IN PROGRESS',
  },
]

const AUTOPLAY_MS = 4000

/**
 * Auto-playing crossfade carousel for the Home "Legacy" section — four real
 * project-site photos (src/assets/legacy), all natively 1536x1024 (3:2).
 * Plain React state/effects only, no carousel library.
 */
export function LegacyCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const reducedMotionRef = useRef(false)

  // Track prefers-reduced-motion so autoplay (a JS timer, not something CSS
  // media queries alone can gate) respects it; the fade transition itself is
  // disabled via the motion-reduce: Tailwind variant on the elements below.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = mq.matches
    const onChange = () => {
      reducedMotionRef.current = mq.matches
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotionRef.current || paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
    // resetKey restarts the clock on manual dot navigation, so a click doesn't
    // get immediately overridden by an autoplay tick that was already in flight.
  }, [paused, resetKey])

  const goTo = (i: number) => {
    setIndex(i)
    setResetKey((k) => k + 1)
  }

  const fade = 'transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none'

  return (
    <figure className="relative lg:flex lg:flex-1 lg:flex-col">
      <div
        role="region"
        aria-label="Project documentation carousel"
        className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-warm-line bg-ink shadow-lift-warm lg:aspect-auto lg:min-h-[420px] lg:flex-1"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            aria-hidden={i !== index}
            className={`absolute inset-0 h-full w-full object-cover object-center ${fade} ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-[6px]">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === index
                  ? 'bg-asphalt'
                  : 'border border-aggregate/70 bg-transparent hover:border-aggregate'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption crossfade — grid-stacked (grid-area 1/1 on every span) so the
          container sizes to the tallest caption rather than collapsing, which
          plain absolute-positioning would do. */}
      <figcaption className="relative mt-3 grid font-mono text-[0.7rem] uppercase tracking-chip text-aggregate">
        {SLIDES.map((slide, i) => (
          <span
            key={slide.caption}
            aria-hidden={i !== index}
            style={{ gridArea: '1 / 1' }}
            className={`${fade} ${i === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.caption}
          </span>
        ))}
      </figcaption>
    </figure>
  )
}
