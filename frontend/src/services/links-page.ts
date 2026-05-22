import { sanityFetch } from '@/lib/sanity'
import { LinksPageData } from '@/types/links'

const LINKS_PAGE_QUERY = `
  *[_type == "linksPage"][0] {
    title,
    description,
    "avatarUrl": avatar.asset->url,
    links[] {
      app,
      link,
      user,
      description
    }
  }
`

export async function getLinksPageData(): Promise<LinksPageData> {
  const { data } = await sanityFetch({ query: LINKS_PAGE_QUERY })

  if (!data) throw new Error('No linksPage document found in Sanity')

  return data as LinksPageData
}
