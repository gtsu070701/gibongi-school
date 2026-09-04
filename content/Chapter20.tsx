import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, Chip, ChipRow } from "@/components/diagram/primitives";

export default function Chapter20() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 20강"
        prevLink="지난 시간: 루트 → 오늘: 복소수의 시작"
        title="복소수 — 허수단위 i"
        lede="제곱해서 음수가 되는 수는 실수가 아니다. 그런 수를 허수라 부르고, 그 기본 단위 √−1에 i라는 이름을 붙인다."
      />

      <Section num="01" title="실수와 허수" sub="실수는 제곱해서 0 이상, 허수는 실수가 아닌 수 — 즉 제곱해서 음수가 되는 수다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="실수">제곱해서 0보다 크거나 같은 수</EqRow>
            <EqRow tag="허수" highlight>
              실수가 아닌 수 — 제곱하면 음수가 되는 수
            </EqRow>
          </div>
          <div className="mt-4">
            <Note center>√−3은 제곱하면 −3이 되는 수다. 음수가 되니 실수가 아니고, 그래서 허수다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="허수단위 i" sub="루트 안의 알맹이가 음수인 모든 수는 √−1을 공통으로 갖고 있다. 그래서 이 √−1에 i라는 이름을 붙였다.">
        <Card>
          <EqRow center highlight>
            i = √−1
          </EqRow>
          <div className="mt-4 flex flex-col gap-2">
            <EqRow>√−3 = √3 × √−1 = √3 i</EqRow>
            <EqRow>√−9 = 3i</EqRow>
          </div>
          <div className="mt-4">
            <Note center>실수에 허수단위 i를 곱하면 허수가 된다. i가 조금이라도 들어 있으면 그 수는 허수다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="i의 거듭제곱은 4개로 순환한다" sub="i를 계속 곱하면 i, −1, −i, 1 네 값을 돌고 돌아 반복한다.">
        <Card>
          <ChipRow center>
            <Chip tone="prime">i¹ = i</Chip>
            <Chip tone="prime">i² = −1</Chip>
            <Chip tone="prime">i³ = −i</Chip>
            <Chip tone="prime">i⁴ = 1</Chip>
          </ChipRow>
          <div className="mt-4">
            <Note center>i²=−1이 가장 중요한 약속이다. 여기서 나머지 셋이 전부 나온다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="04" title="큰 지수는 4로 나눈 나머지로" sub="i의 지수가 아무리 커도, 4로 나눈 나머지만 알면 네 값 중 하나로 바로 정해진다.">
        <Card>
          <EqRow center>i¹⁰²의 값은?</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">102 ÷ 4 = 25 나머지 2 → i² 과 같다</p>
          <div className="flex justify-center">
            <ResultBadge>
              i¹⁰² = <b style={{ color: "var(--prime)" }}>−1</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 허수">
            실수가 아닌 수. <span className="text-[var(--ink-soft)]">제곱하면 음수가 된다.</span>
          </SummaryTile>
          <SummaryTile idx="02 허수단위 i">
            i = √−1, i² = −1.
          </SummaryTile>
          <SummaryTile idx="03 순환">
            i의 거듭제곱은 4개 값을 반복한다. <span className="text-[var(--ink-soft)]">지수를 4로 나눈 나머지로 판단.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 20강 · 복소수 · 허수단위 i</PageFooter>
    </>
  );
}
