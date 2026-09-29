import { Link } from 'react-router-dom'

const stats = [
  { value: '500+ km', label: 'Treated' },
  { value: '20+', label: 'States' },
  { value: '50+', label: 'Projects' },
  { value: '15+', label: 'Years' },
]

const sectors = [
  {
    icon: '🛣️',
    name: 'National Highways',
    description: 'NHAI / BOT / HAM concessions across India.',
  },
  {
    icon: '🚧',
    name: 'State Highways',
    description: 'State PWD networks and road development corporations.',
  },
  {
    icon: '🏙️',
    name: 'Urban Roads',
    description: 'Smart City arterial and collector road programmes.',
  },
  {
    icon: '🏭',
    name: 'Industrial & Port Roads',
    description: 'Heavy-load corridors serving industrial parks and ports.',
  },
  {
    icon: '✈️',
    name: 'Airport Pavements',
    description: 'Taxiways, aprons and runway surface treatments.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-rhbg">
      {/* Page Hero */}
      <section className="bg-rhsurface py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-rhdark">
            Our Projects
          </h1>
          <p className="text-rhgrey text-lg mt-4 max-w-2xl mx-auto">
            RHEPL has delivered pavement preservation and highway maintenance projects across
            India for NHAI, State PWDs and private concessionaires.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-rhsurface border border-rhborder rounded-lg py-8">
              <p className="font-display text-3xl font-black text-rhorange">{stat.value}</p>
              <p className="text-rhgrey text-sm uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="bg-rhsurface py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-rhdark text-center mb-12">
            Sectors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-white border border-rhborder rounded-lg p-6 flex flex-col gap-3"
              >
                <div className="h-12 w-12 rounded-full bg-rhorangeLight flex items-center justify-center text-2xl">
                  {sector.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-rhdark">{sector.name}</h3>
                <p className="text-rhgrey text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Projects Note */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-rhsurface border-l-4 border-rhorange rounded-r-lg p-8">
            <p className="text-rhgrey leading-relaxed">
              Due to NDA obligations with project owners, specific project details are shared
              only during active tendering. Contact us to request a project reference for your
              sector.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rhorange py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white">
            Discuss your project with us
          </h2>
          <Link
            to="/contact"
            className="bg-white text-rhorange px-8 py-3 rounded font-semibold hover:bg-rhorangeLight transition-colors"
          >
            Contact RHEPL
          </Link>
        </div>
      </section>
    </div>
  )
}
