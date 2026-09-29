import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ArrowRight } from '../components/icons'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-rhbg">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has moved."
        path="/404"
        noindex
      />
      <div className="shell">
        <h1 className="font-display text-4xl font-bold uppercase text-rhdark">
          This stretch isn't paved yet
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-rhgrey">
          The page you're looking for doesn't exist or has moved. Let's get you back on a
          surface that does.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/" className="btn-primary">
            Back to Home
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
