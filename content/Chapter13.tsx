import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter13() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 13강"
        prevLink="지난 시간: 곱셈공식의 변형 → 오늘: 항등식"
        title="항등식"
        lede="등식에는 두 종류가 있다. 특정 x에서만 성립하는 방정식, 그리고 모든 x에서 성립하는 항등식. 오늘은 항등식에서 미정계수를 구하는 법."
      />

      <Section num="01" title="방정식 vs 항등식" sub="특정 x에서만 성립하는가, 모든 x에서 성립하는가 — 그 차이가 등식의 종류를 가른다.">
        <CompareRow>
          <CompareCard kicker="특정 x만 성립" title="방정식">
            x² = x는 x=0, 1에서만 성립한다. 이 x 값을 근(해)이라 하고, 방정식의 목적은 이 근을 찾는 것이다.
          </CompareCard>
          <CompareCard kicker="모든 x에서 성립" title="항등식" highlight>
            좌변과 우변이 완전히 똑같이 생겨서, 어떤 x를 넣어도 항상 성립한다. 목적은 x를 찾는 게 아니라 미정계수를 찾는 것.
          </CompareCard>
        </CompareRow>
        <div className="mt-4">
          <Note center>모든 x, 임의의 x, x 값에 관계없이 — 이 세 표현은 전부 &ldquo;항등식&rdquo;을 가리키는 신호다.</Note>
        </div>
      </Section>

      <Section num="02" title="방법 1 · 계수비교법" sub="좌변과 우변이 그대로 복사된 모양이어야 하므로, 같은 차수의 계수끼리 비교한다.">
        <Card>
          <EqRow center>2x² + ax + 5 = bx² + x + 5</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="2차 계수 비교">2 = b</EqRow>
            <EqRow tag="1차 계수 비교">a = 1</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              a = 1, b = 2 → a + b = <b style={{ color: "var(--prime)" }}>3</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="방법 2 · 수치대입법" sub="항등식은 아무 x나 대입해도 성립한다는 정의를 그대로 이용한다.">
        <Card>
          <EqRow center>ax + 7 = bx + 6 + x</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="x = 0 대입">7 = 6</EqRow>
          </div>
          <p className="text-center text-xs text-[var(--ink-faint)]">괄호가 많아 계수를 비교하기 번거로운 식일수록, 숫자를 직접 대입하는 쪽이 더 빠르다.</p>
        </Card>
      </Section>

      <Section num="04" title="방법 3 · 내림차순 정리법" sub="좌변이 내림차순으로 정리되어 있고 우변이 0이면, 모든 항의 계수를 그냥 0으로 놓으면 된다.">
        <Card>
          <EqRow center>(a − 1)x² + (b + 1)x + (c − 2) = 0</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="계수 = 0">a − 1 = 0, b + 1 = 0, c − 2 = 0</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              a = <b style={{ color: "var(--prime)" }}>1</b>, b = <b style={{ color: "var(--prime)" }}>−1</b>, c = <b style={{ color: "var(--prime)" }}>2</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 항등식">
            모든 x에서 성립하는 등식. <span className="text-[var(--ink-soft)]">목적은 미정계수 찾기.</span>
          </SummaryTile>
          <SummaryTile idx="02 세 가지 풀이법">
            계수비교법 · 수치대입법 · 내림차순 정리법.
          </SummaryTile>
          <SummaryTile idx="03 선택 기준">
            모양이 비슷하면 계수비교, <span className="text-[var(--ink-soft)]">복잡하면 수치대입.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 13강 · 항등식</PageFooter>
    </>
  );
}
