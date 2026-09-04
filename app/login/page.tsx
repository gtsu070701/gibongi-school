"use client";

import { useState, Suspense, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { PageContainer, Hero } from "@/components/layout/PageChrome";
import { Card, Note } from "@/components/diagram/primitives";

function LoginForm() {
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/";
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isSupabaseConfigured()) {
      setError("아직 로그인 기능이 연결되지 않았어요. 관리자에게 문의해주세요.");
      return;
    }
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirect)}`,
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  }

  return (
    <PageContainer>
      <Hero
        eyebrow="로그인"
        title="이메일로 3초 로그인"
        lede="비밀번호 없이, 이메일로 받은 링크를 클릭하면 바로 로그인됩니다. 종합문제 응시와 점수 확인에만 필요해요."
      />
      <Card className="max-w-[420px]">
        {!isSupabaseConfigured() && <p className="mb-4 text-sm text-[var(--redpen)]">Supabase 연결이 아직 설정되지 않았어요 (.env.local 확인).</p>}
        {sent ? (
          <Note>{email} 로 로그인 링크를 보냈어요. 메일함을 확인해주세요.</Note>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--prime)]"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[var(--prime)] px-4 py-2.5 text-sm font-semibold text-[var(--surface)] disabled:opacity-60"
            >
              {loading ? "보내는 중…" : "로그인 링크 받기"}
            </button>
            {error && <p className="text-xs text-[var(--redpen)]">{error}</p>}
          </form>
        )}
      </Card>
    </PageContainer>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
