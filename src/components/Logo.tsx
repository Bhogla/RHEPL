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
  lg: 'h-[5.8rem] w-[5.8rem] xl:h-[6.16rem] xl:w-[6.16rem]', // top state: 93 → 98.6px (+45%)
  md: 'h-[4.71rem] w-[4.71rem]', // scrolled state: 75.4px (+45%)
  sm: 'h-[5.8rem] w-[5.8rem]', // mobile: 92.8px (+45%)
}

const NAME: Record<LogoSize, string> = {
  // Single continuous fluid clamp from the lg breakpoint up (no xl step) — ~18px at
  // 1024px viewport → ~42px by ~1450px, then holds. Avoids the old two-stage
  // fixed→clamp jump at the xl breakpoint. Min trimmed further to free up room for
  // the wider (1.75rem) nav-link gap without the phone CTA overflowing at 1024px.
  lg: 'whitespace-nowrap text-[clamp(1.1rem,calc(5.85vw-2.64rem),2.65rem)] leading-[0.95]',
  md: 'whitespace-nowrap text-[1.35rem] leading-none', // ~22px
  sm: 'text-[1.4rem] leading-tight', // ~22px (was 18 — fills toward the menu button)
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
      className={`group flex items-center gap-0 ${className}`}
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
          <span className="mt-1 block text-right font-display text-xs font-medium uppercase tracking-[0.18em] text-aggregate">
            We Make The Way
          </span>
        )}
      </span>
    </Link>
  )
}
