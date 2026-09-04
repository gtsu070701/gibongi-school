import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, Chip, ChipRow } from "@/components/diagram/primitives";

export default function Chapter10() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 10강"
        prevLink="지난 시간: 인수분해의 기본 → 오늘: 공식으로 인수분해하기"
        title="인수분해 총정리"
        lede="공통인수로 안 풀리는 식은 네 가지 패턴 중 하나를 의심한다. 완전제곱식, 합차공식, 두 수를 찾는 형태, 그리고 최고차항 계수가 1이 아닌 형태."
      />

      <Section num="01" title="패턴 1 · 완전제곱식 의심하기" sub="맨 앞과 맨 뒤가 둘 다 제곱수 형태면, 완전제곱식이 아닐지 의심해본다.">
        <Card>
          <EqRow center>x² − 10x + 25</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">x² = x², 25 = 5² → 완전제곱식 의심 → 가운데 항 확인: 2×x×5 = 10x ✓</p>
          <div className="flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>(x − 5)²</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="패턴 2 · 합차공식" sub="제곱 − 제곱 형태가 보이면 (앞+뒤)(앞−뒤)로 바로 분해된다.">
        <Card>
          <EqRow center highlight>
            a² − b² = (a + b)(a − b)
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              4y² − 9x² = <b style={{ color: "var(--prime)" }}>(2y + 3x)(2y − 3x)</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="패턴 3 · 최고차항 계수가 1일 때" sub="상수항을 곱해서 만드는 두 수 중, 더해서 1차항의 계수가 되는 두 수를 찾는다.">
        <Card>
          <EqRow center>x² + 5x + 6</EqRow>
          <div className="my-3 flex justify-center">
            <ChipRow>
              <Chip tone="prime">2 × 3 = 6</Chip>
              <Chip tone="prime">2 + 3 = 5</Chip>
            </ChipRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>(x + 2)(x + 3)</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>상수항이 양수면 두 수의 부호가 같고, 음수면 부호가 다르다 — 절댓값부터 찾고 부호를 나중에 정하면 편하다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="04" title="패턴 4 · 최고차항 계수가 1이 아닐 때" sub="세로로 두 쌍을 놓고 대각선끼리 곱해 더한 값이 1차항이 되는 조합을 찾을 때까지 시행착오한다.">
        <Card>
          <EqRow center>3x² − 16x + 5</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">3 = 3×1, 5 = 1×5 또는 5×1 — 대각선 곱의 합이 −16이 되는 조합을 찾는다</p>
          <div className="flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>(3x − 1)(x − 5)</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 완전제곱식">
            양끝이 제곱수면 의심하고 가운데를 확인한다.
          </SummaryTile>
          <SummaryTile idx="02 합차공식">
            제곱−제곱이 보이면 (합)(차)로 바로 분해.
          </SummaryTile>
          <SummaryTile idx="03 두 수 찾기">
            계수 1이면 곱·합으로, <span className="text-[var(--ink-soft)]">아니면 대각선으로 시행착오.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 10강 · 인수분해 총정리</PageFooter>
    </>
  );
}
