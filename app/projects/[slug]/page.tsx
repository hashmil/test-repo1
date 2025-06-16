import { notFound } from "next/navigation";

import ProjectContent from "./ProjectContent";
import { projects } from "../../../data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function getProject(slug: string) {
  // Simulate database fetch
  return projects.find((p) => p.slug === slug);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Properly handle params as a Promise
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
