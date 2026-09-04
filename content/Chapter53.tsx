import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

const CIRCLE_CENTER = { x: 1, y: 1 };
const CIRCLE_R = 2;
const circlePath = Array.from({ length: 25 }, (_, i) => {
  const t = (i / 24) * Math.PI * 2;
  return { x: CIRCLE_CENTER.x + CIRCLE_R * Math.cos(t), y: CIRCLE_CENTER.y + CIRCLE_R * Math.sin(t) };
});

export default function Chapter53() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 53강"
        prevLink="지난 시간: 두 직선이 수직일 조건 → 오늘: 원의 방정식"
        title="원의 방정식"
        lede="원의 정의를 좌표로 옮기면 곧바로 방정식이 나온다 — 필요한 건 딱 두 가지, 중심과 반지름."
      />

      <Section num="01" title="원의 정의" sub="한 정점(중심)으로부터 같은 거리(반지름)에 있는 점들의 자취 — 그게 바로 원이다.">
        <Card>
          <CoordinatePlane xMin={-2} xMax={4} yMin={-2} yMax={4} path={circlePath} points={[{ x: 1, y: 1, label: "중심(a, b)" }]} />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">중심에서 원 위의 어느 점까지도 거리는 똑같이 r — 이 조건 하나가 원의 방정식을 만든다.</p>
        </Card>
      </Section>

      <Section num="02" title="원의 방정식 유도" sub="원 위의 임의의 점 (x, y)와 중심 (a, b) 사이의 거리가 항상 r이라는 조건을, 두 점 사이의 거리 공식으로 쓰면 끝난다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="거리 조건">√{"{(x−a)² + (y−b)²}"} = r</EqRow>
            <EqRow tag="양변 제곱 (루트 제거)">(x−a)² + (y−b)² = r²</EqRow>
          </div>
          <div className="mt-4">
            <Note center>모든 도형의 방정식은 &ldquo;그 도형 위의 임의의 점의 x, y 사이의 관계식&rdquo;이다 — 원도 예외가 아니다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="원의 방정식의 표준형" sub="좌변은 x에 관한 완전제곱식과 y에 관한 완전제곱식의 합, 우변은 반지름의 제곱.">
        <Card>
          <EqRow center highlight>
            (x − a)² + (y − b)² = r²
          </EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">좌변을 0으로 만드는 x값·y값이 각각 중심의 x좌표·y좌표, 우변에 루트를 씌우면 반지름.</p>
        </Card>
      </Section>

      <Section num="04" title="예제 — 양방향으로 오가기" sub="중심·반지름으로 방정식을 세울 수도, 방정식을 보고 중심·반지름을 읽을 수도 있어야 한다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="중심(2, −1), 반지름 4">(x−2)² + (y+1)² = 16</EqRow>
          <EqRow tag="x² + (y−3)² = 9">중심(0, 3), 반지름 3</EqRow>
        </div>
        <div className="mt-3 flex justify-center">
          <ResultBadge>도형의 방정식 = 그 도형 위의 모든 점이 만족하는 x, y의 관계식</ResultBadge>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 정의">
            중심으로부터 같은 거리(반지름)에 있는 점들의 자취.
          </SummaryTile>
          <SummaryTile idx="02 방정식">
            (x−a)² + (y−b)² = r² — 두 점 사이의 거리 공식에서 유도.
          </SummaryTile>
          <SummaryTile idx="03 필요 조건">
            원을 결정하려면 중심과 반지름, 두 가지만 있으면 된다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 53강 · 원의 방정식</PageFooter>
    </>
  );
}
