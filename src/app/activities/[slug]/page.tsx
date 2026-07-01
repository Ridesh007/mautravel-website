import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ACTIVITIES } from "@/lib/constants";
import { ACTIVITY_DETAILS } from "@/lib/activity-data";
import { ActivityPageTemplate } from "@/components/templates/ActivityPageTemplate";

export async function generateStaticParams() {
  return ACTIVITIES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = ACTIVITY_DETAILS[slug];
  if (!detail) return {};
  return {
    title: detail.pageTitle,
    description: detail.pageDescription,
    alternates: {
      canonical: `/activities/${slug}`,
    },
    openGraph: {
      url: `/activities/${slug}`,
      title: `${detail.pageTitle} | MauTravel`,
      description: detail.pageDescription,
    },
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = ACTIVITY_DETAILS[slug];
  if (!detail) notFound();

  // Three related activities — exclude current, take first three
  const related = ACTIVITIES.filter((a) => a.slug !== slug).slice(0, 3);

  return <ActivityPageTemplate detail={detail} related={related} />;
}
