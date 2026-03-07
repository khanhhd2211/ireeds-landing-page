import Footer from "@/components/footer";
import Image from "next/image";
import { Pool } from "pg";

// Blur placeholder for lazy loading
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";

// Database connection pool
const pool = new Pool({
  host: "localhost",
  port: 5433,
  database: "demo",
  user: "demo_user",
  password: "secret",
});

async function getTeamMembers() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM team_members ORDER BY id");
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Database connection error:", error);
    return [];
  }
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  // Helper function to check if member belongs to a department
  const belongsToDepartment = (member: any, dept: string) => {
    return member.department && member.department.includes(dept);
  };

  // Filter members by department
  const boardMembers = teamMembers.filter((m: any) =>
    belongsToDepartment(m, "Board of Directors"),
  );
  const scientificMembers = teamMembers.filter((m: any) =>
    belongsToDepartment(m, "Scientific Network"),
  );
  const adminMembers = teamMembers.filter((m: any) =>
    belongsToDepartment(m, "Administration Office"),
  );

  // Team member card component
  const TeamMemberCard = ({ member }: { member: any }) => (
    <div className="flex flex-col items-center text-center bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-6">
        {member.image_url ? (
          <Image
            src={`/${member.image_url}`}
            alt={member.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-orange-500 mb-2">
        {[member.name, member.title, member.degree].filter(Boolean).join(", ")}
      </h3>
      <p className="text-foreground/80 text-sm leading-relaxed">
        {member.description}
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
              About IREEDS
            </h1>

            <p className="text-foreground/80 text-xl leading-relaxed text-center">
              IREEDS is a unique collaboration of a network of economists,
              social scientists, climate experts, ecologists and data scientists
              from leading research institutions and universities around the
              world.
            </p>
          </div>
          <br />
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
            Our Team
          </h1>

          {/* Board of Directors */}
          <h2 className="text-3xl font-serif text-foreground mb-12 text-center">
            Board of Directors
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {boardMembers.map((member: any) => (
              <TeamMemberCard key={`board-${member.id}`} member={member} />
            ))}
          </div>

          {/* Scientific Network */}
          <h2 className="text-3xl font-serif text-foreground mb-12 text-center">
            Scientific Network
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {scientificMembers.map((member: any) => (
              <TeamMemberCard key={`scientific-${member.id}`} member={member} />
            ))}
          </div>

          {/* Administration Office */}
          <h2 className="text-3xl font-serif text-foreground mb-12 text-center">
            Administration Office
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {adminMembers.map((member: any) => (
              <TeamMemberCard key={`admin-${member.id}`} member={member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
