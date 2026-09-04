import Link from "next/link";
import { PageContainer, Hero } from "@/components/layout/PageChrome";
import { subjects } from "@/lib/content/subjects";

export default function HomePage() {
  return (
    <PageContainer>
      <Hero
        eyebrow="기본기 학교"
        title="국어·영어·수학·AI, 기본기부터 다시"
        lede="어려운 응용문제 대신 개념을 도식으로 이해하고, 짧은 퀴즈로 바로 확인합니다. 과목을 골라 시작하세요."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {subjects.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition-colors hover:border-[var(--prime)]"
          >
            <span className="font-display text-xl font-bold text-[var(--ink)]">{s.name}</span>
            <span className="text-sm text-[var(--ink-soft)]">{s.tagline}</span>
            <span className="font-mono-num mt-1 text-xs text-[var(--ink-faint)]">코스 {s.courses.length}개</span>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
