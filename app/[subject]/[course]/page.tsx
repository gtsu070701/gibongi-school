import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer, Hero } from "@/components/layout/PageChrome";
import { findCourse } from "@/lib/content/subjects";
import { getExam } from "@/lib/content/exams";

export default async function CoursePage({ params }: { params: Promise<{ subject: string; course: string }> }) {
  const { subject: subjectSlug, course: courseSlug } = await params;
  const found = findCourse(subjectSlug, courseSlug);
  if (!found) notFound();
  const { subject, course } = found;
  const exam = getExam(subjectSlug, courseSlug);

  return (
    <PageContainer>
      <Hero eyebrow={`${subject.name} · 코스`} title={course.title} lede={course.description} />

      {course.chapters.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-soft)] p-8 text-center text-sm text-[var(--ink-faint)]">
          콘텐츠 준비 중이에요. 곧 채워질 예정입니다.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {course.chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/${subjectSlug}/${courseSlug}/${ch.slug}`}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] hover:border-[var(--prime)]"
            >
              <span className="font-display text-base font-bold text-[var(--ink)]">{ch.title}</span>
              <span className="font-mono-num text-xs text-[var(--ink-faint)]">도식 + 퀴즈</span>
            </Link>
          ))}
        </div>
      )}

      {exam && (
        <Link
          href={`/${subjectSlug}/${courseSlug}/exam`}
          className="flex items-center gap-3 rounded-xl border-[1.5px] border-dashed border-[var(--prime)] bg-[var(--prime-tint)] px-5 py-4 text-[var(--ink)] hover:opacity-90"
        >
          <span className="font-mono-num text-base font-bold text-[var(--prime)]">→</span>
          <span>
            <b>코스 종합문제</b>에 도전해보세요 ({exam.length}문항). 이메일로만 간단히 로그인하면 됩니다.
          </span>
        </Link>
      )}
    </PageContainer>
  );
}
