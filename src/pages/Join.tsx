import { contact, join } from '../data/content'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { ArrowRight, Mail, WhatsApp } from '../components/icons'

export function Join() {
  return (
    <>
      <PageHero
        figure={join.figure}
        title={join.heading}
        intro={join.intro}
      />

      <section className="bg-warm py-16 sm:py-24">
        <div className="shell">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {join.sections.map((s, i) => (
              <Reveal key={s.code} delay={i * 100}>
                <div className="flex h-full flex-col border border-warm-line bg-white">
                  <div className="flex items-center justify-between border-b border-warm-line px-6 py-4">
                    <h2 className="font-display text-2xl font-semibold uppercase text-ink">
                      {s.title}
                    </h2>
                    <span className="font-mono text-xs tracking-chip text-aggregate">
                      {s.code}
                    </span>
                  </div>

                  {/* datasheet empty state */}
                  <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                    <div
                      aria-hidden
                      className="relative grid h-16 w-16 place-items-center border border-dashed border-warm-line"
                    >
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(135deg, #0E0E10 0 1px, transparent 1px 12px)',
                        }}
                      />
                      <span className="h-[3px] w-7 bg-asphalt" />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-chip text-warm-mute">
                      [ {s.empty} ]
                    </p>
                    <p className="max-w-xs text-sm leading-relaxed text-warm-mute">{s.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Right panel: B2B collaboration (same outer panel styling) */}
            <Reveal delay={100}>
              <div className="flex h-full flex-col border border-warm-line bg-white">
                <div className="flex items-center justify-between border-b border-warm-line px-6 py-4">
                  <h2 className="font-display text-2xl font-semibold uppercase text-ink">
                    {join.b2b.title}
                  </h2>
                  <span className="font-mono text-xs tracking-chip text-aggregate">
                    {join.b2b.code}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                  <p className="text-sm leading-relaxed text-warm-mute">{join.b2b.intro}</p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${contact.emailSales}?subject=B2B%20collaboration%20%E2%80%94%20Roadtech`}
                      className="btn-primary"
                    >
                      <Mail className="h-5 w-5" />
                      Email Us
                    </a>
                    <a
                      href={`https://wa.me/${contact.whatsappHref}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-certgreen/60 px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-certgreen transition-colors duration-200 ease-out hover:bg-certgreen/10"
                    >
                      <WhatsApp className="h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Track record — full-width, below both panels */}
          <Reveal delay={140}>
            <div className="mt-6 border border-warm-line bg-white">
              <div className="border-b border-warm-line px-6 py-5 sm:px-8">
                <p className="font-mono text-xs uppercase tracking-label text-asphalt">
                  [ TRACK RECORD ]
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight text-ink sm:text-3xl">
                  {join.b2b.highlight}
                </h2>
              </div>

              {/* Full width on desktop; horizontal scroll on narrow screens */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                  <thead className="bg-warm">
                    <tr className="border-b border-warm-line">
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-mono text-xs uppercase tracking-chip text-warm-mute sm:px-8">
                        S.No
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-mono text-xs uppercase tracking-chip text-warm-mute">
                        Client Name
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-mono text-xs uppercase tracking-chip text-warm-mute">
                        State
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-right font-mono text-xs uppercase tracking-chip text-warm-mute sm:px-8">
                        Approx. Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {join.b2b.clients.map((c) => (
                      <tr key={c.sno} className="border-b border-warm-line/70 last:border-0">
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-warm-mute sm:px-8">
                          {c.sno}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 font-medium text-ink">
                          {c.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-warm-mute">
                          {c.state}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right font-mono text-ink sm:px-8">
                          {c.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* speculative applications */}
          <Reveal delay={120}>
            <div className="mt-6 flex flex-col items-start gap-6 border border-ink-line bg-ink p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="max-w-xl">
                <p className="font-mono text-xs uppercase tracking-label text-asphalt">
                  [ SPECULATIVE APPLICATIONS ]
                </p>
                <h2 className="mt-3 font-display text-display-md font-semibold uppercase text-warm">
                  Think you're a fit? Tell us anyway.
                </h2>
                <p className="mt-3 leading-relaxed text-aggregate">
                  We're always glad to hear from strong people in bitumen technology,
                  applications and procurement. Send your CV and a short note.
                </p>
              </div>
              <a
                href={`mailto:${contact.emailGeneral}?subject=Speculative%20application%20%E2%80%94%20Roadtech`}
                className="btn-primary shrink-0"
              >
                <Mail className="h-5 w-5" />
                Email Us
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
