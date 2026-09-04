import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter33() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 33강"
        prevLink="지난 시간: 기울기 → 오늘: 일차함수와 일차방정식"
        title="일차함수와 일차방정식"
        lede="직선은 y=ax+b(표준형)로도, ax+by+c=0(일반형)로도 쓸 수 있다. 일반형에서도 기울기와 y절편을 그림 없이 바로 읽는 법을 익힌다."
      />

      <Section num="01" title="표준형 vs 일반형" sub="표준형은 기울기와 y절편이 바로 보이지만, 일반형은 정리를 해야 보인다.">
        <CompareRow>
          <CompareCard kicker="표준형" title="y = ax + b" highlight>
            기울기 a와 y절편 b가 식에 바로 드러난다.
          </CompareCard>
          <CompareCard kicker="일반형" title="ax + by + c = 0">
            같은 직선이지만 기울기·y절편이 감춰져 있다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="02" title="일반형에서 바로 읽는 법" sub="y에 대해 정리하지 않아도, 계수만 보고 기울기와 y절편을 바로 뽑아낼 수 있다.">
        <Card>
          <EqRow center>3x − 4y + 1 = 0</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="기울기 = −(x계수)/(y계수)">−(3)/(−4) = 3/4</EqRow>
            <EqRow tag="y절편 = −(상수항)/(y계수)">−(1)/(−4) = 1/4</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              기울기 = <b style={{ color: "var(--prime)" }}>3/4</b>, y절편 = <b style={{ color: "var(--prime)" }}>1/4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="x = k와 y = k의 그래프" sub="x=k는 y축과 평행한 세로선, y=k는 x축과 평행한 가로선이다. 둘의 운명은 다르다.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <CoordinatePlane
              xMin={-4}
              xMax={4}
              yMin={-3}
              yMax={3}
              path={[
                { x: -2, y: -3 },
                { x: -2, y: 3 },
              ]}
              tone="composite"
            />
            <p className="mt-2 text-center text-sm text-[var(--ink-soft)]">x = −2 — 함수가 아니다</p>
          </Card>
          <Card>
            <CoordinatePlane
              xMin={-4}
              xMax={4}
              yMin={-3}
              yMax={3}
              path={[
                { x: -4, y: 2 },
                { x: 4, y: 2 },
              ]}
            />
            <p className="mt-2 text-center text-sm text-[var(--ink-soft)]">y = 2 — 상수함수</p>
          </Card>
        </div>
        <Card>
          <p className="text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            x=−2에서 세로선을 그으면 자기 자신과 무한히 겹친다 — 하나의 x에 y가 무수히 많으니 함수가 아니다. 반대로 y=2는 세로선을 어디에 그어도 딱 한 점에서만 만난다 — 함수다. y가 상수이기만 한 이 특수한 경우를 <b className="text-[var(--ink)]">상수함수</b>라 부른다.
          </p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 두 가지 형">
            표준형 y=ax+b, 일반형 ax+by+c=0.
          </SummaryTile>
          <SummaryTile idx="02 일반형 공식">
            기울기 = −(x계수)/(y계수), y절편 = −(상수)/(y계수).
          </SummaryTile>
          <SummaryTile idx="03 x=k, y=k">
            x=k는 함수가 아니다. <span className="text-[var(--ink-soft)]">y=k는 상수함수.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 33강 · 일차함수 · 일차방정식</PageFooter>
    </>
  );
}
