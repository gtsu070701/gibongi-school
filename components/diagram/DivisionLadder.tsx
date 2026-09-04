export type LadderRow = { divisor?: number | string; values: (number | string)[]; final?: boolean };

export function DivisionLadder({ rows, caption }: { rows: LadderRow[]; caption?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="ladder-table">
        {rows.map((row, i) => (
          <div key={i} className={`ladder-row ${row.final ? "final" : ""}`}>
            <div className="ladder-divisor">{row.divisor ?? ""}</div>
            {row.values.map((v, j) => (
              <div key={j} className="ladder-cell">
                {v}
              </div>
            ))}
          </div>
        ))}
      </div>
      {caption && <p className="font-mono-num text-center text-xs text-[var(--ink-faint)]">{caption}</p>}
    </div>
  );
}
