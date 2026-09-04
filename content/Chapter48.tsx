import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const O1 = { x: 120, y: 120 };
const CA = { x: 45, y: 170 };
const CB = { x: 195, y: 170 };
const M = { x: 120, y: 170 };

const O2 = { x: 120, y: 120 };
const P = { x: 230, y: 40 };
const T1 = { x: 184.5, y: 147.35 };
const T2 = { x: 113.85, y: 50.3 };

const O3 = { x: 120, y: 120 };
const A3 = { x: 35.43, y: 89.22 };
const B3 = { x: 204.57, y: 89.22 };
const C3 = { x: 120, y: 210 };

export default function Chapter48() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 48강"
        prevLink="지난 시간: 삼각비 → 오늘: 원의 성질"
        title="원의 성질"
        lede="중학교 도형 논증의 마지막 관문 — 현, 접선, 원주각. 이 세 가지 성질이 끝나면 도형 파트가 끝난다."
      />

      <Section num="01" title="현의 성질" sub="원의 중심에서 현에 내린 수선은 현을 수직이등분한다 — 역도 성립: 현의 수직이등분선은 반드시 중심을 지난다.">
        <Card>
          <Figure
            viewBox={[0, 0, 240, 200]}
            shapes={[
              { kind: "circle", c: O1, r: 90, tone: "neutral" },
              { kind: "line", a: CA, b: CB, tone: "composite" },
              { kind: "line", a: O1, b: M, tone: "prime" },
              { kind: "rightAngle", at: M, toward1: O1, toward2: CB },
              { kind: "point", p: O1, label: "O", labelOffset: { x: -14, y: -6 } },
              { kind: "point", p: M, label: "M", labelOffset: { x: 6, y: 4 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>중심 O에서 현까지의 수선의 발 M → AM = MB</EqRow>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">중심에서 같은 거리에 있는 두 현의 길이는 서로 같다 (역도 성립).</p>
        </Card>
      </Section>

      <Section num="02" title="접선의 성질" sub="원의 중심에서 접점까지 그은 선분(반지름)은 접선과 항상 수직이다. 원 밖 한 점에서 그은 두 접선의 길이는 서로 같다.">
        <Card>
          <Figure
            viewBox={[0, 0, 250, 200]}
            shapes={[
              { kind: "circle", c: O2, r: 70, tone: "neutral" },
              { kind: "line", a: O2, b: T1, tone: "prime" },
              { kind: "line", a: O2, b: T2, tone: "prime" },
              { kind: "line", a: P, b: T1, tone: "composite" },
              { kind: "line", a: P, b: T2, tone: "composite" },
              { kind: "rightAngle", at: T1, toward1: O2, toward2: P },
              { kind: "rightAngle", at: T2, toward1: O2, toward2: P },
              { kind: "point", p: O2, label: "O", labelOffset: { x: -14, y: -6 } },
              { kind: "point", p: P, label: "P", labelOffset: { x: 6, y: -4 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>PT₁ = PT₂ (원 밖 한 점에서 그은 두 접선의 길이는 같다)</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="원주각의 성질" sub="같은 호에 대한 중심각은 원주각의 두 배 — 뒤집으면 원주각은 중심각의 절반이다.">
        <Card>
          <Figure
            viewBox={[0, 0, 240, 240]}
            shapes={[
              { kind: "circle", c: O3, r: 90, tone: "neutral" },
              { kind: "line", a: O3, b: A3, tone: "prime" },
              { kind: "line", a: O3, b: B3, tone: "prime" },
              { kind: "line", a: C3, b: A3, tone: "composite" },
              { kind: "line", a: C3, b: B3, tone: "composite" },
              { kind: "arc", c: O3, r: 22, startDeg: 200, endDeg: 340, tone: "prime" },
              { kind: "arc", c: C3, r: 18, startDeg: -125, endDeg: -55, tone: "composite" },
              { kind: "point", p: O3, label: "중심각", labelOffset: { x: -34, y: 4 }, tone: "prime" },
              { kind: "point", p: C3, label: "원주각(C)", labelOffset: { x: -20, y: 14 }, tone: "composite" },
              { kind: "point", p: A3, label: "A", labelOffset: { x: -14, y: 4 } },
              { kind: "point", p: B3, label: "B", labelOffset: { x: 6, y: 4 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>중심각 = 2 × 원주각 (같은 호 AB에 대해)</EqRow>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <EqRow tag="지름에 대한 원주각">항상 90도</EqRow>
            <EqRow tag="같은 호에 대한 원주각">항상 서로 같다</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="04" title="호의 길이는 각의 크기에 비례" sub="중심각(또는 원주각)이 두 배가 되면 호의 길이도, 부채꼴의 넓이도 똑같이 두 배가 된다.">
        <Card>
          <Note center>중심각 30도 → 60도로 두 배가 되면, 호의 길이도 두 배, 부채꼴의 넓이도 두 배. 원주각도 마찬가지로 호의 길이에 정비례한다.</Note>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 현">
            중심에서 현에 내린 수선은 현을 이등분한다.
          </SummaryTile>
          <SummaryTile idx="02 접선">
            반지름과 접선은 수직, 두 접선의 길이는 같다.
          </SummaryTile>
          <SummaryTile idx="03 원주각">
            중심각의 절반, 지름에 대해서는 항상 90도.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 48강 · 원의 성질</PageFooter>
    </>
  );
}
