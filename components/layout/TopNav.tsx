import Link from "next/link";
import { subjects } from "@/lib/content/subjects";

export function TopNav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[900px] items-center gap-5 px-6 py-3">
        <Link href="/" className="font-display text-[15px] font-bold text-[var(--ink)]">
          기본기 학교
        </Link>
        <div className="flex flex-wrap gap-4 text-sm">
          {subjects.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="text-[var(--ink-soft)] hover:text-[var(--prime)]">
              {s.name}
            </Link>
          ))}
        </div>
        <Link href="/me" className="ml-auto text-sm text-[var(--ink-faint)] hover:text-[var(--prime)]">
          내 점수
        </Link>
      </div>
    </nav>
  );
}
