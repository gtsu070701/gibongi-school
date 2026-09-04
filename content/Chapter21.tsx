import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter21() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 21강"
        prevLink="지난 시간: 복소수 → 오늘: 허수단위 i와 복소수"
        title="허수단위 i와 복소수"
        lede="i의 성질 하나를 더 배우고, 실수와 허수를 하나로 묶는 복소수 a+bi를 만난다. 모든 수는 이 한 가지 형태로 나타낼 수 있다."
      />

      <Section num="01" title="i의 두 번째 성질 — 연속된 네 개는 0" sub="i, i², i³, i⁴를 더하면 0이 된다. 그래서 지수가 연속된 정수일 때 네 개씩 묶으면 항상 0이다.">
        <Card>
          <EqRow center highlight>
            i + i² + i³ + i⁴ = i − 1 − i + 1 = 0
          </EqRow>
          <div className="mt-4">
            <Note center>연속된 지수의 i를 네 개씩 묶으면 계속 0이 사라진다 — 마지막에 몇 개 남는지만 보면 된다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="복소수 = 실수 + 허수" sub="모든 복소수는 실수 + 실수×i, 즉 a + bi 형태로 나타낼 수 있다.">
        <Card>
          <EqRow center highlight>
            모든 복소수 = a + bi (a, b는 실수)
          </EqRow>
          <div className="mt-4 flex flex-col gap-2">
            <EqRow tag="실수">3 = 3 + 0i</EqRow>
            <EqRow tag="허수">5i = 0 + 5i</EqRow>
            <EqRow tag="일반적인 복소수">1 + 2i</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실수부와 허수부" sub="a+bi에서 a를 실수부, i에 곱해진 b를 허수부라 부른다. 둘 다 실수다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="실수부 3 · 허수부 0">3</EqRow>
            <EqRow tag="실수부 0 · 허수부 5">5i</EqRow>
            <EqRow tag="실수부 1 · 허수부 2">1 + 2i</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="04" title="z가 실수·허수·순허수일 조건" sub="z = a+bi일 때, 허수부 b가 0인지 아닌지가 실수와 허수를 가른다.">
        <CompareRow>
          <CompareCard kicker="b = 0" title="z는 실수">
            허수부가 사라지면 남는 건 실수부뿐.
          </CompareCard>
          <CompareCard kicker="b ≠ 0" title="z는 허수" highlight>
            i항이 살아 있으면 무조건 허수.
          </CompareCard>
        </CompareRow>
        <Card>
          <EqRow center highlight>
            z가 순허수일 조건: a = 0 그리고 b ≠ 0
          </EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">실수부가 완전히 죽고, 허수부만 살아 있어야 순수하게 허수뿐인 순허수.</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 네 개씩 0">
            연속된 지수의 i는 4개씩 묶으면 0.
          </SummaryTile>
          <SummaryTile idx="02 복소수">
            모든 수는 a + bi 형태. <span className="text-[var(--ink-soft)]">a=실수부, b=허수부.</span>
          </SummaryTile>
          <SummaryTile idx="03 조건">
            실수: b=0 · 허수: b≠0 · 순허수: a=0이고 b≠0.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 21강 · 허수단위 i · 복소수</PageFooter>
    </>
  );
}
