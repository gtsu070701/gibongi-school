import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter27() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 27강"
        prevLink="지난 시간: 고차방정식 → 오늘: 함수"
        title="함수"
        lede="무언가를 넣으면 정해진 규칙에 따라 무언가 하나가 튀어나오는 기계 — 그게 함수다. 세상의 모든 버튼과 자판기가 사실은 함수다."
      />

      <Section num="01" title="함수 = 기계" sub="x를 넣으면 규칙에 따라 y 하나가 나온다. 이 x와 y를 대응시키는 기계가 함수다.">
        <Card>
          <EqRow center highlight>
            2 → [+3인 기계] → 5
          </EqRow>
          <div className="mt-4">
            <Note center>버튼, 자판기, 리모컨 — 지구상의 모든 기계는 무언가를 넣으면 정해진 무언가가 나온다. 그게 다 함수다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="대응 — 정의역과 공역을 잇는 것" sub="화살을 쏘는 쪽을 정의역, 화살을 맞는 쪽을 공역이라 부른다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="정의역의 원소">1 → 5</EqRow>
            <EqRow tag="정의역의 원소">2 → 4</EqRow>
            <EqRow tag="정의역의 원소">3 → 6, 7</EqRow>
          </div>
        </Card>
      </Section>

      <Section num="03" title="함수가 되기 위한 두 조건" sub="정의역의 모든 원소가 화살을 쏴야 하고, 딱 한 발씩만 쏴야 한다.">
        <CompareRow>
          <CompareCard kicker="조건 1" title="빠짐없이 전부">
            정의역의 모든 원소가 화살을 쏴야 한다. 하나라도 안 쏘면 함수가 아니다.
          </CompareCard>
          <CompareCard kicker="조건 2" title="딱 한 발씩만" highlight>
            한 원소가 두 발 이상 쏘면 안 된다. 결과가 하나로 정해져야 기계로서 의미가 있다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="04" title="함수인 것과 아닌 것" sub="같은 곳을 여러 명이 함께 가리켜도 괜찮다. 문제는 한 명이 두 곳을 가리킬 때다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow highlight tag="함수 ✓ — 모두 한 발씩">
              1→5, 2→4, 3→6
            </EqRow>
            <EqRow tag="함수 ✓ — 같은 곳을 가리켜도 무방">
              1→5, 2→5, 3→5
            </EqRow>
            <EqRow tag="함수 ✗ — 3이 안 쐈다">
              1→5, 2→4, 3→(없음)
            </EqRow>
            <EqRow tag="함수 ✗ — 1이 두 발 쐈다">
              1→5, 1→6, 2→4
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 함수">
            정의역을 공역에 대응시키는 규칙. <span className="text-[var(--ink-soft)]">세상 모든 기계가 함수.</span>
          </SummaryTile>
          <SummaryTile idx="02 조건 1">
            정의역의 모든 원소가 빠짐없이 대응돼야 한다.
          </SummaryTile>
          <SummaryTile idx="03 조건 2">
            한 원소는 딱 하나의 결과에만 대응돼야 한다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 27강 · 함수</PageFooter>
    </>
  );
}
