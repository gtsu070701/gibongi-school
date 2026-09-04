import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter71() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 71강"
        prevLink="지난 시간: 고차식의 인수분해 → 오늘: 일차방정식의 풀이 끝내기"
        title="일차방정식의 풀이 끝내기"
        lede="소수나 분수가 섞인 방정식은 미리 정수로 정리해두면 훨씬 깔끔해진다. 등식의 성질 하나로 전부 해결된다."
      />

      <Section num="01" title="소수가 있으면 10의 거듭제곱을 곱한다" sub="양변에 똑같은 수를 곱해도 등식은 유지된다 — 이걸 이용해 소수를 정수로 바꿔버린다.">
        <Card>
          <EqRow center>0.7x + 0.8 = 2.9</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">양변에 10을 곱한다</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              7x + 8 = 29 → x = <b style={{ color: "var(--prime)" }}>3</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="02" title="분수가 있으면 최소공배수를 곱한다" sub="분모들의 최소공배수를 양변에 곱하면 분수가 한 번에 사라진다.">
        <Card>
          <EqRow center>x/2 − 1/3 = x/6 + 1</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">분모 2, 3, 6의 최소공배수 6을 양변에 곱한다</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              3x − 2 = x + 6 → x = <b style={{ color: "var(--prime)" }}>4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="비례식 — 내항의 곱과 외항의 곱은 같다" sub="a:b = c:d 라면, 안쪽 두 수를 곱한 것과 바깥쪽 두 수를 곱한 것이 항상 같다.">
        <Card>
          <EqRow center highlight>
            a : b = c : d ⟺ ad = bc
          </EqRow>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              3 : (x−1) = 4 : (x+2) → 3(x+2) = 4(x−1)
            </ResultBadge>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">외항(맨 바깥 두 수)의 곱과 내항(안쪽 두 수)의 곱을 같다고 놓으면 곧바로 일차방정식이 된다.</p>
        </Card>
      </Section>

      <Section num="04" title="해에 조건이 붙는 경우" sub="해가 자연수·정수 등의 조건을 만족해야 할 때는, 식을 세운 뒤 그 조건을 만족하는 값만 골라낸다.">
        <Card>
          <EqRow center>1차방정식의 해가 11 − 2a일 때, 해가 자연수가 되도록 하는 자연수 a는?</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              a = <b style={{ color: "var(--prime)" }}>1, 2, 3, 4, 5</b> (a=6이면 해가 −1이 되어 탈락)
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 소수">
            양변에 10의 거듭제곱을 곱해 정수로 바꾼다.
          </SummaryTile>
          <SummaryTile idx="02 분수">
            양변에 분모의 최소공배수를 곱해 없앤다.
          </SummaryTile>
          <SummaryTile idx="03 비례식">
            내항의 곱 = 외항의 곱, 이 한 줄로 방정식이 된다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 71강 · 일차방정식의 풀이 끝내기</PageFooter>
    </>
  );
}
