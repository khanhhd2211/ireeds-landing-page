import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import LogoCloud from "@/components/logo-cloud"
import SelectedWorks from "@/components/selected-works"
import Services from "@/components/services"
import ContactSection from "@/components/contact-section"
import Stats from "@/components/stats"
import LatestArticles from "@/components/latest-articles"
import Footer from "@/components/footer"
import TableOfContents from "@/components/table-of-contents"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TableOfContents />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="partners">
        <LogoCloud />
      </div>
      <div id="works">
        <SelectedWorks />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="articles">
        <LatestArticles />
      </div>
      <Footer />
    </main>
  )
}
