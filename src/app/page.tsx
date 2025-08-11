import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhoItsFor from '@/components/WhoItsFor'
import WhyChoose from '@/components/WhyChoose'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <WhoItsFor />
      <WhyChoose />
      <FAQ />
      <Footer />
    </main>
  )
}
