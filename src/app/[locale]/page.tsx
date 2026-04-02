import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/sections/Hero'
import Concepts from '@/components/sections/Concepts'
import Stats from '@/components/sections/Stats'
import Features from '@/components/sections/Features'
import Screenshots from '@/components/sections/Screenshots'
import RoleDashboards from '@/components/sections/RoleDashboards'
import HowItWorks from '@/components/sections/HowItWorks'
import Benefits from '@/components/sections/Benefits'
// import TechStack from '@/components/sections/TechStack'
import BeforeAfter from '@/components/sections/BeforeAfter'
import SystemRequirements from '@/components/sections/SystemRequirements'
import FAQ from '@/components/sections/FAQ'
import OrchestraConductor from '@/components/sections/OrchestraConductor'
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
      <Concepts />
      <Stats />
      <SystemRequirements />
      <OrchestraConductor />
      <Features />
      <Screenshots />
      <RoleDashboards />
      <HowItWorks />
      <Benefits />
      <BeforeAfter />
      {/* <TechStack /> */}
      <FAQ />
      <CTA />
    </>
  )
}
