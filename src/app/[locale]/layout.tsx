import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import '@/app/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const BASE_URL = 'https://asteraid.com'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  const canonicalUrl = locale === 'en' ? BASE_URL : `${BASE_URL}/${locale}`

  return {
    metadataBase: new URL(BASE_URL),
    title: t('title'),
    description: t('description'),
    keywords:
      'asterisk pbx management, asterisk admin panel, pbx web interface, asterisk dashboard, cdr viewer, dialplan editor, asterisk management tool, asterisk web ui, pbx monitoring, asterisk administration',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': BASE_URL,
        'ru': `${BASE_URL}/ru`,
        'x-default': BASE_URL,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: canonicalUrl,
      siteName: t('siteName'),
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      site: '@asteraid',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'ru')) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'meta' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: t('jsonLd.name'),
    description: t('jsonLd.description'),
    applicationCategory: t('jsonLd.applicationCategory'),
    operatingSystem: t('jsonLd.operatingSystem'),
    url: BASE_URL,
    offers: {
      '@type': 'Offer',
      price: t('jsonLd.offers.price'),
      priceCurrency: t('jsonLd.offers.priceCurrency'),
      description: t('jsonLd.offers.description'),
    },
    featureList: t('jsonLd.featureList'),
    publisher: {
      '@type': 'Organization',
      name: 'Freeng Ltd',
      url: BASE_URL,
    },
  }

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
