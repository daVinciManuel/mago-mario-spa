import { sanityFetch } from '@/lib/sanity'
import { ContactPageData } from '@/types/contact'

const CONTACT_PAGE_QUERY = `
  *[_type == "contactPage"][0] {
    title,
    description,
    services,
    trustSeals[] {
      emoji,
      title,
      text,
      link
    }
  }
`

export async function getContactPageData(): Promise<ContactPageData> {
  const { data } = await sanityFetch({
    query: CONTACT_PAGE_QUERY
  })

  if (!data) {
    throw new Error('No contactPage document found in Sanity')
  }

  return data as ContactPageData
}
