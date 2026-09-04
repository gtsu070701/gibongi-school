export type NumTile = { n: number; tag: string; tone: "unit" | "prime" | "composite" };

const toneBox: Record<NumTile["tone"], string> = {
  prime: "border-[var(--prime)] bg-[var(--prime-tint)]",
  composite: "border-[var(--composite)] bg-[var(--composite-tint)]",
  unit: "border-[var(--unit)] bg-[var(--unit-tint)]",
};

const toneText: Record<NumTile["tone"], string> = {
  prime: "text-[var(--prime)]",
  composite: "text-[var(--composite)]",
  unit: "text-[var(--unit)]",
};

export function NumberGrid({ tiles }: { tiles: NumTile[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
      {tiles.map((t) => (
        <div key={t.n} className={`flex flex-col items-center gap-0.5 rounded-[10px] border-[1.5px] px-1.5 py-2.5 text-center ${toneBox[t.tone]}`}>
          <span className={`font-display text-lg font-bold leading-none ${toneText[t.tone]}`}>{t.n}</span>
          <span className="font-mono-num min-h-[12px] text-[10px] text-[var(--ink-faint)]">{t.tag}</span>
        </div>
      ))}
    </div>
  );
}
