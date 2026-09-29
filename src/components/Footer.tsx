import { Link } from 'react-router-dom'

const serviceLinks = [
  { label: 'Microsurfacing', to: '/services/microsurfacing' },
  { label: 'Rut Filling', to: '/services/rut-filling' },
  { label: 'Road Marking', to: '/services/road-marking' },
  { label: 'Pavement Preservation', to: '/services/pavement-preservation' },
]

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-rhdark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-2xl font-black text-white">ROADTECH</p>
          <p className="text-rhorange text-xs tracking-widest uppercase">
            Highway Engineering Pvt. Ltd.
          </p>
          <p className="text-rhgrey text-xs mt-1 uppercase tracking-wide">We Engineer The Way</p>
          <p className="text-rhgrey text-sm mt-4 leading-relaxed">
            Advanced pavement preservation, microsurfacing, rut filling and road marking
            solutions across India.
          </p>
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

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-rhgrey hover:text-rhorange text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="flex flex-col gap-3 text-rhgrey text-sm">
            <li>
              📍 Khasra No. 114 B, Delhi Road, Near Pahansu, Jandhera Samaspur, Saharanpur 247451
              (U.P.)
            </li>
            <li>
              <a href="mailto:info@rhepl.in" className="hover:text-rhorange">
                ✉ info@rhepl.in
              </a>
            </li>
            <li>
              <a
                href="https://www.rhepl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rhorange"
              >
                🌐 www.rhepl.com
              </a>
            </li>
            <li>
              <a href="tel:+919286504959" className="hover:text-rhorange">
                📞 9286504959
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 pb-6 text-rhgrey text-sm">
        <div className="max-w-7xl mx-auto px-6">
          © 2026 Roadtech Highway Engineering Pvt. Ltd. All rights reserved. Sister company of
          Roadtech Asphalt Technologies Pvt. Ltd.
        </div>
      </div>
    </footer>
  )
}
