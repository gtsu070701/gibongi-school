import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const A = { x: 40, y: 160 };
const B = { x: 200, y: 160 };
const C = { x: 240, y: 60 };
const D = { x: 80, y: 60 };
const X = { x: 140, y: 110 };

export default function Chapter44() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 44강"
        prevLink="지난 시간: 삼각형의 외심과 내심 총정리 → 오늘: 평행사변형"
        title="평행사변형"
        lede="마주보는 변이 서로 평행한 사각형. 여기서 조건 하나씩 더 붙으면 직사각형, 마름모, 정사각형이 된다."
      />

      <Section num="01" title="평행사변형의 세 가지 성질" sub="두 쌍의 대변이 평행하다는 정의 하나에서, 이 세 가지가 자동으로 따라 나온다.">
        <Card>
          <Figure
            viewBox={[0, 0, 280, 200]}
            shapes={[
              { kind: "polygon", points: [A, B, C, D], tone: "neutral" },
              { kind: "line", a: A, b: C, tone: "prime" },
              { kind: "line", a: B, b: D, tone: "composite" },
              { kind: "point", p: X, label: "교점", labelOffset: { x: 6, y: -6 } },
              { kind: "point", p: A, label: "A", labelOffset: { x: -14, y: 4 } },
              { kind: "point", p: B, label: "B", labelOffset: { x: 6, y: 4 } },
              { kind: "point", p: C, label: "C", labelOffset: { x: 6, y: -6 } },
              { kind: "point", p: D, label: "D", labelOffset: { x: -14, y: -6 } },
            ]}
          />
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Chip>대변의 길이가 서로 같다</Chip>
            <Chip>대각의 크기가 서로 같다</Chip>
            <Chip>두 대각선이 서로 이등분한다</Chip>
          </div>
        </Card>
      </Section>

      <Section num="02" title="이웃한 두 각의 합" sub="평행선과 한 변이 만들어내는 관계 — 대변이 평행하니, 이웃한 두 내각은 항상 이 값이 된다.">
        <Card>
          <EqRow center highlight>
            이웃한 두 각의 합 = 180도
          </EqRow>
          <div className="mt-4">
            <Note center>AD와 BC가 평행하므로, 한 변(AB)을 가로지르는 두 각은 동측내각 관계 — 합이 180도.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="특별한 평행사변형들" sub="평행사변형의 성질은 모두 그대로 가지면서, 조건이 하나씩 더 붙는다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="평행사변형 + 대각선 길이가 같다">직사각형</EqRow>
          <EqRow tag="평행사변형 + 대각선이 수직으로 만난다">마름모</EqRow>
          <EqRow tag="직사각형과 마름모의 조건을 모두 만족">정사각형</EqRow>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 정의">
            대변이 평행 → 대변·대각 같고, 대각선은 서로 이등분.
          </SummaryTile>
          <SummaryTile idx="02 각">
            이웃한 두 각의 합은 항상 180도.
          </SummaryTile>
          <SummaryTile idx="03 특수형">
            직사각형·마름모·정사각형은 조건이 하나씩 더 붙은 평행사변형.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 44강 · 평행사변형</PageFooter>
    </>
  );
}
