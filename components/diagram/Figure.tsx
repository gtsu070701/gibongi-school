export type GPoint = { x: number; y: number };
export type Tone = "prime" | "composite" | "unit" | "neutral" | "redpen";

type PolygonShape = { kind: "polygon"; points: GPoint[]; tone?: Tone; fill?: boolean };
type CircleShape = { kind: "circle"; c: GPoint; r: number; tone?: Tone; dashed?: boolean; fill?: boolean };
type LineShape = { kind: "line"; a: GPoint; b: GPoint; tone?: Tone; dashed?: boolean };
type ArcShape = { kind: "arc"; c: GPoint; r: number; startDeg: number; endDeg: number; tone?: Tone };
type PointShape = { kind: "point"; p: GPoint; label?: string; labelOffset?: GPoint; tone?: Tone };
type LabelShape = { kind: "label"; p: GPoint; text: string; tone?: Tone };
type RightAngleShape = { kind: "rightAngle"; at: GPoint; toward1: GPoint; toward2: GPoint; size?: number };

export type GShape = PolygonShape | CircleShape | LineShape | ArcShape | PointShape | LabelShape | RightAngleShape;

function toneVar(t?: Tone) {
  switch (t) {
    case "prime":
      return "var(--prime)";
    case "composite":
      return "var(--composite)";
    case "unit":
      return "var(--unit)";
    case "redpen":
      return "var(--redpen)";
    default:
      return "var(--ink)";
  }
}

function arcPath(c: GPoint, r: number, startDeg: number, endDeg: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const sx = c.x + r * Math.cos(toRad(startDeg));
  const sy = c.y + r * Math.sin(toRad(startDeg));
  const ex = c.x + r * Math.cos(toRad(endDeg));
  const ey = c.y + r * Math.sin(toRad(endDeg));
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  const sweep = endDeg > startDeg ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} ${sweep} ${ex} ${ey}`;
}

export function Figure({ viewBox, shapes }: { viewBox: [number, number, number, number]; shapes: GShape[] }) {
  const [minX, minY, w, h] = viewBox;

  return (
    <svg viewBox={`${minX} ${minY} ${w} ${h}`} className="mx-auto block w-full max-w-[320px]" role="img" style={{ aspectRatio: `${w}/${h}` }}>
      {shapes.map((s, i) => {
        if (s.kind === "polygon") {
          return (
            <polygon
              key={i}
              points={s.points.map((p) => `${p.x},${p.y}`).join(" ")}
              fill={s.fill ? toneVar(s.tone) : "none"}
              fillOpacity={s.fill ? 0.12 : undefined}
              stroke={toneVar(s.tone)}
              strokeWidth={2}
              strokeLinejoin="round"
            />
          );
        }
        if (s.kind === "circle") {
          return (
            <circle
              key={i}
              cx={s.c.x}
              cy={s.c.y}
              r={s.r}
              fill={s.fill ? toneVar(s.tone) : "none"}
              fillOpacity={s.fill ? 0.12 : undefined}
              stroke={toneVar(s.tone)}
              strokeWidth={2}
              strokeDasharray={s.dashed ? "5 4" : undefined}
            />
          );
        }
        if (s.kind === "line") {
          return (
            <line
              key={i}
              x1={s.a.x}
              y1={s.a.y}
              x2={s.b.x}
              y2={s.b.y}
              stroke={toneVar(s.tone)}
              strokeWidth={2}
              strokeDasharray={s.dashed ? "5 4" : undefined}
              strokeLinecap="round"
            />
          );
        }
        if (s.kind === "arc") {
          return <path key={i} d={arcPath(s.c, s.r, s.startDeg, s.endDeg)} fill="none" stroke={toneVar(s.tone)} strokeWidth={1.75} />;
        }
        if (s.kind === "rightAngle") {
          const size = s.size ?? 10;
          const d1x = s.toward1.x - s.at.x;
          const d1y = s.toward1.y - s.at.y;
          const len1 = Math.hypot(d1x, d1y) || 1;
          const u1x = (d1x / len1) * size;
          const u1y = (d1y / len1) * size;
          const d2x = s.toward2.x - s.at.x;
          const d2y = s.toward2.y - s.at.y;
          const len2 = Math.hypot(d2x, d2y) || 1;
          const u2x = (d2x / len2) * size;
          const u2y = (d2y / len2) * size;
          const p1 = { x: s.at.x + u1x, y: s.at.y + u1y };
          const p2 = { x: s.at.x + u1x + u2x, y: s.at.y + u1y + u2y };
          const p3 = { x: s.at.x + u2x, y: s.at.y + u2y };
          return <polyline key={i} points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`} fill="none" stroke="var(--ink-faint)" strokeWidth={1.5} />;
        }
        if (s.kind === "point") {
          return (
            <g key={i}>
              <circle cx={s.p.x} cy={s.p.y} r={2.8} fill={toneVar(s.tone)} />
              {s.label && (
                <text x={s.p.x + (s.labelOffset?.x ?? 6)} y={s.p.y + (s.labelOffset?.y ?? -6)} fontSize={11} fontFamily="IBM Plex Mono, monospace" fill="var(--ink)">
                  {s.label}
                </text>
              )}
            </g>
          );
        }
        if (s.kind === "label") {
          return (
            <text key={i} x={s.p.x} y={s.p.y} fontSize={11} fontFamily="IBM Plex Mono, monospace" fill={toneVar(s.tone)} textAnchor="middle">
              {s.text}
            </text>
          );
        }
        return null;
      })}
    </svg>
  );
}
