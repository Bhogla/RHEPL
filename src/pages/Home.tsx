import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { about, home } from '../data/content'
import { Card } from '../components/Card'
import { AssociateBrands } from '../components/AssociateBrands'
import { Reveal } from '../components/Reveal'
import { Modal } from '../components/Modal'
import { Chip, DashRule, FigureLabel, SectionHeading } from '../components/ui'
import { ArrowRight, Cpu, Factory, Flask } from '../components/icons'

const capIcons = [Factory, Flask, Cpu]

export function Home() {
  const [videoReady, setVideoReady] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [manuOpen, setManuOpen] = useState(false)
  const manuBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Check if video is already playing / loaded (e.g. from browser cache)
    const video = videoRef.current
    if (video) {
      if (video.readyState >= 3 && !video.paused) {
        setVideoReady(true)
      }
    }

    // Set a timeout of 2 seconds to show the fallback image if the video hasn't loaded/played
    const timer = setTimeout(() => {
      setShowFallback(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate flex min-h-[clamp(34rem,82vh,46rem)] items-center overflow-hidden bg-ink">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setVideoReady(true)}
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <img
          src="/images/hero-highway.jpg"
          alt="National Highway 11 in Rajasthan, India, with an overhead green direction sign to Dausa, Agra and Ajmer."
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            showFallback && !videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 -z-10 bg-hero-veil" />
        <div className="absolute inset-0 -z-10 bg-hero-veil-b sm:hidden" />

        <div className="shell w-full py-20">
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <FigureLabel className="text-asphalt">{home.hero.figure}</FigureLabel>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-display-xl font-bold uppercase text-warm">
                {home.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm/85 sm:text-xl">
                {home.hero.subhead}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link to="/products" className="btn-primary">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="link-action text-warm hover:text-asphalt"
                >
                  Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {about.certifications.map((c) => (
                  <Chip key={c.label} kind={c.kind} className="text-warm/90">
                    {c.label}
                  </Chip>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- ASSOCIATE BRANDS ---------------- */}
      <AssociateBrands />

      {/* ---------------- LEGACY + CAPABILITIES ---------------- */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                figure={home.legacy.figure}
                eyebrow={home.legacy.eyebrow}
                title={home.legacy.heading}
              />
              <div className="mt-7 max-w-prose space-y-5 text-lg leading-relaxed text-warm-mute">
                {home.legacy.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                to="/about"
                className="link-action mt-8 inline-flex text-ink hover:text-asphalt"
              >
                More about Roadtech
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={120} className="lg:pt-2">
              <figure className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-warm-line shadow-lift-warm sm:aspect-[4/3] lg:aspect-[4/5]">
                  <img
                    src="/images/legacy.png"
                    alt="Aerial view of a national highway under construction through hilly terrain in India."
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[0.7rem] uppercase tracking-chip text-aggregate">
                  FIG. 01.1 :: NATIONAL HIGHWAY BUILD, IN PROGRESS
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <DashRule variant="mute" className="my-16 text-warm-line" />

          <ul className="grid gap-px overflow-hidden border border-warm-line bg-warm-line sm:grid-cols-3">
            {home.capabilities.map((cap, i) => {
              const Icon = capIcons[i]
              const isManufacturing = cap.code === 'CAP-01'
              const content = (
                <>
                  <div className="flex items-center justify-between">
                    <Icon className="h-9 w-9 text-asphalt" />
                    <span className="font-mono text-xs tracking-chip text-aggregate">
                      {cap.code}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold uppercase text-ink">
                    {cap.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-warm-mute">{cap.body}</p>
                  {isManufacturing && (
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-xs uppercase tracking-chip text-asphalt">
                      {home.manufacturingUnits.hint}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                    </span>
                  )}
                </>
              )
              return (
                <Reveal as="li" delay={i * 90} key={cap.code} className="bg-warm">
                  {isManufacturing ? (
                    <button
                      ref={manuBtnRef}
                      type="button"
                      onClick={() => setManuOpen(true)}
                      aria-haspopup="dialog"
                      className="group flex h-full w-full cursor-pointer flex-col gap-4 p-7 text-left transition-colors duration-200 ease-out hover:bg-asphalt/[0.06] focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-asphalt lg:p-8"
                    >
                      {content}
                    </button>
                  ) : (
                    <div className="flex h-full flex-col gap-4 p-7 lg:p-8">{content}</div>
                  )}
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Manufacturing Units modal (opened only by the CAP-01 card) */}
      <Modal
        open={manuOpen}
        onClose={() => setManuOpen(false)}
        returnFocusRef={manuBtnRef}
        eyebrow={home.manufacturingUnits.eyebrow}
        title={home.manufacturingUnits.title}
      >
        <ul className="border-t border-ink-line">
          {home.manufacturingUnits.locations.map((loc, i) => (
            <li
              key={loc.city}
              className="flex items-start justify-between gap-4 border-b border-ink-line py-4"
            >
              <div>
                <p className="font-display text-2xl font-semibold uppercase leading-none text-warm">
                  {loc.city}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-aggregate">{loc.line}</p>
              </div>
              <span className="shrink-0 font-mono text-xs tracking-chip text-asphalt">
                {String(i + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ul>
      </Modal>

      {/* ---------------- STAT BANNER ---------------- */}
      <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
        <img
          src="/images/texture-asphalt-dark.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
            <Reveal>
              <div className="flex flex-col">
                <FigureLabel>STAT :: PROVEN AT SCALE</FigureLabel>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-[clamp(4rem,12vw,8rem)] font-bold leading-[0.8] text-asphalt">
                    {home.stat.value}
                  </span>
                  <span className="pb-3 font-display text-2xl font-semibold uppercase text-warm sm:text-3xl">
                    {home.stat.unit}
                  </span>
                </div>
                <span className="mt-3 font-mono text-sm uppercase tracking-chip text-aggregate">
                  {home.stat.label}
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-l-0 lg:border-l lg:border-ink-line lg:pl-20">
                <p className="max-w-prose text-xl leading-relaxed text-warm/85">
                  {home.stat.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS PREVIEW ---------------- */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              figure={home.productsPreview.figure}
              eyebrow={home.productsPreview.eyebrow}
              title={home.productsPreview.heading}
              intro={home.productsPreview.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.productsPreview.items.map((item, i) => (
              <Reveal key={item.code} delay={i * 80}>
                <Card {...item} tone="warm" cta="View catalog" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES PREVIEW (dark) ---------------- */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              figure={home.servicesPreview.figure}
              eyebrow={home.servicesPreview.eyebrow}
              title={home.servicesPreview.heading}
              intro={home.servicesPreview.body}
              tone="dark"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.servicesPreview.items.map((item, i) => (
              <Reveal key={item.code} delay={i * 80}>
                <Card {...item} tone="dark" cta="See services" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="bg-warm py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading figure={home.industries.figure} title={home.industries.heading} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {home.industries.items.map((ind, i) => (
              <Reveal key={ind.code} delay={i * 100}>
                <article className="group relative h-full overflow-hidden border border-warm-line">
                  <div className="aspect-[3/4] overflow-hidden bg-ink sm:aspect-[4/5]">
                    <img
                      src={ind.image}
                      alt={ind.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                    <Chip kind="accent" className="self-start text-warm/90">
                      {ind.code}
                    </Chip>
                    <h3 className="font-display text-2xl font-semibold uppercase leading-none text-warm">
                      {ind.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-warm/80">{ind.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section className="border-t border-ink-line bg-charcoal py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <FigureLabel>NEXT :: TALK TO THE TECHNICAL TEAM</FigureLabel>
                <h2 className="mt-4 font-display text-display-md font-semibold uppercase text-warm">
                  Need the right grade for your spec?
                </h2>
                <p className="mt-4 max-w-prose text-lg leading-relaxed text-aggregate">
                  Tell us the application and the standard you're working to — our team will
                  recommend the product and the support to go with it.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border border-ink-line px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-warm transition-colors hover:border-asphalt/60 hover:text-asphalt"
                >
                  Browse Catalog
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
