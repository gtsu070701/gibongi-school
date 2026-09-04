import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter37() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 37강"
        prevLink="지난 시간: 이차함수의 그래프 → 오늘: 합성함수"
        title="합성함수"
        lede="화살을 두 번 연달아 쏘는 것 — 하나의 함수를 통과한 결과가 다시 다음 함수의 입력이 된다. f∘g는 g를 먼저, f를 나중에 통과시킨다."
      />

      <Section num="01" title="합성함수 — 화살을 두 번 쏜다" sub="1이 f에 의해 b로, b가 g에 의해 6으로 대응된다면, 결국 1은 6에 대응된 것과 같다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="f에 의해">1 → b</EqRow>
            <EqRow tag="g에 의해">b → 6</EqRow>
            <EqRow highlight tag="합쳐서 보면">
              1 → 6
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="표기와 해석 순서" sub="(g∘f)(1)은 f를 먼저, g를 나중에 적용한다는 뜻이다. 쓰는 순서와 실행 순서가 반대라 헷갈리기 쉽다.">
        <Card>
          <EqRow center highlight>
            (g ∘ f)(x) = g(f(x))
          </EqRow>
          <div className="mt-4">
            <Note center>1이 f에서 먼저 대응되고, 그 결과가 g에서 대응된다 — f를 먼저 쓰고 g를 나중에 쓴 것뿐, 순서가 뒤바뀐 게 아니다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="교환법칙이 성립하지 않는다" sub="f(x)=x², g(x)=2x−5일 때, f∘g와 g∘f는 완전히 다른 함수가 된다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="f∘g — g를 먼저">(2x − 5)²</EqRow>
            <EqRow tag="g∘f — f를 먼저">2x² − 5</EqRow>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>전개해보면 완전히 다른 이차식이 나온다 — 합성함수는 순서를 바꾸면 결과도 달라진다.</span>
          </p>
        </Card>
      </Section>

      <Section num="04" title="껍데기와 알맹이" sub="f(g(x))에서 g(x)는 f 안에 통째로 들어가는 알맹이, f는 그걸 감싸는 껍데기다.">
        <CompareRow>
          <CompareCard kicker="바깥쪽" title="껍데기 함수 f" highlight>
            가장 나중에 적용되는 함수. 결과를 최종적으로 감싼다.
          </CompareCard>
          <CompareCard kicker="안쪽" title="알맹이 함수 g">
            먼저 계산되어 f의 x 자리에 통째로 대입되는 함수.
          </CompareCard>
        </CompareRow>
        <Card>
          <EqRow center>(x² − 4x + 5)의 3제곱 + 6(x² − 4x + 5) + 5</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              껍데기 f(x) = x³+6x+5, 알맹이 g(x) = <b style={{ color: "var(--prime)" }}>x² − 4x + 5</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 합성함수">
            (g∘f)(x) = g(f(x)). <span className="text-[var(--ink-soft)]">f를 먼저, g를 나중에.</span>
          </SummaryTile>
          <SummaryTile idx="02 교환법칙">
            성립하지 않는다. f∘g ≠ g∘f.
          </SummaryTile>
          <SummaryTile idx="03 껍데기·알맹이">
            바깥 함수가 껍데기, 안에 대입된 함수가 알맹이.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 37강 · 합성함수</PageFooter>
    </>
  );
}
