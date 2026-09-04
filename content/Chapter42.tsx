import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, Chip, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";
import { Figure } from "@/components/diagram/Figure";

const O = { x: 150, y: 120 };
const R = 90;
const P1 = { x: 235, y: 89 };
const P2 = { x: 208, y: 189 };
const Q1 = { x: 81, y: 178 };
const Q2 = { x: 81, y: 62 };

export default function Chapter42() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 42강"
        prevLink="지난 시간: 삼각형의 내각과 외각 → 오늘: 원과 부채꼴"
        title="원과 부채꼴"
        lede="원 하나에도 이름 붙은 부분이 많다 — 반지름, 현, 호, 부채꼴. 이 용어들이 원주율과 넓이 공식으로 이어진다."
      />

      <Section num="01" title="원의 각 부분 이름" sub="같은 원 안에서도 어느 부분을 가리키느냐에 따라 이름이 다르다.">
        <Card>
          <Figure
            viewBox={[0, 0, 300, 240]}
            shapes={[
              { kind: "circle", c: O, r: R, tone: "neutral" },
              { kind: "point", p: O, label: "O", labelOffset: { x: -14, y: -6 } },
              { kind: "line", a: O, b: P1, tone: "prime" },
              { kind: "line", a: O, b: P2, tone: "prime" },
              { kind: "arc", c: O, r: R, startDeg: -20, endDeg: 50, tone: "prime" },
              { kind: "line", a: Q1, b: Q2, tone: "composite" },
              { kind: "arc", c: O, r: R, startDeg: 140, endDeg: 220, tone: "composite" },
              { kind: "label", p: { x: 195, y: 100 }, text: "r", tone: "prime" },
              { kind: "label", p: { x: 210, y: 135 }, text: "부채꼴", tone: "prime" },
              { kind: "label", p: { x: 55, y: 120 }, text: "현", tone: "composite" },
              { kind: "label", p: { x: 62, y: 40 }, text: "호", tone: "composite" },
            ]}
          />
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <Chip>반지름 — 중심에서 원 위의 한 점까지</Chip>
            <Chip>현 — 원 위의 두 점을 잇는 선분</Chip>
            <Chip>호 — 원 위의 두 점 사이의 곡선</Chip>
            <Chip>부채꼴 — 두 반지름과 호로 둘러싸인 조각</Chip>
          </div>
        </Card>
      </Section>

      <Section num="02" title="원주율과 원의 둘레" sub="원주율(π)은 원의 둘레를 지름으로 나눈 값 — 원의 크기와 상관없이 항상 일정하다.">
        <Card>
          <EqRow center>π ≈ 3.14159…</EqRow>
          <div className="mt-4">
            <EqRow center highlight>
              원의 둘레 = 2πr
            </EqRow>
          </div>
          <div className="mt-4">
            <Note center>둘레를 지름(2r)으로 나누면 언제나 π가 나온다 — 이것이 원주율의 정의 그 자체.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="원의 넓이" sub="반지름을 알면 넓이도 바로 구해진다.">
        <Card>
          <EqRow center highlight>
            원의 넓이 = πr²
          </EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">반지름이 두 배가 되면 넓이는 네 배(2² 배)가 된다 — 제곱으로 커진다.</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 용어">
            현·호·부채꼴, 반지름 두 개로 둘러싸인 조각이 부채꼴.
          </SummaryTile>
          <SummaryTile idx="02 둘레">
            원의 둘레 = 2πr, <span className="text-[var(--ink-soft)]">π는 둘레÷지름.</span>
          </SummaryTile>
          <SummaryTile idx="03 넓이">
            원의 넓이 = πr², 반지름 제곱에 비례.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 42강 · 원과 부채꼴</PageFooter>
    </>
  );
}
