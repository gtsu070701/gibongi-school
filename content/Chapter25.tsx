import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter25() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 25강"
        prevLink="지난 시간: 이차방정식 → 오늘: 근의 공식"
        title="근의 공식"
        lede="완전제곱식 풀이를 매번 반복하는 대신, a·b·c로 한 번만 일반화해서 공식으로 만들어 버린 것 — 그게 근의 공식이다."
      />

      <Section num="01" title="인수분해가 안 될 때" sub="2x²+5x+1=0은 곱해서 1, 더해서 5가 되는 정수 조합이 없다 — 인수분해가 안 통한다.">
        <Card>
          <EqRow center>2x² + 5x + 1 = 0</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">인수분해가 안 되면 남은 방법은 완전제곱식뿐이다</p>
          <div className="flex justify-center">
            <ResultBadge>
              x = <b style={{ color: "var(--prime)" }}>(−5 ± √17) / 4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="근의 공식 유도" sub="이 지루한 완전제곱식 과정을 a, b, c로 딱 한 번만 일반화해서, 그다음부터는 공식에 대입만 하기로 약속했다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="최고차항 계수를 1로 나눈다">x² + (b/a)x + c/a = 0</EqRow>
            <EqRow tag="완전제곱식으로">(x + b/2a)² = (b² − 4ac) / 4a²</EqRow>
          </div>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              x = <b style={{ color: "var(--prime)" }}>(−b ± √(b² − 4ac)) / 2a</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="근의 공식으로 빠르게" sub="a, b, c만 확인해서 바로 대입하면, 완전제곱식 전체 과정을 건너뛸 수 있다.">
        <Card>
          <EqRow center>2x² + 5x + 1 = 0 → a=2, b=5, c=1</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">b² − 4ac = 25 − 8 = 17</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              x = <b style={{ color: "var(--prime)" }}>(−5 ± √17) / 4</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>완전제곱식으로 직접 풀었던 결과와 정확히 같다. 근의 공식은 그 과정을 통째로 미리 계산해 둔 것뿐이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 근의 공식">
            x = (−b ± √(b²−4ac)) / 2a.
          </SummaryTile>
          <SummaryTile idx="02 유래">
            완전제곱식 풀이를 a,b,c로 한 번만 일반화한 것.
          </SummaryTile>
          <SummaryTile idx="03 사용 시점">
            인수분해가 안 보일 때, 가장 빠른 대안.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 25강 · 근의 공식</PageFooter>
    </>
  );
}
