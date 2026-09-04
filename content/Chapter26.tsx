import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter26() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 26강"
        prevLink="지난 시간: 근의 공식 → 오늘: 고차방정식"
        title="고차방정식"
        lede="3차 이상의 방정식에는 근의 공식이 없다. 그래서 오히려 더 단순하다 — 인수정리와 조립제법으로 인수분해만 하면 끝난다."
      />

      <Section num="01" title="고차방정식은 인수분해로만 푼다" sub="3차 이상을 고차방정식이라 부른다. 고등 과정에서는 인수분해가 되도록만 출제되므로, 방법은 하나뿐이다.">
        <Card>
          <EqRow center highlight>
            x³ − 4x² + 2x + 1 = 0
          </EqRow>
          <div className="mt-4">
            <Note center>3차·4차 방정식에는 근의 공식이 없다(있어도 고등 과정 밖). 그래서 무조건 인수분해로 접근한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="인수정리로 인수를 찾는다" sub="1, −1, 2, −2 같은 간단한 수를 대입해 0이 되는 값을 찾으면, 그 값이 바로 인수의 단서가 된다.">
        <Card>
          <EqRow center>x = 1 대입: 1 − 4 + 2 + 1 = 0</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              (x − 1)을 <b style={{ color: "var(--prime)" }}>인수로 갖는다</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="조립제법으로 나머지를 인수분해" sub="찾은 인수로 조립제법을 하면 몫이 나온다. 그 몫은 차수가 하나 낮은 방정식 — 다시 풀 수 있는 형태다.">
        <Card>
          <div className="flex justify-center">
            <div className="ladder-table">
              <div className="ladder-row">
                <div className="ladder-divisor">1</div>
                <div className="ladder-cell">1</div>
                <div className="ladder-cell">−4</div>
                <div className="ladder-cell">2</div>
                <div className="ladder-cell">1</div>
              </div>
              <div className="ladder-row final">
                <div className="ladder-divisor">↓</div>
                <div className="ladder-cell">1</div>
                <div className="ladder-cell">−3</div>
                <div className="ladder-cell">−1</div>
                <div className="ladder-cell">0</div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">몫: x² − 3x − 1, 나머지: 0</p>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              (x − 1)(x² − 3x − 1) = 0 → x = <b style={{ color: "var(--prime)" }}>1</b> 또는 근의 공식으로 <b style={{ color: "var(--prime)" }}>(3±√13)/2</b>
            </ResultBadge>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>3차방정식이 1차방정식과 2차방정식으로 쪼개졌다. 2차방정식은 이미 풀 줄 안다.</span>
          </p>
        </Card>
      </Section>

      <Section num="04" title="3차식 전개 패턴 — 합·둘·곱" sub="2차식이 합·곱으로 전개되듯, 3차식은 합·둘·곱으로 전개된다.">
        <Card>
          <EqRow center>(x+2)(x−3)(x+1)</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="합: 2+(−3)+1">0</EqRow>
            <EqRow tag="둘: 두 개씩 곱해서 더한 것">−7</EqRow>
            <EqRow tag="곱: 2×(−3)×1">−6</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              = x³ + <b style={{ color: "var(--prime)" }}>0</b>x² <b style={{ color: "var(--prime)" }}>−7</b>x <b style={{ color: "var(--prime)" }}>−6</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 고차방정식">
            3차 이상. <span className="text-[var(--ink-soft)]">근의 공식 없이 인수분해로만.</span>
          </SummaryTile>
          <SummaryTile idx="02 풀이 절차">
            인수정리로 인수 찾기 → 조립제법 → 차수를 낮춘다.
          </SummaryTile>
          <SummaryTile idx="03 3차식 전개">
            x³ + (합)x² + (둘)x + (곱).
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 26강 · 고차방정식</PageFooter>
    </>
  );
}
