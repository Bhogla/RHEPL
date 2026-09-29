import { useState, type FormEvent } from 'react'

const serviceOptions = [
  'Microsurfacing',
  'Rut Filling & Profile Correction',
  'Road Marking',
  'Pavement Preservation',
  'Other',
]

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: serviceOptions[0],
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-rhbg">
      {/* Page Hero */}
      <section className="bg-rhsurface py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-rhdark">
            Contact RHEPL
          </h1>
          <p className="text-rhgrey text-lg mt-4 max-w-2xl mx-auto">
            Get in touch to discuss your pavement preservation or highway maintenance project.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold uppercase text-rhdark">
              Contact Details
            </h2>
            <div>
              <p className="text-rhgrey text-xs uppercase tracking-wide">Company</p>
              <p className="text-rhdark">Roadtech Highway Engineering Pvt. Ltd.</p>
            </div>
            <div>
              <p className="text-rhgrey text-xs uppercase tracking-wide">Address</p>
              <p className="text-rhdark">Registered Office: Mumbai, Maharashtra, India</p>
            </div>
            <div>
              <p className="text-rhgrey text-xs uppercase tracking-wide">Email</p>
              <a
                href="mailto:info@roadtech-highway.com"
                className="text-rhorange hover:text-rhorangeHover"
              >
                info@roadtech-highway.com
              </a>
            </div>
            <div>
              <p className="text-rhgrey text-xs uppercase tracking-wide">Phone</p>
              <a href="tel:+9198000000" className="text-rhorange hover:text-rhorangeHover">
                +91 98XXX XXXXX
              </a>
            </div>
            <div>
              <p className="text-rhgrey text-xs uppercase tracking-wide">Working Hours</p>
              <p className="text-rhdark">Monday – Saturday, 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-rhorangeLight border border-rhorange rounded-lg p-8 text-center">
                <p className="text-rhdark font-semibold">
                  Thank you! We'll get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-rhdark text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    className="w-full border border-rhborder rounded px-4 py-2 text-rhdark focus:outline-none focus:border-rhorange"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-rhdark text-sm font-medium mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange('company')}
                    className="w-full border border-rhborder rounded px-4 py-2 text-rhdark focus:outline-none focus:border-rhorange"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-rhdark text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    className="w-full border border-rhborder rounded px-4 py-2 text-rhdark focus:outline-none focus:border-rhorange"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-rhdark text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full border border-rhborder rounded px-4 py-2 text-rhdark focus:outline-none focus:border-rhorange"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-rhdark text-sm font-medium mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange('service')}
                    className="w-full border border-rhborder rounded px-4 py-2 text-rhdark focus:outline-none focus:border-rhorange"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-rhdark text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full border border-rhborder rounded px-4 py-2 text-rhdark focus:outline-none focus:border-rhorange"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-rhorange text-white px-8 py-3 rounded font-semibold hover:bg-rhorangeHover transition-colors self-start"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Sister Company Link */}
      <section className="bg-rhsurface py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-rhgrey text-sm">
            For asphalt products and PMB solutions, visit our sister company{' '}
            <a
              href="https://roadtech-asphalt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rhorange hover:text-rhorangeHover font-medium"
            >
              roadtech-asphalt.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
