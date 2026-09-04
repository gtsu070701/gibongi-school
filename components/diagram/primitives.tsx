import type { ReactNode } from "react";

type Tone = "prime" | "composite" | "unit" | "neutral";

const toneBox: Record<Tone, string> = {
  prime: "border-[var(--prime)] bg-[var(--prime-tint)] text-[var(--prime)]",
  composite: "border-[var(--composite)] bg-[var(--composite-tint)] text-[var(--composite)]",
  unit: "border-[var(--unit)] bg-[var(--unit-tint)] text-[var(--unit)]",
  neutral: "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--ink)]",
};

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Note({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={`font-hand flex max-w-[56ch] items-start gap-2 text-lg leading-snug text-[var(--redpen)] ${
        center ? "mx-auto text-left" : ""
      }`}
    >
      <span className="mt-0.5 flex-none text-[17px]">✎</span>
      <span>{children}</span>
    </p>
  );
}

export function Chip({ children, tone = "composite" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span className={`font-mono-num inline-block rounded-lg border px-3 py-1.5 text-sm font-semibold ${toneBox[tone]}`}>
      {children}
    </span>
  );
}

export function ChipRow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return <div className={`flex flex-wrap gap-2 ${center ? "justify-center" : ""}`}>{children}</div>;
}

export function EqRow({
  children,
  tag,
  highlight = false,
  center = false,
}: {
  children: ReactNode;
  tag?: string;
  highlight?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={`font-mono-num flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-[15.5px] text-[var(--ink)] ${
        highlight ? "border-[1.5px] border-[var(--prime)] bg-[var(--prime-tint)]" : "bg-[var(--surface-soft)]"
      } ${center ? "justify-center" : ""}`}
    >
      {children}
      {tag && (
        <span
          className={`ml-auto font-sans text-xs ${highlight ? "font-bold text-[var(--prime)]" : "text-[var(--ink-faint)]"}`}
        >
          {tag}
        </span>
      )}
    </div>
  );
}

export function ResultBadge({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono-num inline-block rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--surface-soft)] px-5 py-2.5 text-[17px] font-bold text-[var(--ink)]">
      {children}
    </div>
  );
}

export function Teaser({ children, tone = "composite" }: { children: ReactNode; tone?: "composite" | "prime" }) {
  const border =
    tone === "prime" ? "border-[var(--prime)] bg-[var(--prime-tint)]" : "border-[var(--composite)] bg-[var(--composite-tint)]";
  const arrow = tone === "prime" ? "text-[var(--prime)]" : "text-[var(--composite)]";
  return (
    <div className={`flex items-center gap-3.5 rounded-xl border-[1.5px] border-dashed px-5 py-3.5 text-[13.5px] text-[var(--ink)] ${border}`}>
      <span className={`font-mono-num text-base font-bold ${arrow}`}>→</span>
      <span>{children}</span>
    </div>
  );
}

export function SummaryGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">{children}</div>;
}

export function SummaryTile({ idx, children }: { idx: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
      <span className="font-mono-num text-[11px] font-bold text-[var(--composite)]">{idx}</span>
      <p className="text-sm leading-relaxed text-[var(--ink)]">{children}</p>
    </div>
  );
}

export function Legend({ items }: { items: { tone: Tone; label: string }[] }) {
  const dot: Record<Tone, string> = {
    prime: "bg-[var(--prime)]",
    composite: "bg-[var(--composite)]",
    unit: "bg-[var(--unit)]",
    neutral: "bg-[var(--ink-faint)]",
  };
  return (
    <div className="flex flex-wrap gap-4 text-xs text-[var(--ink-soft)]">
      {items.map((it) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          <i className={`inline-block h-2.5 w-2.5 rounded-[3px] ${dot[it.tone]}`} />
          {it.label}
        </span>
      ))}
    </div>
  );
}

export function InsightRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">{children}</div>;
}

export function Insight({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-[13px] leading-relaxed text-[var(--ink-soft)]">
      <b className="mb-1 block text-[13.5px] text-[var(--ink)]">{title}</b>
      {children}
    </div>
  );
}

export function SplitRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">{children}</div>;
}

export function SplitCard({
  tone,
  kicker,
  title,
  children,
  example,
}: {
  tone: Tone;
  kicker: string;
  title: string;
  children: ReactNode;
  example?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 rounded-xl border-[1.5px] p-[18px] ${toneBox[tone]}`}>
      <span className="font-mono-num text-[11px] font-bold uppercase tracking-wide">{kicker}</span>
      <span className="font-display text-xl font-bold text-[var(--ink)]">{title}</span>
      <p className="text-[13px] leading-relaxed text-[var(--ink-soft)]">{children}</p>
      {example && <span className="font-mono-num text-xs text-[var(--ink-faint)]">{example}</span>}
    </div>
  );
}

export function CompareRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

export function CompareCard({
  kicker,
  title,
  highlight = false,
  children,
}: {
  kicker: string;
  title: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 rounded-xl border-[1.5px] p-[18px] bg-[var(--surface-soft)] ${
        highlight ? "border-[var(--prime)]" : "border-[var(--border)]"
      }`}
    >
      <span className={`font-mono-num text-[11px] font-bold uppercase tracking-wide ${highlight ? "text-[var(--prime)]" : "text-[var(--ink-faint)]"}`}>
        {kicker}
      </span>
      <span className="font-display text-[17px] font-bold text-[var(--ink)]">{title}</span>
      <p className="text-[13px] leading-relaxed text-[var(--ink-soft)]">{children}</p>
    </div>
  );
}
