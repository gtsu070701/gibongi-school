import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, ChipRow, Chip, ResultBadge, SummaryGrid, SummaryTile, Insight } from "@/components/diagram/primitives";
import { DivisionLadder } from "@/components/diagram/DivisionLadder";

export default function Chapter03() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 3강"
        prevLink="지난 시간: 인수분해와 소인수분해 → 오늘: 공약수와 공배수"
        title="공약수와 공배수"
        lede="두 수의 약수를 나란히 놓고 겹치는 부분을 찾으면 공약수, 배수를 나란히 놓고 겹치는 부분을 찾으면 공배수다."
      />

      <Section num="01" title="공약수란" sub={<>두 수의 약수를 각각 구한 뒤, <b>공통으로 겹치는 것</b>이 공약수다.</>}>
        <Card>
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-mono-num mb-2 block text-xs font-semibold text-[var(--ink-faint)]">12의 약수</span>
              <ChipRow>
                {[1, 2, 3, 4, 6, 12].map((n) => (
                  <Chip key={n} tone={[1, 2, 4].includes(n) ? "prime" : "neutral"}>
                    {n}
                  </Chip>
                ))}
              </ChipRow>
            </div>
            <div>
              <span className="font-mono-num mb-2 block text-xs font-semibold text-[var(--ink-faint)]">16의 약수</span>
              <ChipRow>
                {[1, 2, 4, 8, 16].map((n) => (
                  <Chip key={n} tone={[1, 2, 4].includes(n) ? "prime" : "neutral"}>
                    {n}
                  </Chip>
                ))}
              </ChipRow>
            </div>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>
              양쪽 모두에 색칠된 <b className="text-[var(--prime)]">1, 2, 4</b>가 12와 16의 <b className="text-[var(--ink)]">공약수</b>다. 그중 가장 큰 4가{" "}
              <b className="text-[var(--ink)]">최대공약수</b>.
            </span>
          </p>
        </Card>
      </Section>

      <Section
        num="02"
        title="최대공약수와 서로소"
        sub={<>두 수를 동시에 나눌 수 있는 소수로 계속 나누다가, 더는 공통 약수가 없으면 멈춘다. 그때 두 수는 <b>서로소</b>.</>}
      >
        <Card>
          <div className="flex flex-col items-center gap-4">
            <DivisionLadder
              rows={[
                { divisor: 2, values: [12, 16] },
                { divisor: 2, values: [6, 8] },
                { values: [3, 4], final: true },
              ]}
              caption="3과 4는 1 말고는 공약수가 없다 → 서로소, 여기서 멈춘다"
            />
            <ResultBadge>
              최대공약수 = 2 × 2 = <b style={{ color: "var(--prime)" }}>4</b>
            </ResultBadge>
          </div>
          <div className="mt-5">
            <Note center>사다리꼴 왼쪽에 세운 나눈 수들만 곱하면 최대공약수예요.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="공배수와 최소공배수" sub={<>두 수의 배수를 나열해 <b>공통으로 겹치는 것</b>을 찾으면 공배수, 그중 가장 작은 것이 최소공배수다.</>}>
        <Card>
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-mono-num mb-2 block text-xs font-semibold text-[var(--ink-faint)]">6의 배수</span>
              <ChipRow>
                {[6, 12, 18, 24, 30, 36, 42, 48].map((n) => (
                  <Chip key={n} tone={[24, 48].includes(n) ? "prime" : "neutral"}>
                    {n}
                  </Chip>
                ))}
              </ChipRow>
            </div>
            <div>
              <span className="font-mono-num mb-2 block text-xs font-semibold text-[var(--ink-faint)]">8의 배수</span>
              <ChipRow>
                {[8, 16, 24, 32, 40, 48, 56, 64].map((n) => (
                  <Chip key={n} tone={[24, 48].includes(n) ? "prime" : "neutral"}>
                    {n}
                  </Chip>
                ))}
              </ChipRow>
            </div>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>
              공배수는 24, 48, 72 … 로 끝없이 이어진다. 그중 가장 작은 <b className="text-[var(--prime)]">24</b>가{" "}
              <b className="text-[var(--ink)]">최소공배수</b>.
            </span>
          </p>
        </Card>
      </Section>

      <Section num="04" title="사다리꼴로 한 번에 구하기" sub="같은 사다리꼴 하나로 최대공약수와 최소공배수를 동시에 구할 수 있다.">
        <Card>
          <div className="flex flex-col items-center gap-4">
            <DivisionLadder rows={[{ divisor: 2, values: [6, 8] }, { values: [3, 4], final: true }]} caption="3과 4는 서로소 → 여기서 멈춘다" />
            <div className="flex flex-wrap justify-center gap-3">
              <ResultBadge>
                최대공약수 = <b style={{ color: "var(--prime)" }}>2</b> <span className="text-[var(--ink-faint)]">(왼쪽만)</span>
              </ResultBadge>
              <ResultBadge>
                최소공배수 = 2×3×4 = <b style={{ color: "var(--composite)" }}>24</b> <span className="text-[var(--ink-faint)]">(전체 다)</span>
              </ResultBadge>
            </div>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 공약수">
            두 수의 약수 중 공통된 것. <span className="text-[var(--ink-soft)]">가장 큰 것이 최대공약수.</span>
          </SummaryTile>
          <SummaryTile idx="02 서로소">
            공약수가 1뿐인 관계. <span className="text-[var(--ink-soft)]">사다리꼴 나눗셈이 멈추는 신호.</span>
          </SummaryTile>
          <SummaryTile idx="03 최소공배수">
            사다리꼴 전체(왼쪽+맨 아래)를 다 곱한 값. <span className="text-[var(--ink-soft)]">최대공약수는 왼쪽만.</span>
          </SummaryTile>
        </SummaryGrid>
        <div className="max-w-[420px]">
          <Insight title="헷갈리지 않는 법">최대공약수는 &ldquo;일부만&rdquo;, 최소공배수는 &ldquo;다 긁어모은다&rdquo;로 기억하자.</Insight>
        </div>
      </Section>

      <PageFooter>fifty-days · 3강 · 공약수 · 공배수</PageFooter>
    </>
  );
}
