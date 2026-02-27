import { ArrowUpRight, Recycle, Zap, Thermometer, Waves, Heart, Sprout, Database, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Recycle,
    title: "Sustainable economy",
    description: "Learn More",
    href: "/services/sustainable-economy",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Learn More",
    href: "/services/energy",
  },
  {
    icon: Thermometer,
    title: "Climate Change",
    description: "Learn More",
    href: "/services/climate-change",
  },
  {
    icon: Waves,
    title: "Coastal",
    description: "Learn More",
    href: "/services/coastal",
  },
  {
    icon: Heart,
    title: "Health",
    description: "Learn More",
    href: "/services/health",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Learn More",
    href: "/services/agriculture",
  },
  {
    icon: Database,
    title: "Environmental Data",
    description: "Learn More",
    href: "/services/environmental-data",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">What we do</span>
            </div>

            <h2 className="text-3xl font-serif text-foreground mb-6 md:text-5xl">Our Research</h2>

            <p className="text-foreground/70 max-w-lg">
              Our research areas span the broad spectrum of economic sectors; Environment; and Technology by applying powerful technology tools such as R, Stata, Matlab, GIS with reference to specific conditions of Vietnam.
              <br/>
              On a larger scale, IREEDS organizes, facilitates and sponsors international workshops, conferences, and expert consultations on various topics. We also collaborate and co-ordinate funding on scientific projects which can bring major positive impacts on the society.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View All Researches
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 border border-border hover:border-foreground/30 transition-colors rounded-none border-t-0 border-l-[0] border-r-0"
              >
                <service.icon className="h-8 w-8 text-foreground mb-4" strokeWidth={1} />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
