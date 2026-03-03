import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

// Blur placeholder for lazy loading
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

export default function LegalStructurePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Legal Structure</h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/structure.png"
              alt="Legal Structure"
              width={1800}
              height={900}
              className="object-cover rounded-lg max-w-full h-auto"
              placeholder="blur"
              blurDataURL={blurDataURL}
              loading="lazy"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-foreground mb-6">Legal Status</h2>
            
            <p className="text-foreground/80 leading-relaxed">
              In 2017, IREEDS was certified by the the Department of Science and Technology, Hanoi's People Committee as an independent research institution capable of conducting, coordinating and managing research-based and practice-based projects in three domains – economics & business, natural & environmental science, and computer science & data science.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
