import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter39() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 39강"
        prevLink="지난 시간: 합성함수 → 오늘: 역함수"
        title="역함수"
        lede="화살을 맞은 쪽이 거꾸로 화살을 쏘는 함수 — x와 y의 역할을 통째로 바꾼 것이 역함수다. 하지만 아무 함수나 뒤집을 수 있는 건 아니다."
      />

      <Section num="01" title="역함수 — 화살 방향을 뒤집는다" sub="f에 의해 1이 5에 대응됐다면, 역함수 f⁻¹에 의해서는 5가 1에 대응된다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="원래 함수 f">1 → 5</EqRow>
            <EqRow highlight tag="역함수 f⁻¹">
              5 → 1
            </EqRow>
          </div>
          <div className="mt-4">
            <Note center>맞은 애가 쏜 애에게 되쏘는 것 — x와 y의 역할을 서로 바꾼 것이 역함수다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="역함수가 존재하려면 — 일대일대응" sub="원래 함수가 일대일대응일 때만 역함수가 함수로서 성립한다.">
        <CompareRow>
          <CompareCard kicker="존재함" title="일대일대응" highlight>
            공역의 모든 원소가 정확히 한 번씩만 화살을 맞는다. 뒤집어도 여전히 함수.
          </CompareCard>
          <CompareCard kicker="존재 안 함" title="일대일대응이 아님">
            어떤 원소가 화살을 못 맞거나 두 번 맞으면, 뒤집었을 때 함수가 깨진다.
          </CompareCard>
        </CompareRow>
        <Card>
          <p className="text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            세로선 판정으로 함수인지 확인했듯, 역함수의 존재는 <b className="text-[var(--ink)]">가로선 판정</b>으로 확인한다. 가로선을 그어 그래프와 항상 한 점에서만 만나면 일대일대응 — 이차함수는 가로선이 두 점에서 만나므로 역함수가 존재하지 않는다.
          </p>
        </Card>
      </Section>

      <Section num="03" title="역함수 구하는 방법" sub="x와 y를 서로 바꿔 쓴 뒤, y에 대해 다시 정리하면 그것이 역함수다.">
        <Card>
          <EqRow center>y = 2x − 1</EqRow>
          <div className="my-3 flex flex-col gap-2">
            <EqRow tag="x와 y를 서로 바꾼다">x = 2y − 1</EqRow>
            <EqRow tag="y에 대해 정리">y = (x + 1) / 2</EqRow>
          </div>
          <div className="flex justify-center">
            <ResultBadge>
              f⁻¹(x) = <b style={{ color: "var(--prime)" }}>(x + 1) / 2</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 역함수">
            x와 y의 역할을 바꾼 함수. <span className="text-[var(--ink-soft)]">f⁻¹로 표기.</span>
          </SummaryTile>
          <SummaryTile idx="02 존재 조건">
            일대일대응일 때만 역함수가 존재한다.
          </SummaryTile>
          <SummaryTile idx="03 구하는 법">
            x, y를 바꾸고 y에 대해 다시 정리한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 39강 · 역함수</PageFooter>
    </>
  );
}
