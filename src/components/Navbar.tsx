import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Close, Menu } from './icons'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-rhorange font-semibold border-b-2 border-rhorange'
    : 'text-rhgrey text-sm font-medium hover:text-rhorange'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-rhborder sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-black tracking-widest text-rhdark uppercase">
              ROADTECH
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.2em] text-rhorange uppercase">
              Highway Engineering Pvt. Ltd.
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-rhorange text-white px-4 py-2 rounded hover:bg-rhorangeHover transition-colors"
          >
            Contact Us
          </Link>
        </div>

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

      {open && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-rhborder">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className="text-rhdark hover:text-rhorange"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-rhdark hover:text-rhorange"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
