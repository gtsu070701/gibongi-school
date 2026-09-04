import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, ChipRow, Chip, EqRow, SummaryGrid, SummaryTile, Teaser, SplitRow, SplitCard, Legend, InsightRow, Insight } from "@/components/diagram/primitives";
import { Tree } from "@/components/diagram/Tree";
import { NumberGrid, type NumTile } from "@/components/diagram/NumberGrid";

const numberTiles: NumTile[] = [
  { n: 1, tag: "단위수", tone: "unit" },
  { n: 2, tag: "소수", tone: "prime" },
  { n: 3, tag: "소수", tone: "prime" },
  { n: 4, tag: "2×2", tone: "composite" },
  { n: 5, tag: "소수", tone: "prime" },
  { n: 6, tag: "2×3", tone: "composite" },
  { n: 7, tag: "소수", tone: "prime" },
  { n: 8, tag: "2³", tone: "composite" },
  { n: 9, tag: "3×3", tone: "composite" },
  { n: 10, tag: "2×5", tone: "composite" },
  { n: 11, tag: "소수", tone: "prime" },
  { n: 12, tag: "2²×3", tone: "composite" },
  { n: 13, tag: "소수", tone: "prime" },
  { n: 14, tag: "2×7", tone: "composite" },
  { n: 15, tag: "3×5", tone: "composite" },
  { n: 16, tag: "2⁴", tone: "composite" },
  { n: 17, tag: "소수", tone: "prime" },
  { n: 18, tag: "2×3²", tone: "composite" },
  { n: 19, tag: "소수", tone: "prime" },
  { n: 20, tag: "2²×5", tone: "composite" },
  { n: 21, tag: "3×7", tone: "composite" },
  { n: 22, tag: "2×11", tone: "composite" },
  { n: 23, tag: "소수", tone: "prime" },
];

export default function Chapter01() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 1강"
        title="정수와 소수"
        lede="정수를 세 갈래로 나누고, 약수를 곱셈으로 되짚은 뒤, 모든 자연수를 소수와 합성수로 나누어 지도를 그린다."
      />

      <Section num="01" title="정수의 분류" sub="정수는 양의 정수·0·음의 정수 세 가지로 나뉜다. 0은 양도 음도 아니다.">
        <Card>
          <div className="flex flex-col items-center">
            <Tree
              node={{
                label: "정수",
                size: "root",
                children: [
                  { label: "양의 정수", sub: "= 자연수 (1, 2, 3, 4 …)", size: "mid" },
                  { label: "0", sub: "양도 음도 아님", size: "mid" },
                  { label: "음의 정수", sub: "(−1, −2, −3 …)", size: "mid" },
                ],
              }}
            />
          </div>
          <div className="mt-6">
            <Note center>50일수학에서는 음수를 아직 안 다뤄요. 지금은 자연수(양의 정수)만 생각하면 됩니다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="약수란 무엇인가" sub={<>정수 × 정수 = 어떤 정수, 이때 곱해진 두 정수가 그 수의 <b>약수</b>다.</>}>
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow>
              1 <span className="text-[var(--ink-faint)]">×</span> 12 <span className="text-[var(--ink-faint)]">=</span> 12
            </EqRow>
            <EqRow>
              2 <span className="text-[var(--ink-faint)]">×</span> 6 <span className="text-[var(--ink-faint)]">=</span> 12
            </EqRow>
            <EqRow tag="더는 없음">
              3 <span className="text-[var(--ink-faint)]">×</span> 4 <span className="text-[var(--ink-faint)]">=</span> 12
            </EqRow>
          </div>
          <div className="mt-3">
            <ChipRow>
              {[1, 2, 3, 4, 6, 12].map((n) => (
                <Chip key={n} tone="prime">
                  {n}
                </Chip>
              ))}
            </ChipRow>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>
              <b className="text-[var(--ink)]">12의 약수는 6개</b> — {"{1, 2, 3, 4, 6, 12}"}. 엄밀히는 음의 약수 6개(−1×−12=12 등)도 있어 총 12개지만,
              고등학교 과정에서는 관례상 <b className="text-[var(--ink)]">양의 약수</b>만을 &ldquo;약수&rdquo;라 부른다.
            </span>
          </p>
        </Card>
        <Teaser>
          40, 400처럼 수가 커지면 곱셈 쌍을 일일이 찾는 방식은 비효율적이다. 다음 강의의 주제, <b>소인수분해</b>가 필요한 이유.
        </Teaser>
      </Section>

      <Section
        num="03"
        title="소수와 합성수 — 오늘의 핵심"
        sub={
          <>
            1을 제외한 모든 자연수는 <b style={{ color: "var(--prime)" }}>소수</b> 아니면 <b style={{ color: "var(--composite)" }}>합성수</b>다.
          </>
        }
      >
        <Card>
          <SplitRow>
            <SplitCard tone="unit" kicker="예외 · 1개" title="1 · 단위수">
              소수도 합성수도 아닌 유일한 자연수. 비교의 기준이 되는 &ldquo;단위&rdquo;.
            </SplitCard>
            <SplitCard tone="prime" kicker="Prime" title="소수" example="2, 3, 5, 7, 11 …">
              1과 자기 자신만을 약수로 갖는, 더 이상 쪼갤 수 없는 근본의 수.
            </SplitCard>
            <SplitCard tone="composite" kicker="Composite" title="합성수" example="4=2×2, 12=2²×3">
              소수들을 곱해서 만들어지는 수. 즉 더 작은 소수로 쪼개진다.
            </SplitCard>
          </SplitRow>

          <div className="my-6">
            <Legend
              items={[
                { tone: "unit", label: "단위수" },
                { tone: "prime", label: "소수" },
                { tone: "composite", label: "합성수" },
              ]}
            />
          </div>
          <NumberGrid tiles={numberTiles} />

          <div className="mt-5">
            <InsightRow>
              <Insight title="짝수의 함정">
                모든 짝수는 2를 인수로 갖는다. 그래서 짝수 중 소수는 <b style={{ color: "var(--prime)" }}>2 하나뿐</b>, 나머지 짝수는 전부 합성수.
              </Insight>
              <Insight title="홀수라고 안심 금지">9=3×3, 15=3×5, 21=3×7처럼 홀수여도 소수가 아닌 경우가 많다.</Insight>
              <Insight title="끝이 없다">소수는 지구상에 유한하지 않고, 무한히 존재하는 것으로 알려져 있다.</Insight>
            </InsightRow>
          </div>

          <div className="mt-6">
            <Note center>최소한 23까지는 외워두자 — 2 3 5 7 11 13 17 19 23</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 정수">
            정수 = 양의 정수(자연수) + 0 + 음의 정수. <span className="text-[var(--ink-soft)]">지금은 자연수 중심으로.</span>
          </SummaryTile>
          <SummaryTile idx="02 약수">
            곱해서 그 수가 되는 정수의 짝. <span className="text-[var(--ink-soft)]">관례상 양의 약수만 센다.</span>
          </SummaryTile>
          <SummaryTile idx="03 소수 / 합성수">
            자연수 = 1(단위수) + 소수(못 쪼갬) + 합성수(소수의 곱). <span className="text-[var(--ink-soft)]">소수가 핵심.</span>
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 1강 · 정수 · 약수 · 소수</PageFooter>
    </>
  );
}
