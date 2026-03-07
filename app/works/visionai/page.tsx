import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Marketplace – VisionAI Project",
  description:
    "The IREEDS VisionAI / AI Marketplace project (AUS4Innovation, 2022–2023) develops an AI platform connecting Vietnamese researchers and industry, supporting MoST in building a national AI ecosystem.",
  openGraph: {
    title: "AI Marketplace (VisionAI) | IREEDS",
    description:
      "IREEDS partners with CSIRO, Griffith University and HUST to build Vietnam’s AI Marketplace platform, enhancing research-industry collaboration in AI.",
    url: "https://ireeds.org/works/visionai",
  },
};

export default function AIMarketplacePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            AI Marketplace
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-semibold text-foreground mb-2">
              <strong>Project Title</strong>: Aus4Innovation Program – AI
              Marketplace Project: A Business Model and Analysis
            </p>

            <p className="text-lg font-semibold text-foreground mb-8">
              <strong>Duration</strong>: 2022 – 2023
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Australia's Data61 | CSIRO works with Griffith University
              (Australia), Hanoi University of Science and Technology and the
              Institute of Economics, Environment and Data Science in Vietnam
              (IREEDS) to implement the Vietnam AI Market project. This is a
              project to support the Ministry of Science and Technology of
              Vietnam (MoST) to develop a platform in the future that aims to
              strengthen the connection between domestic and foreign researchers
              as well as the connection between research area and industry in
              the field of AI.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
