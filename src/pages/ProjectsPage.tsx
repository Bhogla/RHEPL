import { Link } from 'react-router-dom'

function FigLabel({ code, label }: { code: string; label: string }) {
  return (
    <p className="font-mono text-[11px] tracking-wide uppercase text-rhorange mb-3">
      [ {code} :: {label} ]
    </p>
  )
}

const projects = [
  {
    id: 'p01',
    sector: 'National Highways',
    chip: 'NHAI',
    title: 'NH-48 Microsurfacing',
    location: 'Delhi–Jaipur, Rajasthan',
    length: '120 km',
    tech: 'Polymer-Modified Microsurfacing',
    img: '/images/hero-highway.jpg',
  },
  {
    id: 'p02',
    sector: 'Airport',
    chip: 'AIRPORTS',
    title: 'RGIA Apron & Taxiway Resurfacing',
    location: 'Hyderabad, Telangana',
    length: '18,000 m²',
    tech: 'Cold-Mix Patching + Microsurfacing',
    img: '/images/ind-runways.jpg',
  },
  {
    id: 'p03',
    sector: 'State Highway',
    chip: 'STATE PWD',
    title: 'SH-17 Rut Filling & Sealing',
    location: 'Pune Ring Road, Maharashtra',
    length: '65 km',
    tech: 'Hot Rut Filling + Fog Seal',
    img: '/images/svc-microsurfacing.jpg',
  },
  {
    id: 'p04',
    sector: 'Urban Roads',
    chip: 'SMART CITY',
    title: 'Nagpur Smart City Road Restoration',
    location: 'Nagpur, Maharashtra',
    length: '42 km',
    tech: 'Slurry Seal + Road Marking',
    img: '/images/svc-road-marking.png',
  },
  {
    id: 'p05',
    sector: 'Industrial Port',
    chip: 'PORT / SEZ',
    title: 'JNPT Internal Road Preservation',
    location: 'Navi Mumbai, Maharashtra',
    length: '8 km',
    tech: 'Polymer-Modified Microsurfacing',
    img: '/images/svc-microsurfacing.jpg',
  },
  {
    id: 'p06',
    sector: 'National Highways',
    chip: 'BOT / HAM',
    title: 'NH-44 BOT Concession Maintenance',
    location: 'Jalandhar–Pathankot, Punjab',
    length: '190 km',
    tech: 'Annual Preservation Programme',
    img: '/images/hero-highway.jpg',
  },
]

const sectors = [
  {
    name: 'National Highways',
    chip: 'HIGHWAYS',
    img: '/images/hero-highway.jpg',
    desc: "NHAI, BOT and HAM concessionaires across India's national highway network.",
  },
  {
    name: 'Airports & Runways',
    chip: 'AIRPORTS',
    img: '/images/ind-runways.jpg',
    desc: 'Runway, taxiway and apron preservation for AAI and private operators.',
  },
  {
    name: 'Urban & Industrial',
    chip: 'URBAN / SEZ',
    img: '/images/svc-microsurfacing.jpg',
    desc: 'Smart City arterials, port roads and heavy-load SEZ internal roads.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-rhbg text-rhdark">

      {/* ─── HERO ─── */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-rhdark">
        <img
          src="/images/hero-highway.jpg"
          alt="Projects"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-hero-veil-b" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12">
          <FigLabel code="REF-CAT" label="Reference Projects" />
          <h1 className="font-display text-display-lg font-bold uppercase text-white leading-[0.95]">
            Projects & References
          </h1>
          <p className="text-white/65 font-sans mt-3 max-w-xl">
            Selected projects across highways, airports and urban roads — nationwide.
          </p>
        </div>
      </section>

      {/* ─── SECTORS — warm bg with photo cards ─── */}
      <section className="bg-rhsurface border-b border-rhborder py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 01" label="Sectors Served" />
          <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-12 max-w-lg">
            Industries Where We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sectors.map(({ name, chip, img, desc }) => (
              <div key={name} className="relative rounded-xl overflow-hidden group h-64 shadow-lift-warm">
                <img
                  src={img}
                  alt={name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rhdark/90 via-rhdark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-rhorange mb-1">{chip}</p>
                  <h3 className="font-display text-xl font-bold uppercase text-white leading-tight">{name}</h3>
                  <p className="font-sans text-white/70 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS LIST — white bg ─── */}
      <section className="bg-rhbg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 02" label="Reference Projects" />
          <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-14 max-w-lg">
            Selected References
          </h2>

          {/* Project cards — 3-col grid with image + data table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="border border-rhborder rounded-xl overflow-hidden flex flex-col shadow-card hover:shadow-lift transition-shadow duration-300">
                <div className="h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-rhorange">{p.chip}</p>
                    <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight mt-1">{p.title}</h3>
                  </div>
                  <div className="border-t border-rhborder pt-3 flex flex-col gap-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-mono text-[10px] uppercase tracking-wide text-rhgrey">Location</span>
                      <span className="font-sans text-xs text-rhdark font-medium text-right max-w-[55%]">{p.location}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-mono text-[10px] uppercase tracking-wide text-rhgrey">Scope</span>
                      <span className="font-sans text-xs text-rhdark font-medium">{p.length}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] uppercase tracking-wide text-rhgrey">Technology</span>
                      <span className="font-sans text-xs text-rhdark font-medium text-right max-w-[55%]">{p.tech}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-rhgrey text-sm mt-10 max-w-2xl">
            These references are a representative selection. For sector-specific or client references,
            contact us and we will provide relevant case materials under NDA where required.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-rhorange">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-white/60 mb-2">[ CONTACT :: START A PROJECT ]</p>
            <h2 className="font-display text-display-md font-bold uppercase text-white">Want to Start a Project?</h2>
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
