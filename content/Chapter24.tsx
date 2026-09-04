import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard, Teaser } from "@/components/diagram/primitives";

export default function Chapter24() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 24강"
        prevLink="지난 시간: 연립방정식 → 오늘: 이차방정식"
        title="이차방정식"
        lede="ax²+bx+c=0 (a≠0) 꼴의 방정식. 해는 항상 두 개, 구하는 방법도 두 가지 — 인수분해와 완전제곱식."
      />

      <Section num="01" title="이차방정식이란" sub="최고차항의 계수가 0이 아닌 이차식 = 0 꼴. 해(근)는 실근과 허근을 합쳐 항상 두 개다.">
        <Card>
          <EqRow center highlight>
            ax² + bx + c = 0 (a ≠ 0)
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              x² − x − 6 = 0 → x = <b style={{ color: "var(--prime)" }}>3</b> 또는 <b style={{ color: "var(--prime)" }}>−2</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="풀이법 1 · 인수분해" sub="두 수를 곱해서 0이라면, 둘 중 적어도 하나는 반드시 0이다. 이 성질로 2차방정식을 1차방정식 두 개로 쪼갠다.">
        <Card>
          <EqRow center>(x − 1)(x − 3) = 0</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">곱해서 0 → x−1=0 또는 x−3=0</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              x = <b style={{ color: "var(--prime)" }}>1</b> 또는 <b style={{ color: "var(--prime)" }}>3</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="풀이법 2 · 완전제곱식" sub="좌변을 (x+p)² = q 꼴로 만들면, 알맹이는 ±√q가 된다.">
        <Card>
          <EqRow center>(x − 2)² = 4</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">알맹이는 ±√4 = ±2</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              x − 2 = ±2 → x = <b style={{ color: "var(--prime)" }}>0</b> 또는 <b style={{ color: "var(--prime)" }}>4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="04" title="두 풀이법, 언제 무엇을" sub="인수분해가 될 때는 인수분해가 훨씬 빠르다. 인수분해가 안 보일 때 완전제곱식으로 넘어간다.">
        <CompareRow>
          <CompareCard kicker="빠르다" title="인수분해가 보일 때" highlight>
            바로 두 수를 찾아 (x−α)(x−β)=0으로 쪼갠다.
          </CompareCard>
          <CompareCard kicker="항상 가능" title="완전제곱식">
            인수분해가 안 보여도, 상수항을 조정해 (x+p)²=q로 반드시 만들 수 있다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 이차방정식">
            ax²+bx+c=0 (a≠0). <span className="text-[var(--ink-soft)]">해는 항상 2개.</span>
          </SummaryTile>
          <SummaryTile idx="02 인수분해">
            곱해서 0이면 하나는 반드시 0.
          </SummaryTile>
          <SummaryTile idx="03 완전제곱식">
            (x+p)²=q → x=−p±√q.
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">완전제곱식을 문자 a,b,c로 일반화하면 근의 공식이 나온다 — 다음 강의.</Teaser>
      </Section>

      <PageFooter>fifty-days · 24강 · 이차방정식</PageFooter>
    </>
  );
}
