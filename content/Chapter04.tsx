import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, ChipRow, Chip, ResultBadge, SummaryGrid, SummaryTile, Teaser } from "@/components/diagram/primitives";
import { ExponentTable } from "@/components/diagram/ExponentTable";

export default function Chapter04() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 4강"
        prevLink="지난 시간: 공약수와 공배수 → 오늘: 소인수분해로 보는 최대공약수·최소공배수"
        title="최대공약수와 최소공배수, 소인수분해로"
        lede="사다리꼴 나눗셈 대신, 두 수를 각각 소인수분해해서 지수를 비교하는 더 빠른 방법을 익힌다."
      />

      <Section num="01" title="약수는 소인수분해의 재료" sub={<>54 = 2¹ × 3³. 이 재료(2 하나, 3 세 개)로 만들 수 있는 모든 조합이 54의 약수다.</>}>
        <Card>
          <div className="mb-4 flex justify-center gap-2">
            <Chip tone="prime">2¹</Chip>
            <Chip tone="prime">3³</Chip>
          </div>
          <ChipRow center>
            {[1, 2, 3, 6, 9, 18, 27, 54].map((n) => (
              <Chip key={n} tone="neutral">
                {n}
              </Chip>
            ))}
          </ChipRow>
          <p className="mt-4 text-center text-[13.5px] text-[var(--ink-soft)]">재료를 하나도 안 쓰면 1, 다 쓰면 54 — 그 사이 조합이 전부 약수다.</p>
        </Card>
      </Section>

      <Section num="02" title="공약수는 공통 재료" sub="54와 18을 각각 소인수분해하고, 겹치는 재료만 남기면 그게 공약수의 재료다.">
        <Card>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <span className="font-mono-num mb-2 block text-xs font-semibold text-[var(--ink-faint)]">54 = 2¹ × 3³</span>
              <ChipRow>
                {[1, 2, 3, 6, 9, 18, 27, 54].map((n) => (
                  <Chip key={n} tone={[1, 2, 3, 6, 9, 18].includes(n) ? "prime" : "neutral"}>
                    {n}
                  </Chip>
                ))}
              </ChipRow>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <span className="font-mono-num mb-2 block text-xs font-semibold text-[var(--ink-faint)]">18 = 2¹ × 3²</span>
              <ChipRow>
                {[1, 2, 3, 6, 9, 18].map((n) => (
                  <Chip key={n} tone="prime">
                    {n}
                  </Chip>
                ))}
              </ChipRow>
            </div>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>
              27은 18의 약수가 아니라서 공약수에서 빠진다. 공통 재료는 <b className="text-[var(--ink)]">2¹ × 3²</b>, 그걸로 만든 약수 6개가 공약수다.
            </span>
          </p>
        </Card>
      </Section>

      <Section num="03" title="최대공약수 = 공통 재료를 전부" sub="같은 소인수는 지수가 더 작은 쪽을 선택해서 곱한다.">
        <Card>
          <ExponentTable
            aLabel="54"
            bLabel="18"
            resultLabel="공약수 지수"
            rows={[
              { prime: 2, a: 1, b: 1, pick: "min" },
              { prime: 3, a: 3, b: 2, pick: "min" },
            ]}
          />
          <div className="mt-4">
            <ResultBadge>
              최대공약수 = 2¹ × 3² = <b style={{ color: "var(--prime)" }}>18</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="04" title="배수, 고등학생 버전" sub={<>a의 배수 = <b>a를 포함하고 있는 모든 수</b>. 공배수는 두 수를 동시에 포함하는 수.</>}>
        <Card>
          <p className="text-[14px] leading-relaxed text-[var(--ink-soft)]">
            10의 배수는 10을 재료로 갖고 있는 모든 수, 8의 배수는 8을 재료로 갖고 있는 모든 수. 그렇다면 공배수는 <b className="text-[var(--ink)]">두 재료를 전부 갖고
            있는 수</b> — 즉 겹치는 재료뿐 아니라 양쪽 재료를 다 채워 넣은 수다.
          </p>
          <div className="mt-4">
            <Note center>초등학생 버전(약수 나열)에서 고등학생 버전(재료로 이해하기)으로 넘어가는 게 이번 강의의 핵심이에요.</Note>
          </div>
        </Card>
      </Section>

      <Section num="05" title="최소공배수 = 있는 재료를 전부" sub="이번엔 겹치지 않아도 상관없다. 양쪽에 등장한 소인수를 지수가 더 큰 쪽으로 전부 긁어모은다.">
        <Card>
          <ExponentTable
            aLabel="A = 2²×3³×5×7"
            bLabel="B = 2×3²×5²×11"
            resultLabel="최소공배수 지수"
            rows={[
              { prime: 2, a: 2, b: 1, pick: "max" },
              { prime: 3, a: 3, b: 2, pick: "max" },
              { prime: 5, a: 1, b: 2, pick: "max" },
              { prime: 7, a: 1, b: 0, pick: "max" },
              { prime: 11, a: 0, b: 1, pick: "max" },
            ]}
          />
          <div className="mt-4">
            <ResultBadge>
              최소공배수 = <b style={{ color: "var(--composite)" }}>2² × 3³ × 5² × 7 × 11</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="06" title="같은 예제, 최대공약수는?" sub="이번엔 공통으로 등장한 소인수만, 지수가 더 작은 쪽으로 남긴다. 한쪽에만 있는 7과 11은 탈락.">
        <Card>
          <ExponentTable
            aLabel="A = 2²×3³×5×7"
            bLabel="B = 2×3²×5²×11"
            resultLabel="최대공약수 지수"
            rows={[
              { prime: 2, a: 2, b: 1, pick: "min" },
              { prime: 3, a: 3, b: 2, pick: "min" },
              { prime: 5, a: 1, b: 2, pick: "min" },
              { prime: 7, a: 1, b: 0, pick: "none" },
              { prime: 11, a: 0, b: 1, pick: "none" },
            ]}
          />
          <div className="mt-4">
            <ResultBadge>
              최대공약수 = 2¹ × 3² × 5¹ = <b style={{ color: "var(--prime)" }}>90</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 약수">
            소인수분해 결과(재료)로 만들 수 있는 모든 조합. <span className="text-[var(--ink-soft)]">공약수는 겹치는 재료.</span>
          </SummaryTile>
          <SummaryTile idx="02 최대공약수">
            공통 소인수를 <b>작은 지수</b>로 모두 곱한다. <span className="text-[var(--ink-soft)]">한쪽에만 있으면 탈락.</span>
          </SummaryTile>
          <SummaryTile idx="03 최소공배수">
            등장한 모든 소인수를 <b>큰 지수</b>로 모두 곱한다. <span className="text-[var(--ink-soft)]">공통 아니어도 포함.</span>
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">4강까지 왔다면 50일 수학 1~4강 종합문제에 도전할 준비가 끝났다.</Teaser>
      </Section>

      <PageFooter>fifty-days · 4강 · 최대공약수 · 최소공배수</PageFooter>
    </>
  );
}
