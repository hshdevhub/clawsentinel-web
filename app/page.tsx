import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ThreatSection from '@/components/ThreatSection'
import LayersSection from '@/components/LayersSection'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import OpenSourceSection from '@/components/OpenSourceSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThreatSection />
        <LayersSection />
        <HowItWorks />
        <PricingSection />
        <OpenSourceSection />
      </main>
      <Footer />
    </>
  )
}
