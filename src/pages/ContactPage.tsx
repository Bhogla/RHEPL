import { useState, type FormEvent } from 'react'
import { Seo } from '../components/Seo'
import {
  ArrowRight,
  Clock,
  Facebook,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
  WhatsApp,
} from '../components/icons'

// ─────────────────────────────────────────────────────────────────────────────
// RHEPL contact data. Kept inline until src/data/site.ts lands.
// ─────────────────────────────────────────────────────────────────────────────
const contact = {
  phoneDisplay: '+91 70170 77202',
  phoneHref: '+917017077202',
  whatsappHref: '917017077202',
  emailGeneral: 'info@rhepl.in',
  emailSales: 'info@rhepl.in',
  workingHours: '9:30 AM – 6:30 PM',
  workingDays: 'Monday to Saturday',
  plantAddress:
    '114, 114-B, Delhi Rd, Jandhera, Pahansu, Uttar Pradesh 247451',
  corporateAddress:
    'Roadtech Asphalt Technologies Pvt Ltd\nTower T1, Unit No. A-907, NX-One,\nGreater Noida West, U.P. 201009',
  registeredAddress:
    'Shop No. 3, 1st Floor, Sophia Market,\nNear Hindi Medium Sophia School, Saharanpur',
  // Approximate plant coordinates — Jandhera, Pahansu, Saharanpur district.
  mapLat: 29.8963,
  mapLng: 77.3523,
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
}

