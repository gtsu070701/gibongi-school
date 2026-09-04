import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter67() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 67강"
        prevLink="지난 시간: 단항식의 곱셈과 나눗셈 → 오늘: 일차식의 곱셈과 나눗셈"
        title="일차식의 곱셈과 나눗셈"
        lede="단항식을 다항식에 곱하거나 나눌 때는, 모든 항에 빠짐없이 적용해야 한다 — 분배법칙이 여기서도 그대로 통한다."
      />

      <Section num="01" title="전개 — 모든 항에 곱한다" sub="단항식을 다항식에 곱할 때는, 다항식 안의 모든 항에 하나씩 곱해준다. 이것이 전개(展開)다.">
        <Card>
          <EqRow center>x(2x − 5y) = x × 2x + x × (−5y)</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>2x² − 5xy</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>곱셈에 대한 분배법칙 — 항이 몇 개든 빠짐없이 하나씩 곱해줘야 한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="다항식을 단항식으로 나누기" sub="나눗셈도 마찬가지 — 다항식의 모든 항을 각각 그 단항식으로 나눈다.">
        <Card>
          <EqRow center>(4x² − 2x) ÷ 2x = 4x²/2x − 2x/2x</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>2x − 1</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실전 — 필요한 항만 뽑아내기" sub="전체를 다 전개할 필요 없이, 묻는 항의 계수만 골라 계산하면 훨씬 빠르다.">
        <Card>
          <EqRow center>x(2x − 3y) + y(3x + 2y)에서 xy의 계수는?</EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">xy항만 모으면 −3xy + 3xy = 0xy → xy항이 사라진다.</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 전개">
            단항식을 다항식의 모든 항에 곱한다.
          </SummaryTile>
          <SummaryTile idx="02 나눗셈">
            다항식의 모든 항을 각각 나눈다.
          </SummaryTile>
          <SummaryTile idx="03 실전 요령">
            전체를 다 펼치지 말고 필요한 항만 골라 계산한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 67강 · 일차식의 곱셈과 나눗셈</PageFooter>
    </>
  );
}
