import { Link } from 'react-router-dom'
import { about } from '../data/content'
import { Accordion } from '../components/Accordion'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { Chip, DashRule, FigureLabel, SectionHeading } from '../components/ui'
import { ArrowRight, Handshake, ShieldCheck, Users } from '../components/icons'
import guptaPhoto from '../assets/directors/gupta.png'
import sharawatPhoto from '../assets/directors/sharawat.png'
import legacy1 from '../assets/legacy/legacy-1.png'
import legacy2 from '../assets/legacy/legacy-2.png'
import legacy3 from '../assets/legacy/legacy-3.png'
import legacy4 from '../assets/legacy/legacy-4.png'

const pillars = [
  { icon: ShieldCheck, title: 'Integrity & Safety', body: 'Strict protocols and stringent quality control at every stage.' },
  { icon: Handshake, title: 'Collaboration', body: 'Working closely with promoters, customers and stakeholders.' },
  { icon: Users, title: 'Customer-Centricity', body: 'Technical services that maximise the life of every laid metre.' },
]

const legacyCaption = 'FIELD :: ACTIVE PROJECT DOCUMENTATION'

// Real project-site photos, all 1536x1024 (3:2) — shown as a precise 3:2 grid.
// `order` carries the mobile stack order (most impactful wide shot first) and
// resets to natural reading order (1-2-3-4, left-to-right top-to-bottom) at lg.
const legacyPhotos = [
  {
    src: legacy1,
    alt: 'Overhead view of an asphalt paver screed laying fresh mix, with a worker in an orange vest alongside.',
    objectPosition: 'object-center', // worker and screed centred, nothing important near the edges
    order: 'order-4 lg:order-1',
  },
  {
    src: legacy2,
    alt: 'Aerial view of a highway paving crew — paver truck, four workers and traffic cones beside a green median.',
    objectPosition: 'object-[center_40%]', // pulls the workers and truck into frame, keeps the median strip out
    order: 'order-2 lg:order-2',
  },
  {
    src: legacy3,
    alt: 'Ground-level view of a paver and workers sweeping fresh aggregate into place.',
    objectPosition: 'object-top', // keeps the paver and crew in frame, aggregate fills the lower half naturally
    order: 'order-3 lg:order-3',
  },
  {
    src: legacy4,
    alt: 'Aerial view of an ALLTECH emulsion truck and a seven-person crew spreading red emulsion on a highway.',
    objectPosition: 'object-center', // truck left, crew spread across centre, all content fits within the 3:2 crop
    order: 'order-1 lg:order-4',
  },
]

