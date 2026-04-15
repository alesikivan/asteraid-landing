import type { MetadataRoute } from 'next'

const BASE_URL = 'https://asteraid.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: BASE_URL,
          ru: `${BASE_URL}/ru`,
        },
      },
    },
    {
      url: `${BASE_URL}/ru`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: BASE_URL,
          ru: `${BASE_URL}/ru`,
        },
      },
    },
  ]
}
