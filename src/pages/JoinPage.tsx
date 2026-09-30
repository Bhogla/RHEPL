import { Seo } from '../components/Seo'
import { ArrowRight, Mail, WhatsApp } from '../components/icons'

// ─────────────────────────────────────────────────────────────────────────────
// RHEPL contact (kept in-sync with ContactPage / Footer until src/data/site.ts)
// ─────────────────────────────────────────────────────────────────────────────
const contact = {
  emailGeneral: 'info@rhepl.in',
  emailSales: 'info@rhepl.in',
  whatsappHref: '917017077202',
}

// ─── Content ─────────────────────────────────────────────────────────────────
const join = {
  figure: 'FIG. 00 :: CAREERS & COLLABORATION',
  heading: 'Join the Team. Or Partner with Us.',
  intro:
    "We're building India's specialist pavement-preservation team. If you're a technical, site or commercial professional — or a contractor, agency or applicator looking to collaborate — tell us how you'd like to work with RHEPL.",
  sections: [
    {
      code: 'CAR/01',
      title: 'Technical & Site Team',
      empty: 'NO CURRENT OPENINGS',
      note: 'Microsurfacing supervisors, QC engineers, plant technicians and site chargehands. We hire when a project needs the seat filled — not on a rolling basis. Send a speculative note if you fit the profile.',
    },
    {
      code: 'CAR/02',
      title: 'Sales & Business Development',
      empty: 'NO CURRENT OPENINGS',
      note: 'BD leads for NHAI, State PWD and private concessionaire tenders. Bituminous / preservation experience preferred but not required. We open roles as the pipeline grows.',
    },
  ],
  b2b: {
    code: 'B2B/01',
    title: 'B2B & Contractor Collaboration',
    intro:
      "If you're a road contractor, EPC, concessionaire, agency or applicator looking for a specialised microsurfacing / rut-filling / road-marking partner, get in touch. We handle survey, design and mechanised execution end-to-end — anywhere in India.",
    highlight: 'Trusted by contractors and road authorities across ~32,00,000 sq. m. of microsurfacing.',
    clients: [
      { sno: '01', name: 'HPPWD', state: 'Himachal Pradesh', qty: '3,50,000 sq. m.' },
      { sno: '02', name: 'DBL', state: 'Haryana', qty: '75,000 sq. m.' },
      { sno: '03', name: 'Hindustan Colas', state: 'Maharashtra', qty: '1,75,000 sq. m.' },
      { sno: '04', name: 'Interise', state: 'Maharashtra', qty: '3,50,000 sq. m.' },
      { sno: '05', name: 'GCC', state: 'Haryana', qty: '2,21,000 sq. m.' },
      { sno: '06', name: 'Kaluwala Cons.', state: 'Haryana', qty: '2,21,000 sq. m.' },
      { sno: '07', name: 'GCC', state: 'Haryana', qty: '50,085 sq. m.' },
      { sno: '08', name: 'Hindustan Colas', state: 'Rajasthan', qty: '3,50,000 sq. m.' },
      { sno: '09', name: 'RR Builders', state: 'Punjab', qty: '40,000 sq. m.' },
      { sno: '10', name: 'Interise', state: 'Maharashtra', qty: '1,30,000 sq. m.' },
      { sno: '11', name: 'Interise', state: 'Maharashtra', qty: '3,00,000 sq. m.' },
      { sno: '12', name: 'Afcons', state: 'Maharashtra', qty: '48,364 sq. m.' },
      { sno: '13', name: 'Silver Creek', state: 'Rajasthan', qty: '1,21,105 sq. m.' },
      { sno: '14', name: 'Hindustan Hincol', state: 'Telangana', qty: '1,00,000 sq. m.' },
      { sno: '15', name: 'Isadak', state: 'Telangana', qty: '1,000 sq. m. (ongoing)' },
    ],
  },
}

