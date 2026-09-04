import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter08() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 8강"
        prevLink="지난 시간: 지수법칙 → 오늘: 완전제곱식과 다항식 곱셈"
        title="완전제곱식과 다항식 곱셈"
        lede="(a+b)²을 외울 때 '부호가 그대로 간다'고 외우면 틀린다. 세 조각을 곱해서 만든다고 이해해야 부호가 바뀌어도 흔들리지 않는다."
      />

      <Section num="01" title="완전제곱식 — 세 조각을 곱한다" sub={<>(a+b)² = a+b를 두 번 곱한 것. 앞에 거 제곱, <b>2 × 앞에 거 × 뒤에 거</b>, 뒤에 거 제곱.</>}>
        <Card>
          <EqRow center highlight>
            (a + b)² = a² + 2ab + b²
          </EqRow>
          <div className="mt-4">
            <Note center>가운데 항은 &ldquo;부호가 그대로 간다&rdquo;가 아니라 2 · 앞 · 뒤, 세 개를 곱한 결과다. 그래서 부호가 바뀌어도 공식은 하나뿐이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="부호가 있어도 똑같다" sub="앞에 거, 뒤에 거를 부호까지 통째로 잡고 그대로 대입하면 끝.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="앞: x, 뒤: −2y">(x − 2y)² = x² − 4xy + 4y²</EqRow>
            <EqRow tag="앞: −3, 뒤: 2x">(−3 + 2x)² = 9 − 12x + 4x²</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="다항식 곱셈, 우아하게 전개하기" sub="다 나열한 뒤 마지막에 동류항을 정리하지 말고, 같은 차수끼리 미리 알고 바로 모아 쓴다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="3차 항 — 최고차끼리">x³</EqRow>
            <EqRow tag="2차 항 — 두 조합을 미리 더해서">−4x²</EqRow>
            <EqRow tag="1차 항 — 두 조합을 미리 더해서">+5x</EqRow>
            <EqRow tag="상수항">−6</EqRow>
          </div>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              (x² − x + 2)(x + 3) = <b style={{ color: "var(--prime)" }}>x³ − 4x² + 5x − 6</b>
            </ResultBadge>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>2차의 계수만 필요하다면 굳이 다 전개할 필요도 없다. 2차를 만드는 조합만 찾아서 바로 더하면 된다.</span>
          </p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 완전제곱식">
            앞 제곱, 2×앞×뒤, 뒤 제곱. <span className="text-[var(--ink-soft)]">부호까지 통째로 대입한다.</span>
          </SummaryTile>
          <SummaryTile idx="02 다항식 곱셈">
            같은 차수를 만드는 조합을 먼저 찾는다. <span className="text-[var(--ink-soft)]">나열 후 정리보다 빠르다.</span>
          </SummaryTile>
          <SummaryTile idx="03 필요한 항만">
            특정 차수의 계수만 필요하면 그 조합만 계산한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 8강 · 완전제곱식 · 다항식 곱셈</PageFooter>
    </>
  );
}
