import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { CoordinatePlane } from "@/components/diagram/CoordinatePlane";

function circlePoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 25 }, (_, i) => {
    const t = (i / 24) * Math.PI * 2;
    return { x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) };
  });
}

export default function Chapter54() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 54강"
        prevLink="지난 시간: 원의 방정식 → 오늘: 평행이동 완벽 요약"
        title="평행이동 완벽 요약"
        lede="점을 옮길 때와 그래프를 옮길 때, 방법이 정반대다. 이 둘을 헷갈리지 않는 것이 이번 강의의 전부."
      />

      <Section num="01" title="점의 평행이동 — 있는 그대로 더한다" sub="점 (a, b)를 x축 방향 m, y축 방향 n만큼 평행이동하면, 좌표에 그대로 더하면 끝.">
        <Card>
          <CoordinatePlane
            xMin={0}
            xMax={6}
            yMin={0}
            yMax={3}
            points={[
              { x: 3, y: 2, label: "(3, 2)" },
              { x: 5, y: 1, label: "(5, 1)" },
            ]}
            segments={[{ from: { x: 3, y: 2 }, to: { x: 5, y: 1 }, dashed: true, label: "+2, −1" }]}
          />
          <div className="mt-3 flex justify-center">
            <ResultBadge>(3, 2) → x축 +2, y축 −1 이동 → (5, 1)</ResultBadge>
          </div>
          <div className="mt-4">
            <EqRow center highlight>
              (a, b) → (a + m, b + n)
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="그래프의 평행이동 — 부호를 바꿔서 대입" sub="그래프 위의 모든 점이 함께 움직이기 때문에, 식으로 표현할 때는 오히려 반대 부호를 대입해야 한다.">
        <Card>
          <EqRow center highlight>
            y = f(x) → y − n = f(x − m)
          </EqRow>
          <div className="mt-4">
            <Note center>새 그래프의 점 (X, Y)는 원래 점 (x, y)에서 X=x+m, Y=y+n으로 옮겨진 것 — 거꾸로 풀면 x=X−m, y=Y−n이 되어, 원래 식에 대입할 때는 부호가 반대로 들어간다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="실전 — 원을 평행이동하기" sub="중심 (0, −2), 반지름 2인 원을 x축 −3만큼, y축 +2만큼 평행이동하면?">
        <Card>
          <CoordinatePlane
            xMin={-6}
            xMax={3}
            yMin={-5}
            yMax={3}
            path={circlePoints(0, -2, 2)}
            path2={circlePoints(-3, 0, 2)}
            points={[
              { x: 0, y: -2, label: "원래 중심" },
              { x: -3, y: 0, label: "이동된 중심" },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <ResultBadge>중심만 (0,−2) → (−3, 0)으로 이동, 반지름은 그대로 2</ResultBadge>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">중심은 점이니까 있는 그대로 더하면 되고, 반지름은 평행이동해도 절대 변하지 않는다.</p>
        </Card>
      </Section>

      <Section num="04" title="두 가지, 절대 헷갈리지 말 것" sub="점을 옮길 때와 그래프(식)를 옮길 때는 방법이 정반대다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="점의 평행이동">있는 그대로 더한다 — (a+m, b+n)</EqRow>
          <EqRow tag="그래프(식)의 평행이동">부호를 바꿔서 대입한다 — x→x−m, y→y−n</EqRow>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 점">
            점의 평행이동은 좌표에 그대로 더한다.
          </SummaryTile>
          <SummaryTile idx="02 그래프">
            그래프의 평행이동은 x, y 대신 x−m, y−n을 대입한다.
          </SummaryTile>
          <SummaryTile idx="03 원">
            원을 평행이동할 때는 중심만 옮기면 된다 — 반지름은 불변.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 54강 · 평행이동 완벽 요약</PageFooter>
    </>
  );
}
