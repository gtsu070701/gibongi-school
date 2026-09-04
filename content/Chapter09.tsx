import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, Teaser } from "@/components/diagram/primitives";

export default function Chapter09() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 9강"
        prevLink="지난 시간: 완전제곱식과 다항식 곱셈 → 오늘: 인수분해의 기본"
        title="인수분해의 기본 — 공통인수"
        lede="인수분해는 전개의 역과정이다. 다항식을 곱 꼴로 되돌리는 가장 기본적인 방법은, 모든 항에 공통으로 들어 있는 인수를 밖으로 뽑아내는 것."
      />

      <Section num="01" title="인수분해란 무엇인가" sub={<>전개는 곱 꼴을 다항식으로 펼치는 것, 인수분해는 그 <b>역과정</b> — 다항식을 곱 꼴로 되돌리는 것이다.</>}>
        <Card>
          <div className="flex flex-col items-center gap-2">
            <EqRow center>(x + 1)(x + 2)</EqRow>
            <span className="font-mono-num text-lg text-[var(--ink-faint)]">⇄ 전개 / 인수분해</span>
            <EqRow center highlight>
              x² + 3x + 2
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="공통인수 뽑아내기" sub="모든 항에 공통으로 들어 있는 인수를 찾아 괄호 밖으로 꺼내고, 남는 것을 괄호 안에 쓴다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="공통인수: x">2x² + x = x(2x + 1)</EqRow>
            <EqRow tag="공통인수: 3ab">3a²bc + 6ab² − 12ab = 3ab(ac + 2b − 4)</EqRow>
          </div>
          <div className="mt-4">
            <Note center>인수를 뽑아냈는데 아무것도 안 남는 자리는 반드시 1을 써준다 — 빈칸이 아니라 1이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="항이 통째로 공통인수일 때" sub="공통인수가 숫자나 문자 하나가 아니라 (x+1) 같은 다항식 덩어리일 수도 있다.">
        <Card>
          <EqRow center>(x + 1)(x + 2)² + (x + 1)(2x + 1)</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">↓ 공통인수 (x+1)을 뽑아낸다</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              = (x + 1) <b style={{ color: "var(--prime)" }}>{"{"}(x + 2)² + (2x + 1){"}"}</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 인수분해">
            전개의 역과정. <span className="text-[var(--ink-soft)]">다항식을 곱 꼴로 되돌린다.</span>
          </SummaryTile>
          <SummaryTile idx="02 공통인수">
            모든 항에 들어 있는 인수를 뽑아낸다. <span className="text-[var(--ink-soft)]">숫자든 다항식이든 상관없다.</span>
          </SummaryTile>
          <SummaryTile idx="03 뽑고 남는 자리">
            아무것도 안 남으면 1을 쓴다.
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">공통인수로는 안 풀리는 식도 있다 — 다음 강의에서 공식으로 인수분해하는 법을 정리한다.</Teaser>
      </Section>

      <PageFooter>fifty-days · 9강 · 인수분해 · 공통인수</PageFooter>
    </>
  );
}
