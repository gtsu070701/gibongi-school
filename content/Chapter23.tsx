import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter23() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 23강"
        prevLink="지난 시간: 방정식 → 오늘: 연립방정식"
        title="연립방정식"
        lede="미지수가 두 개면 식도 두 개 필요하다. 두 식을 동시에 만족시키는 x, y를 찾는 것이 연립방정식의 목적이다."
      />

      <Section num="01" title="미지수 개수 = 필요한 식의 개수" sub="미지수가 하나면 식 하나로 풀리지만, 미지수가 두 개면 식도 두 개 있어야 값이 하나로 정해진다.">
        <Card>
          <EqRow center>x + y = 5</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">식 하나에 미지수 둘 → 만족하는 (x, y)가 무수히 많다</p>
          <div className="flex justify-center">
            <ResultBadge>
              식 두 개가 있어야 <b style={{ color: "var(--prime)" }}>x, y가 하나로 정해진다</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="가감법 — 더하거나 빼서 소거" sub="두 식을 더하거나 빼면 한 미지수가 사라진다. 계수가 안 맞으면 먼저 곱해서 맞춘다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow>2x − y = 3</EqRow>
            <EqRow>x + y = 9</EqRow>
          </div>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">두 식을 더하면 −y와 +y가 사라진다</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              3x = 12 → x = 4, y = <b style={{ color: "var(--prime)" }}>5</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="대입법 — 정리된 것을 그대로 대입" sub="한 문자에 대해 이미 정리된 식이 있다면, 가감법 없이 바로 대입하는 쪽이 더 빠르다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow>x − y = 3</EqRow>
            <EqRow highlight>x = 5 − y</EqRow>
          </div>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">(5 − y) − y = 3</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              y = 1, x = <b style={{ color: "var(--prime)" }}>4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 미지수와 식">
            미지수 개수만큼 식이 있어야 값이 정해진다.
          </SummaryTile>
          <SummaryTile idx="02 가감법">
            더하거나 빼서 미지수 하나를 소거한다.
          </SummaryTile>
          <SummaryTile idx="03 대입법">
            한 문자로 정리된 식이 있으면 바로 대입한다.
          </SummaryTile>
        </SummaryGrid>
        <CompareRow>
          <CompareCard kicker="선택 기준" title="계수가 안 맞으면 가감법" highlight>
            둘 다 항으로 섞여 있으면 계수를 맞춰서 더하거나 뺀다.
          </CompareCard>
          <CompareCard kicker="선택 기준" title="정리돼 있으면 대입법">
            한쪽이 이미 x= 또는 y= 형태면 대입이 훨씬 빠르다.
          </CompareCard>
        </CompareRow>
      </Section>

      <PageFooter>fifty-days · 23강 · 연립방정식</PageFooter>
    </>
  );
}
