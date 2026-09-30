import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

function FigLabel({ code, label }: { code: string; label: string }) {
  return (
    <p className="font-mono text-[11px] tracking-wide uppercase text-rhorange mb-3">
      [ {code} :: {label} ]
    </p>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const svc = services.find((s) => s.slug === slug)

  if (!svc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-rhbg text-rhdark px-6">
        <p className="font-mono text-[11px] uppercase tracking-wide text-rhorange">[ 404 :: NOT FOUND ]</p>
        <h1 className="font-display text-display-md font-bold uppercase">Service Not Found</h1>
        <Link to="/services" className="font-sans text-sm uppercase tracking-chip text-rhorange hover:underline">
          ← All Services
        </Link>
      </div>
    )
  }

  const related = services.filter((s) => s.id !== svc.id).slice(0, 3)

  return (
    <div className="bg-rhbg text-rhdark">

      {/* ─── HERO ─── */}
      <section className="relative h-72 md:h-[420px] overflow-hidden bg-rhdark">
        <img
          src={svc.image}
          alt={svc.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-hero-veil-b" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12">
          <Link to="/services" className="font-mono text-[10px] uppercase tracking-wide text-white/60 hover:text-white mb-3 inline-block">
            ← All Services
          </Link>
          <FigLabel code={svc.chip} label="Service Detail" />
          <h1 className="font-display text-display-lg font-bold uppercase text-white leading-[0.95] max-w-3xl">
            {svc.name}
          </h1>
        </div>
      </section>

      {/* ─── OVERVIEW — warm bg ─── */}
      <section className="bg-rhsurface border-b border-rhborder py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="md:col-span-2">
            <FigLabel code="FIG. 01" label="Service Overview" />
            <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-6">
              What is {svc.name}?
            </h2>
            <div className="w-12 h-0.5 bg-rhorange mb-8" />
            <p className="font-sans text-rhgrey leading-relaxed mb-4">{svc.description}</p>
            {svc.longDescription && (
              <p className="font-sans text-rhgrey leading-relaxed">{svc.longDescription}</p>
            )}
          </div>

          {/* Sidebar stats */}
          <div className="flex flex-col gap-6">
            <div className="border border-rhborder rounded-xl p-6 bg-rhbg">
              <p className="font-mono text-[10px] uppercase tracking-wide text-rhorange mb-4">[ SPEC ]</p>
              <dl className="flex flex-col gap-4">
                {(svc.specs || [
                  { k: 'Treatment Type', v: 'Preventive / Corrective' },
                  { k: 'Application', v: 'Mechanised, self-propelled' },
                  { k: 'Binder', v: 'Polymer-modified emulsion' },
                  { k: 'Material Standards', v: 'MoRTH / IRC specifications' },
                ]).map(({ k, v }: { k: string; v: string }) => (
                  <div key={k} className="border-b border-rhborder pb-4 last:border-0 last:pb-0">
                    <dt className="font-mono text-[10px] uppercase tracking-wide text-rhgrey">{k}</dt>
                    <dd className="font-sans text-sm font-medium text-rhdark mt-1">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link
              to="/contact"
              className="bg-rhorange text-white px-6 py-3 font-sans font-semibold text-sm uppercase tracking-chip hover:bg-rhorangeHover transition-colors text-center"
            >
              Request a Specification →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS — white bg ─── */}
      <section className="bg-rhbg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 02" label="Benefits" />
          <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-14 max-w-lg">
            Why Choose {svc.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-rhborder bg-rhborder rounded-xl overflow-hidden">
            {(svc.benefits || [
              { icon: '⚙️', title: 'Mechanised Application', desc: 'Company-owned machines ensure consistent spread rate and calibrated binder content — no guesswork, no variance.' },
              { icon: '🔬', title: 'QC-Tested Materials', desc: 'Every batch of polymer-modified emulsion is tested before use. No material leaves our lab without a passing certificate.' },
              { icon: '📋', title: 'Full Accountability', desc: 'One team, one contract — from survey through application to post-treatment monitoring and DLP reporting.' },
            ]).map(({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
              <div key={title} className="bg-rhbg p-8 flex flex-col gap-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight">{title}</h3>
                <div className="w-8 h-0.5 bg-rhorange" />
                <p className="font-sans text-rhgrey text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED SERVICES — warm bg ─── */}
      {related.length > 0 && (
        <section className="bg-rhsurface border-y border-rhborder py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <FigLabel code="FIG. 03" label="Related Services" />
            <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-12 max-w-lg">
              Other Services from RHEPL
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-rhborder bg-rhborder rounded-xl overflow-hidden">
              {related.map((r) => (
                <div key={r.id} className="bg-rhbg flex flex-col overflow-hidden group">
                  <div className="h-44 overflow-hidden">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1 border-t border-rhborder">
                    <p className="font-mono text-[10px] uppercase tracking-wide text-rhorange">{r.chip}</p>
                    <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight">{r.name}</h3>
                    <Link
                      to={`/services/${r.slug}`}
                      className="mt-auto font-sans text-sm font-semibold uppercase tracking-chip text-rhdark hover:text-rhorange transition-colors inline-flex items-center gap-1"
                    >
                      See Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="bg-rhorange">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-white/60 mb-2">[ CONTACT :: SPECIFICATION REQUEST ]</p>
            <h2 className="font-display text-display-md font-bold uppercase text-white">Ready to Preserve Your Pavement?</h2>
          </div>
          <Link
            to="/contact"
            className="self-start bg-white text-rhorange px-8 py-3 font-sans font-semibold text-sm uppercase tracking-chip hover:bg-rhorangeLight transition-colors"
          >
            Talk to RHEPL →
          </Link>
        </div>
      </section>
    </div>
  )
}
