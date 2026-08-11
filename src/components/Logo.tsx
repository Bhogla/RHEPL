import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark.png'

/**
 * Roadtech header lockup: the standalone orange logo mark (src/assets/logo-mark.png,
 * transparent background) beside the company name as LIVE TEXT set in the hero display
 * face (Barlow Condensed / `font-display`, bold) so it reads as the wordmark, with the
 * registered tagline "We Make The Way" beneath. The old combined logo+text PNG is no
 * longer used in the navbar.
 *
 * Sizing is token-driven so the same component serves the tall desktop lockup, its
 * shrunk-on-scroll state, and the compact mobile lockup. Size classes transition so the
 * scroll shrink animates smoothly (disabled under prefers-reduced-motion).
 */
type LogoSize = 'lg' | 'md' | 'sm'

const MARK: Record<LogoSize, string> = {
  lg: 'h-10 w-10 xl:h-14 xl:w-14',
  md: 'h-9 w-9',
  sm: 'h-9 w-9',
}

const NAME: Record<LogoSize, string> = {
  lg: 'whitespace-nowrap text-[1.3rem] leading-[0.95] xl:text-[1.85rem]',
  md: 'whitespace-nowrap text-[1.15rem] leading-none',
  sm: 'text-base leading-tight',
}

export function Logo({
  size = 'lg',
  showTagline = true,
  truncate = false,
  onClick,
  className = '',
}: {
  size?: LogoSize
  showTagline?: boolean
  truncate?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Roadtech Asphalt Technologies — home"
      className={`group flex items-center gap-3 ${className}`}
    >
      <img
        src={logoMark}
        alt="Roadtech Asphalt Technologies logo"
        className={`shrink-0 object-contain transition-[height,width] duration-300 ease-out motion-reduce:transition-none ${MARK[size]}`}
      />
      <span className={`flex min-w-0 flex-col ${truncate ? 'overflow-hidden' : ''}`}>
        <span
          className={`font-display font-bold uppercase tracking-tight text-warm transition-[font-size] duration-300 ease-out motion-reduce:transition-none ${NAME[size]} ${
            truncate ? 'truncate' : ''
          }`}
        >
          Roadtech Asphalt Technologies Pvt Ltd
        </span>
        {showTagline && (
          <span className="mt-1 font-display text-xs font-medium uppercase tracking-[0.18em] text-aggregate">
            We Make The Way
          </span>
        )}
      </span>
    </Link>
  )
}
