import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { services } from '../data/services'
import legacy1 from '../assets/legacy/legacy-1.png'
import legacy2 from '../assets/legacy/legacy-2.png'
import legacy3 from '../assets/legacy/legacy-3.png'
import legacy4 from '../assets/legacy/legacy-4.png'
import roadRoller from '../assets/road-roller.png'

const legacyImages = [legacy1, legacy2, legacy3, legacy4]

function LegacyCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % legacyImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lift h-80 group">
      {legacyImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Legacy ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Caption bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-rhdark/80 px-4 py-2 z-10">
        <p className="font-mono text-[10px] uppercase tracking-wide text-white/60">
          FIG. 01.{active + 1} :: Site operations, RHEPL
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {legacyImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-rhorange' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => setActive((prev) => (prev - 1 + legacyImages.length) % legacyImages.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-rhdark/50 hover:bg-rhdark/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => setActive((prev) => (prev + 1) % legacyImages.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-rhdark/50 hover:bg-rhdark/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}

const clientLogos = Array.from({ length: 18 }, (_, i) => `/Logos/${i + 1}.PNG`)

function FigLabel({ code, label }: { code: string; label: string }) {
  return (
    <p className="font-mono text-[11px] tracking-wide uppercase text-rhorange mb-3">
      [ {code} :: {label} ]
    </p>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs font-semibold uppercase tracking-label text-rhgrey mb-2">
      {children}
    </p>
  )
}

export default function HomePage() {
  return (
    <div className="bg-rhbg text-rhdark">

      {/* Marquee keyframes for the Trusted Partners row below */}
      <style>{`
        @keyframes rh-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .rh-marquee-track {
          display: flex;
          gap: 3rem;
          align-items: center;
          width: max-content;
          animation: rh-marquee 28s linear infinite;
        }
        .rh-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section
        className="relative bg-rhbg overflow-hidden"
        style={{ minHeight: 'clamp(34rem, 82vh, 46rem)' }}
      >
        {/* Right 60%: hero brand-and-roller composition (ROADTECH wordmark + RHEPL-branded roller). */}
        {/* On desktop the image sits inside the hero next to the copy; on mobile it stacks below. */}
        {/* right-8/12/16: push the image inward from the viewport edge at each breakpoint. */}
        <div className="pointer-events-none absolute inset-y-0 right-8 md:right-12 lg:right-16 hidden md:block" style={{ width: '60%' }}>
          <img
            src={roadRoller}
            alt="Roadtech Highway Engineering — road roller"
            className="absolute inset-0 w-full h-full object-contain object-right"
          />
        </div>

        {/* Content column, vertically centred */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full min-h-inherit flex items-center py-16 md:py-0" style={{ minHeight: 'inherit' }}>
          <div className="max-w-[34rem] flex flex-col gap-6">
            {/* Mono spec label */}
            <p className="font-mono text-[11px] uppercase tracking-wide text-rhorange">
              [ SPEC-001 :: PAVEMENT PRESERVATION ]
            </p>

            {/* H1 — three lines, orange accent word */}
            <h1 className="font-display font-black uppercase text-rhdark text-display-xl">
              India's
              <br />
              Pavement <span className="text-rhorange">Preservation</span>
              <br />
              Specialist
            </h1>

            {/* Lede */}
            <p className="text-rhgrey text-[17px] leading-[1.65] max-w-[34rem]">
              Microsurfacing, rut filling, road marking and integrated preservation for
              India's highways — engineered for performance, delivered end-to-end by our own crews.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-rhorange text-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-chip hover:bg-rhorangeHover transition-colors"
              >
                Our Services →
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-chip text-rhdark hover:text-rhorange hover:underline underline-offset-4 transition-colors"
              >
                Our Story →
              </Link>
            </div>

            {/* Trust chips */}
            <ul className="flex flex-wrap gap-2 pt-2" aria-label="Credentials">
              {['ISO Certified', 'NHAI Empanelled', 'Est. 2010'].map((chip) => (
                <li key={chip}>
                  <span className="inline-flex items-center border border-rhborder text-rhdark/70 rounded font-mono text-[10px] uppercase tracking-chip px-2.5 py-1">
                    {chip}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mobile hero image — stacked below the copy since the desktop right column is hidden */}
            <img
              src={roadRoller}
              alt="Roadtech Highway Engineering — road roller"
              className="md:hidden w-full h-auto object-contain mt-2"
            />
          </div>
        </div>
      </section>

      {/* ─── STAT BAND (moved out of the hero) ─── */}
      <section className="bg-rhsurface border-y border-rhborder">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 divide-x divide-rhborder text-center">
          {[
            { n: '15+', l: 'Years Experience' },
            { n: '500+ KM', l: 'Roads Treated' },
            { n: '20+', l: 'States Served' },
          ].map(({ n, l }) => (
            <div key={l} className="px-4">
              <p className="font-display font-black text-rhorange uppercase leading-none text-[clamp(2rem,4vw,3rem)]">
                {n}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-chip text-rhgrey mt-2">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRUSTED PARTNERS — logo marquee ─── */}
      <section className="bg-rhbg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <FigLabel code="TRUSTED PARTNERS" label="Road Authorities & Concessionaires" />
            <h2 className="font-display text-display-lg font-bold uppercase text-rhdark">
              Powering India's Road Infrastructure
            </h2>
            <p className="font-sans text-rhgrey mt-4 max-w-xl mx-auto">
              Trusted by NHAI, State PWDs, contractors and private concessionaires across the country.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl border border-rhborder bg-white shadow-lift-warm py-6"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            <div className="rh-marquee-track">
              {[...clientLogos, ...clientLogos].map((src, i) => (
                <div
                  key={i}
                  style={{ width: '8rem', flexShrink: 0 }}
                  className="flex items-center justify-center h-12 px-2"
                >
                  <img
                    src={src}
                    alt={`Client ${(i % clientLogos.length) + 1}`}
                    className="max-h-full max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / LEGACY — warm bg, two-column ─── */}
      <section className="bg-rhsurface py-20 sm:py-28 border-y border-rhborder">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <FigLabel code="FIG. 01" label="Company Overview" />
            <Eyebrow>About RHEPL</Eyebrow>
            <h2 className="font-display text-display-lg font-bold uppercase text-rhdark leading-[0.95]">
              Legacy of Quality and Innovation
            </h2>
            <div className="w-12 h-0.5 bg-rhorange my-6" />
            <p className="font-sans text-rhgrey leading-relaxed mb-4">
              Roadtech Highway Engineering Pvt. Ltd. (RHEPL) is a specialised highway maintenance
              and pavement preservation company incorporated as a sister concern of Roadtech
              Asphalt Technologies Pvt. Ltd. (RATPL).
            </p>
            <p className="font-sans text-rhgrey leading-relaxed">
              With a highly qualified technical team, proprietary equipment and polymer-modified
              materials, RHEPL works with NHAI, State PWDs and private concessionaires to keep
              India's roads in peak condition.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans font-semibold text-sm uppercase tracking-chip text-rhdark hover:text-rhorange transition-colors"
            >
              More About RHEPL →
            </Link>
          </div>

          <LegacyCarousel />
        </div>

        {/* Capability cards */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-rhborder bg-rhborder rounded-xl overflow-hidden">
            {[
              { code: 'CAP-01', icon: '🏭', title: 'Specialised Equipment Fleet', desc: 'Self-propelled microsurfacing machines, rut-fill screeds and thermoplastic marking units — owned, not hired.' },
              { code: 'CAP-02', icon: '🔬', title: 'In-House QC Laboratory', desc: 'Mix design verification and binder testing at every site before application begins.' },
              { code: 'CAP-03', icon: '📋', title: 'End-to-End Delivery', desc: 'PCI survey, treatment selection, execution and post-treatment monitoring — one team accountable throughout.' },
            ].map(({ code, icon, title, desc }) => (
              <div key={code} className="bg-rhbg p-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-mono text-[10px] text-rhgrey tracking-wide uppercase">{code}</span>
                </div>
                <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight">{title}</h3>
                <p className="font-sans text-rhgrey text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STAT BANNER ─── */}
      <section className="bg-rhbg py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-rhorange mb-3">
              [ STAT :: PROVEN AT SCALE ]
            </p>
            <p className="font-display text-[clamp(4rem,10vw,7rem)] font-bold leading-none text-rhorange">
              500+
            </p>
            <p className="font-display text-display-md font-bold uppercase text-rhdark leading-tight">
              KM of Roads Treated
            </p>
            <p className="font-mono text-xs uppercase tracking-wide text-rhgrey mt-2">
              Microsurfacing Applied
            </p>
          </div>
          <div className="border-l border-rhborder pl-10">
            <p className="font-sans text-rhgrey leading-relaxed">
              RHEPL's mechanised microsurfacing provides a durable and cost-effective solution to
              maintain roads and pavements, ensuring a safe and comfortable transportation
              experience across India's national and state highway network.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES — warm bg, 4-column card grid ─── */}
      <section className="bg-rhsurface py-20 sm:py-28 border-y border-rhborder">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 02" label="Service Families" />

          {/* Section header row: title (left) + All Services CTA (right, aligned to baseline) */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="font-display text-display-lg font-bold uppercase text-rhdark leading-[0.95] max-w-3xl">
              Value-Added Pavement Preservation
            </h2>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 self-start md:self-end font-mono text-xs font-semibold uppercase tracking-chip text-rhdark hover:text-rhorange transition-colors whitespace-nowrap"
            >
              All Services
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* 4-column card grid — each card is a full-surface link (a11y + click target) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden bg-rhborder ring-1 ring-rhborder">
            {services.map((svc, i) => (
              <Link
                key={svc.id}
                to={`/services/${svc.slug}`}
                className="group relative bg-rhbg flex flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rhorange transition-shadow duration-200 hover:shadow-lift-warm"
                aria-label={`${svc.name} — view details`}
              >
                {/* Datasheet index tag */}
                <span className="absolute top-3 right-3 z-10 font-mono text-[10px] uppercase tracking-chip text-white bg-rhdark/70 backdrop-blur-sm px-2 py-0.5 rounded">
                  S/{String(i + 1).padStart(2, '0')}
                </span>

                {/* Image */}
                <div className="h-48 overflow-hidden bg-rhsurface">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Body — grid keeps title/description/CTA rows aligned across cards */}
                <div className="p-6 flex flex-col gap-3 flex-1 border-t border-rhborder">
                  <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-chip text-rhorange">
                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-rhorange" />
                    {svc.chip}
                  </p>
                  <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-[1.05] min-h-[3.2rem]">
                    {svc.name}
                  </h3>
                  <p className="font-sans text-rhgrey text-sm leading-relaxed line-clamp-3">
                    {svc.description}
                  </p>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-chip text-rhdark group-hover:text-rhorange transition-colors">
                    View Service
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="font-sans text-rhgrey text-sm mt-8 max-w-2xl">
            Every service is delivered by trained crews using calibrated equipment and
            quality-tested polymer-modified materials. Not sure which solution fits your site?{' '}
            <Link
              to="/contact"
              className="text-rhdark font-semibold underline underline-offset-2 decoration-rhorange decoration-2 hover:text-rhorange transition-colors"
            >
              Talk to our team
            </Link>{' '}
            for a tailored recommendation.
          </p>
        </div>
      </section>

      {/* ─── INDUSTRIES / SECTORS — white bg ─── */}
      <section className="bg-rhbg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 03" label="Industries Served" />
          <h2 className="font-display text-display-lg font-bold uppercase text-rhdark leading-[0.95] mb-12 max-w-xl">
            Built for the Surfaces That Carry the Most
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'National Highways', img: '/images/hero-highway.jpg', desc: 'NHAI, BOT and HAM concessionaires at scale.' },
              { name: 'Airports', img: '/images/ind-runways.jpg', desc: 'Runway and taxiway microsurfacing for AAI and private operators.' },
              { name: 'Urban Roads & Industrial', img: '/images/svc-microsurfacing.jpg', desc: 'Smart City arterials, port roads and heavy-load SEZ internal roads.' },
            ].map(({ name, img, desc }) => (
              <div key={name} className="relative rounded-xl overflow-hidden group h-64 shadow-lift-warm">
                <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-rhdark/90 via-rhdark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold uppercase text-white leading-tight">{name}</h3>
                  <p className="font-sans text-white/70 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-rhorange">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-white/60 mb-2">
              [ CONTACT :: GET IN TOUCH ]
            </p>
            <h2 className="font-display text-display-md font-bold uppercase text-white leading-tight">
              Ready to Extend Your Pavement Life?
            </h2>
          </div>
          <Link
            to="/contact"
            className="self-start md:self-auto bg-white text-rhorange px-8 py-3 font-sans font-semibold text-sm uppercase tracking-chip hover:bg-rhorangeLight transition-colors whitespace-nowrap"
          >
            Contact RHEPL →
          </Link>
        </div>
      </section>
    </div>
  )
}
