import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter70() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 70강"
        prevLink="지난 시간: 완전제곱식의 인수분해 → 오늘: 고차식의 인수분해"
        title="고차식의 인수분해"
        lede="3차식·4차식은 공식으로 안 풀린다. 인수정리로 근 하나를 찾고, 조립제법으로 차수를 낮추는 것을 반복한다."
      />

      <Section num="01" title="근을 하나 찾는다 — 인수정리" sub="F(1)=0이면 (x−1)이 인수. 대입해서 0이 되는 값을 찾는 것이 고차식 인수분해의 시작이다.">
        <Card>
          <EqRow center>F(x) = x³ − 2x² − 5x + 6 에 x=1 대입</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              1 − 2 − 5 + 6 = 0 → <b style={{ color: "var(--prime)" }}>(x−1)은 F(x)의 인수</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="근 후보 — 상수항의 약수 ÷ 최고차항의 약수" sub="아무 값이나 대입할 필요는 없다. 근이 될 수 있는 값은 정해진 후보 안에 있다.">
        <Card>
          <EqRow center highlight>
            근의 후보 = ±(상수항의 약수) / (최고차항의 계수의 약수)
          </EqRow>
          <div className="mt-4">
            <Note center>대부분은 1이나 −1을 대입하면 바로 찾아진다. 안 되면 상수항의 약수들을 순서대로 시도한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="조립제법으로 차수를 낮추고, 반복한다" sub="하나의 인수를 찾으면 조립제법으로 나눈 몫을 구하고, 그 몫이 또 인수분해되는지 계속 확인한다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="1단계 — 조립제법으로 몫 구하기">x³−2x²−5x+6 = (x−1)(x²−x−6)</EqRow>
            <EqRow tag="2단계 — 남은 2차식도 인수분해">x²−x−6 = (x−3)(x+2)</EqRow>
          </div>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              최종 결과: <b style={{ color: "var(--prime)" }}>(x−1)(x−3)(x+2)</b>
            </ResultBadge>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">몫이 2차식이 되면, 남은 부분이 또 인수분해되는지 항상 다시 확인한다.</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 인수정리">
            대입해서 0이 되는 값을 찾으면 그 인수가 확정된다.
          </SummaryTile>
          <SummaryTile idx="02 근의 후보">
            ±(상수항의 약수)/(최고차항 계수의 약수) 중에 있다.
          </SummaryTile>
          <SummaryTile idx="03 반복">
            조립제법으로 차수를 낮추고, 몫을 또 인수분해할 수 있는지 확인한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 70강 · 고차식의 인수분해</PageFooter>
    </>
  );
}
