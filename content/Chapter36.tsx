import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

const curve = [-2, -1.8, -1.6, -1.4, -1.2, -1, -0.8, -0.6, -0.4, -0.2, 0].map((x) => ({ x, y: -2 * (x + 1) * (x + 1) - 5 }));

export default function Chapter36() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 36강"
        prevLink="지난 시간: 이차함수 → 오늘: 이차함수의 그래프"
        title="이차함수의 그래프 — 꼭짓점 구하기"
        lede="y=a(x−p)²+q 꼴로 정리되면 꼭짓점은 곧바로 (p, q)다. 평행이동으로 지저분해진 식도, 결국 태초의 상태가 옮겨간 것뿐이다."
      />

      <Section num="01" title="완전제곱식 형태에서 꼭짓점 읽기" sub="x에 관한 완전제곱식을 0으로 만드는 x값이 꼭짓점의 x좌표, 우변에 남은 상수항이 y좌표다.">
        <Card>
          <EqRow center highlight>
            y = a(x − p)² + q → 꼭짓점 (p, q)
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              y = −2(x + 1)² − 5 → 꼭짓점 <b style={{ color: "var(--prime)" }}>(−1, −5)</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="평행이동으로 이해하기" sub="태초의 상태 y=ax²가 x축 방향 p, y축 방향 q만큼 평행이동한 것이 바로 y=a(x−p)²+q다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="태초의 상태">y = ax² (꼭짓점 원점)</EqRow>
            <EqRow tag="평행이동 후" highlight>
              y = a(x − p)² + q (꼭짓점 (p,q))
            </EqRow>
          </div>
          <div className="mt-4">
            <Note center>아무리 평행이동해도 그래프의 벌어진 정도(생김새)는 변하지 않는다 — 이차항의 계수 a는 이동 후에도 그대로다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실전: 그래프 그리기" sub="y = −2(x+1)² − 5를 그려보자. 꼭짓점을 찍고, a의 부호로 방향만 정하면 끝이다.">
        <Card>
          <CoordinatePlane xMin={-2.5} xMax={0.5} yMin={-8} yMax={-4} path={curve} points={[{ x: -1, y: -5, label: "(−1,−5)" }]} tone="composite" />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">a = −2 &lt; 0 이므로 위로 볼록</p>
        </Card>
      </Section>

      <Section num="04" title="y절편·대칭축·최댓값" sub="y절편은 x=0을 대입, 대칭축은 꼭짓점의 x좌표, 최댓값(또는 최솟값)은 꼭짓점의 y좌표다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="y절편 — x=0 대입">y = −2(1)² − 5 = −7</EqRow>
            <EqRow tag="대칭축의 방정식">x = −1</EqRow>
            <EqRow tag="a<0이므로 최댓값 존재">최댓값 = −5</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 꼭짓점">
            y=a(x−p)²+q → (p, q).
          </SummaryTile>
          <SummaryTile idx="02 불변">
            평행이동해도 이차항 계수 a는 변하지 않는다.
          </SummaryTile>
          <SummaryTile idx="03 최댓값·최솟값">
            꼭짓점의 y좌표가 곧 최댓값 또는 최솟값이다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 36강 · 이차함수의 그래프</PageFooter>
    </>
  );
}