const directors = [
  {
    first: 'Mr. Dherandra',
    last: 'Sharawat',
    // Mono record tag — carries the remit, not a decorative index
    tag: 'DIRECTOR :: PRODUCT & TECHNICAL',
    photo: sharawatPhoto,
    alt: 'Dherandra Sharawat, Director, Roadtech Asphalt Technologies',
    // Each cutout sits hard against one side of its 16:9 frame (measured alpha
    // bbox: Sharawat 0.00–0.66, Gupta 0.31–0.98). Pin the cover window to that
    // side so the figure lands centred and nothing gets clipped.
    focus: 'left center',
    // pool of light behind the figure, matching the reference's warm halo
    glow: 'radial-gradient(46% 44% at 44% 52%, rgba(232,93,45,0.13) 0%, rgba(232,93,45,0.04) 45%, rgba(232,93,45,0) 72%)',
    flip: false,
    bio: [
      'Dherandra Sharawat is the driving force behind Roadtech Asphalt Technologies Pvt. Ltd., bringing years of expertise in road construction materials and infrastructure solutions. His vision of delivering innovative, high-quality, and sustainable products has positioned the company as a trusted partner for government agencies, contractors, and infrastructure developers across India.',
      'Known for his strategic leadership and commitment to excellence, he continuously drives innovation, operational efficiency, and customer satisfaction while building a strong foundation for long-term growth.',
    ],
    // Compressed from the bio above — no facts added
    fields: [
      { label: 'Remit', value: 'Product direction & technical quality' },
      { label: 'Drives', value: 'Innovation · Operational efficiency · Customer satisfaction' },
    ],
  },
  {
    first: 'Mr. Tarun',
    last: 'Gupta',
    tag: 'DIRECTOR :: GROWTH & OPERATIONS',
    photo: guptaPhoto,
    alt: 'Tarun Gupta, Director, Roadtech Asphalt Technologies',
    focus: 'right center',
    glow: 'radial-gradient(46% 44% at 53% 56%, rgba(232,93,45,0.13) 0%, rgba(232,93,45,0.04) 45%, rgba(232,93,45,0) 72%)',
    flip: true,
    bio: [
      "Tarun Gupta plays a pivotal role in shaping the company's growth through strategic planning, business development, and operational excellence. With a strong understanding of the infrastructure sector, he has been instrumental in expanding Roadtech's presence across multiple states while fostering lasting relationships with clients and partners.",
      "His forward-thinking approach, combined with a focus on quality and innovation, ensures that every project reflects the company's commitment to reliability and engineering excellence.",
    ],
    fields: [
      { label: 'Remit', value: 'Growth, partnerships & operations' },
      { label: 'Drives', value: 'Strategic planning · Business development · Multi-state reach' },
    ],
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Incorporated in 2020, Roadtech Asphalt Technologies is an ISO-certified, MSME-registered manufacturer of bitumen emulsions and modified bitumen, backed by an IIA member technical and sales team serving highways and infrastructure projects across India."
        path="/about"
      />
      <PageHero
        figure={about.hero.figure}
        title={about.hero.heading}
        image={about.hero.image}
        alt={about.hero.alt}
        chips={about.certifications}
      />

      {/* Company story */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading figure="FIG. 02 :: COMPANY STORY" title="Engineered to set the standard" />
              <p className="mt-6 max-w-prose text-warm-mute">
                From incorporation in {''}
                <span className="font-mono text-sm text-ink">Jan 2020</span>, Roadtech has
                focused on one thing: quality road products backed by the technical service to
                make them perform.
              </p>
              <DashRule className="mt-8 max-w-[12rem]" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-warm-mute">
              {about.story.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-ink' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Real project-site photos — single column on mobile (reordered so the
                widest, most impactful shot leads), 2x2 grid from lg up. All four source
                photos are 1536x1024 (3:2), so each cell enforces that ratio exactly via
                aspect-[3/2] + object-cover — no distortion, no letterboxing. */}
            <div className="mt-10 grid max-w-prose grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3">
              {legacyPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className={`aspect-[3/2] w-full overflow-hidden rounded-lg border border-warm-line bg-ink ${photo.order}`}
                >
                  {/* TODO: compress to WebP before production deploy — source PNGs are 3-4.5MB each */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover ${photo.objectPosition}`}
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 max-w-prose font-mono text-[0.7rem] uppercase tracking-chip text-aggregate">
              {legacyCaption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Standards & pillars (dark) */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              figure="FIG. 03 :: STANDARDS & RECOGNITION"
              title="Recognised, and held to it"
              tone="dark"
              intro="We are an active member of the IIA (Indian Industries Association), and hold ISO and MSME recognition."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {about.certifications.map((c) => (
                <Chip key={c.label} kind={c.kind} className="text-warm/90">
                  {c.label}
                </Chip>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs leading-relaxed text-aggregate">
              [ NOTE ] Certificate numbers and issuing details available on request.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal as="li" key={p.title} delay={i * 90} className="bg-charcoal">
                  <div className="flex h-full flex-col gap-4 p-7 lg:p-8">
                    <Icon className="h-9 w-9 text-asphalt" />
                    <h3 className="font-display text-2xl font-semibold uppercase text-warm">
                      {p.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-aggregate">{p.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Leadership (dark) */}
      <section className="border-t border-ink-line bg-ink py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              figure="FIG. 04 :: LEADERSHIP"
              title="The people accountable for it"
              tone="dark"
              intro="Two directors, both hands-on — one on what we make, one on where it goes."
            />
          </Reveal>

          <div className="mt-14 flex flex-col gap-14 sm:gap-16">
            {directors.map((d, i) => (
              <Reveal key={d.last} delay={i * 200}>
                <article
                  className={`grid items-center gap-8 lg:gap-16 ${
                    i > 0 ? 'border-t border-ink-line pt-14 sm:pt-16' : ''
                  } ${d.flip ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'}`}
                >
                  {/* The figure dissolves into the field and stands on a road marking */}
                  <div className={`relative ${d.flip ? 'lg:order-2' : ''}`}>
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{ background: d.glow }}
                    />
                    <img
                      src={d.photo}
                      alt={d.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: d.focus }}
                      className="portrait-blend relative aspect-[4/3] w-full object-cover"
                    />
                    <DashRule className="absolute inset-x-[8%] bottom-0 opacity-55" />
                  </div>

                  <div className={d.flip ? 'lg:order-1' : ''}>
                    <FigureLabel>{d.tag}</FigureLabel>

                    <h3 className="mt-4 font-display text-[2rem] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-warm sm:text-5xl">
                      {d.first} {d.last}
                    </h3>

                    <div className="mt-7 max-w-prose space-y-5 leading-relaxed text-aggregate">
                      {d.bio.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>

                    <dl className="mt-8 grid gap-x-10 gap-y-5 border-t border-ink-line pt-6 sm:grid-cols-2">
                      {d.fields.map((f) => (
                        <div key={f.label} className="flex flex-col gap-1.5">
                          <dt className="font-mono text-[0.68rem] uppercase tracking-label text-aggregate">
                            {f.label}
                          </dt>
                          <dd className="text-[0.95rem] leading-snug text-warm">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <FigureLabel>FIG. 05 :: GENERAL GUIDANCE</FigureLabel>
              <h2 className="mt-4 font-display text-display-md font-semibold uppercase text-ink">
                {about.faq.heading}
              </h2>
              <p className="mt-5 max-w-prose text-warm-mute">{about.faq.intro}</p>
              <Link
                to="/contact"
                className="link-action mt-7 inline-flex text-ink hover:text-asphalt"
              >
                Ask the technical team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion items={about.faq.items} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
