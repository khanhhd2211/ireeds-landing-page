import Image from "next/image"
import Link from "next/link"
import { BookOpen } from "lucide-react"

// Blur placeholder for lazy loading
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

const articles = [
  {
    category: "Workshop",
    date: "16th and 17th June 2022",
    title: "VietSCO CNES: User Conference Phase 1\nVietSCO User Conference: Presentation of Phase 1 Results",
    image: "/images/conference.jpg",
    href: "#",
  },
  {
    category: "Workshop",
    date: "5th and 12th January",
    title: "GEMMES Vietnam 2022\nWebinar 1: The Mekong Emergency",
    image: "/images/mekong.jpg",
    href: "#",
  },
  {
    category: "Workshop",
    date: "9th, 16th, 23rd March and 6th April 2022",
    title: "GEMMES Vietnam 2022\nWebinar 2: Updated national impacts and adaption",
    image: "/images/national.jpg",
    href: "#",
  },
  {
    category: "Workshop",
    date: "11st, 18th, 25th May and 1st June 2022",
    title: "GEMMES Vietnam 2022\nWebinar 3: Macroeconomics of climate impacts and adaption finance",
    image: "/images/macro.jpg",
    href: "#",
  },
  {
    category: "Workshop",
    date: "7th January 2021",
    title: "GEMMES Vietnam 2022\nWebinar 4: Adaption Strategy",
    image: "/images/strat.jpg",
    href: "#",
  },
]

export default function LatestArticles() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">Events</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Recent Events</h2>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.href} className="group">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-medium text-foreground/60 bg-secondary px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-foreground/50">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors whitespace-pre-line">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
