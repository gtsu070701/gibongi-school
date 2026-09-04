import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter52() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 52강"
        prevLink="지난 시간: 두 점 사이의 거리 → 오늘: 두 직선이 수직일 조건"
        title="두 직선이 수직일 조건"
        lede="두 직선이 수직으로 만날 때, 두 기울기 사이에는 아주 깔끔한 관계가 하나 숨어 있다."
      />

      <Section num="01" title="두 직선이 수직이면" sub="원점을 지나는 기울기 m, m′인 두 직선이 수직이라고 하자. 피타고라스 정리를 쓰면 관계식이 바로 나온다.">
        <Card>
          <CoordinatePlane
            xMin={-2}
            xMax={2}
            yMin={-2}
            yMax={2}
            path={[
              { x: -1, y: -2 },
              { x: 1, y: 2 },
            ]}
            path2={[
              { x: -2, y: 1 },
              { x: 2, y: -1 },
            ]}
            points={[{ x: 0, y: 0, label: "O" }]}
          />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">기울기 2인 직선(초록)과 기울기 −1/2인 직선(보라) — 곱하면 정확히 −1, 두 직선은 수직이다.</p>
        </Card>
      </Section>

      <Section num="02" title="두 직선이 수직일 조건" sub="x=1일 때 두 직선의 y값(m, m′)과 원점을 꼭짓점으로 하는 직각삼각형에 피타고라스 정리를 적용하면 이 결론이 나온다.">
        <Card>
          <EqRow center highlight>
            m × m′ = −1
          </EqRow>
          <div className="mt-4">
            <Note center>두 직선의 기울기를 곱하면 언제나 −1 — 이것이 두 직선이 서로 수직일 조건이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실전 — 역수를 취하고 부호를 바꾼다" sub="곱해서 −1이 되려면, 하나의 기울기를 역수로 바꾼 뒤 부호까지 반대로 바꾸면 된다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="기울기 2에 수직인 직선">기울기 = −1/2</EqRow>
          <EqRow tag="기울기 −3/4에 수직인 직선">기울기 = 4/3</EqRow>
          <EqRow tag="기울기 5에 수직인 직선">기울기 = −1/5</EqRow>
        </div>
        <div className="mt-3 flex justify-center">
          <ResultBadge>역수 + 부호 반전 = 수직인 직선의 기울기</ResultBadge>
        </div>
      </Section>

      <Section num="04" title="일반형에서 평행·수직·일치 판정" sub="ax+by+c=0 형태의 두 직선을 계수만 보고 바로 판정할 수 있다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="평행할 조건">a : a′ = b : b′ (단, c : c′는 다르다)</EqRow>
          <EqRow tag="일치할 조건">a : a′ = b : b′ = c : c′</EqRow>
          <EqRow tag="수직일 조건">aa′ + bb′ = 0</EqRow>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 수직 조건">
            두 직선이 수직 ⟺ 기울기의 곱이 −1.
          </SummaryTile>
          <SummaryTile idx="02 암산법">
            역수를 취하고 부호를 바꾸면 수직인 직선의 기울기.
          </SummaryTile>
          <SummaryTile idx="03 일반형">
            ax+by+c=0 꼴에서는 aa′+bb′=0이 수직 조건.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 52강 · 두 직선이 수직일 조건</PageFooter>
    </>
  );
}
