import { Link } from 'react-router-dom'
import gupta from '../assets/directors/gupta.png'
import sharawat from '../assets/directors/sharawat.png'

function FigLabel({ code, label }: { code: string; label: string }) {
  return (
    <p className="font-mono text-[11px] tracking-wide uppercase text-rhorange mb-3">
      [ {code} :: {label} ]
    </p>
  )
}

type Director = {
  role: string
  name: string
  bio: string[]
  remit: string
  drives: string
  image: string
}

const directors: Director[] = [
  {
    role: 'Director :: Growth & Operations',
    name: 'Mr. Tarun Gupta',
    bio: [
      "Tarun Gupta plays a pivotal role in shaping the company's growth through strategic planning, business development, and operational excellence. With a strong understanding of the infrastructure sector, he has been instrumental in expanding Roadtech's presence across multiple states while fostering lasting relationships with clients and partners.",
      "His forward-thinking approach, combined with a focus on quality and innovation, ensures that every project reflects the company's commitment to reliability and engineering excellence.",
    ],
    remit: 'Growth, partnerships & operations',
    drives: 'Strategic planning · Business development · Multi-state reach',
    image: gupta,
  },
  {
    role: 'Director :: Product & Technical',
    name: 'Mr. Dherandra Sharawat',
    bio: [
      'Dherandra Sharawat is the driving force behind Roadtech Asphalt Technologies Pvt. Ltd., bringing years of expertise in road construction materials and infrastructure solutions. His vision of delivering innovative, high-quality, and sustainable products has positioned the company as a trusted partner for government agencies, contractors, and infrastructure developers across India.',
      'Known for his strategic leadership and commitment to excellence, he continuously drives innovation, operational efficiency, and customer satisfaction while building a strong foundation for long-term growth.',
    ],
    remit: 'Product direction & technical quality',
    drives: 'Innovation · Operational efficiency · Customer satisfaction',
    image: sharawat,
  },
]

