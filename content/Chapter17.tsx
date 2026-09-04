import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter17() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 17강"
        prevLink="지난 시간: 수의 체계 → 오늘: 절댓값"
        title="절댓값"
        lede="절댓값 |a|는 수직선 위에서 a와 원점 사이의 거리다. 거리는 음수일 수 없으니, 절댓값의 결과는 언제나 0 이상이다."
      />

      <Section num="01" title="절댓값의 정의 — 원점까지의 거리" sub="|a|는 수직선 위에서 a와 0 사이의 거리다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="3과 원점 사이의 거리">|3| = 3</EqRow>
            <EqRow tag="−3과 원점 사이의 거리">|−3| = 3</EqRow>
          </div>
          <div className="mt-4">
            <Note center>거리는 어느 쪽에서 재도 같다 — |a−b|와 |b−a|는 항상 같은 값이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="절댓값은 항상 0 이상" sub="거리가 음수일 수 없으므로, 절댓값의 결과는 알맹이가 무엇이든 0 이상이다.">
        <Card>
          <EqRow center highlight>
            |a| ≥ 0 (항상)
          </EqRow>
        </Card>
      </Section>

      <Section num="03" title="절댓값 풀이법 — 마이너스는 떼는 게 아니라 붙이는 것" sub="알맹이가 양수면 그대로 나오고, 음수면 마이너스를 하나 더 붙여서 나온다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="알맹이가 양수 → 그대로">|5| = 5</EqRow>
            <EqRow tag="알맹이가 음수 → 마이너스를 붙인다">|−5| = −(−5) = 5</EqRow>
          </div>
          <div className="mt-4">
            <Note center>“마이너스를 뗀다”고 생각하면 문자가 나올 때 무너진다. “음수인 알맹이에 마이너스를 하나 더 붙인다”가 정확한 이해다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="04" title="문자일 때는 함부로 판단 금지" sub="눈에 보이는 부호가 아니라, 그 값이 실제로 양수인지 음수인지로 판단해야 한다.">
        <Card>
          <EqRow center>x &lt; −3일 때, |x|를 풀면?</EqRow>
          <p className="my-3 text-center text-xs text-[var(--ink-faint)]">x는 −3보다 작으므로 x 자체가 음수 → 마이너스를 붙여서 꺼낸다</p>
          <div className="flex justify-center">
            <ResultBadge>
              |x| = <b style={{ color: "var(--prime)" }}>−x</b>
            </ResultBadge>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>−x라고 써도 실제로는 양수다. x 자체가 음수이기 때문에, 음수 앞에 마이너스가 붙으면 부호가 다시 바뀐다.</span>
          </p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 정의">
            |a| = 수직선 위 a와 원점 사이의 거리.
          </SummaryTile>
          <SummaryTile idx="02 결과의 범위">
            절댓값은 항상 0 이상이다.
          </SummaryTile>
          <SummaryTile idx="03 풀이법">
            양수면 그대로, 음수면 마이너스를 붙인다. <span className="text-[var(--ink-soft)]">떼는 게 아니라 붙이는 것.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 17강 · 절댓값</PageFooter>
    </>
  );
}
