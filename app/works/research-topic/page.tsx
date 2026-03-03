import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

// Blur placeholder for lazy loading
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

const researchTopics = [
  {
    title: "Sustainable Economy",
    image: "/images/economy.jpg",
    href: "/services/sustainable-economy",
  },
  {
    title: "Energy",
    image: "/images/energy.jpg",
    href: "/services/energy",
  },
  {
    title: "Climate Change",
    image: "/images/flood.jpg",
    href: "/services/climate-change",
  },
  {
    title: "Coastal",
    image: "/images/coastal.jpg",
    href: "/services/coastal",
  },
  {
    title: "Health",
    image: "/images/health.jpg",
    href: "/services/health",
  },
  {
    title: "Agriculture",
    image: "/images/agriculture.jpg",
    href: "/services/agriculture",
  },
]

export default function ResearchTopicPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              RESEARCH TOPICS
            </h1>
          </div>

          {/* Research Topics Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {researchTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="group relative overflow-hidden rounded-lg aspect-[16/10] bg-gray-900"
              >
                {/* Background Image */}
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    {topic.title}
                  </h2>
                  <span className="text-white/90 text-lg underline underline-offset-4 group-hover:underline-offset-8 transition-all">
                    Learn more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
