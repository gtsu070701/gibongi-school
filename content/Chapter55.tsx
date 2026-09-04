import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

export default function Chapter55() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 55강"
        prevLink="지난 시간: 평행이동 완벽 요약 → 오늘: 부등식의 영역"
        title="부등식의 영역"
        lede="등식을 만족하는 점들은 선을 그린다. 부등식을 만족하는 점들은 그 선을 경계로 한 영역(면) 전체가 된다."
      />

      <Section num="01" title="등식은 선, 부등식은 영역" sub="x+y=1을 만족하는 점은 직선 위에만 있다. 하지만 x+y<1이나 x+y>1을 만족하는 점은 그 직선을 경계로 한쪽 면 전체다.">
        <Card>
          <CoordinatePlane
            xMin={-1}
            xMax={3}
            yMin={-1}
            yMax={3}
            path={[
              { x: -1, y: 2 },
              { x: 3, y: -2 },
            ]}
            points={[
              { x: 0, y: 0, label: "(0,0): x+y<1" },
              { x: 2, y: 2, label: "(2,2): x+y>1" },
            ]}
          />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">직선 x+y=1 기준으로, 위쪽 점들은 x+y가 1보다 크고 아래쪽 점들은 1보다 작다.</p>
        </Card>
      </Section>

      <Section num="02" title="위쪽은 크다, 아래쪽은 작다" sub="식을 y 기준으로 정리했을 때, 부등호가 y보다 크면 경계선 위쪽, 작으면 아래쪽이 답이다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="y > (경계선의 식)">경계선의 위쪽 영역</EqRow>
          <EqRow tag="y < (경계선의 식)">경계선의 아래쪽 영역</EqRow>
        </div>
        <div className="mt-4">
          <Note center>주의: y의 계수가 음수인 채로 부등호 방향만 보고 바로 판단하면 틀린다. 반드시 y 기준으로 정리한 다음 위/아래를 판정해야 한다.</Note>
        </div>
      </Section>

      <Section num="03" title="경계선 포함 여부" sub="등호가 있으면 경계선을 포함하고, 등호가 없으면 포함하지 않는다 — 이유는 간단하다, 등호를 만족시키는 게 바로 경계선이니까.">
        <div className="grid grid-cols-2 gap-2">
          <Chip>≥, ≤ → 경계선 포함</Chip>
          <Chip>{`>, < → 경계선 불포함`}</Chip>
        </div>
      </Section>

      <Section num="04" title="안 외우고 푸는 법 — 아무 점이나 대입" sub="위/아래 규칙이 헷갈릴 때는, 경계선 위에 있지 않은 아무 점(보통 원점)을 부등식에 직접 대입해보면 확실하다.">
        <Card>
          <EqRow center>경계선 밖의 점을 대입 → 성립하면 그 점이 있는 쪽이 답</EqRow>
          <div className="mt-4">
            <ResultBadge>원점 (0,0)을 가장 먼저 시도해본다 (단, 경계선이 원점을 지나지 않을 때)</ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 등식 vs 부등식">
            등식 → 선, 부등식 → 영역(면).
          </SummaryTile>
          <SummaryTile idx="02 방향">
            y 기준으로 정리해서 크면 위쪽, 작으면 아래쪽.
          </SummaryTile>
          <SummaryTile idx="03 검산">
            헷갈리면 경계선 밖의 아무 점을 대입해서 확인한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 55강 · 부등식의 영역</PageFooter>
    </>
  );
}
