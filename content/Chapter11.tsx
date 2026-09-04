import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, Teaser } from "@/components/diagram/primitives";

export default function Chapter11() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 11강"
        prevLink="지난 시간: 인수분해 총정리 → 오늘: 고등 과정 곱셈공식의 시작"
        title="항 3개짜리 완전제곱식"
        lede="드디어 고등학교 1학년 과정. 항이 두 개일 때의 완전제곱식을 항 세 개로 확장한다 — 각각 제곱하고, 두 개씩 짝지어 두 배로."
      />

      <Section num="01" title="필요한 항만 골라 전개하기" sub="다항식끼리 곱할 때, 전체를 다 나열하지 않고 원하는 차수를 만드는 조합만 찾아도 된다.">
        <Card>
          <EqRow center>(x² − x + 2)(x + 3)</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">2차항만 필요하다면? 2차를 만드는 조합만 찾는다: (−x)×3 과 (x²)×(상수 아님, 1차 아님) — 즉 −x·3과 x²의 짝은 없고, −x항과 상수항의 짝만 2차를 만든다</p>
          <div className="flex justify-center">
            <ResultBadge>
              2차항의 계수 = <b style={{ color: "var(--prime)" }}>−4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="항 3개짜리 완전제곱식" sub="각각을 제곱하고, 두 개씩 짝지어 만든 곱을 2배로 — 짝은 총 세 번 나온다.">
        <Card>
          <EqRow center highlight>
            (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca
          </EqRow>
          <div className="mt-4">
            <Note center>제곱 제곱 제곱, 그다음 두 개씩 짝지은 2ab, 2bc, 2ca — 부호는 항상 세 조각(2, 앞, 뒤)을 곱해서 정한다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="부호가 섞여 있어도 똑같다" sub="각 항을 부호까지 통째로 잡고 그대로 공식에 대입한다.">
        <Card>
          <EqRow center>(x − 2y − z)²</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>x² + 4y² + z² − 4xy + 4yz − 2zx</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 필요한 항만">
            다 전개하지 않고 원하는 차수의 조합만 찾아도 된다.
          </SummaryTile>
          <SummaryTile idx="02 항 3개 제곱">
            각각 제곱 + 두 개씩 짝지어 2배. <span className="text-[var(--ink-soft)]">짝은 세 번.</span>
          </SummaryTile>
          <SummaryTile idx="03 부호">
            부호까지 통째로 대입하면 흔들리지 않는다.
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">여기서부터 고등학교 1학년 과정 — 다음 강의는 이 공식을 거꾸로 쓰는 식변형 공식.</Teaser>
      </Section>

      <PageFooter>fifty-days · 11강 · 항 3개짜리 완전제곱식</PageFooter>
    </>
  );
}
