import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, ChipRow, Chip, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard, Teaser } from "@/components/diagram/primitives";

export default function Chapter06() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 6강"
        prevLink="지난 시간: 소수의 사칙연산 → 오늘: 다항식과 일차식"
        title="다항식과 일차식"
        lede="플러스로 연결된 각각을 항이라 부른다. 항이 모여 다항식이 되고, 항마다 계수와 차수라는 이름표가 붙는다. 전개·인수분해로 가는 첫걸음."
      />

      <Section num="01" title="항이란 무엇인가" sub={<>+로 연결된 각각을 <b>항</b>이라 한다. 부호(−)까지가 항의 일부이고, × ÷로 연결된 것은 통째로 하나의 항이다.</>}>
        <Card>
          <div className="mb-4 flex justify-center">
            <EqRow center>2 + 3 − 1</EqRow>
          </div>
          <ChipRow center>
            <Chip tone="prime">2</Chip>
            <Chip tone="prime">3</Chip>
            <Chip tone="prime">−1</Chip>
          </ChipRow>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>
              항은 <b className="text-[var(--ink)]">3개</b>. 마지막 항은 &ldquo;1&rdquo;이 아니라 <b className="text-[var(--ink)]">&ldquo;−1&rdquo;</b> — 부호까지 같이 읽어야 한다.
            </span>
          </p>
        </Card>
      </Section>

      <Section num="02" title="다항식과 단항식" sub="항이 하나 이상 있으면 전부 다항식이다. 그중 항이 딱 하나뿐인 것을 단항식이라 부른다 — 단항식도 다항식의 한 종류.">
        <CompareRow>
          <CompareCard kicker="항 1개" title="단항식">
            예: 2x − 3, −6x. 곱셈·나눗셈으로만 이루어진 하나의 덩어리.
          </CompareCard>
          <CompareCard kicker="항 여러 개" title="다항식" highlight>
            예: x + 2y + 1 (항 3개). 단항식도 다항식에 포함되는 개념이다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="03" title="항의 이름표 — 계수와 차수" sub={<><b>계수</b>는 문자에 곱해진 숫자, <b>차수</b>는 문자가 곱해진 개수(지수)다. 숫자로만 된 항은 상수항이라 부른다.</>}>
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="x에 관한 1차항 · 계수 2">2x</EqRow>
            <EqRow tag="x에 관한 2차항 · 계수 1">x²</EqRow>
            <EqRow tag="y에 관한 1차항 · 계수 −5">−5y</EqRow>
            <EqRow tag="상수항">1</EqRow>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>
              2x + x² − 5y + 1은 항이 <b className="text-[var(--ink)]">4개</b>인 다항식이다.
            </span>
          </p>
        </Card>
      </Section>

      <Section num="04" title="최고차항과 다항식의 이름" sub="다항식 전체의 이름은 차수가 가장 높은 항(최고차항)의 차수로 붙인다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="2차항">x²</EqRow>
            <EqRow tag="1차항">−4x</EqRow>
            <EqRow highlight tag="3차항 — 최고차항">
              5x³
            </EqRow>
            <EqRow tag="상수항">5</EqRow>
          </div>
          <div className="mt-4">
            <ResultBadge>
              최고차항 = 5x³ → <b style={{ color: "var(--prime)" }}>x에 관한 3차식</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="05" title="정리하는 습관 — 내림차순" sub="차수가 높은 항부터 쓰는 것을 내림차순이라 한다. 다항식은 보통 내림차순으로 정리해서 쓴다.">
        <Card>
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">뒤섞인 채로 두면</span>
            <EqRow center>5x − 4x³ + 5 + x²</EqRow>
            <span className="font-mono-num text-lg text-[var(--ink-faint)]">↓ 내림차순 정리</span>
            <EqRow center highlight>
              −4x³ + x² + 5x + 5
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 항">
            +로 연결된 각각(부호 포함). <span className="text-[var(--ink-soft)]">×÷로 연결된 건 하나의 항.</span>
          </SummaryTile>
          <SummaryTile idx="02 다항식">
            항이 1개 이상인 식. <span className="text-[var(--ink-soft)]">항이 1개면 단항식.</span>
          </SummaryTile>
          <SummaryTile idx="03 최고차항">
            차수가 가장 높은 항. <span className="text-[var(--ink-soft)]">그 차수가 다항식 전체의 이름이 된다.</span>
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">항과 다항식의 이름을 다졌으니, 다음은 전개와 인수분해로 다항식을 자유자재로 다룰 차례.</Teaser>
      </Section>

      <PageFooter>fifty-days · 6강 · 다항식 · 일차식</PageFooter>
    </>
  );
}
