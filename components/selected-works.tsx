"use client"

import { ArrowUpRight, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const works = [
  {
    title: "AI Marketplace",
    description:
      "<strong>Project Title</strong>: Aus4Innovation Program – AI Marketplace Project: A Business Model and Analysis<br/> <strong>Duration</strong>: 2022 – 2023",
    image: "/images/pexels-sanketgraphy-16461434.jpg",
    href: "/works/visionai",
  },
  {
    title: "GEMMES Vietnam AFD",
    description:
      "<strong>Project Tittle</strong>: Gemmes Vietnam: Analysis of Socio-economic impact of climate change in Vietnam and adaption strategies <br/> <strong>Duration</strong>: 2019 – 2023",
    image: "/images/flood.jpg",
    href: "/works/chatgenius",
  },
  {
    title: "VietSCO CNES",
    description:
      "<strong>Project title</strong>: The socio-economics impact of climate change and disasters on agriculture outcomes in Vietnam <br/> <strong>Duration</strong>: 2020 – 2022",
    image: "/images/agri.jpg",
    href: "/works/motionai",
  },
  {
    title: "VietErosion-Eco",
    description:
      "<strong>Project Tittle</strong>: Impacts of Coastal Erosion in Vietnam: Theoretical Models and Empirical Approaches (VIET-EROSION) <br/> <strong>Duration</strong>: 2017 – 2019",
    image: "/images/coastal.jpg",
    href: "/works/motionai",
  },
  {
    title: "VietFlood",
    description:
      "<strong>Project Tittle</strong>: VietFlood: Assessment of climate change impacts on Nghe An province: mitigation and adaptation, 2011- 2013.<br/> <strong>Duration</strong>: 2014 – 2015",
    image: "/images/vietflood.jpg",
    href: "/works/motionai",
  },
]

export default function SelectedWorks() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="works" className="py-20 px-6 bg-card">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">Our projects</span>
        </div>

        <h2 className="font-serif text-foreground mb-12 text-5xl">Selected Works</h2>

        {/* Works List */}
        <div className="space-y-8">
          {works.map((work, index) => (
            <Link key={index} href={work.href} className="group block border-t border-border pt-8 border-none">
              <div
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="flex flex-col lg:flex-row lg:items-start gap-6"
              >
                {/* Title and Description */}
                <div className="lg:w-1/3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors md:text-3xl">
                      {work.title}
                    </h3>
                    <ArrowUpRight className="h-6 w-6 text-foreground/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="mt-4 text-foreground/70 text-sm" dangerouslySetInnerHTML={{ __html: work.description }} />
                </div>

                <div
                  className={`lg:w-2/3 rounded-2xl overflow-hidden transition-all duration-700 ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={`${work.title} preview`}
                    width={800}
                    height={500}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
