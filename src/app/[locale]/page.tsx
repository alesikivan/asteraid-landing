import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Features from '@/components/sections/Features'
import RoleDashboards from '@/components/sections/RoleDashboards'
import HowItWorks from '@/components/sections/HowItWorks'
import Benefits from '@/components/sections/Benefits'
import TechStack from '@/components/sections/TechStack'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <RoleDashboards />
      <HowItWorks />
      <Benefits />
      <TechStack />
      <FAQ />
      <CTA />
    </>
  )
}
