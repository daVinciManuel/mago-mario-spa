import { sanityFetch } from '@/lib/sanity'
import { HomePageData } from '@/types/home'

const HOME_PAGE_QUERY = `
  *[_type == "homePage"][0] {
    hero_section {
      pretitle,
      title,
      subtitle,
      subtitle2,
      cta[] {
        text,
        link,
        emoji
      },
      trustSeals[] {
        text,
        emoji
      }
    },
    services_section {
      title,
      subtitle,
      services[] {
        icon,
        title,
        description,
        link,
        "image": image.asset->url,
        objectPosition
      }
    },
    cta_section {
      icon,
      subtitle,
      title1,
      title2,
      description1,
      description2,
      cta[] {
        text,
        link,
        emoji
      },
      microscopy {
        text,
        emoji
      }
    }
  }
`

export async function getHomePageData(): Promise<HomePageData> {
  const { data } = await sanityFetch({ query: HOME_PAGE_QUERY })

  if (!data) throw new Error('No homePage document found in Sanity')

  return data as HomePageData
}

