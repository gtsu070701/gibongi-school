import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const A = { x: 40, y: 160 };
const B = { x: 220, y: 160 };
const C = { x: 130, y: 40 };
const G = { x: 130, y: 120 };
const M_BC = { x: 175, y: 100 };
const M_AC = { x: 85, y: 100 };
const M_AB = { x: 130, y: 160 };

export default function Chapter45() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 45강"
        prevLink="지난 시간: 평행사변형 → 오늘: 삼각형과 평행선"
        title="삼각형과 평행선"
        lede="삼각형 안에 밑변과 평행한 선을 하나 그으면, 거기서부터 닮음·중점연결정리·무게중심까지 전부 연결된다."
      />

      <Section num="01" title="삼각형과 평행선 — 닮음에서 나오는 비례" sub="밑변에 평행선을 그으면 큰 삼각형과 작은 삼각형이 AA닮음이 된다. 그래서 대응변의 비율이 같다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="꼭짓점에서 각 변까지">윗변 : 아랫변 = 윗변 : 아랫변</EqRow>
            <EqRow tag="평행선으로 잘린 두 변">한쪽 변의 비 = 다른쪽 변의 비</EqRow>
          </div>
          <div className="mt-4">
            <Note center>두 삼각형이 AA닮음이라는 것 — 각 두 개만 같아도 닮음이 성립한다는 사실에서 모든 비례식이 시작된다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="삼각형의 중점연결정리" sub="두 변의 중점을 이으면, 그 선분은 나머지 변과 평행하고 길이는 정확히 절반이 된다.">
        <Card>
          <Figure
            viewBox={[0, 0, 260, 200]}
            shapes={[
              { kind: "polygon", points: [A, B, C], tone: "neutral" },
              { kind: "line", a: M_AC, b: M_BC, tone: "prime" },
              { kind: "point", p: M_AC, label: "M", labelOffset: { x: -14, y: 4 }, tone: "prime" },
              { kind: "point", p: M_BC, label: "N", labelOffset: { x: 6, y: 4 }, tone: "prime" },
              { kind: "point", p: A, label: "A", labelOffset: { x: -14, y: 4 } },
              { kind: "point", p: B, label: "B", labelOffset: { x: 6, y: 4 } },
              { kind: "point", p: C, label: "C", labelOffset: { x: -4, y: -10 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>MN ∥ AB, MN = (1/2) × AB</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="무게중심 — 세 중선의 교점" sub="중선은 한 꼭짓점에서 마주보는 변의 중점을 잇는 선. 세 중선은 언제나 한 점에서 만난다.">
        <Card>
          <Figure
            viewBox={[0, 0, 260, 200]}
            shapes={[
              { kind: "polygon", points: [A, B, C], tone: "neutral" },
              { kind: "line", a: A, b: M_BC, tone: "composite", dashed: true },
              { kind: "line", a: B, b: M_AC, tone: "composite", dashed: true },
              { kind: "line", a: C, b: M_AB, tone: "composite", dashed: true },
              { kind: "point", p: G, label: "무게중심", labelOffset: { x: 8, y: -4 }, tone: "composite" },
              { kind: "point", p: A, label: "A", labelOffset: { x: -14, y: 4 } },
              { kind: "point", p: B, label: "B", labelOffset: { x: 6, y: 4 } },
              { kind: "point", p: C, label: "C", labelOffset: { x: -4, y: -10 } },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <EqRow>무게중심은 각 중선을 언제나 2 : 1로 나눈다 (꼭짓점 쪽이 2)</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="04" title="무게중심이 만드는 여섯 조각" sub="무게중심과 세 꼭짓점을 연결하면 삼각형이 여섯 조각으로 나뉘는데, 이 여섯 조각의 넓이가 전부 같다.">
        <Card>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            <Chip>1/6</Chip>
            <Chip>1/6</Chip>
            <Chip>1/6</Chip>
            <Chip>1/6</Chip>
            <Chip>1/6</Chip>
            <Chip>1/6</Chip>
          </div>
          <div className="mt-4">
            <Note center>중선은 삼각형의 넓이를 항상 정확히 반으로 나눈다는 사실을 여섯 번 겹쳐 쓰면, 여섯 조각의 넓이가 모두 같다는 결론이 나온다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 평행선">
            밑변에 평행선을 그으면 AA닮음 → 대응변 비례.
          </SummaryTile>
          <SummaryTile idx="02 중점연결정리">
            두 변의 중점을 이으면 나머지 변과 평행, 길이는 절반.
          </SummaryTile>
          <SummaryTile idx="03 무게중심">
            세 중선의 교점, 중선을 2:1로 내분, 여섯 조각의 넓이 모두 같음.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 45강 · 삼각형과 평행선</PageFooter>
    </>
  );
}
