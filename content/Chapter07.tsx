import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter07() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 7강"
        prevLink="지난 시간: 다항식과 일차식 → 오늘: 지수법칙"
        title="지수법칙"
        lede="지수는 곱한 횟수다. 이 한 문장에서 곱셈·나눗셈·거듭제곱의 지수법칙 네 가지가 전부 자연스럽게 나온다."
      />

      <Section num="01" title="지수와 밑" sub={<>aⁿ은 a를 <b>n번 곱했다</b>는 뜻이다. a는 밑, n은 지수.</>}>
        <Card>
          <EqRow center highlight>
            a³ = a × a × a
          </EqRow>
        </Card>
      </Section>

      <Section num="02" title="법칙 1 · 2 — 곱하면 더하고, 나누면 뺀다" sub="지수끼리의 덧셈·뺄셈으로 곱셈·나눗셈을 대신할 수 있다.">
        <CompareRow>
          <CompareCard kicker="법칙 1 · 곱셈" title="aᵐ × aⁿ = aᵐ⁺ⁿ" highlight>
            a를 m번, 또 n번 곱하면 결국 a를 (m+n)번 곱한 것과 같다.
          </CompareCard>
          <CompareCard kicker="법칙 2 · 나눗셈" title="aᵐ ÷ aⁿ = aᵐ⁻ⁿ">
            분수로 바꿔서 약분해보면, 밑에 있는 a가 위에 있는 a를 지수만큼 상쇄시킨다.
          </CompareCard>
        </CompareRow>
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="법칙 1">a³ × a² = a⁵</EqRow>
            <EqRow tag="법칙 2">a⁵ ÷ a³ = a²</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="법칙 3 — 거듭제곱의 거듭제곱" sub="지수와 지수가 붙어 있으면 곱해서 하나로 합칠 수 있다.">
        <Card>
          <EqRow center highlight>
            (aᵐ)ⁿ = aᵐˣⁿ
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              (a³)² = <b style={{ color: "var(--prime)" }}>a⁶</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>지수끼리는 자리도 바꿀 수 있다 — (a³)² = (a²)³, 둘 다 a⁶.</Note>
          </div>
        </Card>
      </Section>

      <Section num="04" title="법칙 4 — 곱꼴·분수꼴의 지수는 각각에게" sub="괄호 안이 곱이나 분수라면, 지수를 안에 있는 각각에게 나눠줄 수 있다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="곱꼴">(ab)³ = a³b³</EqRow>
            <EqRow tag="분수꼴">(a/b)³ = a³/b³</EqRow>
          </div>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              (a²b³/c²)² = <b style={{ color: "var(--prime)" }}>a⁴b⁶/c⁴</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 곱·나눗셈">
            곱하면 지수를 더하고, <span className="text-[var(--ink-soft)]">나누면 지수를 뺀다.</span>
          </SummaryTile>
          <SummaryTile idx="02 거듭제곱">
            지수가 겹치면 곱한다. <span className="text-[var(--ink-soft)]">자리도 바꿀 수 있다.</span>
          </SummaryTile>
          <SummaryTile idx="03 곱·분수꼴">
            지수를 안에 있는 각각에게. <span className="text-[var(--ink-soft)]">(ab)ⁿ=aⁿbⁿ, (a/b)ⁿ=aⁿ/bⁿ.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 7강 · 지수법칙</PageFooter>
    </>
  );
}
