import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter32() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 32강"
        prevLink="지난 시간: 다항함수와 일차함수 → 오늘: 기울기"
        title="기울기"
        lede="기울기는 직선이 얼마나 기울어졌는지를 숫자로 나타낸 것이다. 밑변 분의 높이, 그리고 방향을 나타내는 부호 — 이 둘을 합치면 기울기다."
      />

      <Section num="01" title="기울기 = 밑변 분의 높이" sub="직선을 빗변으로 하는 직각삼각형을 그리면, 밑변과 높이의 비율이 바로 기울기의 절댓값이다.">
        <Card>
          <CoordinatePlane
            xMin={-2}
            xMax={4}
            yMin={0}
            yMax={13}
            path={[
              { x: -1.3, y: 2.6 },
              { x: 3.6, y: 13 },
            ]}
            points={[
              { x: -1, y: 4, label: "(−1,4)" },
              { x: 3, y: 12, label: "(3,12)" },
            ]}
            segments={[
              { from: { x: -1, y: 4 }, to: { x: 3, y: 4 }, dashed: true, label: "밑변 4" },
              { from: { x: 3, y: 4 }, to: { x: 3, y: 12 }, dashed: true, label: "높이 8" },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              기울기 = 4분의 8 = <b style={{ color: "var(--prime)" }}>2</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="기울기의 부호 — 방향" sub="오른쪽 끝이 올라가면 양수, 오른쪽 끝이 내려가면 음수다.">
        <CompareRow>
          <CompareCard kicker="오른쪽이 위로" title="양수 기울기" highlight>
            오른쪽으로 갈수록 y값이 커진다.
          </CompareCard>
          <CompareCard kicker="오른쪽이 아래로" title="음수 기울기">
            오른쪽으로 갈수록 y값이 작아진다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="03" title="기울기 공식 — x 증가량 분의 y 증가량" sub="그림을 그리지 않고도, 두 점의 좌표만으로 곧바로 기울기를 계산할 수 있다.">
        <Card>
          <EqRow center highlight>
            기울기 = (y 증가량) / (x 증가량)
          </EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="x: −1에서 3까지">Δx = 4</EqRow>
            <EqRow tag="y: 4에서 12까지">Δy = 8</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              기울기 = 8/4 = <b style={{ color: "var(--prime)" }}>2</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>x 증가량을 어느 방향으로 재든, y 증가량도 반드시 같은 방향으로 재야 한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="04" title="직선의 방정식 만들기" sub="기울기와 지나는 점 하나, 이 두 가지만 있으면 직선의 방정식을 완성할 수 있다.">
        <Card>
          <EqRow center>기울기 −1, 점 (3, 0)을 지나는 직선</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="y = ax + b에서 a는 기울기">y = −1x + b</EqRow>
            <EqRow tag="(3,0)을 대입해 b를 구한다">0 = −3 + b → b = 3</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              y = <b style={{ color: "var(--prime)" }}>−x + 3</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 기울기">
            밑변 분의 높이. <span className="text-[var(--ink-soft)]">오른쪽이 위면 양수, 아래면 음수.</span>
          </SummaryTile>
          <SummaryTile idx="02 공식">
            (y 증가량) / (x 증가량).
          </SummaryTile>
          <SummaryTile idx="03 직선의 방정식">
            기울기 + 지나는 점 하나면 완성된다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 32강 · 기울기</PageFooter>
    </>
  );
}
