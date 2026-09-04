import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, ChipRow, Chip, EqRow, ResultBadge, SummaryGrid, SummaryTile, Teaser, CompareRow, CompareCard } from "@/components/diagram/primitives";
import { Tree, type TreeNode } from "@/components/diagram/Tree";

const factorTree72: TreeNode = {
  label: "72",
  size: "root",
  tone: "composite",
  children: [
    {
      label: "8",
      size: "mid",
      tone: "composite",
      children: [
        { label: "2", size: "leaf", tone: "prime" },
        { label: "2", size: "leaf", tone: "prime" },
        { label: "2", size: "leaf", tone: "prime" },
      ],
    },
    {
      label: "9",
      size: "mid",
      tone: "composite",
      children: [
        { label: "3", size: "leaf", tone: "prime" },
        { label: "3", size: "leaf", tone: "prime" },
      ],
    },
  ],
};

const ladder = [
  { num: "54", steps: "54 = 6 × 9\n6 = 2×3, 9 = 3×3", final: "54 = 2¹ × 3³" },
  { num: "120", steps: "120 = 12 × 10\n12 = 2²×3, 10 = 2×5", final: "120 = 2³ × 3 × 5" },
  { num: "108", steps: "108 = 2 × 54\n54 = 6×9 = (2×3)×(3×3)", final: "108 = 2² × 3³" },
  { num: "1500", steps: "1500 = 100 × 15\n100 = 2²×5², 15 = 3×5", final: "1500 = 2² × 3 × 5³" },
];

