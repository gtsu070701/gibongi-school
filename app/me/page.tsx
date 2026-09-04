import Link from "next/link";
import { PageContainer, Hero } from "@/components/layout/PageChrome";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export default async function MePage() {
  if (!isSupabaseConfigured()) {
    return (
      <PageContainer>
        <Hero eyebrow="내 점수" title="내 점수" lede="로그인 기능이 아직 연결되지 않았어요." />
      </PageContainer>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return (
      <PageContainer>
        <Hero eyebrow="내 점수" title="내 점수" lede="점수를 보려면 먼저 로그인해주세요." />
        <Link href="/login?redirect=/me" className="w-fit rounded-lg bg-[var(--prime)] px-4 py-2.5 text-sm font-semibold text-[var(--surface)]">
          로그인하러 가기
        </Link>
      </PageContainer>
    );
  }

  const { data: attempts } = await supabase
    .from("attempts")
    .select("course_key, score, total, completed_at")
    .order("completed_at", { ascending: false });

  return (
    <PageContainer>
      <Hero eyebrow="내 점수" title="내 점수" lede={`${user.email}로 로그인되어 있어요.`} />
      {!attempts || attempts.length === 0 ? (
        <p className="text-sm text-[var(--ink-faint)]">아직 응시한 종합문제가 없어요.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {attempts.map((a, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <span className="font-mono-num text-sm text-[var(--ink)]">{a.course_key}</span>
              <span className="font-mono-num text-sm font-bold text-[var(--prime)]">
                {a.score} / {a.total}
              </span>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
