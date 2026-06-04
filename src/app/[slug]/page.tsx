import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/ProjectDetailView";
import { projectsByKey, resolveProjectSlug } from "@/data/projects";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(projectsByKey).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = resolveProjectSlug(params.slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetailView project={project} />;
}
