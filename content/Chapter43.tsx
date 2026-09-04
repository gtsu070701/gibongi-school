import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const A = { x: 60, y: 150 };
const B = { x: 160, y: 40 };
const C = { x: 260, y: 150 };
const CIRCUM = { x: 160, y: 140 };
const IN = { x: 160, y: 106 };

export default function Chapter43() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 43강"
        prevLink="지난 시간: 원과 부채꼴 → 오늘: 삼각형의 외심과 내심 총정리"
        title="삼각형의 외심과 내심"
        lede="삼각형 안에는 특별한 점이 여럿 있다 — 세 변에서 똑같이 먼 점(외심), 세 변에서 똑같이 가까운 점(내심)."
      />

      <Section num="01" title="외심 — 세 꼭짓점까지 거리가 같은 점" sub="각 변의 수직이등분선 세 개가 만나는 한 점, 그것이 외심이다.">
        <Card>
          <Figure
            viewBox={[0, 0, 320, 200]}
            shapes={[
              { kind: "circle", c: CIRCUM, r: 100, tone: "prime", dashed: true },
              { kind: "polygon", points: [A, B, C], tone: "neutral" },
              { kind: "line", a: CIRCUM, b: A, tone: "prime", dashed: true },
              { kind: "line", a: CIRCUM, b: B, tone: "prime", dashed: true },
              { kind: "line", a: CIRCUM, b: C, tone: "prime", dashed: true },
              { kind: "point", p: CIRCUM, label: "외심", labelOffset: { x: 6, y: 4 }, tone: "prime" },
              { kind: "point", p: A, label: "A", labelOffset: { x: -14, y: 4 } },
              { kind: "point", p: B, label: "B", labelOffset: { x: -4, y: -10 } },
              { kind: "point", p: C, label: "C", labelOffset: { x: 6, y: 4 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>외심까지 거리 = 외접원의 반지름 (세 방향 모두 같다)</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="외심의 위치는 삼각형에 따라 달라진다" sub="예각삼각형이냐 둔각삼각형이냐 직각삼각형이냐에 따라 외심이 안에도, 밖에도, 변 위에도 있을 수 있다.">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Chip>예각삼각형 — 외심이 내부</Chip>
          <Chip>둔각삼각형 — 외심이 외부</Chip>
          <Chip>직각삼각형 — 외심이 빗변의 중점</Chip>
        </div>
      </Section>

      <Section num="03" title="내심 — 세 변까지 거리가 같은 점" sub="각의 이등분선 세 개가 만나는 한 점, 그것이 내심 — 내접원의 중심이다.">
        <Card>
          <Figure
            viewBox={[0, 0, 320, 200]}
            shapes={[
              { kind: "circle", c: IN, r: 44, tone: "composite", dashed: true },
              { kind: "polygon", points: [A, B, C], tone: "neutral" },
              { kind: "line", a: IN, b: A, tone: "composite", dashed: true },
              { kind: "line", a: IN, b: B, tone: "composite", dashed: true },
              { kind: "line", a: IN, b: C, tone: "composite", dashed: true },
              { kind: "point", p: IN, label: "내심", labelOffset: { x: 6, y: -6 }, tone: "composite" },
              { kind: "point", p: A, label: "A", labelOffset: { x: -14, y: 4 } },
              { kind: "point", p: B, label: "B", labelOffset: { x: -4, y: -10 } },
              { kind: "point", p: C, label: "C", labelOffset: { x: 6, y: 4 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>내심까지 거리 = 내접원의 반지름 (세 변에서 모두 같다)</EqRow>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">내심은 각의 이등분선의 교점이라 항상 삼각형 내부에 있다.</p>
        </Card>
      </Section>

      <Section num="04" title="내접원의 반지름 공식" sub="넓이와 둘레만 알면 내접원의 반지름을 바로 구할 수 있다.">
        <Card>
          <EqRow center highlight>
            r = 2 × 넓이 / (a + b + c)
          </EqRow>
          <div className="mt-4">
            <Note center>삼각형을 내심에서 세 조각으로 나누면, 각 조각의 넓이는 (밑변 × r)/2 — 세 조각을 더하면 전체 넓이가 되는 원리에서 나온 공식.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 외심">
            수직이등분선의 교점, 외접원의 중심.
          </SummaryTile>
          <SummaryTile idx="02 내심">
            각의 이등분선의 교점, 내접원의 중심.
          </SummaryTile>
          <SummaryTile idx="03 반지름">
            r = 2 × 넓이 / (a+b+c) — 내접원 반지름 공식.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 43강 · 삼각형의 외심과 내심 총정리</PageFooter>
    </>
  );
}
