import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter18() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 18강"
        prevLink="지난 시간: 절댓값 → 오늘: 정수와 유리수의 사칙연산"
        title="정수와 유리수의 사칙연산과 혼합계산"
        lede="덧셈과 곱셈만 순서를 자유롭게 바꿀 수 있다. 뺄셈·나눗셈도 덧셈·곱셈으로 바꾸면 똑같은 자유를 얻는다. 그리고 음수는 홀짝으로 부호가 결정된다."
      />

      <Section num="01" title="교환법칙과 결합법칙 — 덧셈·곱셈만" sub="순서를 바꾸거나(교환) 묶는 위치를 바꿔도(결합) 결과가 같은 건 덧셈과 곱셈뿐이다.">
        <CompareRow>
          <CompareCard kicker="성립" title="덧셈 · 곱셈" highlight>
            a+b=b+a, a×b=b×a. 괄호를 어디에 묶어도 결과가 같다.
          </CompareCard>
          <CompareCard kicker="원래는 불성립" title="뺄셈 · 나눗셈">
            a−b≠b−a. 하지만 뺄셈을 &ldquo;음수의 덧셈&rdquo;으로, 나눗셈을 &ldquo;역수의 곱셈&rdquo;으로 바꾸면 똑같이 자유로워진다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="02" title="곱셈의 부호 규칙 — 음수는 홀짝으로 결정" sub="음수를 짝수 번 곱하면 양수, 홀수 번 곱하면 음수. 양수는 아무리 곱해도 부호가 그대로다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="음수 2개 — 짝수">(−2) × (−3) = +6</EqRow>
            <EqRow tag="음수 3개 — 홀수">(−2) × (−3) × (−1) = −6</EqRow>
          </div>
          <div className="mt-4">
            <Note center>부호 하나하나를 따라가지 말고, 음수의 개수만 세면 된다 — 짝수면 양수, 홀수면 음수.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="혼합계산의 순서" sub="거듭제곱을 가장 먼저 처리하고, 그다음 괄호, 그다음 곱셈·나눗셈, 마지막이 덧셈·뺄셈이다.">
        <Card>
          <EqRow center>2 × (−3)² − 12 ÷ 6</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="거듭제곱 먼저">(−3)² = 9</EqRow>
            <EqRow tag="곱셈·나눗셈">2 × 9 = 18, 12 ÷ 6 = 2</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              18 − 2 = <b style={{ color: "var(--prime)" }}>16</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 교환·결합법칙">
            덧셈과 곱셈만 성립. <span className="text-[var(--ink-soft)]">뺄셈·나눗셈은 바꿔서 활용.</span>
          </SummaryTile>
          <SummaryTile idx="02 곱셈 부호">
            음수 개수가 짝수면 양수, 홀수면 음수.
          </SummaryTile>
          <SummaryTile idx="03 계산 순서">
            거듭제곱 → 괄호 → ×÷ → +−.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 18강 · 정수와 유리수의 사칙연산</PageFooter>
    </>
  );
}
