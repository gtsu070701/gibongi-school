import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter31() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 31강"
        prevLink="지난 시간: 함수의 그래프 → 오늘: 일차함수"
        title="다항함수와 일차함수"
        lede="고등 과정에서 배우는 함수는 결국 몇 종류 안 된다. 그중 가장 기본이자 시작점이 일차함수 — y가 x의 1차식인 함수다."
      />

      <Section num="01" title="다항함수 가족" sub="y가 x에 관한 다항식으로 되어 있으면 다항함수다. 그중 차수가 1인 것부터 시작한다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="1차식">y = 2x + 1 → 일차함수</EqRow>
            <EqRow tag="2차식">y = x² − 3x → 이차함수</EqRow>
            <EqRow tag="3차식">y = x³ + x → 삼차함수</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="일차함수의 정의" sub="y = ax + b (a≠0) 형태 — x에 관한 1차식으로 된 함수를 전부 일차함수라 부른다.">
        <Card>
          <EqRow center highlight>
            y = ax + b (a ≠ 0)
          </EqRow>
        </Card>
      </Section>

      <Section num="03" title="그래프를 그려보면 — 직선" sub="x값 몇 개에 대응하는 y값을 구해 점을 찍고 이으면, 모든 일차함수는 예외 없이 직선이 된다.">
        <Card>
          <CoordinatePlane
            xMin={-0.5}
            xMax={2.5}
            yMin={-0.5}
            yMax={9}
            path={[
              { x: 0, y: 5 },
              { x: 1.5, y: 9.5 },
            ]}
            points={[
              { x: 0, y: 5, label: "(0,5)" },
              { x: 1, y: 8, label: "(1,8)" },
            ]}
          />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">y = 3x + 5의 그래프 — 점 두 개만 찍어도 직선 전체가 결정된다</p>
          <div className="mt-4">
            <Note center>점 하나를 지나는 직선은 무수히 많지만, 두 점을 동시에 지나는 직선은 딱 하나뿐이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 다항함수">
            y가 x의 다항식인 함수. <span className="text-[var(--ink-soft)]">차수로 이름이 붙는다.</span>
          </SummaryTile>
          <SummaryTile idx="02 일차함수">
            y = ax + b (a≠0).
          </SummaryTile>
          <SummaryTile idx="03 그래프">
            모든 일차함수의 그래프는 직선이다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 31강 · 다항함수 · 일차함수</PageFooter>
    </>
  );
}
