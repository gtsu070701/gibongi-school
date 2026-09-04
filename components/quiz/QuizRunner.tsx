"use client";

import { useMemo, useState } from "react";

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  answerIndex: number;
  hint: string;
};

export function QuizRunner({ questions }: { questions: QuizQuestion[] }) {
  const [step, setStep] = useState(0);
  const [disabled, setDisabled] = useState<Record<number, boolean>>({});
  const [showHint, setShowHint] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [done, setDone] = useState(false);

  const q = questions[step];
  const progress = useMemo(() => `${Math.min(step + (correct ? 1 : 0), questions.length)}/${questions.length}`, [step, correct, questions.length]);

  function pick(i: number) {
    if (correct || disabled[i]) return;
    if (i === q.answerIndex) {
      setCorrect(true);
      setShowHint(false);
      window.setTimeout(() => {
        if (step + 1 >= questions.length) {
          setDone(true);
        } else {
          setStep((s) => s + 1);
          setDisabled({});
          setCorrect(false);
        }
      }, 900);
    } else {
      setDisabled((d) => ({ ...d, [i]: true }));
      setShowHint(true);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--prime)] bg-[var(--prime-tint)] px-6 py-8 text-center">
        <span className="font-display text-xl font-bold text-[var(--prime)]">챕터 퀴즈 완료 ✓</span>
        <p className="text-sm text-[var(--ink-soft)]">{questions.length}문제를 모두 맞혔어요. 다음 챕터로 넘어가도 좋습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
      <div className="flex items-center justify-between">
        <span className="font-mono-num text-xs font-semibold text-[var(--ink-faint)]">퀴즈 {progress}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-5 rounded-full ${i < step || (i === step && correct) ? "bg-[var(--prime)]" : i === step ? "bg-[var(--composite)]" : "bg-[var(--border)]"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-[15px] font-medium leading-relaxed text-[var(--ink)]">{q.prompt}</p>

      <div className="flex flex-col gap-2">
        {q.choices.map((choice, i) => {
          const isDisabled = disabled[i];
          const isAnswerRevealed = correct && i === q.answerIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(i)}
              disabled={isDisabled || correct}
              className={`font-mono-num rounded-lg border-[1.5px] px-4 py-2.5 text-left text-sm transition-colors ${
                isAnswerRevealed
                  ? "border-[var(--prime)] bg-[var(--prime-tint)] text-[var(--prime)]"
                  : isDisabled
                  ? "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--ink-faint)] line-through"
                  : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--ink)] hover:border-[var(--composite)]"
              } ${correct && !isAnswerRevealed ? "opacity-50" : ""}`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {showHint && !correct && (
        <p className="font-hand flex items-start gap-2 text-base leading-snug text-[var(--redpen)]">
          <span className="mt-0.5 flex-none">✎</span>
          <span>힌트: {q.hint}</span>
        </p>
      )}

      {correct && <p className="font-hand text-base text-[var(--prime)]">정답이에요! 잠시 후 다음 문제로 넘어갑니다.</p>}
    </div>
  );
}
