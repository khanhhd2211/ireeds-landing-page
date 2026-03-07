import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "IREEDS builds partnerships with researchers, practitioners, businesses and institutions worldwide, including AFD, IRD, CSIRO, Griffith University and more, to advance sustainable development in Vietnam.",
  openGraph: {
    title: "Partnership | IREEDS",
    description:
      "IREEDS partners with leading global institutions such as AFD, CSIRO, CNES and Griffith University to deliver impactful research for Vietnam.",
    url: "https://ireeds.org/about/partnership",
  },
};

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Partnership
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed">
              IREEDS has a number of long-standing local and international
              partners. Our partners include governmental organizations,
              universities, research institutions and practice-based
              communities. Our network is built in accordance with our vision to
              establish an ecosystem of multidisciplinary research and expertise
              that are serving the sustainable development transformation of the
              Vietnamese society.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
