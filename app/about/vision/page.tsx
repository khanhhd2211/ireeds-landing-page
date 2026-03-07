import Footer from "@/components/footer";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Our Vision
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 mb-6 leading-relaxed">
              IREEDS has a vision to create an ecosystem of experts working
              together to promote the sustainable development of Vietnam through
              research, training and practices.
            </p>

            <h2 className="text-3xl font-serif text-foreground mt-12 mb-6">
              Our Story
            </h2>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              The central idea of our establishment dated back to the early
              2000s, when the Vietnam Center of Research in Economics,
              Management and Environment (VCREME) was founded in 2005, becoming
              one of the most highly-respected private education centers in
              Vietnam for providing international-standard teaching in economics
              subjects. The Pre-Master & Pre-Doctoral Program at VCREME has
              helped thousands of Vietnamese students acquiring academic
              competencies in economics and enabled more than 200 young talents
              to receive offers and scholarships to study at prestigious
              universities around the globe.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              In 2017, after more than 10 years and 30 programmes completed, a
              few scientists from the team wanted to expand the ambition to use
              science to benefit the wider Vietnamese society. With this central
              vision in mind, the Institute of Research in Economics,
              Environment and Data Science (IREEDS) was founded. Here, our new
              mission begins.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