type Fields = { name: string; email: string; phone: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[+()\d][\d\s()-]{6,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = 'Please enter your name.'
  if (!f.email.trim()) e.email = 'Please enter your email.'
  else if (!emailRe.test(f.email.trim())) e.email = 'Enter a valid email address.'
  if (f.phone.trim() && !phoneRe.test(f.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (!f.message.trim()) e.message = 'Tell us a little about your requirement.'
  else if (f.message.trim().length < 10) e.message = 'Please add a little more detail.'
  return e
}

const inputBase =
  'w-full border bg-rhbg px-4 py-3 font-sans text-rhdark placeholder:text-rhgrey/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rhorange focus-visible:ring-offset-0 rounded-none'

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 border-t border-white/10 pt-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 text-rhorange">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-label text-white/50">
          {label}
        </dt>
        <dd className="mt-1 leading-relaxed text-white/85">{children}</dd>
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  children,
  error,
  required,
  optional,
}: {
  id: string
  label: string
  children: React.ReactNode
  error?: string
  required?: boolean
  optional?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-chip text-rhgrey">
        {label}
        {required && <span className="ml-1 text-rhorange">*</span>}
        {optional && <span className="ml-1 text-rhgrey/70">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`err-${id.replace('field-', '')}`} className="font-mono text-xs text-rhorange">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [k]: e.target.value }))
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
    }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate(fields)
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // No backend wired yet — connect Formspree / Netlify Forms / your service of choice here.
      setSubmitted(true)
    } else {
      const first = Object.keys(next)[0]
      document.getElementById(`field-${first}`)?.focus()
    }
  }

  const mapSrc = `https://www.google.com/maps?q=${contact.mapLat},${contact.mapLng}&z=14&output=embed`

  return (
    <>
      <Seo
        title="Contact RHEPL"
        description="Get in touch with Roadtech Highway Engineering's team — tell us your project location, pavement condition and the treatment you're considering, and we'll route it to the right specialist."
        path="/contact"
      />

      {/* ─── PAGE HERO ─── */}
      <section className="bg-rhsurface border-b border-rhborder">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-wide text-rhorange mb-4">
            [ FIG. 00 :: GET IN TOUCH ]
          </p>
          <h1 className="font-display text-display-lg font-black uppercase text-rhdark leading-[0.95] max-w-3xl">
            Talk to the Preservation Team
          </h1>
          <p className="mt-5 text-rhgrey text-lg leading-relaxed max-w-2xl">
            Tell us the project location, pavement condition and the treatment you're considering.
            We'll route your enquiry to the right technical contact.
          </p>
        </div>
      </section>

      {/* ─── FORM + DETAILS ─── */}
      <section className="bg-rhbg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── FORM ── */}
          <div className="flex h-full flex-col border border-rhborder bg-rhbg p-6 sm:p-8 shadow-card rounded-xl">
            <p className="font-mono text-xs uppercase tracking-label text-rhorange">
              [ ENQUIRY FORM ]
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-rhdark">
              Send an enquiry
            </h2>

            {submitted ? (
              <div
                role="status"
                className="mt-6 border border-rhsuccess/50 bg-rhsuccess/5 p-6 rounded"
              >
                <p className="font-display text-2xl font-semibold uppercase text-rhdark">
                  Thanks — message ready to send.
                </p>
                <p className="mt-3 leading-relaxed text-rhgrey">
                  Your details validated successfully. This demo form isn't connected to a mailbox
                  yet — in the meantime, reach us directly at{' '}
                  <a
                    href={`mailto:${contact.emailGeneral}`}
                    className="text-rhdark underline decoration-rhorange underline-offset-2 hover:text-rhorange"
                  >
                    {contact.emailGeneral}
                  </a>{' '}
                  or call{' '}
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="text-rhdark underline decoration-rhorange underline-offset-2 hover:text-rhorange"
                  >
                    {contact.phoneDisplay}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFields({ name: '', email: '', phone: '', message: '' })
                  }}
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-chip text-rhdark hover:text-rhorange transition-colors"
                >
                  Send another
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="mt-6 flex flex-col gap-5">
                <Field id="field-name" label="Name" required error={errors.name}>
                  <input
                    id="field-name"
                    type="text"
                    autoComplete="name"
                    value={fields.name}
                    onChange={set('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    className={`${inputBase} ${errors.name ? 'border-rhorange' : 'border-rhborder'}`}
                    placeholder="Your full name"
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="field-email" label="Email" required error={errors.email}>
                    <input
                      id="field-email"
                      type="email"
                      autoComplete="email"
                      value={fields.email}
                      onChange={set('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={`${inputBase} ${errors.email ? 'border-rhorange' : 'border-rhborder'}`}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field id="field-phone" label="Phone" error={errors.phone} optional>
                    <input
                      id="field-phone"
                      type="tel"
                      autoComplete="tel"
                      value={fields.phone}
                      onChange={set('phone')}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      className={`${inputBase} ${errors.phone ? 'border-rhorange' : 'border-rhborder'}`}
                      placeholder="+91 …"
                    />
                  </Field>
                </div>

                <Field id="field-message" label="Message" required error={errors.message}>
                  <textarea
                    id="field-message"
                    rows={5}
                    value={fields.message}
                    onChange={set('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    className={`${inputBase} resize-y ${errors.message ? 'border-rhorange' : 'border-rhborder'}`}
                    placeholder="Site location, road type, length, distress observed, treatment you're considering…"
                  />
                </Field>

                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-2 bg-rhorange text-white px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide hover:bg-rhorangeHover transition-colors"
                >
                  Send Enquiry
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}

            {/* Pinned to the bottom so the form and details cards align in height */}
            <div className="mt-auto">
              <div className="dash-rule mb-5 mt-8 opacity-60" role="separator" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-rhgrey">
                Prefer to talk it through? Call{' '}
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="text-rhdark underline decoration-rhorange underline-offset-2 hover:text-rhorange"
                >
                  {contact.phoneDisplay}
                </a>{' '}
                or message us on WhatsApp — we'll route your enquiry to the right technical contact.
              </p>
            </div>
          </div>

          {/* ── DETAILS (dark card) ── */}
          <div className="flex h-full flex-col gap-2 bg-rhdark p-6 sm:p-8 rounded-xl">
            <p className="font-mono text-xs uppercase tracking-label text-rhorange">
              [ CONTACT DETAILS ]
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold uppercase text-white">
              Reach us directly
            </h2>
            <dl className="mt-6 flex flex-col gap-5">
              <Detail icon={Phone} label="Phone">
                <a href={`tel:${contact.phoneHref}`} className="hover:text-rhorange transition-colors">
                  {contact.phoneDisplay}
                </a>
              </Detail>
              <Detail icon={Mail} label="Email">
                <a
                  href={`mailto:${contact.emailGeneral}`}
                  className="block hover:text-rhorange transition-colors"
                >
                  {contact.emailGeneral}
                </a>
              </Detail>
              <Detail icon={MapPin} label="Plant Address">
                {contact.plantAddress}
              </Detail>
              <Detail icon={MapPin} label="Corporate Office">
                <span className="whitespace-pre-line">{contact.corporateAddress}</span>
              </Detail>
              <Detail icon={MapPin} label="Registered Office">
                <span className="whitespace-pre-line">{contact.registeredAddress}</span>
              </Detail>
              <Detail icon={Clock} label="Working Hours">
                {contact.workingHours} · {contact.workingDays}
              </Detail>
            </dl>

            <div className="dash-rule my-7 opacity-80" role="separator" aria-hidden="true" />

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${contact.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-rhsuccess/60 px-4 py-2.5 font-display text-base font-semibold uppercase tracking-wide text-rhsuccess transition-colors hover:bg-rhsuccess/10"
              >
                <WhatsApp className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RHEPL on Facebook"
                className="grid h-11 w-11 place-items-center border border-white/10 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RHEPL on LinkedIn"
                className="grid h-11 w-11 place-items-center border border-white/10 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section className="bg-rhdark pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <span className="inline-flex items-center border border-rhorange/60 text-rhorange px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase leading-none tracking-chip">
              MAP :: PLANT · JANDHERA, PAHANSU, U.P.
            </span>
            <span className="font-mono text-[0.7rem] tracking-chip text-white/50">
              {contact.mapLat}°N · {contact.mapLng}°E
            </span>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden border border-white/10 sm:aspect-[21/9] rounded-xl">
            <iframe
              title="Roadtech Highway Engineering plant location map — Jandhera, Pahansu, Saharanpur"
              src={mapSrc}
              className="h-full w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
