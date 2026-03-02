import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Pool } from 'pg'

// Database connection pool
const pool = new Pool({
  host: 'localhost',
  port: 5433,
  database: 'demo',
  user: 'demo_user',
  password: 'secret',
})

async function getTeamMembers() {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM team_members ORDER BY id')
    client.release()
    return result.rows
  } catch (error) {
    console.error('Database connection error:', error)
    return []
  }
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">About IREEDS</h1>
            
            <p className="text-foreground/80 text-xl leading-relaxed text-center">
              IREEDS is a unique collaboration of a network of economists, social scientists, climate experts, ecologists and data scientists from leading research institutions and universities around the world.
            </p>
          </div>
          <br/>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">Our Team</h1>
          <h2 className="text-3xl font-serif text-foreground mb-12 text-center">Board of Directors</h2>
          
          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-6">
                  {member.image_url ? (
                    <Image
                      src={`/${member.image_url}`}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{member.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>
      
      <Footer />
    </main>
  )
}
