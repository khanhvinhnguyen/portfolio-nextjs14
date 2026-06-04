import fs from "fs";
import path from "path";
import { parseJsonc } from "@/lib/parseJsonc";

export type ProjectImage = { src: string; alt: string };

export type ProjectDetail = {
  position: string;
  duration: string;
  technical: string[];
  linkTrial?: string;
  linkCode?: string;
  description: {
    overview: string;
    responsibilities: string[];
  };
};

export type ProjectRecord = {
  title: string;
  bgImg: string;
  projURL: string;
  mainTech: string;
  detail: ProjectDetail;
  imgData: ProjectImage[];
};

export type ProjectsData = Record<string, ProjectRecord>;

const PROJECTS_JSONC = path.join(
  process.cwd(),
  "public/assets/data/projects.jsonc"
);

function readProjects(): ProjectsData {
  const text = fs.readFileSync(PROJECTS_JSONC, "utf-8");
  return parseJsonc<ProjectsData>(text);
}

export const projectsByKey = readProjects();
export const projectList = Object.values(projectsByKey);

export function resolveProjectSlug(slug: string): ProjectRecord | null {
  const entry = Object.entries(projectsByKey).find(([key, project]) => {
    const pathSlug = project.projURL.replace(/^\//, "");
    return key === slug || pathSlug === slug;
  });
  return entry ? entry[1] : null;
}
