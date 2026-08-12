import { Link } from 'react-router-dom'
import { type Product, productTabs, specOnRequest } from '../data/content'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Tabs, type TabDef } from '../components/Tabs'
import { Chip, ImagePlaceholder } from '../components/ui'
import { ArrowRight } from '../components/icons'

function CardInner({ product }: { product: Product }) {
  const hasSpec = Boolean(product.description)
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-warm">
        {product.image ? (
          <img
            src={product.image}
            alt={product.alt ?? ''}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <ImagePlaceholder tone="warm" className="h-full w-full" />
        )}
        <div className="absolute left-3 top-3">
          <Chip kind="accent" className="bg-white/85 backdrop-blur-sm">
            {product.code}
          </Chip>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold uppercase leading-none text-ink">
            {product.name}
          </h3>
          {product.subtitle && (
            <p className="mt-2 font-mono text-xs uppercase tracking-chip text-asphalt">
              {product.subtitle}
            </p>
          )}
        </div>

        <p className="text-[0.95rem] leading-relaxed text-warm-mute">
          {product.description ?? product.contactNote ?? specOnRequest}
        </p>

        {/* Bottom action, pinned so it aligns across every card in a row. */}
        {product.slug ? (
          <span className="link-action mt-auto pt-2 inline-flex text-ink transition-colors group-hover:text-asphalt">
            View product
            <ArrowRight className="h-4 w-4" />
          </span>
        ) : (
          !hasSpec && (
            <Link
              to="/contact"
              className="link-action mt-auto pt-2 inline-flex text-ink transition-colors hover:text-asphalt"
            >
              Contact technical team
              <ArrowRight className="h-4 w-4" />
            </Link>
          )
        )}
      </div>
    </>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardClass =
    'group flex h-full flex-col overflow-hidden border border-warm-line bg-white transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lift-warm'
  return (
    <Reveal delay={(index % 3) * 90}>
      {product.slug ? (
        <Link
          to={`/products/${product.slug}`}
          aria-label={`View ${product.name} product page`}
          className={`${cardClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-asphalt`}
        >
          <CardInner product={product} />
        </Link>
      ) : (
        <article className={cardClass}>
          <CardInner product={product} />
        </article>
      )}
    </Reveal>
  )
}

export function Products() {
  const tabs: TabDef[] = productTabs.map((tab, ti) => ({
    id: tab.id,
    label: tab.label,
    code: `T-${String(ti + 1).padStart(2, '0')}`,
    content: (
      <div>
        {tab.intro && (
          <p className="mb-9 max-w-prose text-lg leading-relaxed text-warm-mute">{tab.intro}</p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tab.products.map((p, i) => (
            <ProductCard key={p.code} product={p} index={i} />
          ))}
        </div>
      </div>
    ),
  }))

  return (
    <>
      <PageHero
        figure="FIG. 00 :: PRODUCT CATALOG"
        title="Value-added Bituminous Products"
        intro="Emulsions, modified bitumen and additives — engineered to IS and IRC standards for India's highways, expressways, runways and test tracks."
        image="/images/prod-modified.jpg"
        alt="Top-down aerial of a multi-lane expressway bridge over water."
      />

      <section className="bg-warm py-16 sm:py-20">
        <div className="shell">
          <Tabs tabs={tabs} tone="warm" idBase="products" />
        </div>
      </section>

      {/* support strip */}
      <section className="border-t border-ink-line bg-ink py-16">
        <div className="shell flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-label text-asphalt">
              [ SPEC SUPPORT ]
            </p>
            <p className="mt-2 max-w-xl text-lg leading-relaxed text-warm/85">
              Full technical datasheets, grade selection and on-site production support are
              available for every product. Tell us your application.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Request a Datasheet
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
