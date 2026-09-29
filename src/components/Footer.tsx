import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

const serviceLinks = [
  { label: 'Microsurfacing', to: '/services/microsurfacing' },
  { label: 'Rut Filling', to: '/services/rut-filling' },
  { label: 'Road Marking', to: '/services/road-marking' },
  { label: 'Pavement Preservation', to: '/services/pavement-preservation' },
]

export function Footer() {
  return (
    <footer className="bg-rhdark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-display text-xl font-black tracking-widest text-white uppercase block">
            ROADTECH
          </span>
          <span className="font-display text-[10px] font-bold tracking-[0.2em] text-rhorange uppercase block">
            Highway Engineering Pvt. Ltd.
          </span>
          <p className="text-rhgrey text-sm mt-4 leading-relaxed">
            Pavement Preservation Specialists
          </p>
          <p className="text-rhgrey text-sm mt-1">A Roadtech Group Company</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-rhgrey hover:text-rhorange text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-rhgrey hover:text-rhorange text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-4 pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-rhgrey text-sm">
          <p>© 2024 Roadtech Highway Engineering Pvt. Ltd. All rights reserved.</p>
          <p>A sister concern of Roadtech Asphalt Technologies Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
