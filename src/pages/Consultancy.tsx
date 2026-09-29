import { Link } from 'react-router-dom'
import { consultancy } from '../data/content'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { Tabs, type TabDef } from '../components/Tabs'
import { Chip, DashRule } from '../components/ui'
import {
  ArrowRight,
  Beaker,
  Ear,
  Factory,
  Handshake,
  Layers,
  Road,
  ShieldCheck,
  Users,
} from '../components/icons'

const serviceIcons = [Road, Layers, Factory, Beaker]
const valueIcons = [ShieldCheck, Users, Handshake, Ear]

const { tabs: t } = consultancy

function ServicesTab() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <Reveal>
        <h2 className="font-display text-display-md font-semibold uppercase text-ink">
          {t.services.heading}
        </h2>
        <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed text-warm-mute">
          {t.services.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link to="/contact" className="link-action mt-7 inline-flex text-ink hover:text-asphalt">
          Discuss your project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>

      <div className="grid gap-px self-start overflow-hidden border border-warm-line bg-warm-line sm:grid-cols-2">
        {t.services.points.map((pt, i) => {
          const Icon = serviceIcons[i]
          return (
            <Reveal key={pt.code} delay={i * 80} className="bg-white">
              <div className="flex h-full flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-asphalt" />
                  <span className="font-mono text-[0.65rem] tracking-chip text-aggregate">
                    {pt.code}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold uppercase text-ink">
                  {pt.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-mute">{pt.body}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

function VisionTab() {
  return (
    <Reveal>
      <div className="relative mx-auto max-w-4xl border border-warm-line bg-white p-8 sm:p-12 lg:p-16">
        <span className="font-mono text-xs uppercase tracking-label text-asphalt">
          [ VISION :: 2020 → ]
        </span>
        <blockquote className="mt-6">
          <p className="font-display text-display-md font-semibold uppercase leading-[1.05] text-ink">
            “{t.vision.statement}”
          </p>
        </blockquote>
        <DashRule className="mt-10" />
      </div>
    </Reveal>
  )
}

function ValuesTab() {
  return (
    <div>
      <Reveal>
        <p className="mb-10 max-w-prose text-lg leading-relaxed text-warm-mute">
          {t.values.intro}
        </p>
      </Reveal>
      <div className="grid gap-px overflow-hidden border border-warm-line bg-warm-line sm:grid-cols-2">
        {t.values.items.map((v, i) => {
          const Icon = valueIcons[i]
          return (
            <Reveal key={v.code} delay={i * 80} className="bg-white">
              <div className="flex h-full items-start gap-5 p-7 lg:p-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-warm-line text-asphalt">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.65rem] tracking-chip text-aggregate">
                      {v.code}
                    </span>
                    <h3 className="font-display text-2xl font-semibold uppercase text-ink">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-warm-mute">{v.body}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

function GalleryTab() {
  return (
    <div>
      <Reveal>
        <p className="mb-10 max-w-prose text-lg leading-relaxed text-warm-mute">
          {t.gallery.intro}
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.gallery.images.map((img, i) => (
          <Reveal key={img.src + i} delay={(i % 3) * 90}>
            <figure className="group relative aspect-[4/3] overflow-hidden border border-warm-line bg-ink">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105 ${img.imageClassName ?? ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <Chip kind="accent" className="text-warm/90">
                  {img.tag}
                </Chip>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function Consultancy() {
  const tabs: TabDef[] = [
    { id: 'services', label: t.services.label, code: 'C-01', content: <ServicesTab /> },
    { id: 'vision', label: t.vision.label, code: 'C-02', content: <VisionTab /> },
    { id: 'values', label: t.values.label, code: 'C-03', content: <ValuesTab /> },
    { id: 'gallery', label: t.gallery.label, code: 'C-04', content: <GalleryTab /> },
  ]

  return (
    <>
      <Seo
        title="Technical Consultancy"
        description="On-demand technical consultancy for road construction and maintenance — cold mix, hot mix and microsurfacing application support, plus on-site production of any grade of emulsion or modified bitumen at your plant."
        path="/consultancy"
      />
      <PageHero
        figure={consultancy.hero.figure}
        title={consultancy.hero.heading}
        intro="On-demand consultancy and production support — from cold mix and microsurfacing to producing any grade of emulsion or modified bitumen at your plant."
        image="/images/svc-consultancy.jpg"
        alt="Aerial view of the Delhi–Gurgaon expressway corridor."
      />

      <section className="bg-warm py-16 sm:py-20">
        <div className="shell">
          <Tabs tabs={tabs} tone="warm" idBase="consultancy" />
        </div>
      </section>
    </>
  )
}
