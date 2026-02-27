import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Team</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-foreground mb-6">About IREEDS</h2>
            
            <p className="text-foreground/80 leading-relaxed">
              IREEDS is a unique collaboration of a network of economists, social scientists, climate experts, ecologists and data scientists from leading research institutions and universities around the world.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
