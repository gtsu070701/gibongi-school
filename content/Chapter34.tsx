import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

const original = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3].map((x) => ({ x, y: x * x }));
const shifted = [-1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4].map((x) => ({ x, y: (x - 1) * (x - 1) - 2 }));

export default function Chapter34() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 34강"
        prevLink="지난 시간: 일차함수와 일차방정식 → 오늘: 평행이동"
        title="평행이동"
        lede="점을 옮길 때는 있는 그대로 더하면 되지만, 그래프 전체를 옮길 때는 식에 부호를 바꿔서 대입해야 한다. 이 둘을 헷갈리면 다음 강의(이차함수)부터 전부 무너진다."
      />

      <Section num="01" title="점의 평행이동 — 있는 그대로" sub="x축 방향으로 m, y축 방향으로 n만큼 평행이동하면, 좌표에 그대로 m과 n을 더하면 된다.">
        <Card>
          <EqRow center>(3, 2)를 x축 방향으로 −2, y축 방향으로 +4만큼 평행이동</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              (3−2, 2+4) = <b style={{ color: "var(--prime)" }}>(1, 6)</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="그래프의 평행이동 — 부호를 바꿔서 대입" sub="그래프 전체를 옮기고 싶다면, 식의 x 자리에 x−m을, y 자리에 y−n을 대입한다. 더하는 게 아니라 뺀다.">
        <Card>
          <EqRow center highlight>
            y = f(x)를 x축 방향 m, y축 방향 n만큼 이동 → y − n = f(x − m)
          </EqRow>
          <div className="mt-4">
            <Note center>+m만큼 옮기고 싶은데 식에는 −m을 넣는다. 점의 평행이동과 정반대라 가장 많이 헷갈리는 지점이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실전: y=x²을 옮겨보면" sub="x축 방향으로 1, y축 방향으로 −2만큼 평행이동한다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="x 자리에 x−1을">y + 2 = (x − 1)²</EqRow>
            <EqRow tag="+2를 이항">y = (x − 1)² − 2</EqRow>
          </div>
          <div className="mt-4">
            <CoordinatePlane xMin={-2.5} xMax={4.5} yMin={-2.5} yMax={9.5} path={original} path2={shifted} tone="prime" tone2="composite" />
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">
            <span style={{ color: "var(--prime)" }}>y = x²</span> → <span style={{ color: "var(--composite)" }}>y = (x−1)² − 2</span> (오른쪽으로 1, 아래로 2)
          </p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 점의 평행이동">
            좌표에 그대로 더한다.
          </SummaryTile>
          <SummaryTile idx="02 그래프의 평행이동">
            식에는 부호를 바꿔서 대입한다. <span className="text-[var(--ink-soft)]">x→x−m, y→y−n.</span>
          </SummaryTile>
          <SummaryTile idx="03 주의">
            이 둘을 혼동하지 않는 것이 다음 강의(이차함수)의 기초가 된다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 34강 · 평행이동</PageFooter>
    </>
  );
}
