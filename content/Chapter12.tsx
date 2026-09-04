import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter12() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 12강"
        prevLink="지난 시간: 항 3개짜리 완전제곱식 → 오늘: 식변형 공식"
        title="곱셈공식의 변형 — 식변형 공식"
        lede="완전제곱식을 거꾸로 뒤집으면, 합과 곱 두 재료만으로 제곱의 합·세제곱의 합·차를 구할 수 있는 공식이 나온다."
      />

      <Section num="01" title="제곱의 합 — 재료는 합과 곱" sub="a²+b²을 구하고 싶다면, a+b(합)와 ab(곱)만 있으면 된다.">
        <Card>
          <EqRow center highlight>
            a² + b² = (a + b)² − 2ab
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              합=3, 곱=−1 → <b style={{ color: "var(--prime)" }}>a²+b² = 9 − 2(−1) = 11</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="문자 세 개짜리도 같은 방식" sub="재료가 합과 둘씩 곱한 것의 합(둘)로 바뀔 뿐, 원리는 같다.">
        <Card>
          <EqRow center highlight>
            a² + b² + c² = (a + b + c)² − 2(ab + bc + ca)
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              합=3, 둘=−2 → <b style={{ color: "var(--prime)" }}>a²+b²+c² = 9 − 2(−2) = 13</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="세제곱의 합" sub="합과 곱 두 재료만 있으면 세제곱의 합도 구할 수 있다.">
        <Card>
          <EqRow center highlight>
            a³ + b³ = (a + b)³ − 3ab(a + b)
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              합=3, 곱=−1 → <b style={{ color: "var(--prime)" }}>a³+b³ = 27 − 3(−1)(3) = 36</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="04" title="합·차·곱 세 개의 관계식" sub="셋 중 두 개를 알면 나머지 하나를 구할 수 있는, 유일한 관계식.">
        <Card>
          <EqRow center highlight>
            (a + b)² − (a − b)² = 4ab
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              합=5, 곱=3 → 차² = <b style={{ color: "var(--prime)" }}>25 − 12 = 13</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>합과 차를 알면 곱을, 차와 곱을 알면 합을 — 셋 중 무엇이 빠져도 이 관계식 하나로 구할 수 있다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 제곱의 합">
            합의 제곱 − 2배의 곱. <span className="text-[var(--ink-soft)]">문자 3개는 −2배의 둘.</span>
          </SummaryTile>
          <SummaryTile idx="02 세제곱의 합">
            합의 세제곱 − 3배의 합곱.
          </SummaryTile>
          <SummaryTile idx="03 합차곱 관계식">
            합의 제곱 − 차의 제곱 = 4곱. <span className="text-[var(--ink-soft)]">둘을 알면 하나를 구한다.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 12강 · 곱셈공식의 변형</PageFooter>
    </>
  );
}
