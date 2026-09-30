import { Link } from 'react-router-dom'
import { services } from '../data/services'

function FigLabel({ code, label }: { code: string; label: string }) {
  return (
    <p className="font-mono text-[11px] tracking-wide uppercase text-rhorange mb-3">
      [ {code} :: {label} ]
    </p>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-rhbg text-rhdark">

      {/* ─── HERO ─── */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-rhdark">
        <img
          src="/images/svc-microsurfacing-site.jpg"
          alt="Microsurfacing crew at work"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-hero-veil-b" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12">
          <FigLabel code="SVC-CAT" label="Service Catalogue" />
          <h1 className="font-display text-display-lg font-bold uppercase text-white leading-[0.95]">
            Our Services
          </h1>
          <p className="text-white/65 font-sans mt-3 max-w-xl">
            Pavement preservation technologies specified, supplied and applied — end to end.
          </p>
        </div>
      </section>

      {/* ─── INTRO STRIP — warm bg ─── */}
      <section className="bg-rhsurface border-b border-rhborder py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight mb-4">
              From Surface Sealing to Structural Preservation
            </h2>
            <p className="font-sans text-rhgrey leading-relaxed">
              RHEPL offers a comprehensive range of pavement preservation services — from preventive
              microsurfacing through to rut filling and road marking. Every service is backed by
              calibrated equipment, quality-tested polymer-modified materials and a technically
              trained crew accountable throughout.
            </p>
          </div>
          <div className="border-l border-rhborder pl-8 flex flex-col gap-4">
            {[
              { n: '8+', l: 'Service Lines' },
              { n: '500+ km', l: 'Roads Treated' },
              { n: '20+', l: 'States Covered' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="font-display text-display-sm font-bold text-rhorange uppercase leading-none">{n}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-rhgrey mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE CARDS — main grid ─── */}
      <section className="bg-rhbg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 01" label="Service Families" />
          <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-14 max-w-lg">
            Value-Added Pavement Preservation
          </h2>

          {/* 4-col bordered grid — exactly RATPL card style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-rhborder rounded-xl overflow-hidden bg-rhborder">
            {services.map((svc) => (
              <div key={svc.id} className="bg-rhbg flex flex-col overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1 border-t border-rhborder">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-rhorange">{svc.chip}</p>
                  <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight">{svc.name}</h3>
                  <p className="font-sans text-rhgrey text-sm leading-relaxed line-clamp-3">{svc.description}</p>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="mt-auto pt-2 font-sans text-sm font-semibold uppercase tracking-chip text-rhdark hover:text-rhorange transition-colors inline-flex items-center gap-1"
                  >
                    See Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER — warm bg ─── */}
      <section className="bg-rhsurface border-y border-rhborder py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 02" label="Delivery Methodology" />
          <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-14 max-w-lg">
            How RHEPL Delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px border border-rhborder bg-rhborder rounded-xl overflow-hidden">
            {[
              { step: '01', title: 'PCI Survey & Diagnosis', desc: 'Pavement Condition Index surveys identify distress types and severity — guiding optimal treatment selection.' },
              { step: '02', title: 'Treatment Specification', desc: 'We specify the right treatment — microsurfacing, rut filling, slurry seal or sealing — matched to distress, traffic and budget.' },
              { step: '03', title: 'Mechanised Application', desc: 'Company-owned, calibrated machines apply the treatment to spec. No hired-in crews, no subcontracted quality risk.' },
              { step: '04', title: 'Post-Treatment Monitoring', desc: 'We track performance against benchmarks and provide client reporting throughout the defect liability period.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-rhbg p-8 flex flex-col gap-4">
                <p className="font-mono text-[10px] uppercase tracking-wide text-rhgrey">{step}</p>
                <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight">{title}</h3>
                <div className="w-8 h-0.5 bg-rhorange" />
                <p className="font-sans text-rhgrey text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-rhorange">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-white/60 mb-2">[ CONTACT :: SPECIFY A TREATMENT ]</p>
            <h2 className="font-display text-display-md font-bold uppercase text-white">Need a Treatment Specification?</h2>
          </div>
          <Link
            to="/contact"
            className="self-start bg-white text-rhorange px-8 py-3 font-sans font-semibold text-sm uppercase tracking-chip hover:bg-rhorangeLight transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  )
}
