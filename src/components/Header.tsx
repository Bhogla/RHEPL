import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { contact, nav } from '../data/content'
import { Logo } from './Logo'
import { Close, Menu, Phone, WhatsApp } from './icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile drawer: lock body scroll, trap focus, Esc to close, restore focus on close.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'

    const drawer = drawerRef.current
    const focusables = () =>
      Array.from(
        drawer?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )

    focusables()[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      toggleRef.current?.focus()
    }
  }, [open])

  // Shorter labels for the desktop top nav only (keeps the six links on one line
  // each without crowding the center lockup). Footer + mobile drawer keep the full
  // wording from `nav`.
  const topNavLabels: Record<string, string> = { '/about': 'About', '/join': 'Join' }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap py-1 font-display text-base font-semibold uppercase tracking-wide transition-colors duration-200 ease-out after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-asphalt after:transition-all after:duration-300 after:ease-out ${
      isActive
        ? 'text-warm after:w-full'
        : 'text-aggregate hover:text-warm after:w-0 hover:after:w-full'
    }`

  return (
    <>
      {/* Constant-height spacer keeps page content from shifting when the fixed
          header shrinks on scroll (matches the header's tall/default height). */}
      <div className="h-20 lg:h-28" aria-hidden />

      <header
        className={`fixed inset-x-0 top-0 z-header border-b transition-[background-color,border-color,height] duration-300 ease-out motion-reduce:transition-none ${
          scrolled
            ? 'border-ink-line bg-ink/90 backdrop-blur-md'
            : 'border-transparent bg-ink'
        } h-20 ${scrolled ? 'lg:h-[4.5rem]' : 'lg:h-28'}`}
      >
        <div className="shell flex h-full items-center justify-between gap-4 lg:grid lg:max-w-[1360px] lg:grid-cols-[auto_1fr_auto] lg:gap-4">
          {/* LEFT: primary nav (desktop) */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-4 justify-self-start lg:flex xl:gap-6"
          >
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {topNavLabels[item.to] ?? item.label}
              </NavLink>
            ))}
          </nav>

          {/* CENTER (desktop): logo mark + company name lockup — the visual anchor */}
          <div className="hidden justify-self-center lg:block">
            <Logo size={scrolled ? 'md' : 'lg'} showTagline={!scrolled} />
          </div>

          {/* LEFT (mobile): compact logo mark + name + tagline */}
          <div className="min-w-0 flex-1 lg:hidden">
            <Logo size="sm" showTagline truncate />
          </div>

          {/* RIGHT: WhatsApp + call (desktop) and mobile menu toggle */}
          <div className="flex items-center gap-2 justify-self-end">
            <a
              href={`https://wa.me/${contact.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="hidden h-10 w-10 place-items-center border border-ink-line text-aggregate transition-colors duration-200 ease-out hover:border-certgreen/60 hover:text-certgreen lg:grid"
            >
              <WhatsApp className="h-5 w-5" />
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              className="hidden shrink-0 items-center gap-2 whitespace-nowrap bg-asphalt px-4 py-2.5 font-display text-base font-semibold uppercase tracking-wide text-white transition-colors duration-200 ease-out hover:bg-asphalt-deep lg:inline-flex"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">{contact.phoneDisplay}</span>
            </a>

            {/* mobile menu toggle */}
            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center border border-ink-line text-warm lg:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-sticky lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          ref={drawerRef}
          aria-label="Mobile"
          className={`absolute inset-x-0 top-0 origin-top border-b border-ink-line bg-charcoal transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="shell flex flex-col py-2">
            {nav.map((item, i) => (
              <li key={item.to} className={i > 0 ? 'border-t border-ink-line' : ''}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 font-display text-2xl font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-asphalt' : 'text-warm'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-aggregate">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="shell flex flex-col gap-3 pb-6 pt-2">
            <a
              href={`tel:${contact.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 bg-asphalt px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide text-white"
            >
              <Phone className="h-4 w-4" /> {contact.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${contact.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-certgreen/60 px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide text-certgreen"
            >
              <WhatsApp className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
