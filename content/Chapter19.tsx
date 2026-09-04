import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard, Teaser } from "@/components/diagram/primitives";

export default function Chapter19() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 19강"
        prevLink="지난 시간: 정수와 유리수의 사칙연산 → 오늘: 루트"
        title="루트"
        lede="√a는 제곱해서 a가 되는 양수다. 표현할 방법이 없어서 그냥 기호로 약속한 것뿐 — 그 이상도 이하도 아니다."
      />

      <Section num="01" title="루트란 무엇인가" sub="양수 중에서 제곱해서 a가 되는 수를 √a라고 쓰기로 약속했다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="2를 제곱하면 4">√4 = 2</EqRow>
            <EqRow tag="표현할 방법이 없어 기호로 약속">√5 = 제곱해서 5가 되는 양수</EqRow>
          </div>
          <div className="mt-4">
            <Note center>√5는 2와 3 사이 어딘가의 수다. 정확히 표현할 방법이 없어서, 그냥 √5라고 쓰기로 약속한 것뿐이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="루트 안이 제곱수면 정수로 튀어나온다" sub="√ 안의 알맹이가 어떤 수의 제곱이면, 그 밑이 밖으로 튀어나온다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="16 = 4²">√16 = 4 → 유리수</EqRow>
            <EqRow tag="10은 제곱수가 아니다">√10 → 무리수</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="근호 안팎을 자유자재로" sub="안에 있는 제곱수는 밖으로, 밖에 있는 수는 제곱해서 안으로 넣을 수 있다.">
        <Card>
          <EqRow center>√12 = √(4 × 3)</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">4는 제곱수 → 밑 2가 밖으로</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              √12 = <b style={{ color: "var(--prime)" }}>2√3</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="04" title="전체 제곱 vs 안쪽 제곱 — 절댓값의 함정" sub="루트 전체를 제곱하면 알맹이가 그대로 나오지만, 루트 안쪽에서 제곱한 것은 절댓값으로 나온다.">
        <CompareRow>
          <CompareCard kicker="전체를 제곱" title="(√a)² = a">
            루트를 씌운 걸 통째로 제곱하면, 부호와 상관없이 알맹이가 그대로 튀어나온다.
          </CompareCard>
          <CompareCard kicker="안쪽에서 제곱" title="√(a²) = |a|" highlight>
            제곱한 걸 루트에 넣으면, 밑이 그대로 나오는 게 아니라 절댓값으로 나온다.
          </CompareCard>
        </CompareRow>
        <Card>
          <EqRow center>x가 1과 2 사이일 때, √(x−1)² + √(x−2)²을 간단히 하면?</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="x−1: 양수 → 그대로">√(x−1)² = x − 1</EqRow>
            <EqRow tag="x−2: 음수 → 마이너스 붙여서">√(x−2)² = −(x − 2)</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              (x−1) − (x−2) = <b style={{ color: "var(--prime)" }}>1</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 루트의 정의">
            제곱해서 a가 되는 양수. <span className="text-[var(--ink-soft)]">제곱수가 아니면 무리수.</span>
          </SummaryTile>
          <SummaryTile idx="02 안팎 이동">
            안의 제곱수는 밖으로, 밖의 수는 제곱해서 안으로.
          </SummaryTile>
          <SummaryTile idx="03 절댓값의 함정">
            (√a)²=a 이지만, √(a²)=|a|.
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">루트 안에 음수가 들어가면? 다음 강의는 복소수와 허수의 시작.</Teaser>
      </Section>

      <PageFooter>fifty-days · 19강 · 루트</PageFooter>
    </>
  );
}
