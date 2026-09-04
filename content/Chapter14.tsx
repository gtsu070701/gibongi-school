import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, Teaser } from "@/components/diagram/primitives";

export default function Chapter14() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 14강"
        prevLink="지난 시간: 항등식 → 오늘: 다항식 나눗셈과 나머지정리"
        title="항등식의 활용 — 다항식 나눗셈"
        lede="다항식 나눗셈이 나오면 무조건 항등식으로 고친다. A = B × Q + R. 이 한 문장이 나머지를 구하는 모든 방법의 출발점이다."
      />

      <Section num="01" title="나눗셈을 항등식으로" sub="A를 B로 나눴을 때 몫이 Q, 나머지가 R이라면, 몫은 곱하고 나머지는 더한다.">
        <Card>
          <EqRow center highlight>
            A = B × Q + R
          </EqRow>
          <div className="mt-4">
            <Note center>나눗셈에 관련된 이야기가 나오면 무조건 이 등식으로 바꾼다 — 이게 바로 x에 관한 항등식이 된다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="나머지의 차수 규칙" sub="나머지는 나누는 식보다 차수가 반드시 낮아야 한다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="나머지는 최대 1차">2차식으로 나누면</EqRow>
            <EqRow tag="나머지는 최대 2차">3차식으로 나누면</EqRow>
            <EqRow tag="나머지는 상수(0차)">1차식으로 나누면</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실전: 항등식으로 나머지 구하기" sub="x³−4x²+x−1을 x²−3x+2 = (x−1)(x−2)로 나눈 나머지를 구해보자.">
        <Card>
          <EqRow center>x³ − 4x² + x − 1 = (x − 1)(x − 2) × Q(x) + (ax + b)</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="x = 1 대입 — Q 항이 사라진다">a + b = −3</EqRow>
            <EqRow tag="x = 2 대입 — Q 항이 사라진다">2a + b = −7</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              나머지 = <b style={{ color: "var(--prime)" }}>−4x + 1</b>
            </ResultBadge>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>나누는 식을 0으로 만드는 x 값을 대입하면, 몰라도 되는 몫 Q(x)가 통째로 사라진다.</span>
          </p>
        </Card>
      </Section>

      <Section num="04" title="나머지정리 — 1차식으로 나눌 땐 대입 한 번" sub="1차식으로 나눈 나머지는 상수 하나뿐이라, 항등식을 세울 필요도 없이 대입 한 번으로 끝난다.">
        <Card>
          <EqRow center>x⁴ + x² + 1 을 x − 2로 나눈 나머지</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">x − 2를 0으로 만드는 x = 2를 그대로 대입</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              나머지 = 2⁴ + 2² + 1 = <b style={{ color: "var(--prime)" }}>21</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 나눗셈→항등식">
            A = B×Q+R. <span className="text-[var(--ink-soft)]">나눗셈이 보이면 무조건 이 꼴로.</span>
          </SummaryTile>
          <SummaryTile idx="02 나머지 차수">
            나누는 식보다 항상 낮다.
          </SummaryTile>
          <SummaryTile idx="03 나머지정리">
            1차식으로 나눌 때는 그 값을 그냥 대입하면 끝.
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">나머지가 0이면 어떻게 될까? 다음 강의는 인수정리와 조립제법.</Teaser>
      </Section>

      <PageFooter>fifty-days · 14강 · 항등식의 활용 · 나머지정리</PageFooter>
    </>
  );
}
