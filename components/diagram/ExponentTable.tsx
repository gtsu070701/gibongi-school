export type ExpRow = { prime: number; a: number; b: number; pick: "min" | "max" | "none" };

export function ExponentTable({
  rows,
  aLabel,
  bLabel,
  resultLabel,
}: {
  rows: ExpRow[];
  aLabel: string;
  bLabel: string;
  resultLabel: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="font-mono-num w-full min-w-[420px] border-collapse text-sm">
        <thead>
          <tr className="text-left text-[var(--ink-faint)]">
            <th className="border-b border-[var(--border)] py-2 pr-4 font-medium">소인수</th>
            <th className="border-b border-[var(--border)] py-2 pr-4 font-medium">{aLabel}</th>
            <th className="border-b border-[var(--border)] py-2 pr-4 font-medium">{bLabel}</th>
            <th className="border-b border-[var(--border)] py-2 font-medium">{resultLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.prime}>
              <td className="border-b border-[var(--border)] py-2 pr-4 font-bold text-[var(--ink)]">{r.prime}</td>
              <td className={`border-b border-[var(--border)] py-2 pr-4 ${r.pick === "min" ? "font-bold text-[var(--prime)]" : "text-[var(--ink-soft)]"}`}>
                {r.a || "—"}
              </td>
              <td className={`border-b border-[var(--border)] py-2 pr-4 ${r.pick === "max" ? "font-bold text-[var(--prime)]" : "text-[var(--ink-soft)]"}`}>
                {r.b || "—"}
              </td>
              <td className="border-b border-[var(--border)] py-2 font-bold text-[var(--composite)]">
                {r.pick === "none" ? "—" : r.pick === "min" ? Math.min(r.a, r.b) : Math.max(r.a, r.b)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
