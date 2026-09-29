const stats = [
  { label: 'Est. 2010' },
  { label: 'Pan-India Operations' },
  { label: 'ISO Certified' },
  { label: 'NHAI Empanelled' },
]

const competencies = [
  {
    name: 'Microsurfacing Technology',
    description: 'Cold-mix polymer-modified slurry systems applied with self-propelled machines.',
  },
  {
    name: 'Rut Filling & Profile Correction',
    description: 'Precision box-screed treatments that restore pavement cross-section and drainage.',
  },
  {
    name: 'Road Marking Systems',
    description: 'Thermoplastic and paint markings engineered for retroreflectivity and durability.',
  },
  {
    name: 'Pavement Management',
    description: 'Condition surveys, PCI analysis and life-cycle treatment planning.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-rhbg">
      {/* Page Hero */}
      <section className="bg-rhsurface py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-rhdark">
            About RHEPL
          </h1>
          <p className="text-rhgrey text-lg mt-4 max-w-2xl mx-auto">
            Roadtech Highway Engineering Pvt. Ltd. — India's specialist in pavement preservation
            and highway maintenance
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-rhgrey leading-relaxed text-lg">
            RHEPL was incorporated to address a growing need in India's road sector: high-quality,
            mechanised pavement preservation that extends the life of existing road assets at a
            fraction of reconstruction cost. Operating as a sister concern of Roadtech Asphalt
            Technologies Pvt. Ltd. (RATPL), RHEPL leverages decades of asphalt technology
            expertise to deliver microsurfacing, rut correction, road marking and integrated
            preservation programmes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-rhsurface border border-rhborder rounded-lg py-8 px-4 text-center"
              >
                <p className="font-display text-lg font-bold text-rhorange uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-rhsurface py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-rhborder rounded-xl p-8">
            <h2 className="font-display text-2xl font-bold text-rhdark uppercase mb-4">
              Mission
            </h2>
            <p className="text-rhgrey leading-relaxed">
              To deliver world-class pavement preservation solutions that maximise the life of
              India's road infrastructure — on time, within budget and to the highest quality
              standards.
            </p>
          </div>
          <div className="bg-white border border-rhborder rounded-xl p-8">
            <h2 className="font-display text-2xl font-bold text-rhdark uppercase mb-4">
              Vision
            </h2>
            <p className="text-rhgrey leading-relaxed">
              To be India's most trusted specialist highway maintenance company, setting the
              benchmark for mechanised pavement preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-rhdark text-center mb-12">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-rhborder rounded-lg p-6 flex flex-col gap-3"
              >
                <h3 className="font-display text-lg font-bold text-rhdark">{item.name}</h3>
                <p className="text-rhgrey text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Company */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-rhsurface border-l-4 border-rhorange rounded-r-lg p-8">
            <h2 className="font-display text-xl font-bold text-rhdark uppercase mb-3">
              Part of the Roadtech Group
            </h2>
            <p className="text-rhgrey leading-relaxed">
              RHEPL is a sister concern of Roadtech Asphalt Technologies Pvt. Ltd. (RATPL), a
              pioneer in polymer-modified bitumen and asphalt technologies in India. Together,
              the Roadtech group offers end-to-end solutions for road construction and
              maintenance.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
