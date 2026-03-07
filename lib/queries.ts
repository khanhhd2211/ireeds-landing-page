import pool from "@/lib/db";

export interface ResearchPaper {
  id: number;
  fields: string;
  title: string;
  author: string;
  description: string;
  link: string;
  image: string | null;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string | null;
  degree: string | null;
  department: string | null;
  description: string | null;
  image_url: string | null;
}

export async function getResearchPapers(
  field: string,
): Promise<ResearchPaper[]> {
  try {
    const client = await pool.connect();
    const result = await client.query<ResearchPaper>(
      "SELECT * FROM research_paper WHERE fields LIKE $1 ORDER BY id",
      [`%${field}%`],
    );
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Database connection error:", error);
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const client = await pool.connect();
    const result = await client.query<TeamMember>(
      "SELECT * FROM team_members ORDER BY id",
    );
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Database connection error:", error);
    return [];
  }
}
