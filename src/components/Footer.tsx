import { Link } from 'react-router-dom'
import { Facebook, LinkedIn, Mail, Phone } from './icons'

// ─────────────────────────────────────────────────────────────────────────────
// Contact info duplicated here for the footer. Kept in-sync with ContactPage
// until src/data/site.ts lands.
// ─────────────────────────────────────────────────────────────────────────────
const contact = {
  legalName: 'Roadtech Highway Engineering Private Limited',
  incorporated: '2026',
  phoneDisplay: '+91 70170 77202',
  phoneHref: '+917017077202',
  emailGeneral: 'info@rhepl.in',
  workingHours: '9:30 AM – 6:30 PM',
  workingDays: 'Monday to Saturday',
  plantAddress: '114, 114-B, Delhi Rd, Jandhera, Pahansu, Uttar Pradesh 247451',
  corporateAddress:
    'Roadtech Asphalt Technologies Pvt Ltd\nTower T1, Unit No. A-907, NX-One,\nGreater Noida West, U.P. 201009',
  registeredAddress:
    'Shop No. 3, 1st Floor, Sophia Market, Near Hindi Medium Sophia School, Saharanpur',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
}

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Join', to: '/join' },
  { label: 'Contact', to: '/contact' },
]

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-white/10 pt-3">
      <dt className="font-mono text-[0.62rem] uppercase tracking-label text-white/50">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-white/85">{children}</dd>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-rhdark text-white">
      {/* ── Registered Office datasheet block ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[0.68rem] uppercase tracking-label text-rhorange">
              [ REGISTERED OFFICE :: DATASHEET ]
            </span>
            <p className="font-display text-2xl font-semibold uppercase text-white sm:text-3xl leading-[1.02]">
              {contact.legalName}
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-chip text-white/50">
            EST. {contact.incorporated}
          </span>
        </div>

        {/* Dashed road-marking rule */}
        <div className="dash-rule my-8 opacity-80" role="separator" aria-hidden="true" />

        {/* 5-column detail grid */}
        <dl className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Field label="Plant Address">{contact.plantAddress}</Field>
          <Field label="Corporate Office">
            {contact.corporateAddress.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </Field>
          <Field label="Registered Office">{contact.registeredAddress}</Field>
          <Field label="Working Hours">
            {contact.workingHours}
            <br />
            {contact.workingDays}
          </Field>
          <Field label="Contact">
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-rhorange"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-white/50" />
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.emailGeneral}`}
              className="mt-1 flex items-center gap-2 whitespace-nowrap transition-colors hover:text-rhorange"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-white/50" />
              {contact.emailGeneral}
            </a>
          </Field>
        </dl>

        {/* ── Nav + socials row ── */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-mono text-xs uppercase tracking-chip text-white/50 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RHEPL on Facebook"
              className="grid h-10 w-10 place-items-center border border-white/10 text-white/50 transition-colors hover:border-white/40 hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RHEPL on LinkedIn"
              className="grid h-10 w-10 place-items-center border border-white/10 text-white/50 transition-colors hover:border-white/40 hover:text-white"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.7rem] uppercase tracking-chip text-white/50">
            © {year} {contact.legalName}. All Rights Reserved.
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-chip text-white/40">
            Pavement Preservation · India
          </p>
        </div>
      </div>
    </footer>
  )
}
