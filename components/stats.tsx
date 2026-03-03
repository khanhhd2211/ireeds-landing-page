const stats = [
  {
    label: "Developed with High-Performance Optimization",
    value: "300+",
  },
  {
    label: "Client Satisfaction Rate",
    value: "98%",
  },
  {
    label: "Award-Winning Campaigns",
    value: "50+",
  },
  {
    label: "AI Models Deployed",
    value: "120+",
  },
  {
    label: "Processing Speed",
    value: "2.5x",
  },
]

export default function Stats() {
  return (
    <section className="py-20 px-6 text-background bg-accent">
      <div className="mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {/* First Stat */}
          <div className="flex flex-col">
            <div className="bg-background/10 p-8 rounded-none flex-1 flex flex-col justify-center border border-white">
              <p className="text-sm text-background/60 mb-2">{stats[0].label}</p>
              <p className="text-9xl font-serif text-background">{stats[0].value}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-background/10 p-8 rounded-none flex-1 flex flex-col justify-center border border-white">
              <p className="text-sm text-background/60 mb-2">{stats[3].label}</p>
              <p className="text-9xl font-serif text-background">{stats[3].value}</p>
            </div>
            <div className="bg-background/10 p-8 rounded-none flex-1 flex flex-col justify-center gap-0 border border-white">
              <p className="text-sm text-background/60 mb-2">{stats[4].label}</p>
              <p className="font-serif text-background text-9xl">{stats[4].value}</p>
            </div>
          </div>

          {/* Other Stats */}
          <div className="flex flex-col">
            <div className="bg-background/10 p-8 rounded-none flex-1 flex flex-col justify-center border border-white">
              <p className="text-sm text-background/60 mb-2">{stats[1].label}</p>
              <p className="text-9xl font-serif text-background">{stats[1].value}</p>
            </div>
            <div className="bg-background/10 p-8 rounded-none flex-1 flex flex-col justify-center gap-0 border border-white">
              <p className="text-sm text-background/60 mb-2">{stats[2].label}</p>
              <p className="font-serif text-background text-9xl">{stats[2].value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
