import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const T = { x: 30, y: 160 };
const R = { x: 220, y: 160 };
const H = { x: 220, y: 40 };

export default function Chapter47() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 47강"
        prevLink="지난 시간: 피타고라스 정리 → 오늘: 삼각비"
        title="삼각비"
        lede="직각삼각형의 두 변의 비율에 이름을 붙인 것 — 사인, 코사인, 탄젠트. 셋 다 각(θ)을 기준으로 정의된다."
      />

      <Section num="01" title="삼각비란 — 직각삼각형 두 변의 비율" sub="세 변 중 두 변을 고르는 방법은 총 여섯 가지. 그중 중학교에서 다루는 세 가지가 사인·코사인·탄젠트다.">
        <Card>
          <Figure
            viewBox={[0, 0, 250, 190]}
            shapes={[
              { kind: "polygon", points: [T, R, H], tone: "neutral" },
              { kind: "rightAngle", at: R, toward1: T, toward2: H },
              { kind: "arc", c: T, r: 22, startDeg: -32, endDeg: 0, tone: "redpen" },
              { kind: "label", p: { x: 52, y: 148 }, text: "θ", tone: "redpen" },
              { kind: "label", p: { x: 125, y: 178 }, text: "밑변" },
              { kind: "label", p: { x: 236, y: 100 }, text: "높이" },
              { kind: "label", p: { x: 115, y: 90 }, text: "빗변", tone: "prime" },
            ]}
          />
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">빗변을 제외한 밑변·높이는 상대적 개념 — 어느 각(θ)을 기준으로 잡느냐에 따라 바뀐다.</p>
        </Card>
      </Section>

      <Section num="02" title="사인 · 코사인 · 탄젠트의 정의" sub="셋 다 θ에서 출발하는 방식으로 기억하면 헷갈리지 않는다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="θ에서 출발해 고개를 넘어 직각으로">sin θ = 높이 / 빗변</EqRow>
          <EqRow tag="θ를 사이에 두고 빗변에서 출발">cos θ = 밑변 / 빗변</EqRow>
          <EqRow tag="θ에서 곧장 직각으로">tan θ = 높이 / 밑변</EqRow>
        </div>
        <div className="mt-4">
          <Note center>빗변분의 높이·빗변분의 밑변처럼 통째로 외우지 말고, θ를 기준으로 &ldquo;어디서 출발해 어디로 가는지&rdquo;로 기억하면 삼각형이 어떤 방향으로 놓여도 헷갈리지 않는다.</Note>
        </div>
      </Section>

      <Section num="03" title="탄젠트 = 코사인분의 사인" sub="사인을 코사인으로 나누면 탄젠트가 된다 — 세 삼각비가 독립된 게 아니라 서로 연결돼 있다.">
        <Card>
          <EqRow center highlight>
            tan θ = sin θ / cos θ
          </EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">(높이/빗변) ÷ (밑변/빗변) = 높이/밑변 — 정확히 탄젠트의 정의와 같다.</p>
        </Card>
      </Section>

      <Section num="04" title="예시 — 3:4:5 직각삼각형" sub="밑변 3, 높이 4, 빗변 5인 직각삼각형의 삼각비.">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Chip>sin θ = 4/5</Chip>
          <Chip>cos θ = 3/5</Chip>
          <Chip>tan θ = 4/3</Chip>
        </div>
        <div className="mt-3 flex justify-center">
          <ResultBadge>4/5 ÷ 3/5 = 4/3 — tan θ와 정확히 일치</ResultBadge>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 정의">
            삼각비는 직각삼각형 두 변의 비율. 밑변·높이는 θ에 따라 상대적.
          </SummaryTile>
          <SummaryTile idx="02 세 가지">
            sin=높이/빗변, cos=밑변/빗변, tan=높이/밑변.
          </SummaryTile>
          <SummaryTile idx="03 관계식">
            tan θ = sin θ / cos θ.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 47강 · 삼각비</PageFooter>
    </>
  );
}
