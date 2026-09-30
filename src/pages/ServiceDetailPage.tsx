import { useParams, Link, Navigate } from 'react-router-dom'
import { services } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  return (
    <div className="bg-rhbg">
      {/* Hero with image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-veil-b" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-10">
          <nav className="text-white/50 text-xs mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            {' / '}
            <Link to="/services" className="hover:text-white">Services</Link>
            {' / '}
            <span className="text-white">{service.name}</span>
          </nav>
          <span className="inline-flex self-start rounded-full bg-rhorange text-white text-xs font-bold uppercase tracking-chip px-3 py-1 mb-3">
            {service.chip}
          </span>
          <h1 className="font-display text-display-lg font-black uppercase text-white">
            {service.name}
          </h1>
          <p className="text-white/70 mt-2 max-w-xl">{service.tagline}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-rhdark mb-4">Overview</h2>
            <p className="text-rhdark/75 leading-relaxed">{service.longDescription}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-rhdark mb-4">Our Approach</h2>
            <ol className="flex flex-col gap-4">
              {service.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-rhorange text-white font-display font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <p className="text-rhdark/75 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          <div className="bg-rhsurface rounded-xl p-6 border border-rhborder">
            <h3 className="font-display text-lg font-bold uppercase text-rhdark mb-4">Benefits</h3>
            <ul className="flex flex-col gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-rhdark/70">
                  <span className="text-rhorange font-bold mt-0.5 shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rhsurface rounded-xl p-6 border border-rhborder">
            <h3 className="font-display text-lg font-bold uppercase text-rhdark mb-4">Application Areas</h3>
            <div className="flex flex-wrap gap-2">
              {service.applicationAreas.map((area) => (
                <span
                  key={area}
                  className="bg-rhorangeLight text-rhorange text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-rhorange rounded-xl p-6 text-center">
            <p className="text-white font-bold mb-3">Interested in {service.name}?</p>
            <Link
              to="/contact"
              className="block bg-white text-rhorange px-4 py-2 rounded font-semibold hover:bg-rhorangeLight transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </aside>
      </div>

      <div className="border-t border-rhborder">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/services" className="text-rhorange font-semibold text-sm hover:text-rhorangeHover">
            ← Back to All Services
          </Link>
        </div>
      </div>
    </div>
  )
}
