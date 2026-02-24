import { redirect } from "next/navigation";
import { getAllProjects } from "@/lib/content";

type LegacyProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function LegacyProjectDetailRedirect({ params }: LegacyProjectDetailProps) {
  const { slug } = await params;
  redirect(`/pt/projects/${slug}`);
}
