import { useState, type FormEvent } from 'react'
import { contact } from '../data/content'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Chip, DashRule } from '../components/ui'
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

type Fields = { name: string; email: string; phone: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[+()\d][\d\s()-]{6,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = 'Please enter your name.'
  if (!f.email.trim()) e.email = 'Please enter your email.'
  else if (!emailRe.test(f.email.trim())) e.email = 'Enter a valid email address.'
  if (f.phone.trim() && !phoneRe.test(f.phone.trim()))
    e.phone = 'Enter a valid phone number.'
  if (!f.message.trim()) e.message = 'Tell us a little about your requirement.'
  else if (f.message.trim().length < 10) e.message = 'Please add a little more detail.'
  return e
}

const inputBase =
  'w-full border bg-warm px-4 py-3 font-sans text-ink placeholder:text-warm-mute/70 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-asphalt focus-visible:ring-offset-0'

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
    <div className="flex gap-4 border-t border-ink-line pt-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink-line text-asphalt">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <dt className="font-mono text-[0.62rem] uppercase tracking-label text-aggregate">
          {label}
        </dt>
        <dd className="mt-1 leading-relaxed text-warm">{children}</dd>
      </div>
    </div>
  )
}

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate(fields)
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // No backend wired yet — see README for connecting Formspree / a form service.
      setSubmitted(true)
    } else {
      const first = Object.keys(next)[0]
      document.getElementById(`field-${first}`)?.focus()
    }
  }

  const mapSrc = `https://www.google.com/maps?q=${contact.mapLat},${contact.mapLng}&z=14&output=embed`

  return (
    <>
      <PageHero
        figure="FIG. 00 :: GET IN TOUCH"
        title="Talk to the Technical Team"
        intro="Tell us the application and the standard you're working to. We'll point you to the right grade and the support to go with it."
      />

      <section className="bg-warm py-16 sm:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* form */}
          <Reveal>
            <div className="flex h-full flex-col border border-warm-line bg-white p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-label text-asphalt">
                [ ENQUIRY FORM ]
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-ink">
                Send an enquiry
              </h2>

              {submitted ? (
                <div
                  role="status"
                  className="mt-6 border border-certgreen/50 bg-certgreen/5 p-6"
                >
                  <p className="font-display text-2xl font-semibold uppercase text-ink">
                    Thanks — message ready to send.
                  </p>
                  <p className="mt-3 leading-relaxed text-warm-mute">
                    Your details validated successfully. This demo form isn't connected to a
                    mailbox yet — in the meantime, reach us directly at{' '}
                    <a
                      href={`mailto:${contact.emailSales}`}
                      className="text-ink underline decoration-asphalt underline-offset-2 hover:text-asphalt"
                    >
                      {contact.emailSales}
                    </a>{' '}
                    or call{' '}
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="text-ink underline decoration-asphalt underline-offset-2 hover:text-asphalt"
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
                    className="link-action mt-5 inline-flex text-ink hover:text-asphalt"
                  >
                    Send another
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit} className="mt-6 flex flex-col gap-5">
                  <Field
                    id="field-name"
                    label="Name"
                    required
                    error={errors.name}
                  >
                    <input
                      id="field-name"
                      type="text"
                      autoComplete="name"
                      value={fields.name}
                      onChange={set('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={`${inputBase} ${errors.name ? 'border-asphalt' : 'border-warm-line'}`}
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
                        className={`${inputBase} ${errors.email ? 'border-asphalt' : 'border-warm-line'}`}
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
                        className={`${inputBase} ${errors.phone ? 'border-asphalt' : 'border-warm-line'}`}
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
                      className={`${inputBase} resize-y ${errors.message ? 'border-asphalt' : 'border-warm-line'}`}
                      placeholder="Application, grade, standard (IS/IRC), quantity, location…"
                    />
                  </Field>

                  <button type="submit" className="btn-primary self-start">
                    Send Enquiry
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              )}

              {/* Pinned to the bottom so the form and details cards align in height */}
              <div className="mt-auto">
                <DashRule className="mb-5 mt-8 opacity-60" />
                <p className="text-sm leading-relaxed text-warm-mute">
                  Prefer to talk it through? Call{' '}
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="text-ink underline decoration-asphalt underline-offset-2 hover:text-asphalt"
                  >
                    {contact.phoneDisplay}
                  </a>{' '}
                  or message us on WhatsApp — we'll route your enquiry to the right technical
                  contact.
                </p>
              </div>
            </div>
          </Reveal>

          {/* details */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-2 bg-ink p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-label text-asphalt">
                [ CONTACT DETAILS ]
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold uppercase text-warm">
                Reach us directly
              </h2>
              <dl className="mt-6 flex flex-col gap-5">
                <Detail icon={Phone} label="Phone">
                  <a href={`tel:${contact.phoneHref}`} className="hover:text-asphalt">
                    {contact.phoneDisplay}
                  </a>
                </Detail>
                <Detail icon={Mail} label="Email">
                  <a href={`mailto:${contact.emailGeneral}`} className="block hover:text-asphalt">
                    {contact.emailGeneral}
                  </a>
                  <a href={`mailto:${contact.emailSales}`} className="block hover:text-asphalt">
                    {contact.emailSales}
                  </a>
                </Detail>
                <Detail icon={MapPin} label="Plant Address">
                  {contact.plantAddress}
                </Detail>
                <Detail icon={MapPin} label="Corporate Office">
                  <span className="whitespace-pre-line">{contact.registeredAddress}</span>
                </Detail>
                <Detail icon={MapPin} label="Registered Office">
                  {contact.registeredAddressNoida}
                </Detail>
                <Detail icon={Clock} label="Working Hours">
                  {contact.workingHours} · {contact.workingDays}
                </Detail>
              </dl>

              <DashRule className="my-7 opacity-80" />

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${contact.whatsappHref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-certgreen/60 px-4 py-2.5 font-display text-base font-semibold uppercase tracking-wide text-certgreen transition-colors hover:bg-certgreen/10"
                >
                  <WhatsApp className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Roadtech on Facebook"
                  className="grid h-11 w-11 place-items-center border border-ink-line text-aggregate transition-colors hover:border-warm/40 hover:text-warm"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Roadtech on LinkedIn"
                  className="grid h-11 w-11 place-items-center border border-ink-line text-aggregate transition-colors hover:border-warm/40 hover:text-warm"
                >
                  <LinkedIn className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="bg-ink pb-16">
        <div className="shell">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <Chip kind="accent" className="text-warm/90">
              MAP :: PLANT · JANDHERA, PAHANSU, UP
            </Chip>
            <span className="font-mono text-[0.7rem] tracking-chip text-aggregate">
              {contact.mapLat}°N · {contact.mapLng}°E
            </span>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden border border-ink-line sm:aspect-[21/9]">
            <iframe
              title="Roadtech Asphalt Technologies plant location map"
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
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-chip text-warm-mute">
        {label}
        {required && <span className="ml-1 text-asphalt">*</span>}
        {optional && <span className="ml-1 text-aggregate/80">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`err-${id.replace('field-', '')}`} className="font-mono text-xs text-asphalt">
          {error}
        </p>
      )}
    </div>
  )
}
