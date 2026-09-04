import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter22() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 22강"
        prevLink="지난 시간: 허수단위 i와 복소수 → 오늘: 방정식"
        title="방정식 — 등식의 성질과 이항"
        lede="양변에 같은 수를 더하거나 빼거나 곱하거나(0이 아닌 수로) 나눠도 등식은 여전히 성립한다. 이 한 가지 원리가 모든 방정식 풀이의 뿌리다."
      />

      <Section num="01" title="등식의 성질" sub="양변에 똑같은 조작을 하면, 등식은 언제나 그대로 유지된다.">
        <Card>
          <EqRow center highlight>
            a = b 이면, a + c = b + c, a − c = b − c, ac = bc, a/c = b/c (c ≠ 0)
          </EqRow>
          <div className="mt-4">
            <Note center>나눗셈만 조심하면 된다 — 0으로 나누는 건 절대 안 된다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="이항 — 부호를 바꿔서 반대편으로" sub="양변에 더하거나 빼는 과정을, 항을 반대편으로 옮기면서 부호를 바꾸는 것으로 생각하면 훨씬 빠르다.">
        <Card>
          <EqRow center>3x + 1 = 10</EqRow>
          <div className="my-3 flex justify-center">
            <span className="font-mono-num text-sm text-[var(--ink-faint)]">+1을 우변으로 이항 → 부호가 −1로 바뀐다</span>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              3x = 9 → x = <b style={{ color: "var(--prime)" }}>3</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="주의 — 계수로 나눌 때는 부호가 안 바뀐다" sub="7x=14에서 7을 옮길 때는 이항이 아니라 양변을 7로 나누는 것. 부호는 그대로다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="항을 이항 — 부호 바뀜">+1이 넘어가면 −1</EqRow>
            <EqRow tag="계수로 양변을 나눔 — 부호 그대로" highlight>
              7x = 14 → x = 14 ÷ 7 = 2
            </EqRow>
          </div>
          <div className="mt-4">
            <Note center>7과 x는 곱해져서 하나의 항. 그 계수 7을 넘길 때는 나누는 것이지, 항을 옮기는 이항이 아니다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="04" title="1차방정식 풀이 실전" sub="x가 있는 항은 좌변으로, 상수항은 우변으로 이항한 뒤, 마지막에 계수로 나눈다.">
        <Card>
          <EqRow center>3x + 2 = x + 6</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="x항은 좌변으로, 상수는 우변으로">3x − x = 6 − 2</EqRow>
            <EqRow tag="계수로 양변을 나눈다">2x = 4</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              x = <b style={{ color: "var(--prime)" }}>2</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 등식의 성질">
            양변에 같은 조작을 하면 등식은 유지된다.
          </SummaryTile>
          <SummaryTile idx="02 이항">
            항을 반대편으로 옮길 때 부호가 바뀐다.
          </SummaryTile>
          <SummaryTile idx="03 계수 나누기">
            곱해진 계수를 없앨 때는 부호가 바뀌지 않는다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 22강 · 방정식 · 등식의 성질</PageFooter>
    </>
  );
}
