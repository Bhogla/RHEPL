import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Close, Menu, Phone, WhatsApp } from './icons'
import navLogo from '../assets/nav_logo.png'

const PHONE_DISPLAY = '+91 70170 77202'
const PHONE_HREF = 'tel:+917017077202'
const WHATSAPP_HREF = 'https://wa.me/917017077202'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Join', to: '/join' },
  { label: 'Contact', to: '/contact' },
]

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-mono text-[11px] uppercase tracking-chip py-1 border-b-2 transition-colors ${
    isActive
      ? 'text-rhorange border-rhorange font-semibold'
      : 'text-rhdark border-transparent hover:text-rhorange'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Backdrop-blur kicks in after 40px of scroll — per spec.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const shellClasses = `fixed inset-x-0 top-0 z-50 border-b border-rhborder transition-colors duration-200 ${
    scrolled ? 'bg-rhbg/85 backdrop-blur-md' : 'bg-rhbg'
  }`

  return (
    <>
      <nav className={shellClasses}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          {/* LEFT — desktop nav links */}
          <div className="hidden md:flex items-center gap-7 flex-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CENTER — unified mark+wordmark lockup */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center mr-auto md:mr-0 shrink-0"
            aria-label="Roadtech Highway Engineering — Home"
          >
            <img
              src={navLogo}
              alt="Roadtech Highway Engineering Pvt. Ltd. — We Engineer The Way"
              className="h-14 w-auto object-contain shrink-0"
            />
          </Link>

          {/* RIGHT — WhatsApp square icon + phone CTA */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with RHEPL on WhatsApp"
              className="h-10 w-10 grid place-items-center border border-rhborder text-rhdark hover:border-rhorange hover:text-rhorange transition-colors"
            >
              <WhatsApp className="h-5 w-5" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 h-10 px-4 bg-rhorange text-white font-mono text-[11px] uppercase tracking-chip font-semibold hover:bg-rhorangeHover transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center text-rhdark"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu — numbered items per spec */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-20 z-40 bg-rhbg flex flex-col md:hidden overflow-y-auto"
        >
          <ul className="flex-1 flex flex-col divide-y divide-rhborder">
            {links.map((link, i) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-baseline justify-between px-6 py-6 font-display font-black uppercase tracking-[-0.02em] leading-none transition-colors ${
                      isActive ? 'text-rhorange' : 'text-rhdark hover:text-rhorange'
                    }`
                  }
                >
                  <span className="text-[clamp(2.25rem,10vw,3rem)]">{link.label}</span>
                  <span className="font-mono text-[11px] tracking-chip text-rhgrey">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="border-t border-rhborder p-6 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-rhorange text-white h-12 font-mono text-[12px] uppercase tracking-chip font-semibold hover:bg-rhorangeHover transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-rhborder text-rhdark h-12 font-mono text-[12px] uppercase tracking-chip font-semibold hover:border-rhorange hover:text-rhorange transition-colors"
            >
              <WhatsApp className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}
