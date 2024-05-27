export const metadata = {
  title: 'Bourgeon - Build your startup',
  description: 'Everyone should be able to launch their business',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import Cta2 from '@/components/cta2'

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <Cta2 />
      <Features03 />
      <Features02 />

      {/* <PricingTabs /> */}
      <Testimonials />
      <Cta />
    </>
  )
}
