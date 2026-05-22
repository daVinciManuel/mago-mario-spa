import { createClient } from 'next-sanity'
import { defineLive } from 'next-sanity/live'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: 'lyay7gpr',
  dataset: 'production',
  apiVersion: '2025-05-21',
  useCdn: false,
  stega: {
    enabled: process.env.NEXT_PUBLIC_SANITY_VISUAL_EDITING === 'true',
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ?? 'http://localhost:3333', // URL where your Sanity Studio runs
  },
})

const { projectId, dataset } = client.config()

export function urlFor(source: SanityImageSource) {
  return projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null
}

// Live preview setup =>

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
})
