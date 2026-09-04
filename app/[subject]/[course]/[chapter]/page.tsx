import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageChrome";
import { findChapterMeta } from "@/lib/content/subjects";
import { getChapterEntry } from "@/lib/content/registry";
import { QuizRunner } from "@/components/quiz/QuizRunner";

export default async function ChapterPage({ params }: { params: Promise<{ subject: string; course: string; chapter: string }> }) {
  const { subject: subjectSlug, course: courseSlug, chapter: chapterSlug } = await params;
  const found = findChapterMeta(subjectSlug, courseSlug, chapterSlug);
  const entry = getChapterEntry(subjectSlug, courseSlug, chapterSlug);
  if (!found || !entry) notFound();

  const { course } = found;
  const chapters = course.chapters;
  const idx = chapters.findIndex((c) => c.slug === chapterSlug);
  const prev = idx > 0 ? chapters[idx - 1] : undefined;
  const next = idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : undefined;

  const { Component, quiz } = entry;

  return (
    <PageContainer>
      <Component />

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-xl font-bold text-[var(--ink)]">이해도 체크</h2>
        <QuizRunner questions={quiz} />
      </section>

      <div className="flex items-center justify-between border-t border-[var(--border)] pt-6 text-sm">
        {prev ? (
          <Link href={`/${subjectSlug}/${courseSlug}/${prev.slug}`} className="text-[var(--ink-soft)] hover:text-[var(--prime)]">
            ← {prev.title}
          </Link>
        ) : (
          <Link href={`/${subjectSlug}/${courseSlug}`} className="text-[var(--ink-soft)] hover:text-[var(--prime)]">
            ← 코스로 돌아가기
          </Link>
        )}
        {next ? (
          <Link href={`/${subjectSlug}/${courseSlug}/${next.slug}`} className="text-[var(--ink-soft)] hover:text-[var(--prime)]">
            {next.title} →
          </Link>
        ) : (
          <Link href={`/${subjectSlug}/${courseSlug}`} className="text-[var(--ink-soft)] hover:text-[var(--prime)]">
            코스로 돌아가기 →
          </Link>
        )}
      </div>
    </PageContainer>
  );
}
