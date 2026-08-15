import { Reveal } from './Reveal'

type Brand = { src: string; alt: string }

/**
 * Associate brands — logos of partner contractors, manufacturers and
 * government bodies. Files live in /public/Logos (capital L). Edit this
 * array to add or remove a brand; everything else follows automatically.
 */
const brands: Brand[] = [
  { src: '/Logos/13.PNG', alt: 'eSPAN' },
  { src: '/Logos/4.PNG', alt: 'H.G. Infra Engineering Ltd (HGIEL)' },
  { src: '/Logos/5.PNG', alt: 'BlackGold' },
  { src: '/Logos/6.PNG', alt: 'Blacklead Infratech Private Limited' },
  { src: '/Logos/7.PNG', alt: 'ALSEC' },
  { src: '/Logos/10.PNG', alt: 'Slurrytech' },
  { src: '/Logos/11.PNG', alt: 'RG Buildwell Engineers Ltd' },
  { src: '/Logos/8.PNG', alt: 'DBL' },
  { src: '/Logos/12.PNG', alt: 'Kaluwala' },
  { src: '/Logos/9.PNG', alt: 'HINCOL' },
  { src: '/Logos/1.PNG', alt: 'Himachal Pradesh PWD' },
  { src: '/Logos/3.PNG', alt: 'KC' },
  { src: '/Logos/2.PNG', alt: 'RR Builders' },
  { src: '/Logos/14.PNG', alt: 'RCC Developers Limited' },
]

function BrandChip({ brand }: { brand: Brand }) {
  return (
    <img
      src={brand.src}
      alt={brand.alt}
      loading="lazy"
      className="h-[3.75rem] w-auto max-w-[240px] object-contain transition-transform duration-300 ease-out hover:scale-105 sm:h-[4.5rem]"
    />
  )
}

export function AssociateBrands() {
  // Render the list twice so the -50% keyframe loops seamlessly. The second
  // pass is decorative (aria-hidden) and is hidden under reduced motion.
  const loop = [
    ...brands.map((b) => ({ b, clone: false })),
    ...brands.map((b) => ({ b, clone: true })),
  ]

  return (
    <section aria-label="Associate brands" className="bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-asphalt" />
            <span className="font-display text-sm font-semibold uppercase tracking-label text-asphalt">
              Trusted Partners
            </span>
            <span aria-hidden className="h-px w-8 bg-asphalt" />
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-display font-bold uppercase leading-[0.98] text-warm text-[clamp(2rem,5vw,4rem)]">
            Powering India&apos;s Road Infrastructure
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-aggregate sm:text-lg">
            Trusted by contractors, manufacturers, and government bodies across the country.
          </p>
        </Reveal>

        {/* Marquee panel */}
        <Reveal delay={120} className="mt-12">
          <div className="rounded-2xl bg-white py-8 shadow-lg shadow-black/20 sm:py-10">
            <div className="brand-marquee">
              <ul className="brand-marquee__track">
                {loop.map(({ b, clone }, i) => (
                  <li
                    key={`${b.src}-${i}`}
                    aria-hidden={clone || undefined}
                    data-marquee-clone={clone || undefined}
                    className="flex shrink-0 items-center pr-10 sm:pr-14"
                  >
                    <BrandChip brand={b} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Stat line */}
        <Reveal delay={200}>
          <p className="mt-6 text-center font-mono text-xs uppercase tracking-chip text-aggregate">
            Trusted partner organisations across highways
          </p>
        </Reveal>
      </div>
    </section>
  )
}
