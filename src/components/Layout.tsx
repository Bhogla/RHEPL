import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export function Layout() {
  return (
    <div className="min-h-screen bg-rhbg text-rhdark font-body flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-rhorange focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:uppercase focus:tracking-chip focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      {/* pt-20 offsets the fixed Navbar (h-20) so page content isn't hidden underneath */}
      <main id="main" className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
