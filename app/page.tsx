import About from "@/components/about";
import ContactSection from "@/components/contact-section";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title:
    "IREEDS – Institute of Research in Economics, Environment and Data Science",
  description:
    "IREEDS is a multi-disciplinary research institute founded by leading Vietnamese scientists, promoting the sustainable development of Vietnam through research, training and practices in economics, environment and data science.",
  openGraph: {
    title:
      "IREEDS – Institute of Research in Economics, Environment and Data Science",
    description:
      "Promoting the adoption of robust scientific evidence in policy-making and bridging technological accessibility for the Vietnamese society.",
    url: "https://ireeds.org",
  },
};
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