export default function JoinPage() {
  return (
    <>
      <Seo
        title="Join Us"
        description="Careers, contractor collaboration and B2B partnerships with Roadtech Highway Engineering (RHEPL) — India's specialist in mechanised pavement preservation."
        path="/join"
      />

      {/* ─── PAGE HERO ─── */}
      <section className="bg-rhsurface border-b border-rhborder">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-wide text-rhorange mb-4">
            [ {join.figure} ]
          </p>
          <h1 className="font-display text-display-lg font-black uppercase text-rhdark leading-[0.95] max-w-3xl">
            {join.heading}
          </h1>
          <p className="mt-5 text-rhgrey text-lg leading-relaxed max-w-2xl">{join.intro}</p>
        </div>
      </section>

      {/* ─── OPEN POSITIONS + B2B PANELS ─── */}
      <section className="bg-rhbg py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Empty-state career panels */}
            {join.sections.map((s) => (
              <div
                key={s.code}
                className="flex h-full flex-col border border-rhborder bg-rhbg rounded-xl shadow-card"
              >
                <div className="flex items-center justify-between border-b border-rhborder px-6 py-4">
                  <h2 className="font-display text-2xl font-semibold uppercase text-rhdark">
                    {s.title}
                  </h2>
                  <span className="font-mono text-xs tracking-chip text-rhgrey">{s.code}</span>
                </div>

                {/* Datasheet empty state */}
                <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                  <div
                    aria-hidden
                    className="relative grid h-16 w-16 place-items-center border border-dashed border-rhborder"
                  >
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(135deg, #0E0E10 0 1px, transparent 1px 12px)',
                      }}
                    />
                    <span className="h-[3px] w-7 bg-rhorange" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-chip text-rhgrey">
                    [ {s.empty} ]
                  </p>
                  <p className="max-w-xs text-sm leading-relaxed text-rhgrey">{s.note}</p>
                </div>
              </div>
            ))}

            {/* B2B collaboration panel */}
            <div className="md:col-span-2 flex h-full flex-col border border-rhborder bg-rhbg rounded-xl shadow-card">
              <div className="flex items-center justify-between border-b border-rhborder px-6 py-4">
                <h2 className="font-display text-2xl font-semibold uppercase text-rhdark">
                  {join.b2b.title}
                </h2>
                <span className="font-mono text-xs tracking-chip text-rhgrey">{join.b2b.code}</span>
              </div>

              <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                <p className="text-rhgrey leading-relaxed">{join.b2b.intro}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${contact.emailSales}?subject=B2B%20collaboration%20%E2%80%94%20RHEPL`}
                    className="inline-flex items-center gap-2 bg-rhorange text-white px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide hover:bg-rhorangeHover transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us
                  </a>
                  <a
                    href={`https://wa.me/${contact.whatsappHref}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-rhsuccess/60 px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-rhsuccess transition-colors hover:bg-rhsuccess/10"
                  >
                    <WhatsApp className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── TRACK RECORD TABLE ─── */}
          <div className="mt-6 border border-rhborder bg-rhbg rounded-xl overflow-hidden shadow-card">
            <div className="border-b border-rhborder px-6 py-5 sm:px-8">
              <p className="font-mono text-xs uppercase tracking-label text-rhorange">
                [ TRACK RECORD ]
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight text-rhdark sm:text-3xl">
                {join.b2b.highlight}
              </h2>
            </div>

            {/* Full-width on desktop, horizontal scroll on narrow screens */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <thead className="bg-rhsurface">
                  <tr className="border-b border-rhborder">
                    <th
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 font-mono text-xs uppercase tracking-chip text-rhgrey sm:px-8"
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 font-mono text-xs uppercase tracking-chip text-rhgrey"
                    >
                      Client Name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 font-mono text-xs uppercase tracking-chip text-rhgrey"
                    >
                      State
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 text-right font-mono text-xs uppercase tracking-chip text-rhgrey sm:px-8"
                    >
                      Approx. Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {join.b2b.clients.map((c) => (
                    <tr key={c.sno} className="border-b border-rhborder/70 last:border-0">
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-rhgrey sm:px-8">
                        {c.sno}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-rhdark">
                        {c.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-rhgrey">{c.state}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-right font-mono text-rhdark sm:px-8">
                        {c.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ─── SPECULATIVE APPLICATIONS — dark CTA ─── */}
          <div className="mt-6 flex flex-col items-start gap-6 border border-white/10 bg-rhdark p-8 rounded-xl sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-label text-rhorange">
                [ SPECULATIVE APPLICATIONS ]
              </p>
              <h2 className="mt-3 font-display text-display-md font-semibold uppercase text-white">
                Think you're a fit? Tell us anyway.
              </h2>
              <p className="mt-3 leading-relaxed text-white/60">
                We're always glad to hear from strong technical and commercial people in pavement
                preservation, microsurfacing and road maintenance. Send your CV and a short note.
              </p>
            </div>
            <a
              href={`mailto:${contact.emailGeneral}?subject=Speculative%20application%20%E2%80%94%20RHEPL`}
              className="shrink-0 inline-flex items-center gap-2 bg-rhorange text-white px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide hover:bg-rhorangeHover transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
