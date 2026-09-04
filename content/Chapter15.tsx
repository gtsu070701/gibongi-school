import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter15() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 15강"
        prevLink="지난 시간: 항등식의 활용 → 오늘: 인수정리와 조립제법"
        title="인수정리와 조립제법"
        lede="어떤 식을 인수로 갖는다, 그 식으로 나눠 떨어진다, 그 식으로 나눈 나머지가 0이다 — 셋 다 완전히 같은 말이다."
      />

      <Section num="01" title="인수로 갖는다 = 나눠 떨어진다 = 나머지 0" sub="세 표현은 전부 같은 사실을 가리킨다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow>F(x)는 (x − a)를 인수로 갖는다</EqRow>
            <EqRow>F(x)를 (x − a)로 나누면 나눠 떨어진다</EqRow>
            <EqRow highlight>F(x)를 (x − a)로 나눈 나머지가 0이다</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="인수정리" sub="1차식으로 나눈 나머지는 F(a)를 대입한 값과 같다는 나머지정리를 뒤집으면, 인수 여부를 즉시 판별할 수 있다.">
        <Card>
          <EqRow center highlight>
            F(a) = 0 ⟺ F(x)는 (x − a)를 인수로 갖는다
          </EqRow>
          <div className="mt-4">
            <Note center>F(a)가 0인지만 확인하면, 나누지 않고도 그 식이 인수인지 바로 알 수 있다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="조립제법 — 계수만으로 몫과 나머지를" sub="1차식으로 나눌 때, 직접 나누지 않고 계수만 가지고 몫과 나머지를 동시에 구하는 방법.">
        <Card>
          <p className="mb-4 text-center text-sm text-[var(--ink-soft)]">x³ + 4x² + 5x − 1 을 x − 1로 나누기</p>
          <div className="flex justify-center">
            <div className="ladder-table">
              <div className="ladder-row">
                <div className="ladder-divisor">1</div>
                <div className="ladder-cell">1</div>
                <div className="ladder-cell">4</div>
                <div className="ladder-cell">5</div>
                <div className="ladder-cell">−1</div>
              </div>
              <div className="ladder-row final">
                <div className="ladder-divisor">↓</div>
                <div className="ladder-cell">1</div>
                <div className="ladder-cell">5</div>
                <div className="ladder-cell">10</div>
                <div className="ladder-cell">9</div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">내리고 → 곱해서 그대로 쓰고 → 더하고, 를 반복한다. 맨 끝 숫자가 나머지.</p>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              몫 = <b style={{ color: "var(--prime)" }}>x² + 5x + 10</b>, 나머지 = <b style={{ color: "var(--prime)" }}>9</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 인수정리">
            F(a)=0 ⟺ (x−a)가 인수. <span className="text-[var(--ink-soft)]">나눠보지 않고도 판별.</span>
          </SummaryTile>
          <SummaryTile idx="02 조립제법">
            1차식으로 나눌 때, 계수만으로 몫과 나머지를 동시에.
          </SummaryTile>
          <SummaryTile idx="03 주의">
            중간 차수가 없으면 계수 0을 반드시 채워 넣는다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 15강 · 인수정리 · 조립제법</PageFooter>
    </>
  );
}