export default function Chapter02() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 2강"
        prevLink="지난 시간: 정수와 소수 → 오늘: 인수분해"
        title="인수분해와 소인수분해"
        lede="곱으로 연결된 각각을 인수라 부르고, 그 인수를 소수로만 이루어지도록 끝까지 쪼개면 소인수분해다. 오늘은 이 소인수분해를 빠르게 해내는 법을 익힌다."
      />

      <Section num="01" title="인수란 무엇인가" sub={<>곱으로 연결된 것들을 하나씩 떼어낸 각각을, 그리고 그 조합으로 만들 수 있는 모든 수를 <b>인수</b>라 한다.</>}>
        <Card>
          <div className="mb-4 flex justify-center">
            <EqRow center>
              3 <span className="text-[var(--ink-faint)]">×</span> 5 <span className="text-[var(--ink-faint)]">×</span> 7 <span className="text-[var(--ink-faint)]">=</span> 105
            </EqRow>
          </div>
          <ChipRow center>
            <Chip>3</Chip>
            <Chip>5</Chip>
            <Chip>7</Chip>
            <Chip>15 (3×5)</Chip>
            <Chip>21 (3×7)</Chip>
            <Chip>35 (5×7)</Chip>
            <Chip tone="neutral">105</Chip>
          </ChipRow>
        </Card>
      </Section>

      <Section
        num="02"
        title="인수분해 vs 소인수분해"
        sub={
          <>
            12를 곱 꼴로 만드는 방법은 여러 가지다. 그중 인수가 전부 소수가 될 때까지 쪼갠 것만 <b style={{ color: "var(--prime)" }}>소인수분해</b>라 부른다.
          </>
        }
      >
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="인수분해">
              12 <span className="text-[var(--ink-faint)]">×</span> 1
            </EqRow>
            <EqRow tag="인수분해">
              6 <span className="text-[var(--ink-faint)]">×</span> 2
            </EqRow>
            <EqRow tag="인수분해">
              4 <span className="text-[var(--ink-faint)]">×</span> 3
            </EqRow>
            <EqRow highlight tag="소인수분해 — 전부 소수">
              2 <span className="text-[var(--ink-faint)]">×</span> 2 <span className="text-[var(--ink-faint)]">×</span> 3
            </EqRow>
          </div>
          <div className="mt-4">
            <ResultBadge>
              12 = 2² × 3¹ → 지수로 정리한 <b style={{ color: "var(--prime)" }}>최종 답</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="쪼개는 방법을 바꾼다" sub="니은자 모양으로 소수 하나씩 나누던 방식 대신, 구구단을 바로 떠올려 크게 쪼갠 뒤 재귀적으로 마저 쪼갠다.">
        <CompareRow>
          <CompareCard kicker="예전 방식" title="소수로 한 번씩만 나누기">
            2로 나누고, 또 2로 나누고, 3으로 나누고 … 소수가 나올 때까지 한 단계씩. 느리지만 실수는 적다.
          </CompareCard>
          <CompareCard kicker="권장 방식" title="구구단으로 한 번에 쪼개기" highlight>
            72를 보면 &ldquo;8 × 9&rdquo; 처럼 아무 곱셈이나 먼저 떠올린 뒤, 소수가 아닌 인수만 골라 다시 쪼갠다. 훨씬 빠르다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="04" title="실전: 72를 소인수분해" sub="72 → 8 × 9 를 먼저 떠올리고, 소수가 아닌 8과 9를 각각 한 번 더 쪼갠다.">
        <Card>
          <div className="flex flex-col items-center gap-4">
            <Tree node={factorTree72} />
            <ResultBadge>
              72 = <b style={{ color: "var(--prime)" }}>2³ × 3²</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="05" title="더 풀어보기" sub="떠오르는 구구단이 다르면 과정도 달라지지만, 끝까지 쪼개면 결과는 항상 하나로 모인다.">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {ladder.map((item) => (
            <div key={item.num} className="flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <span className="font-display text-lg font-bold text-[var(--ink)]">{item.num}</span>
              <span className="font-mono-num whitespace-pre-line text-[12.5px] leading-relaxed text-[var(--ink-faint)]">{item.steps}</span>
              <span className="font-mono-num mt-0.5 border-t border-dashed border-[var(--border)] pt-2 text-[15px] font-bold text-[var(--prime)]">
                {item.final}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section num="06" title="큰 수를 만났을 때">
        <div className="flex items-center gap-4 rounded-xl border-[1.5px] border-dashed border-[var(--composite)] bg-[var(--composite-tint)] px-5 py-[18px]">
          <span className="font-mono-num flex-none rounded-lg bg-[var(--composite)] px-2.5 py-1.5 text-[13px] font-bold text-[var(--surface)]">CHEAT</span>
          <p className="text-[13.5px] leading-relaxed text-[var(--ink)]">
            마지막 자리가 <b style={{ color: "var(--composite)" }}>0</b>으로 끝나면 그 수는 언제나 <b style={{ color: "var(--composite)" }}>2 × 5</b>(=10)를 하나 품고
            있다. 0이 두 개면 2×5가 두 번, 즉 2²×5²부터 깔고 시작하면 된다. 남은 부분만 마저 쪼개면 끝.
          </p>
        </div>
        <Note center>108처럼 9단도, 끝자리 0도 아니면? 그냥 2로 나누는 것부터 편하게 시작하면 돼요.</Note>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 인수">
            곱으로 연결된 각각(과 그 조합)이 인수. <span className="text-[var(--ink-soft)]">3×5×7이면 15, 21, 35도 인수.</span>
          </SummaryTile>
          <SummaryTile idx="02 소인수분해">
            인수를 전부 소수가 되도록 쪼갠 것. <span className="text-[var(--ink-soft)]">결과는 지수로 정리한다.</span>
          </SummaryTile>
          <SummaryTile idx="03 빠른 풀이">
            구구단을 크게 먼저 떠올리고 재귀적으로 쪼갠다. <span className="text-[var(--ink-soft)]">끝자리 0은 2×5부터.</span>
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">
          소인수분해를 알아야 <b>약수를 정복</b>할 수 있다 — 다음 강의에서 약수의 개수와 총합을 구하는 법으로 이어진다.
        </Teaser>
      </Section>

      <PageFooter>fifty-days · 2강 · 인수분해 · 소인수분해</PageFooter>
    </>
  );
}
