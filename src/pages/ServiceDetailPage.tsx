import { useParams, Link, Navigate } from 'react-router-dom'
import { services } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <div className="bg-rhbg">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <nav className="text-sm text-rhgrey">
          <Link to="/" className="hover:text-rhorange">
            Home
          </Link>{' '}
          / <Link to="/services" className="hover:text-rhorange">Services</Link> /{' '}
          <span className="text-rhdark">{service.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-rhsurface mt-6 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <span className="inline-flex items-center self-start rounded-full bg-rhorangeLight text-rhorange text-xs font-semibold uppercase tracking-wide px-3 py-1">
            {service.chip}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-rhdark">
            {service.name}
          </h1>
          <p className="text-rhgrey text-lg max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-rhgrey leading-relaxed text-lg">{service.longDescription}</p>
          <ul className="flex flex-col gap-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-rhdark">
                <span className="text-rhorange font-bold shrink-0">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Areas */}
      <section className="bg-rhsurface py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold uppercase text-rhdark mb-8">
            Where We Apply This
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.applicationAreas.map((area) => (
              <span
                key={area}
                className="bg-rhorangeLight text-rhorange rounded-full px-3 py-1 text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold uppercase text-rhdark mb-8">
            How We Do It
          </h2>
          <ol className="flex flex-col gap-6">
            {service.approach.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rhorange text-white font-display font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-rhdark leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rhorange py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white">
            Interested in {service.name} for your project?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-rhorange px-8 py-3 rounded font-semibold hover:bg-rhorangeLight transition-colors"
            >
              Get in Touch
            </Link>
            <Link to="/services" className="text-white font-semibold hover:underline">
              ← Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
