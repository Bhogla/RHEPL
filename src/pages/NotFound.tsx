import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/icons'
import { Seo } from '../components/Seo'
import { FigureLabel } from '../components/ui'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has moved."
        path="/404"
        noindex
      />
      <div className="shell">
        <FigureLabel>ERR :: 404 :: ROUTE NOT FOUND</FigureLabel>
        <h1 className="mt-6 font-display text-display-xl font-bold uppercase text-warm">
          This stretch isn't paved yet
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-aggregate">
          The page you're looking for doesn't exist or has moved. Let's get you back on a
          surface that does.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/" className="btn-primary">
            Back to Home
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-ink-line px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-warm transition-colors hover:border-asphalt/60 hover:text-asphalt"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  )
}
