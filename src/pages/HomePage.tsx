import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function HomePage() {
  return (
    <div className="bg-rhbg">
      {/* Hero */}
      <section className="min-h-[90vh] bg-rhbg flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-8">
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-rhdark max-w-4xl leading-[1.05]">
            India's Leading Pavement Preservation Specialist
          </h1>
          <p className="text-rhgrey text-lg md:text-xl max-w-2xl">
            RHEPL delivers microsurfacing, rut filling, road marking and pavement preservation
            services across India — engineered for performance, built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-rhorange text-white px-8 py-3 rounded font-semibold hover:bg-rhorangeHover transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              to="/projects"
              className="border border-rhorange text-rhorange px-8 py-3 rounded font-semibold hover:bg-rhorangeLight transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="border-t border-rhborder mt-12">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl font-black text-rhorange">15+</p>
              <p className="text-rhgrey text-sm uppercase tracking-wide mt-1">Years of Excellence</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-rhorange">500+ km</p>
              <p className="text-rhgrey text-sm uppercase tracking-wide mt-1">Treated</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-rhorange">20+</p>
              <p className="text-rhgrey text-sm uppercase tracking-wide mt-1">States</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-rhsurface">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-rhdark text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-rhborder rounded-lg p-6 flex flex-col gap-4"
              >
                <span className="inline-flex items-center self-start rounded-full bg-rhorangeLight text-rhorange text-xs font-semibold uppercase tracking-wide px-3 py-1">
                  {service.chip}
                </span>
                <h3 className="font-display text-xl font-bold text-rhdark">{service.name}</h3>
                <p className="text-rhgrey text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-rhorange font-semibold text-sm hover:text-rhorangeHover mt-auto"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RHEPL */}
      <section className="bg-rhbg">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-rhdark text-center mb-12">
            Why Choose RHEPL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-rhorangeLight flex items-center justify-center text-rhorange font-display text-xl font-bold">
                01
              </div>
              <h3 className="font-display text-lg font-bold text-rhdark">
                Polymer-Modified Emulsions Only
              </h3>
              <p className="text-rhgrey text-sm leading-relaxed">
                We never compromise on binder quality.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-rhorangeLight flex items-center justify-center text-rhorange font-display text-xl font-bold">
                02
              </div>
              <h3 className="font-display text-lg font-bold text-rhdark">
                Specialised Equipment Fleet
              </h3>
              <p className="text-rhgrey text-sm leading-relaxed">
                Self-propelled microsurfacing machines, rut-fill box screeds.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-rhorangeLight flex items-center justify-center text-rhorange font-display text-xl font-bold">
                03
              </div>
              <h3 className="font-display text-lg font-bold text-rhdark">
                End-to-End Delivery
              </h3>
              <p className="text-rhgrey text-sm leading-relaxed">
                Survey, design, execution and post-treatment monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-rhsurface">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-rhdark">
              About RHEPL
            </h2>
            <p className="text-rhgrey leading-relaxed">
              Roadtech Highway Engineering Pvt. Ltd. (RHEPL) is a specialised highway maintenance
              and pavement preservation company. As a sister concern of Roadtech Asphalt
              Technologies Pvt. Ltd. (RATPL), RHEPL brings the same commitment to quality and
              innovation to India's road maintenance sector. From microsurfacing to integrated
              preservation programmes, RHEPL works with NHAI, State PWDs and private
              concessionaires to keep India's roads in peak condition.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/about"
              className="bg-rhorange text-white px-8 py-3 rounded font-semibold hover:bg-rhorangeHover transition-colors"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-rhorange">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white">
            Ready to extend your pavement life?
          </h2>
          <Link
            to="/contact"
            className="bg-white text-rhorange px-8 py-3 rounded font-semibold hover:bg-rhorangeLight transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
