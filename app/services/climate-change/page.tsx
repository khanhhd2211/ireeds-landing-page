import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore - Install @types/pg if needed: pnpm add -D @types/pg
import { Pool } from "pg";

// Blur placeholder for lazy loading
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";

// Research Paper interface
interface ResearchPaper {
  id: number;
  fields: string;
  title: string;
  author: string;
  description: string;
  link: string;
  image: string | null;
}

// Database connection pool
const pool = new Pool({
  host: "localhost",
  port: 5433,
  database: "demo",
  user: "demo_user",
  password: "secret",
});

async function getResearchPapers(): Promise<ResearchPaper[]> {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM research_paper WHERE fields LIKE '%climate-change%' ORDER BY id",
    );
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Database connection error:", error);
    return [];
  }
}

export default async function ClimateChangePage() {
  const researchPapers = await getResearchPapers();

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Climate Change Research
            </h1>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Explore our research publications on climate change impacts,
              adaptation strategies, and environmental policy in Vietnam.
            </p>
          </div>

          {/* Research Papers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPapers.map((paper: ResearchPaper, index: number) => (
              <div
                key={index}
                className="flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Paper Image */}
                <div className="relative h-64 w-full bg-gray-200">
                  {paper.image ? (
                    <Image
                      src={`/${paper.image}`}
                      alt={paper.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                </div>

                {/* Paper Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {paper.title}
                  </h2>

                  <p className="text-sm text-foreground/70 mb-3 font-medium">
                    {paper.author}
                  </p>

                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 flex-1">
                    {paper.description}
                  </p>

                  {/* Read Button */}
                  {paper.link && (
                    <Link
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
                    >
                      Read
                    </Link>
                  )}
                  {!paper.link && (
                    <div className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-400 text-white font-medium cursor-not-allowed">
                      Read
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
