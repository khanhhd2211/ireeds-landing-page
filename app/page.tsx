import About from "@/components/about";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LatestArticles from "@/components/latest-articles";
import LogoCloud from "@/components/logo-cloud";
import SelectedWorks from "@/components/selected-works";
import Services from "@/components/services";
import TableOfContents from "@/components/table-of-contents";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
      <div id="articles">
        <LatestArticles />
      </div>
      <Footer />
    </main>
  );
}
