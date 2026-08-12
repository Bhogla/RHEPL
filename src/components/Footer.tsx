import { Link } from 'react-router-dom'
import { company, contact, nav } from '../data/content'
import { DashRule } from './ui'
import { Facebook, LinkedIn, Mail, Phone } from './icons'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-ink-line pt-3">
      <dt className="font-mono text-[0.62rem] uppercase tracking-label text-aggregate">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-warm">{children}</dd>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-line bg-ink">
      {/* Registered Office datasheet block */}
      <div className="shell py-14 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[0.68rem] uppercase tracking-label text-asphalt">
              [ REGISTERED OFFICE :: DATASHEET ]
            </span>
            <p className="font-display text-2xl font-semibold uppercase text-warm sm:text-3xl">
              {company.legalName}
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-chip text-aggregate">
            EST. {company.incorporated}
          </span>
        </div>

        <DashRule className="my-8 opacity-80" />

        <dl className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Field label="Plant Address">{contact.plantAddress}</Field>
          <Field label="Corporate Office">
            {contact.registeredAddress.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </Field>
          <Field label="Registered Office">{contact.registeredAddressNoida}</Field>
          <Field label="Working Hours">
            {contact.workingHours}
            <br />
            {contact.workingDays}
          </Field>
          <Field label="Contact">
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-asphalt"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-aggregate" />
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.emailGeneral}`}
              className="mt-1 flex items-center gap-2 whitespace-nowrap transition-colors hover:text-asphalt"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-aggregate" />
              {contact.emailGeneral}
            </a>
            <a
              href={`mailto:${contact.emailSales}`}
              className="mt-1 flex items-center gap-2 whitespace-nowrap transition-colors hover:text-asphalt"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-aggregate" />
              {contact.emailSales}
            </a>
          </Field>
        </dl>

        {/* Quick links — only real pages in this build */}
        <div className="mt-12 flex flex-col gap-6 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-mono text-xs uppercase tracking-chip text-aggregate transition-colors hover:text-warm"
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
              aria-label="Roadtech on Facebook"
              className="grid h-10 w-10 place-items-center border border-ink-line text-aggregate transition-colors hover:border-warm/40 hover:text-warm"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Roadtech on LinkedIn"
              className="grid h-10 w-10 place-items-center border border-ink-line text-aggregate transition-colors hover:border-warm/40 hover:text-warm"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="shell flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.7rem] uppercase tracking-chip text-aggregate">
            © {year} {company.legalName}. All Rights Reserved.
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-chip text-aggregate/70">
            Bituminous Products &amp; Services · India
          </p>
        </div>
      </div>
    </footer>
  )
}