function DirectorRow({ director, reverse }: { director: Director; reverse: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
      {/* Text column */}
      <div className={`flex flex-col gap-6 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <p className="font-mono text-[11px] tracking-wide uppercase text-rhorange">
          [ {director.role} ]
        </p>
        <h3 className="font-display text-display-md font-black uppercase text-white leading-[0.95]">
          {director.name}
        </h3>
        <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
          {director.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide text-white/50 mb-1">Remit</p>
            <p className="text-white text-sm font-medium">{director.remit}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide text-white/50 mb-1">Drives</p>
            <p className="text-white text-sm font-medium">{director.drives}</p>
          </div>
        </div>
      </div>

      {/* Photo column */}
      <div className={`flex flex-col gap-3 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative">
          <img
            src={director.image}
            alt={director.name}
            className="w-full h-auto max-h-[520px] object-contain object-bottom"
          />
        </div>
        <div className="dash-rule opacity-80" role="separator" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-rhbg text-rhdark">

      {/* ─── HERO ─── */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-rhdark">
        <img
          src="/images/ind-highways.jpg"
          alt="About RHEPL"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-hero-veil-b" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12">
          <FigLabel code="ABOUT" label="Company Profile" />
          <h1 className="font-display text-display-lg font-bold uppercase text-white leading-[0.95]">
            About RHEPL
          </h1>
          <p className="text-white/65 font-sans mt-3 max-w-xl">
            Specialists in pavement preservation since 2010 — part of the Roadtech group.
          </p>
        </div>
      </section>

      {/* ─── WHO WE ARE — warm bg ─── */}
      <section className="bg-rhsurface border-b border-rhborder py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <FigLabel code="FIG. 01" label="Company Overview" />
            <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-6">
              Built on the Roadtech Legacy
            </h2>
            <div className="w-12 h-0.5 bg-rhorange mb-8" />
            <p className="font-sans text-rhgrey leading-relaxed mb-4">
              Roadtech Highway Engineering Pvt. Ltd. (RHEPL) is a specialised highway maintenance
              and pavement preservation company. As a sister concern of Roadtech Asphalt
              Technologies Pvt. Ltd. (RATPL), RHEPL brings the same commitment to quality and
              innovation to India's road maintenance sector.
            </p>
            <p className="font-sans text-rhgrey leading-relaxed mb-4">
              RHEPL was incorporated with the mission of providing India's road network with
              world-class preventive and corrective pavement preservation services — using
              polymer-modified materials, specialised equipment and a technically trained crew.
            </p>
            <p className="font-sans text-rhgrey leading-relaxed">
              From microsurfacing to integrated preservation programmes, RHEPL works with NHAI,
              State PWDs and private concessionaires to keep India's roads in peak condition.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-px border border-rhborder bg-rhborder rounded-xl overflow-hidden">
            {[
              { n: 'Est. 2010', l: 'Year Founded' },
              { n: 'Pan-India', l: 'Coverage' },
              { n: 'ISO 9001', l: 'Certified' },
              { n: 'NHAI', l: 'Empanelled' },
            ].map(({ n, l }) => (
              <div key={l} className="bg-rhbg p-8">
                <p className="font-display text-display-sm font-bold text-rhorange uppercase leading-tight">{n}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-rhgrey mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP — alternating directors, dark section ─── */}
      <section className="bg-rhdark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FigLabel code="FIG. 04" label="Leadership" />
            <h2 className="font-display text-display-lg font-black uppercase text-white leading-[0.95]">
              The People Accountable For It
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Two directors, both hands-on — one on what we make, one on where it goes.
            </p>
          </div>

          <div className="flex flex-col gap-20 md:gap-28">
            {directors.map((director, i) => (
              <DirectorRow key={director.name} director={director} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES — white bg, 3-column caps ─── */}
      <section className="bg-rhbg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FigLabel code="FIG. 02" label="Capabilities" />
          <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-12 max-w-xl">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-rhborder bg-rhborder rounded-xl overflow-hidden">
            {[
              { code: 'CAP-01', title: 'Polymer-Modified Emulsions', desc: 'We never compromise on binder quality. Every mix uses PME for superior durability, adhesion and all-weather performance.' },
              { code: 'CAP-02', title: 'Owned Equipment Fleet', desc: 'Self-propelled microsurfacing machines, rut-fill box screeds and thermoplastic road marking units — all owned, never hired.' },
              { code: 'CAP-03', title: 'In-House QC Lab', desc: 'On-site and in-house testing of bitumen emulsions, aggregate gradation and mix design verification before every pour.' },
            ].map(({ code, title, desc }) => (
              <div key={code} className="bg-rhbg p-8 flex flex-col gap-4">
                <p className="font-mono text-[10px] uppercase tracking-wide text-rhgrey">{code}</p>
                <h3 className="font-display text-display-sm font-bold uppercase text-rhdark leading-tight">{title}</h3>
                <div className="w-8 h-0.5 bg-rhorange" />
                <p className="font-sans text-rhgrey text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO + RATPL RELATIONSHIP — warm bg ─── */}
      <section className="bg-rhsurface border-y border-rhborder py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-lift h-80">
            <img
              src="/images/about-construction.jpg"
              alt="RHEPL construction"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rhdark/80 px-4 py-2">
              <p className="font-mono text-[10px] uppercase tracking-wide text-white/60">
                FIG. 02.1 :: Mechanised microsurfacing, site in progress
              </p>
            </div>
          </div>
          <div>
            <FigLabel code="FIG. 03" label="The Roadtech Group" />
            <h2 className="font-display text-display-md font-bold uppercase text-rhdark leading-[0.95] mb-6">
              Part of the Roadtech Group
            </h2>
            <div className="w-12 h-0.5 bg-rhorange mb-6" />
            <p className="font-sans text-rhgrey leading-relaxed mb-4">
              RHEPL is a sister concern of Roadtech Asphalt Technologies Pvt. Ltd. (RATPL),
              India's leading manufacturer of bitumen emulsions, modified bitumen and coldmix
              solutions. Together, the Roadtech group offers the complete pavement life-cycle —
              from engineered binder manufacture through to application and maintenance.
            </p>
            <a
              href="https://roadtech-asphalt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-chip text-rhdark hover:text-rhorange transition-colors"
            >
              Visit RATPL →
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-rhorange">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-white/60 mb-2">[ CONTACT :: WORK WITH US ]</p>
            <h2 className="font-display text-display-md font-bold uppercase text-white">Ready to Work with RHEPL?</h2>
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
