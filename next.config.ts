import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

// @ts-ignore
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80],
  },
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/asteraid-landing' : ''
}

export default withNextIntl(nextConfig)
