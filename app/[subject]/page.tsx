import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer, Hero } from "@/components/layout/PageChrome";
import { findSubject } from "@/lib/content/subjects";

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectSlug } = await params;
  const subject = findSubject(subjectSlug);
  if (!subject) notFound();

  return (
    <PageContainer>
      <Hero eyebrow="과목" title={subject.name} lede={subject.tagline} />
      <div className="flex flex-col gap-3">
        {subject.courses.map((c) => (
          <Link
            key={c.slug}
            href={`/${subject.slug}/${c.slug}`}
            className="flex flex-col gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] hover:border-[var(--prime)]"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-[var(--ink)]">{c.title}</span>
              {c.placeholder && (
                <span className="font-mono-num rounded-full bg-[var(--unit-tint)] px-2 py-0.5 text-[10px] font-semibold text-[var(--unit)]">준비 중</span>
              )}
            </div>
            <span className="text-sm text-[var(--ink-soft)]">{c.description}</span>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
