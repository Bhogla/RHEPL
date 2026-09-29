import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <div className="bg-rhbg">
      {/* Page Hero */}
      <section className="bg-rhsurface py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-rhdark">
            Our Services
          </h1>
          <p className="text-rhgrey text-lg mt-4 max-w-2xl mx-auto">
            RHEPL offers four specialised pavement maintenance services, each backed by
            mechanised equipment and experienced engineering teams.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-rhborder rounded-xl p-8 flex flex-col gap-4"
            >
              <span className="inline-flex items-center self-start rounded-full bg-rhorangeLight text-rhorange text-xs font-semibold uppercase tracking-wide px-3 py-1">
                {service.chip}
              </span>
              <h2 className="font-display text-2xl font-bold text-rhdark">{service.name}</h2>
              <p className="text-rhgrey text-sm uppercase tracking-wide">{service.tagline}</p>
              <p className="text-rhgrey leading-relaxed">{service.description}</p>
              <ul className="flex flex-col gap-2">
                {service.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-rhdark text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rhorange shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${service.slug}`}
                className="text-rhorange font-semibold text-sm hover:text-rhorangeHover mt-auto"
              >
                View Service Details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-rhsurface py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-rhdark">
            Not sure which service you need? Talk to our engineers.
          </h2>
          <Link
            to="/contact"
            className="bg-rhorange text-white px-8 py-3 rounded font-semibold hover:bg-rhorangeHover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
