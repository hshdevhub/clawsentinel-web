import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import ThreatSection from '@/components/ThreatSection'
import LayersSection from '@/components/LayersSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import HowItWorks from '@/components/HowItWorks'
import ChromeExtension from '@/components/ChromeExtension'
import PricingSection from '@/components/PricingSection'
import OpenSourceSection from '@/components/OpenSourceSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ThreatSection />
        <LayersSection />
        <ArchitectureSection />
        <HowItWorks />
        <ChromeExtension />
        <PricingSection />
        <OpenSourceSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
