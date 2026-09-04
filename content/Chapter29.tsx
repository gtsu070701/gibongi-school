import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter29() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 29강"
        prevLink="지난 시간: abc÷abc 논란 → 오늘: 함수의 그래프"
        title="함수의 그래프"
        lede="대응 관계 x→y를 좌표평면 위의 점으로 찍은 것 — 그 점들의 집합이 그래프다. 선은 그저 점이 빽빽하게 모인 결과일 뿐이다."
      />

      <Section num="01" title="그래프란 — 대응 관계를 점으로" sub="x=1일 때 y=2라는 대응을, 좌표평면 위의 점 (1, 2)로 표현한다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="x=1, y=2의 대응">(1, 2)</EqRow>
            <EqRow tag="x=2, y=4의 대응">(2, 4)</EqRow>
            <EqRow tag="x=3, y=6의 대응">(3, 6)</EqRow>
          </div>
          <div className="mt-4">
            <Note center>점 하나하나가 &ldquo;누가 누구에게 화살을 쐈는가&rdquo;를 그대로 옮긴 것이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="y = 2x의 그래프" sub="x값 하나마다 y값을 계산해 점을 찍고 이어보면, 원점을 지나는 직선이 된다.">
        <Card>
          <CoordinatePlane
            xMin={-0.5}
            xMax={4}
            yMin={-0.5}
            yMax={7}
            path={[
              { x: 0, y: 0 },
              { x: 3.3, y: 6.6 },
            ]}
            points={[
              { x: 0, y: 0, label: "(0,0)" },
              { x: 1, y: 2, label: "(1,2)" },
              { x: 2, y: 4, label: "(2,4)" },
              { x: 3, y: 6, label: "(3,6)" },
            ]}
          />
        </Card>
      </Section>

      <Section num="03" title="함수 판정 — 세로선 하나로 테스트" sub="그래프 위에 세로선(y축과 평행한 직선)을 그었을 때, 한 점에서만 만나면 함수, 두 점 이상에서 만나면 함수가 아니다.">
        <CompareRow>
          <CompareCard kicker="한 점에서만 교차" title="함수다" highlight>
            어느 x에서 세로선을 그어도 그래프와 딱 한 번만 만난다 — 한 원소가 한 곳에만 대응.
          </CompareCard>
          <CompareCard kicker="두 점에서 교차" title="함수가 아니다">
            같은 x에서 y값이 두 개 나온다는 뜻 — 한 원소가 두 발을 쏜 것과 같다.
          </CompareCard>
        </CompareRow>
        <Card>
          <p className="mb-3 text-center text-sm text-[var(--ink-soft)]">x = 3에서 y가 2와 5, 두 개 존재하는 그래프</p>
          <CoordinatePlane
            xMin={-0.5}
            xMax={5}
            yMin={-0.5}
            yMax={6}
            verticalTestX={3}
            points={[
              { x: 3, y: 2, label: "(3,2)" },
              { x: 3, y: 5, label: "(3,5)" },
            ]}
            tone="composite"
          />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">세로선이 두 점을 동시에 지난다 → 함수가 아니다</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 그래프">
            대응 관계를 점으로 표현한 것.
          </SummaryTile>
          <SummaryTile idx="02 y=2x">
            점을 다 찍으면 원점을 지나는 직선이 된다.
          </SummaryTile>
          <SummaryTile idx="03 함수 판정">
            세로선을 그어 한 점에서만 만나는지 확인한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 29강 · 함수의 그래프</PageFooter>
    </>
  );
}
