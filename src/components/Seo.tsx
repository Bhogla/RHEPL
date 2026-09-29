import { Helmet } from 'react-helmet-async'
import { canonicalUrl } from '../lib/seo'

const TITLE_SUFFIX = ' | Roadtech Asphalt Technologies'

export function Seo({
  title,
  description,
  path,
  noindex = false,
  suffix = true,
}: {
  title: string
  description: string
  path: string
  noindex?: boolean
  suffix?: boolean
}) {
  const url = canonicalUrl(path)
  return (
    <Helmet>
      <title>{suffix ? `${title}${TITLE_SUFFIX}` : title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  )
}
