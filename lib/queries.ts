import { readFile } from "fs/promises";
import { unstable_cache } from "next/cache";

export interface ResearchPaper {
  fields: string;
  title: string;
  author: string;
  description: string;
  link: string;
  image: string | null;
}

export interface TeamMember {
  name: string;
  title: string | null;
  degree: string | null;
  department: string | null;
  description: string | null;
  image_url: string | null;
}

// Cache duration: 5 minutes in dev, 1 hour in production
const CACHE_DURATION = process.env.NODE_ENV === "production" ? 3600 : 300;

// Cached research papers loader
const getCachedResearchPapers = unstable_cache(
  async () => {
    const data = await readFile(
      process.cwd() + "/data/research_paper.json",
      "utf-8",
    );
    return JSON.parse(data) as ResearchPaper[];
  },
  ["research-papers"],
  {
    revalidate: CACHE_DURATION,
    tags: ["research-papers"],
  },
);

// Cached team members loader
const getCachedTeamMembers = unstable_cache(
  async () => {
    const data = await readFile(
      process.cwd() + "/data/team_members.json",
      "utf-8",
    );
    return JSON.parse(data) as TeamMember[];
  },
  ["team-members"],
  {
    revalidate: CACHE_DURATION,
    tags: ["team-members"],
  },
);

// Public API - filter by field (replaces SQL LIKE)
export async function getResearchPapers(
  field: string,
): Promise<ResearchPaper[]> {
  try {
    const allPapers = await getCachedResearchPapers();
    return allPapers.filter((p) => p.fields.includes(field));
  } catch (error) {
    console.error("Error reading research papers:", error);
    return [];
  }
}

// Public API - get all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    return await getCachedTeamMembers();
  } catch (error) {
    console.error("Error reading team members:", error);
    return [];
  }
}
