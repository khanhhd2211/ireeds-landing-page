import Footer from "@/components/footer";

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
