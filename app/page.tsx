import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import GalleryPreview from "@/components/gallery-preview"
import StepsSection from "@/components/steps-section"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <GalleryPreview />
      <StepsSection />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
