"use client";

import { useState } from "react";
import type { QuizQuestion } from "./QuizRunner";
import { createClient } from "@/lib/supabase/client";

export function ExamRunner({ courseKey, email, questions }: { courseKey: string; email: string; questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  async function submit() {
    const s = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
    setScore(s);
    setSubmitted(true);
    setSaving(true);
    setSaveError(null);
    try {
      const supabase = createClient();
      await supabase.from("profiles").upsert({ email });
      const { error } = await supabase.from("attempts").insert({
        email,
        course_key: courseKey,
        score: s,
        total: questions.length,
        answers,
      });
      if (error) setSaveError(error.message);
    } catch {
      setSaveError("점수 저장 중 문제가 생겼어요.");
    } finally {
      setSaving(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-5">
        <div className="rounded-2xl border border-[var(--prime)] bg-[var(--prime-tint)] p-6 text-center">
          <span className="font-display text-3xl font-bold text-[var(--prime)]">
            {score} / {questions.length}
          </span>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            {saving ? "점수를 저장하는 중…" : saveError ? saveError : "점수가 저장됐어요. 내 점수 페이지에서 다시 확인할 수 있어요."}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {questions.map((q, i) => {
            const picked = answers[q.id];
            const isCorrect = picked === q.answerIndex;
            return (
              <div
                key={q.id}
                className={`rounded-xl border-[1.5px] p-4 ${
                  isCorrect ? "border-[var(--prime)] bg-[var(--prime-tint)]" : "border-[var(--redpen)] bg-[var(--surface-soft)]"
                }`}
              >
                <p className="text-sm font-medium text-[var(--ink)]">
                  {i + 1}. {q.prompt}
                </p>
                <p className="font-mono-num mt-1.5 text-xs text-[var(--ink-soft)]">
                  내 답: {q.choices[picked]} {isCorrect ? "✓" : `· 정답: ${q.choices[q.answerIndex]}`}
                </p>
                {!isCorrect && <p className="font-hand mt-1 text-[15px] text-[var(--redpen)]">✎ {q.hint}</p>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {questions.map((q, i) => (
        <div key={q.id} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
          <p className="text-sm font-medium text-[var(--ink)]">
            {i + 1}. {q.prompt}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {q.choices.map((choice, ci) => (
              <label
                key={ci}
                className={`font-mono-num flex cursor-pointer items-center gap-2.5 rounded-lg border-[1.5px] px-4 py-2.5 text-sm ${
                  answers[q.id] === ci ? "border-[var(--prime)] bg-[var(--prime-tint)]" : "border-[var(--border)] bg-[var(--surface-soft)]"
                }`}
              >
                <input
                  type="radio"
                  name={q.id}
                  className="accent-[var(--prime)]"
                  checked={answers[q.id] === ci}
                  onChange={() => setAnswers((a) => ({ ...a, [q.id]: ci }))}
                />
                {choice}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={submit}
        disabled={!allAnswered}
        className="rounded-lg bg-[var(--prime)] px-5 py-3 text-sm font-semibold text-[var(--surface)] disabled:opacity-40"
      >
        제출하고 점수 확인하기
      </button>
    </div>
  );
}
