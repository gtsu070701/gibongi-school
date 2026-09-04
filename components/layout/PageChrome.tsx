import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex max-w-[900px] flex-col gap-[60px] px-6 pb-[88px] pt-14">{children}</div>;
}

export function Hero({
  eyebrow,
  prevLink,
  title,
  lede,
}: {
  eyebrow: string;
  prevLink?: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="flex flex-col gap-3.5 pt-2">
      <div className="font-mono-num text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--composite)]">{eyebrow}</div>
      {prevLink && <div className="font-mono-num text-xs text-[var(--ink-faint)]">{prevLink}</div>}
      <h1 className="font-display text-balance text-[clamp(32px,5.2vw,50px)] font-bold leading-[1.15] text-[var(--ink)]">{title}</h1>
      <p className="max-w-[62ch] text-[16.5px] leading-relaxed text-[var(--ink-soft)]">{lede}</p>
    </header>
  );
}

export function Section({
  num,
  title,
  sub,
  children,
}: {
  num: string;
  title: string;
  sub?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-[22px]">
      <div className="flex items-baseline gap-3">
        <span className="font-mono-num text-[13px] font-medium text-[var(--ink-faint)]">{num}</span>
        <h2 className="font-display text-[23px] font-bold text-[var(--ink)]">{title}</h2>
      </div>
      {sub && <p className="-mt-2 text-[14.5px] leading-relaxed text-[var(--ink-soft)]">{sub}</p>}
      {children}
    </section>
  );
}

export function PageFooter({ children }: { children: ReactNode }) {
  return <footer className="font-mono-num pb-4 text-center text-xs tracking-wide text-[var(--ink-faint)]">{children}</footer>;
}
