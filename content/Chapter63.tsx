import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter63() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 63강"
        prevLink="지난 시간: 복소수 복습 → 오늘: 켤레복소수"
        title="켤레복소수"
        lede="복소수 a+bi에서 허수부의 부호만 뒤집으면 켤레복소수. 짝을 지으면 실수부는 두 배, 곱하면 항상 실수가 된다."
      />

      <Section num="01" title="켤레복소수 — 허수부의 부호만 반대로" sub="z = a+bi의 켤레복소수는 z̄ = a−bi. 실수부는 그대로, 허수부의 부호만 바꾼다.">
        <Card>
          <EqRow center highlight>
            z = a + bi 일 때, z̄ = a − bi
          </EqRow>
          <div className="mt-4">
            <Note center>실수부의 부호를 바꾸는 게 아니다 — 헷갈리기 쉬운 부분. i가 붙은 항, 허수부만 부호를 뒤집는다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="자기 자신과 켤레복소수의 합과 곱" sub="이 두 값은 항상 실수가 된다 — 시험에 자주 나오는 핵심 성질.">
        <div className="flex flex-col gap-2">
          <EqRow tag="합">z + z̄ = 2a (실수부의 2배)</EqRow>
          <EqRow tag="곱">z × z̄ = a² + b² (실수부 제곱 + 허수부 제곱)</EqRow>
        </div>
        <div className="mt-4">
          <Note center>곱은 곱셈공식 (a+bi)(a−bi) = a²−(bi)² = a²−b²i² = a²+b² 에서 그대로 나온다.</Note>
        </div>
      </Section>

      <Section num="03" title="실수·순허수의 켤레복소수" sub="실수는 자기 자신과 켤레복소수가 완전히 같다. 순허수는 부호만 반대다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="실수 (예: 5 = 5+0i)">켤레복소수도 5 — 완전히 같다</EqRow>
          <EqRow tag="순허수 (예: 3i = 0+3i)">켤레복소수는 −3i — 더하면 0</EqRow>
        </div>
      </Section>

      <Section num="04" title="두 복소수가 서로 같을 조건" sub="모든 계수가 실수일 때만 성립하는 이야기 — 실수부끼리, 허수부끼리 각각 같아야 한다.">
        <Card>
          <EqRow center highlight>
            a + bi = c + di (a,b,c,d 실수) ⟺ a=c 그리고 b=d
          </EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">우변이 0이면: a+bi=0 ⟺ a=0 그리고 b=0.</p>
        </Card>
        <div className="mt-4 flex justify-center">
          <ResultBadge>z=2−3i 일 때 z+z̄=4, z×z̄=4+9=13</ResultBadge>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 켤레복소수">
            허수부의 부호만 반대로 바꾼 복소수.
          </SummaryTile>
          <SummaryTile idx="02 합과 곱">
            합은 실수부의 2배, 곱은 a²+b² — 둘 다 항상 실수.
          </SummaryTile>
          <SummaryTile idx="03 같을 조건">
            모든 계수가 실수일 때, 실수부끼리 허수부끼리 각각 같아야 한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 63강 · 켤레복소수</PageFooter>
    </>
  );
}
