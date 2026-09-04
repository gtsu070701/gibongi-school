import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const A = { x: 40, y: 130 };
const B = { x: 150, y: 30 };
const C = { x: 260, y: 140 };
const D = { x: 304, y: 184 };

export default function Chapter40() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 40강"
        prevLink="지난 시간: 역함수 → 오늘: 삼각형의 내각과 외각"
        title="삼각형의 내각과 외각"
        lede="내각의 합은 언제나 180도. 그리고 한 외각의 크기는 그와 이웃하지 않는 두 내각의 합과 같다 — 여기서부터 도형의 합동으로 이어진다."
      />

      <Section num="01" title="내각의 합과 외각의 성질" sub="한 꼭짓점의 외각은 나머지 두 내각을 더한 것과 정확히 같다.">
        <Card>
          <Figure
            viewBox={[0, 0, 320, 200]}
            shapes={[
              { kind: "polygon", points: [A, B, C], tone: "neutral" },
              { kind: "line", a: C, b: D, tone: "neutral", dashed: true },
              { kind: "arc", c: A, r: 20, startDeg: -42, endDeg: 3, tone: "prime" },
              { kind: "arc", c: B, r: 18, startDeg: 45, endDeg: 138, tone: "prime" },
              { kind: "arc", c: C, r: 22, startDeg: 45, endDeg: 183, tone: "composite" },
              { kind: "point", p: A, label: "A", labelOffset: { x: -14, y: 8 } },
              { kind: "point", p: B, label: "B", labelOffset: { x: -4, y: -10 } },
              { kind: "point", p: C, label: "C", labelOffset: { x: 6, y: 4 } },
              { kind: "point", p: D, label: "외각", labelOffset: { x: 4, y: 4 }, tone: "composite" },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              외각(C) = <b style={{ color: "var(--prime)" }}>∠A + ∠B</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>외각과 그 옆의 내각을 더하면 180도, 세 내각의 합도 180도 — 이 둘을 겹쳐보면 외각 = 나머지 두 내각의 합이 자연스럽게 나온다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="도형의 합동 — 대응변과 대응각" sub="포개서 완전히 겹쳐지는 두 도형을 합동이라 한다. 겹쳐지는 변과 각을 각각 대응변, 대응각이라 부른다.">
        <Card>
          <EqRow center>△ABC ≡ △DEF</EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">대응 꼭짓점 순서대로 나란히 쓴다 — A↔D, B↔E, C↔F</p>
        </Card>
      </Section>

      <Section num="03" title="삼각형의 합동 조건 세 가지" sub="다음 셋 중 하나만 만족하면, 두 삼각형은 무조건 합동이다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="세 변의 길이가 각각 같다">SSS 합동</EqRow>
          <EqRow tag="두 변과 그 끼인각이 같다">SAS 합동</EqRow>
          <EqRow tag="한 변과 그 양 끝각이 같다">ASA 합동</EqRow>
        </div>
      </Section>

      <Section num="04" title="삼각형의 넓이 — 밑변과 높이는 짝" sub="넓이는 1/2 × 밑변 × 높이. 단 어느 변을 밑변으로 잡느냐에 따라 높이도 달라진다.">
        <Card>
          <EqRow center highlight>
            넓이 = (1/2) × 밑변 × 높이
          </EqRow>
          <div className="mt-4">
            <Note center>&ldquo;이 삼각형의 높이는?&rdquo;이라는 질문은 불완전하다 — 어떤 변을 밑변으로 잡았을 때의 높이인지부터 정해야 한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 내각·외각">
            내각의 합은 180도. <span className="text-[var(--ink-soft)]">외각 = 나머지 두 내각의 합.</span>
          </SummaryTile>
          <SummaryTile idx="02 합동 조건">
            SSS · SAS · ASA 중 하나만 맞으면 합동.
          </SummaryTile>
          <SummaryTile idx="03 넓이">
            밑변과 높이는 항상 짝을 이룬다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 40강 · 삼각형의 내각과 외각</PageFooter>
    </>
  );
}
