import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct, products, type ProductPage as ProductPageData } from '../data/products'
import { NotFound } from '../pages/NotFound'
import { Reveal } from './Reveal'
import { Seo } from './Seo'
import { DashRule, FigureLabel, Trademarked } from './ui'
import { ArrowRight, Image as ImageIcon } from './icons'

/**
 * Product image slot. Renders the real image at `src` with object-contain; if the
 * file isn't there yet it falls back to a labelled placeholder in the SAME box, so
 * dropping the file in later shows it with no layout shift.
 */
function ProductImage({ src, code, alt }: { src: string; code: string; alt?: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-line bg-charcoal">
      {!failed && (
        <img
          src={src}
          alt={alt ?? `${code} product`}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-contain p-6"
        />
      )}
      {failed && (
        <div aria-hidden className="absolute inset-0 flex items-center justify-center">
          {/* faint road-marking field, matching the site's ImagePlaceholder */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)',
              color: '#FFFFFF',
            }}
          />
          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
            <ImageIcon className="h-8 w-8 text-aggregate" />
            <span className="font-mono text-[0.7rem] uppercase tracking-chip text-aggregate">
              Product image coming soon
            </span>
            <span className="font-mono text-[0.65rem] tracking-chip text-aggregate/70">
              {src}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

function BodyBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <FigureLabel>{label}</FigureLabel>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-lg leading-relaxed text-warm/85">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-asphalt" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function RelatedStrip({ current }: { current: ProductPageData }) {
  const others = products.filter((p) => p.slug !== current.slug)
  return (
    <section aria-labelledby="related-heading" className="border-t border-ink-line bg-ink py-16 sm:py-20">
      <div className="shell">
        <FigureLabel>NEXT :: RELATED PRODUCTS</FigureLabel>
        <h2
          id="related-heading"
          className="mt-4 font-display text-display-md font-semibold uppercase text-warm"
        >
          Explore the range
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/products/${p.slug}`}
                className="group flex h-full flex-col gap-2 border border-ink-line bg-charcoal p-6 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-asphalt/50"
              >
                {p.code !== p.name && (
                  <span className="font-mono text-xs uppercase tracking-chip text-asphalt">
                    <Trademarked>{p.code}</Trademarked>
                  </span>
                )}
                <span className="font-display text-xl font-semibold uppercase leading-tight text-warm">
                  <Trademarked>{p.name}</Trademarked>
                </span>
                <span className="mt-1 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-chip text-aggregate transition-colors group-hover:text-warm">
                  View product
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProductPage() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <NotFound />

  const titleName =
    product.code !== product.name ? `${product.code} — ${product.name}` : product.code

  const {
    code,
    name,
    category,
    tagline,
    overview,
    advantages,
    applications,
    specRef,
    specs,
    specColumns,
    specLabelHeader,
    extraSpecSections,
    note,
    image,
    alt,
  } = product

  return (
    <>
      <Seo
        title={titleName}
        description={`${product.name}. ${product.tagline}`}
        path={`/products/${product.slug}`}
      />
      {/* ---------------- HERO ---------------- */}
      <section className="border-b border-ink-line bg-ink">
        <div className="shell py-12 sm:py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-chip text-aggregate">
              <li>
                <Link to="/" className="transition-colors hover:text-asphalt">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-aggregate/50">/</li>
              <li>
                <Link to="/products" className="transition-colors hover:text-asphalt">
                  Products
                </Link>
              </li>
              <li aria-hidden className="text-aggregate/50">/</li>
              <li className="text-warm/90" aria-current="page">
                <Trademarked>{code}</Trademarked>
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="font-mono text-[0.7rem] uppercase tracking-label text-asphalt sm:text-xs">
                  {category}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-4 font-display text-display-lg font-bold uppercase leading-[0.95] text-warm">
                  <Trademarked>{code}</Trademarked>
                </h1>
              </Reveal>
              {name !== code && (
                <Reveal delay={130}>
                  <p className="mt-2 font-display text-2xl font-semibold uppercase leading-tight text-warm/80 sm:text-3xl">
                    {name}
                  </p>
                </Reveal>
              )}
              <Reveal delay={190}>
                <p className="mt-5 max-w-prose text-lg leading-relaxed text-aggregate sm:text-xl">
                  {tagline}
                </p>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:pt-1">
              <ProductImage src={image} code={code} alt={alt} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- DATASHEET BODY ---------------- */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Narrative column */}
            <Reveal className="flex flex-col gap-12">
              <BodyBlock label="01 :: OVERVIEW">
                <p className="max-w-prose text-lg leading-relaxed text-warm/85">{overview}</p>
              </BodyBlock>

              {advantages && advantages.length > 0 && (
                <BodyBlock label="KEY ADVANTAGES">
                  <List items={advantages} />
                </BodyBlock>
              )}

              <BodyBlock label="PRIMARY APPLICATIONS">
                <List items={applications} />
              </BodyBlock>
            </Reveal>

            {/* Spec datasheet card */}
            <Reveal delay={120}>
              <div className="lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-2xl border border-ink-line bg-charcoal">
                  <div className="border-b border-white/5 px-6 py-5">
                    <FigureLabel>SPEC</FigureLabel>
                    <h2 className="mt-2 font-display text-xl font-semibold uppercase leading-tight text-warm">
                      {specRef}
                    </h2>
                  </div>
                  <dl>
                    {specColumns && (
                      <div
                        className="grid gap-4 px-6 py-2.5"
                        style={{ gridTemplateColumns: `minmax(0, 2fr) repeat(${specColumns.length}, minmax(0, 1fr))` }}
                      >
                        <span className="font-mono text-[0.65rem] uppercase leading-snug tracking-chip text-aggregate">
                          {specLabelHeader}
                        </span>
                        {specColumns.map((col) => (
                          <span
                            key={col.key}
                            className="text-center font-mono text-[0.65rem] uppercase leading-snug tracking-chip text-aggregate"
                          >
                            {col.header}
                          </span>
                        ))}
                      </div>
                    )}
                    {specs.map((spec, i) =>
                      'heading' in spec ? (
                        <div
                          key={spec.heading}
                          className="border-t border-white/5 bg-ink/40 px-6 py-2.5"
                        >
                          <p
                            className={`font-mono text-[0.7rem] font-semibold uppercase tracking-chip text-asphalt ${
                              spec.center ? 'text-center' : ''
                            }`}
                          >
                            {spec.heading}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={spec.label}
                          className={`grid items-baseline gap-4 px-6 py-3.5 ${
                            i > 0 ? 'border-t border-white/5' : ''
                          }`}
                          style={
                            specColumns
                              ? { gridTemplateColumns: `minmax(0, 2fr) repeat(${specColumns.length}, minmax(0, 1fr))` }
                              : { gridTemplateColumns: '1fr auto' }
                          }
                        >
                          <dt className="text-sm leading-snug text-aggregate">{spec.label}</dt>
                          {specColumns ? (
                            specColumns.map((col) => (
                              <dd
                                key={col.key}
                                className="text-center font-mono text-sm font-medium text-warm"
                              >
                                {spec[col.key]}
                              </dd>
                            ))
                          ) : (
                            <dd className="text-right font-mono text-sm font-medium text-warm">
                              {spec.value}
                            </dd>
                          )}
                        </div>
                      ),
                    )}
                  </dl>
                </div>

                {extraSpecSections?.map((section) => (
                  <div
                    key={section.heading}
                    className="mt-6 overflow-hidden rounded-2xl border border-ink-line bg-charcoal"
                  >
                    <div className="border-b border-white/5 px-6 py-4">
                      <FigureLabel>{section.heading}</FigureLabel>
                    </div>
                    {section.layout === 'grid' ? (
                      <dl>
                        <div
                          className="grid gap-4 px-6 py-2.5"
                          style={{
                            gridTemplateColumns: `repeat(${section.columns.length}, minmax(0, 1fr))`,
                          }}
                        >
                          <span className="font-mono text-[0.65rem] uppercase leading-snug tracking-chip text-aggregate">
                            {section.columns[0]}
                          </span>
                          {section.columns.slice(1).map((col) => (
                            <span
                              key={col}
                              className="text-center font-mono text-[0.65rem] uppercase leading-snug tracking-chip text-aggregate"
                            >
                              {col}
                            </span>
                          ))}
                        </div>
                        {section.rows.map((row, i) => (
                          <div
                            key={row[0]}
                            className={`grid items-baseline gap-4 px-6 py-3.5 ${
                              i > 0 ? 'border-t border-white/5' : ''
                            }`}
                            style={{
                              gridTemplateColumns: `repeat(${section.columns.length}, minmax(0, 1fr))`,
                            }}
                          >
                            <dt className="text-sm leading-snug text-aggregate">{row[0]}</dt>
                            {row.slice(1).map((cell, ci) => (
                              <dd
                                key={ci}
                                className="text-center font-mono text-sm font-medium text-warm"
                              >
                                {cell}
                              </dd>
                            ))}
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <dl>
                        {section.rows.map((row, i) => (
                          <div
                            key={row[0]}
                            className={`px-6 py-4 ${i > 0 ? 'border-t border-white/5' : ''}`}
                          >
                            <p className="font-mono text-[0.6rem] uppercase tracking-chip text-aggregate">
                              {section.columns[0]}
                            </p>
                            <dt className="mt-1 text-sm font-semibold leading-snug text-warm">
                              {row[0]}
                            </dt>
                            <p className="mt-2.5 font-mono text-[0.6rem] uppercase tracking-chip text-aggregate">
                              {section.columns[1]}
                            </p>
                            <dd className="mt-1 text-sm leading-relaxed text-warm/90">{row[1]}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                ))}

                {note && (
                  <p className="mt-4 px-1 text-sm italic leading-relaxed text-aggregate">
                    {note}
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="border-t border-ink-line bg-charcoal py-16 sm:py-20">
        <div className="shell">
          <DashRule className="mb-10 opacity-70" />
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <FigureLabel>NEXT :: TALK TO THE TECHNICAL TEAM</FigureLabel>
              <h2 className="mt-4 font-display text-display-md font-semibold uppercase text-warm">
                Need <Trademarked>{code}</Trademarked> for your project?
              </h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-aggregate">
                Tell us your application and the standard you're working to — we'll confirm the
                grade, quantity and delivery to suit your site.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-ink-line px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-warm transition-colors hover:border-asphalt/60 hover:text-asphalt"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- RELATED ---------------- */}
      <RelatedStrip current={product} />
    </>
  )
}
