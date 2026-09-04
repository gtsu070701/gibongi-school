import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter59() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 59강"
        prevLink="지난 시간: 최대공약수 vs 최소공배수 → 오늘: 분수를 가장 쉽게 이해하는 법"
        title="분수를 가장 쉽게 이해하는 법"
        lede="약분·통분·역수 — 분수를 다루는 세 가지 기술은 전부 공약수와 공배수 개념 위에 세워져 있다."
      />

      <Section num="01" title="약분 — 공약수로 동시에 지운다" sub="분자와 분모를 소인수분해해서, 공통으로 들어 있는 인수를 동시에 지우는 것이 약분이다.">
        <Card>
          <EqRow center>24/42 = (2×2×2×3)/(2×3×7)</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              공약수 2, 3을 지우면 → <b style={{ color: "var(--prime)" }}>4/7</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>더 이상 약분할 수 없는 상태를 기약분수라 한다 — 분자와 분모가 서로소인 상태. 한 번에 끝내려면 최대공약수로 약분하면 된다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="통분 — 최소공배수로 분모를 맞춘다" sub="분모가 다른 분수는 더하거나 뺄 수 없다. 분모의 최소공배수로 통일시키면 계산할 수 있다.">
        <Card>
          <EqRow center>5/6 − 3/8</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">6과 8의 최소공배수 24로 통분</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              20/24 − 9/24 = <b style={{ color: "var(--prime)" }}>11/24</b>
            </ResultBadge>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">아무 공배수로나 통분해도 되지만, 최소공배수로 하면 숫자가 가장 작아 계산이 간단하다.</p>
        </Card>
      </Section>

      <Section num="03" title="분수의 곱셈 — 분자에만 곱한다" sub="분수에 어떤 수를 곱할 때는 분모가 아니라 분자에 곱한다.">
        <Card>
          <EqRow center highlight>
            (b/a) × c = (b × c) / a
          </EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">c를 두 번 더한 것이 c×2이듯, 분수를 두 번 더해도 분모는 그대로고 분자만 늘어난다.</p>
        </Card>
      </Section>

      <Section num="04" title="역수 — 곱해서 1이 되는 짝" sub="어떤 수의 역수는 분자와 분모를 뒤집은 것 — 둘을 곱하면 항상 1이 된다.">
        <Card>
          <EqRow center highlight>
            a/b 의 역수 = b/a (곱하면 항상 1)
          </EqRow>
          <div className="mt-4 flex justify-center">
            <ResultBadge>3의 역수 = 1/3, 5/8의 역수 = 8/5</ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 약분">
            공약수로 분자·분모를 동시에 지운다. <span className="text-[var(--ink-soft)]">최대공약수로 하면 한 번에 기약분수.</span>
          </SummaryTile>
          <SummaryTile idx="02 통분">
            최소공배수로 분모를 통일시킨다.
          </SummaryTile>
          <SummaryTile idx="03 곱셈·역수">
            분수의 곱셈은 분자에, 역수는 분자·분모를 뒤집으면 곱해서 1.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 59강 · 분수를 가장 쉽게 이해하는 법</PageFooter>
    </>
  );
}
