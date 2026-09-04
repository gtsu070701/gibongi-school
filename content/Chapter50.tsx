import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter50() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 50강"
        prevLink="지난 시간: 원의 성질 → 오늘: 두 점 사이의 거리"
        title="두 점 사이의 거리"
        lede="중학교 도형이 끝나고 이제 고1 과정 — 좌표평면 위의 점, 직선, 원을 다루는 첫걸음. 시작은 두 점 사이의 거리다."
      />

      <Section num="01" title="좌표로 점의 위치를 표현하기" sub="축이 몇 개냐에 따라 점을 표현하는 데 필요한 숫자의 개수가 달라진다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="수직선 (1차원)">점 하나 = 좌표 하나, 예: A(2)</EqRow>
          <EqRow tag="좌표평면 (2차원)">점 하나 = 좌표 둘, 예: A(3, 4)</EqRow>
          <EqRow tag="좌표공간 (3차원)">점 하나 = 좌표 셋, 예: A(x, y, z)</EqRow>
        </div>
      </Section>

      <Section num="02" title="수직선 위 두 점 사이의 거리" sub="1차원에서는 간단하다 — 큰 좌표에서 작은 좌표를 빼면 끝.">
        <Card>
          <EqRow center highlight>
            두 점 사이의 거리 = 큰 좌표 − 작은 좌표
          </EqRow>
          <div className="mt-4">
            <Note center>둘 중 어느 쪽이 큰지 모를 때(문자로 주어졌을 때)는 한쪽에서 다른 쪽을 뺀 다음 절댓값을 붙이면 항상 양수인 거리가 나온다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="좌표평면 위 두 점 사이의 거리" sub="x좌표 차이와 y좌표 차이를 두 변으로 하는 직각삼각형을 만들면, 피타고라스 정리가 곧바로 거리 공식이 된다.">
        <Card>
          <CoordinatePlane
            xMin={-1}
            xMax={5}
            yMin={-1}
            yMax={4}
            points={[
              { x: 1, y: 1, label: "A(1, 1)" },
              { x: 4, y: 3, label: "B(4, 3)" },
            ]}
            path={[
              { x: 1, y: 1 },
              { x: 4, y: 3 },
            ]}
            segments={[
              { from: { x: 1, y: 1 }, to: { x: 4, y: 1 }, dashed: true, label: "3" },
              { from: { x: 4, y: 1 }, to: { x: 4, y: 3 }, dashed: true, label: "2" },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <ResultBadge>AB = √(3² + 2²) = √13</ResultBadge>
          </div>
          <div className="mt-4">
            <EqRow center highlight>
              AB = √{"{(x좌표 차이)² + (y좌표 차이)²}"}
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="04" title="동점과 정점 사이의 거리" sub="점 하나가 P(x, y)처럼 문자로 움직이는 동점이어도 공식은 완전히 똑같다.">
        <Card>
          <EqRow center>P(x, y)와 A(−1, 3) 사이의 거리 = √{"{(x+1)² + (y−3)²}"}</EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">문자 쪽에서 숫자 쪽을 빼는 습관을 들이면 부호 실수가 줄어든다.</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 1차원">
            수직선 위 거리 = 큰 좌표 − 작은 좌표.
          </SummaryTile>
          <SummaryTile idx="02 2차원">
            좌표평면 위 거리 = √{"{(x차이)² + (y차이)²}"}, 피타고라스 정리 그대로.
          </SummaryTile>
          <SummaryTile idx="03 동점">
            점이 문자로 주어져도 공식은 동일하게 적용된다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 50강 · 두 점 사이의 거리</PageFooter>
    </>
  );
}
