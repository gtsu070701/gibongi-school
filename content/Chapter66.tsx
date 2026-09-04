import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter66() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 66강"
        prevLink="지난 시간: 지수법칙 복습 → 오늘: 단항식의 곱셈과 나눗셈"
        title="단항식의 곱셈과 나눗셈"
        lede="숫자는 숫자끼리, 문자는 문자끼리 — 지수법칙을 실제 계산에 적용하는 손놀림을 굳힌다."
      />

      <Section num="01" title="숫자는 숫자끼리, 문자는 문자끼리" sub="단항식의 곱셈은 계수는 계수끼리 곱하고, 같은 문자는 지수법칙으로 합친다.">
        <Card>
          <EqRow center>3x × (−2x²) = (3 × −2) × (x × x²)</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>−6x³</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>계수는 계수끼리 곱하고, 문자는 지수법칙(곱하면 지수를 더한다)을 그대로 적용한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="나눗셈은 무조건 분수로" sub="나눗셈 기호를 쓰면 헷갈리기 쉽다. 항상 분수로 바꾼 다음 계수와 문자를 각각 약분한다.">
        <Card>
          <EqRow center>6a³ ÷ 2a = 6a³ / 2a</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>3a²</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="생략된 곱셈은 결합력이 세다" sub="괄호 없이 나란히 쓴 숫자·문자는 하나로 묶인 덩어리로 본다 — 나눗셈에서 특히 조심해야 한다.">
        <Card>
          <EqRow center>abc ÷ abc = 1</EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">abc는 붙어서 쓰인 하나의 덩어리 — abc ÷ a × bc처럼 흩어서 계산하면 안 된다.</p>
          <div className="mt-4">
            <Note center>나눗셈 뒤에 곱셈이 이어질 때는 어디까지가 나누는 대상인지 항상 괄호를 그려서 확인하는 습관을 들이자.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 곱셈">
            계수는 계수끼리, 문자는 지수법칙으로.
          </SummaryTile>
          <SummaryTile idx="02 나눗셈">
            항상 분수로 바꾼 뒤 약분한다.
          </SummaryTile>
          <SummaryTile idx="03 생략된 곱셈">
            괄호 없이 붙어 있으면 하나의 덩어리로 본다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 66강 · 단항식의 곱셈과 나눗셈</PageFooter>
    </>
  );
}
