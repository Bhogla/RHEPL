import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from './icons'
import { Chip, ImagePlaceholder } from './ui'

export type CardProps = {
  code: string
  title: string
  body?: ReactNode
  image?: string
  /** Extra object-position utility, e.g. 'object-bottom' to crop out a top watermark/logo */
  imageClassName?: string
  alt?: string
  to?: string
  /** Footnote shown when there's no real spec (gap handling) */
  note?: ReactNode
  /** Call-to-action label when `to` is set */
  cta?: string
  tone?: 'warm' | 'dark'
  placeholderLabel?: string
  aspect?: string
}

export function Card({
  code,
  title,
  body,
  image,
  imageClassName = '',
  alt,
  to,
  note,
  cta = 'Learn more',
  tone = 'warm',
  placeholderLabel,
  aspect = 'aspect-[4/3]',
}: CardProps) {
  const isWarm = tone === 'warm'

  const surface = isWarm
    ? 'bg-white border-warm-line hover:border-ink/30 hover:shadow-lift-warm'
    : 'bg-charcoal border-ink-line hover:border-asphalt/50 hover:shadow-lift'
  const titleColor = isWarm ? 'text-ink' : 'text-warm'
  const bodyColor = isWarm ? 'text-warm-mute' : 'text-aggregate'

  const inner = (
    <article
      className={`group/card flex h-full flex-col overflow-hidden border transition-[border-color,box-shadow,transform] duration-300 ease-out ${surface} ${
        to ? 'hover:-translate-y-0.5' : ''
      }`}
    >
      {/* media */}
      <div className={`relative ${aspect} overflow-hidden ${isWarm ? 'bg-warm' : 'bg-ink'}`}>
        {image ? (
          <img
            src={image}
            alt={alt ?? ''}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover/card:scale-[1.04] ${imageClassName}`}
          />
        ) : (
          <ImagePlaceholder
            tone={isWarm ? 'warm' : 'dark'}
            label={placeholderLabel ?? 'IMAGE ON REQUEST'}
            className="h-full w-full"
          />
        )}
        <div className="absolute left-3 top-3">
          <Chip kind="accent" className={isWarm ? 'bg-white/85 backdrop-blur-sm' : 'bg-ink/70 backdrop-blur-sm'}>
            {code}
          </Chip>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className={`font-display text-2xl font-semibold uppercase leading-none ${titleColor}`}>
          {title}
        </h3>
        {body && <p className={`text-[0.95rem] leading-relaxed ${bodyColor}`}>{body}</p>}
        {note && (
          <p className="mt-1 font-mono text-xs leading-relaxed text-aggregate">{note}</p>
        )}
        {to && (
          <span
            className={`link-action mt-auto pt-2 ${
              isWarm ? 'text-ink' : 'text-warm'
            } group-hover/card:text-asphalt`}
          >
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/card:translate-x-1" />
          </span>
        )}
      </div>
    </article>
  )

  if (to) {
    return (
      <Link to={to} className="block h-full focus-visible:outline-none">
        {inner}
      </Link>
    )
  }
  return inner
}
