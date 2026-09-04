import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter68() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 68강"
        prevLink="지난 시간: 일차식의 곱셈과 나눗셈 → 오늘: 곱셈공식 (세제곱)"
        title="곱셈공식 — 세제곱 공식"
        lede="중학교 때는 제곱까지였다면, 고1 과정은 세제곱이다. 패턴은 똑같이 확장된다 — 각항을 제곱·세제곱하고, 가운데 항들을 채운다."
      />

      <Section num="01" title="(a+b+c)의 전체 제곱" sub="항이 세 개짜리 완전제곱식. 각 항을 제곱한 것 더하기, 두 항씩 짝지어 곱한 것의 2배를 모두 더한다.">
        <Card>
          <EqRow center highlight>
            (a+b+c)² = a²+b²+c² + 2ab+2bc+2ca
          </EqRow>
          <div className="mt-4">
            <Note center>각각 제곱 세 개, 두 항씩 짝지어 곱한 것에 2를 붙인 것 세 개 — 총 여섯 개 항을 빠짐없이 채운다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="(a+b)의 전체 세제곱" sub="앞의 것만 세제곱, 앞뒤를 2:1과 1:2로 섞어서 3배, 뒤의 것만 세제곱 — 리듬으로 외우면 빠르다.">
        <Card>
          <EqRow center highlight>
            (a+b)³ = a³ + 3a²b + 3ab² + b³
          </EqRow>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              (a−2b)³ = <b style={{ color: "var(--prime)" }}>a³ − 6a²b + 12ab² − 8b³</b>
            </ResultBadge>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">부호를 통째로 외우지 말고, b 자리에 −2b를 그대로 대입해서 계산하면 실수가 없다.</p>
        </Card>
      </Section>

      <Section num="03" title="세제곱의 합과 차 — 인수분해 공식" sub="a²−b²와 달리, 세제곱은 합이든 차든 부호에 상관없이 항상 인수분해된다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="합">a³ + b³ = (a+b)(a² − ab + b²)</EqRow>
            <EqRow tag="차">a³ − b³ = (a−b)(a² + ab + b²)</EqRow>
          </div>
          <div className="mt-4">
            <Note center>앞의 괄호는 원래 부호 그대로, 뒤의 괄호는 &ldquo;앞 제곱, 곱해서 부호 반대, 뒤 제곱&rdquo; — 부호만 뒤집어서 채운다.</Note>
          </div>
          <div className="mt-4 flex justify-center">
            <ResultBadge>x³ − 8 = (x−2)(x² + 2x + 4)</ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 항 3개 완전제곱">
            각각 제곱 + 두 항씩 곱한 것의 2배, 총 여섯 항.
          </SummaryTile>
          <SummaryTile idx="02 세제곱 공식">
            (a+b)³ = a³+3a²b+3ab²+b³.
          </SummaryTile>
          <SummaryTile idx="03 세제곱 합·차">
            a³±b³ = (a±b)(a²∓ab+b²) — 부호 상관없이 항상 인수분해된다.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 68강 · 곱셈공식 · 세제곱 공식</PageFooter>
    </>
  );
}
