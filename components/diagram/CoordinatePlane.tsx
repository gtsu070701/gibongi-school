export type GraphPoint = { x: number; y: number; label?: string };
export type GraphSegment = { from: GraphPoint; to: GraphPoint; dashed?: boolean; label?: string };

export function CoordinatePlane({
  xMin,
  xMax,
  yMin,
  yMax,
  size = 300,
  points,
  path,
  path2,
  tone = "prime",
  tone2 = "composite",
  verticalTestX,
  segments,
}: {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  size?: number;
  points?: GraphPoint[];
  path?: GraphPoint[];
  path2?: GraphPoint[];
  tone?: "prime" | "composite";
  tone2?: "prime" | "composite";
  verticalTestX?: number;
  segments?: GraphSegment[];
}) {
  const w = size;
  const h = size;
  const sx = (x: number) => ((x - xMin) / (xMax - xMin)) * w;
  const sy = (y: number) => h - ((y - yMin) / (yMax - yMin)) * h;

  const xTicks: number[] = [];
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) xTicks.push(x);
  const yTicks: number[] = [];
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) yTicks.push(y);

  const toneStroke = (t: "prime" | "composite") => (t === "prime" ? "stroke-[var(--prime)]" : "stroke-[var(--composite)]");
  const toneFill = (t: "prime" | "composite") => (t === "prime" ? "fill-[var(--prime)]" : "fill-[var(--composite)]");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-[320px]" role="img">
      {xTicks.map((x) => (
        <line key={`gx${x}`} x1={sx(x)} y1={0} x2={sx(x)} y2={h} className="stroke-[var(--grid-line)]" strokeWidth={1} />
      ))}
      {yTicks.map((y) => (
        <line key={`gy${y}`} x1={0} y1={sy(y)} x2={w} y2={sy(y)} className="stroke-[var(--grid-line)]" strokeWidth={1} />
      ))}

      {yMin <= 0 && yMax >= 0 && <line x1={0} y1={sy(0)} x2={w} y2={sy(0)} className="stroke-[var(--ink-faint)]" strokeWidth={1.5} />}
      {xMin <= 0 && xMax >= 0 && <line x1={sx(0)} y1={0} x2={sx(0)} y2={h} className="stroke-[var(--ink-faint)]" strokeWidth={1.5} />}

      {xTicks
        .filter((x) => x !== 0)
        .map((x) => (
          <text key={`xl${x}`} x={sx(x)} y={sy(0) + 14} textAnchor="middle" className="fill-[var(--ink-faint)]" fontSize={10} fontFamily="IBM Plex Mono, monospace">
            {x}
          </text>
        ))}
      {yTicks
        .filter((y) => y !== 0)
        .map((y) => (
          <text key={`yl${y}`} x={sx(0) - 6} y={sy(y) + 3} textAnchor="end" className="fill-[var(--ink-faint)]" fontSize={10} fontFamily="IBM Plex Mono, monospace">
            {y}
          </text>
        ))}

      {verticalTestX !== undefined && (
        <line x1={sx(verticalTestX)} y1={0} x2={sx(verticalTestX)} y2={h} className="stroke-[var(--redpen)]" strokeWidth={1.5} strokeDasharray="5 4" />
      )}

      {segments?.map((s, i) => (
        <g key={`seg${i}`}>
          <line
            x1={sx(s.from.x)}
            y1={sy(s.from.y)}
            x2={sx(s.to.x)}
            y2={sy(s.to.y)}
            className="stroke-[var(--ink-faint)]"
            strokeWidth={1.5}
            strokeDasharray={s.dashed ? "4 3" : undefined}
          />
          {s.label && (
            <text
              x={(sx(s.from.x) + sx(s.to.x)) / 2}
              y={(sy(s.from.y) + sy(s.to.y)) / 2 - 5}
              textAnchor="middle"
              className="fill-[var(--ink-soft)]"
              fontSize={10}
              fontFamily="IBM Plex Mono, monospace"
            >
              {s.label}
            </text>
          )}
        </g>
      ))}

      {path && path.length > 1 && (
        <polyline points={path.map((p) => `${sx(p.x)},${sy(p.y)}`).join(" ")} fill="none" className={toneStroke(tone)} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      )}
      {path2 && path2.length > 1 && (
        <polyline points={path2.map((p) => `${sx(p.x)},${sy(p.y)}`).join(" ")} fill="none" className={toneStroke(tone2)} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      )}

      {points?.map((p, i) => (
        <g key={i}>
          <circle cx={sx(p.x)} cy={sy(p.y)} r={4} className={`${toneFill(tone)} stroke-[var(--surface)]`} strokeWidth={1.5} />
          {p.label && (
            <text x={sx(p.x) + 8} y={sy(p.y) - 7} className="fill-[var(--ink)]" fontSize={11} fontFamily="IBM Plex Mono, monospace">
              {p.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
