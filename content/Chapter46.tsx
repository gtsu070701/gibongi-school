import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const C0 = { x: 0, y: 0 };
const C1 = { x: 160, y: 0 };
const C2 = { x: 160, y: 160 };
const C3 = { x: 0, y: 160 };
const P0 = { x: 60, y: 0 };
const P1 = { x: 160, y: 60 };
const P2 = { x: 100, y: 160 };
const P3 = { x: 0, y: 100 };

export default function Chapter46() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 46강"
        prevLink="지난 시간: 삼각형과 평행선 → 오늘: 피타고라스 정리"
        title="피타고라스 정리"
        lede="직각삼각형의 세 변에는 언제나 성립하는 관계식이 있다 — 기하의 기본이 되는, 수학에서 가장 유명한 정리."
      />

      <Section num="01" title="피타고라스 정리" sub="빗변의 제곱은 나머지 두 변의 제곱의 합과 같다. 같은 직각삼각형 네 개로 만든 두 정사각형을 비교하면 바로 증명된다.">
        <Card>
          <Figure
            viewBox={[-16, -16, 208, 208]}
            shapes={[
              { kind: "polygon", points: [C0, C1, C2, C3], tone: "neutral" },
              { kind: "polygon", points: [P0, P1, P2, P3], tone: "prime", fill: true },
              { kind: "label", p: { x: 28, y: -6 }, text: "a" },
              { kind: "label", p: { x: 112, y: -6 }, text: "b" },
              { kind: "label", p: { x: 128, y: 22 }, text: "c", tone: "prime" },
            ]}
          />
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              a² + b² = <b style={{ color: "var(--prime)" }}>c²</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>큰 정사각형(한 변 a+b)의 넓이에서 직각삼각형 네 개의 넓이를 빼면, 가운데 기울어진 정사각형(한 변 c)의 넓이가 남는다 — 이걸 식으로 풀면 a²+b²=c².</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="활용 — 빗변부터 먼저 확인" sub="구하려는 변이 빗변인지 아닌지에 따라 더하기와 빼기가 갈린다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="빗변을 구할 때">빗변 = √(변² + 변²)</EqRow>
          <EqRow tag="빗변이 아닌 변을 구할 때">다른 변 = √(빗변² − 변²)</EqRow>
        </div>
        <div className="mt-4">
          <Note center>세 변 중 가장 긴 변이 빗변 — 어떤 변을 구하든 항상 빗변을 먼저 확인하고 시작한다.</Note>
        </div>
      </Section>

      <Section num="03" title="자주 나오는 피타고라스 수" sub="이 조합들은 통째로 외워두면 문제 푸는 속도가 확 빨라진다.">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          <Chip>3-4-5</Chip>
          <Chip>6-8-10</Chip>
          <Chip>5-12-13</Chip>
          <Chip>1-1-√2</Chip>
          <Chip>1-√3-2</Chip>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 정리">
            직각삼각형에서 a² + b² = c² (c는 빗변).
          </SummaryTile>
          <SummaryTile idx="02 활용">
            빗변 구할 땐 더하기, 다른 변 구할 땐 빼기.
          </SummaryTile>
          <SummaryTile idx="03 암기">
            3-4-5, 5-12-13, 6-8-10, 1-1-√2, 1-√3-2.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 46강 · 피타고라스 정리</PageFooter>
    </>
  );
}
