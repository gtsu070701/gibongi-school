import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

const wide = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3].map((x) => ({ x, y: x * x }));
const narrow = [-1.8, -1.5, -1.2, -0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8].map((x) => ({ x, y: 3 * x * x }));

export default function Chapter35() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 35강"
        prevLink="지난 시간: 평행이동 → 오늘: 이차함수"
        title="이차함수"
        lede="가장 간단한 이차함수 y=ax²부터 시작한다. 이 '태초의 상태'만 제대로 이해하면, 아무리 복잡해 보이는 이차함수도 결국 이걸 옮긴 것뿐이다."
      />

      <Section num="01" title="태초의 상태 — y = ax²" sub="이차항만 남기고 다 지운, 가장 간단한 이차함수. 여기서부터 모든 이차함수 이야기가 시작된다.">
        <Card>
          <EqRow center highlight>
            y = ax² (a ≠ 0)
          </EqRow>
          <div className="mt-4">
            <Note center>꼭짓점이 항상 원점인 이 형태가 &ldquo;태초의 상태&rdquo;다. 나머지 모든 이차함수는 이걸 평행이동한 것뿐이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="아래로 볼록 vs 위로 볼록" sub="이차항의 계수 a의 부호가 그래프가 어느 쪽으로 열리는지를 결정한다.">
        <CompareRow>
          <CompareCard kicker="a > 0" title="아래로 볼록" highlight>
            그릇처럼 아래가 오목하게, 위로 열린 모양.
          </CompareCard>
          <CompareCard kicker="a < 0" title="위로 볼록">
            뒤집힌 그릇처럼, 아래로 열린 모양.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="03" title="|a|가 클수록 오므라든다" sub="이차항 계수의 절댓값이 커질수록 그래프는 y축 쪽으로 좁아진다.">
        <Card>
          <CoordinatePlane xMin={-3.5} xMax={3.5} yMin={-0.5} yMax={9.5} path={wide} path2={narrow} />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">
            <span style={{ color: "var(--prime)" }}>y = x²</span> 보다 <span style={{ color: "var(--composite)" }}>y = 3x²</span>이 더 좁게 오므라든다
          </p>
        </Card>
      </Section>

      <Section num="04" title="꼭짓점, 대칭축, 포물선" sub="태초의 상태에서 꼭짓점은 항상 원점이고, 그래프는 y축을 기준으로 좌우 대칭이다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="꼭짓점">항상 원점 (0, 0)</EqRow>
            <EqRow tag="대칭축">꼭짓점을 지나는 y축 평행선</EqRow>
            <EqRow tag="곡선의 이름">포물선</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 태초의 상태">
            y = ax², 꼭짓점은 원점.
          </SummaryTile>
          <SummaryTile idx="02 볼록 방향">
            a&gt;0 아래로 볼록, a&lt;0 위로 볼록.
          </SummaryTile>
          <SummaryTile idx="03 |a|의 효과">
            클수록 y축으로 좁게 오므라든다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 35강 · 이차함수</PageFooter>
    </>
  );
}
