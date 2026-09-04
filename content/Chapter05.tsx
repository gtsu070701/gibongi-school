import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, ChipRow, Chip, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard, InsightRow, Insight, Teaser } from "@/components/diagram/primitives";

function DecimalStack({ rows, result }: { rows: string[]; result: string }) {
  return (
    <div className="flex flex-col items-end gap-1 font-mono-num text-lg text-[var(--ink)]">
      {rows.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      <span className="border-t border-[var(--border)] pt-1 font-bold text-[var(--prime)]">{result}</span>
    </div>
  );
}

function ReciprocalRow({ n, r }: { n: string; r: string }) {
  return (
    <div className="flex items-center gap-3 font-mono-num text-[15px] text-[var(--ink)]">
      <Chip tone="neutral">{n}</Chip>
      <span className="text-[var(--ink-faint)]">의 역수는</span>
      <Chip tone="prime">{r}</Chip>
    </div>
  );
}

export default function Chapter05() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 5강"
        prevLink="지난 시간: 최대공약수와 최소공배수 → 오늘: 소수의 사칙연산"
        title="소수의 사칙연산"
        lede="나눗셈은 분수이자 역수의 곱셈이다. 소수의 덧셈·뺄셈·곱셈·나눗셈을 정리하고, 사칙연산이 섞였을 때 계산 순서를 몸에 익힌다."
      />

      <Section num="01" title="나눗셈은 분수다" sub={<>a ÷ b는 그냥 a/b다. 고등학교부터는 나누기 기호(÷)를 거의 쓰지 않고 전부 분수로 나타낸다.</>}>
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow center>
              a <span className="text-[var(--ink-faint)]">÷</span> b <span className="text-[var(--ink-faint)]">=</span> a/b
            </EqRow>
            <EqRow center>
              3 <span className="text-[var(--ink-faint)]">÷</span> 2 <span className="text-[var(--ink-faint)]">=</span> 3/2
            </EqRow>
          </div>
        </Card>
      </Section>

      <Section num="02" title="역수 — 곱해서 1이 되는 짝" sub="두 수를 곱해서 1이 될 때, 이 둘을 서로의 역수라 한다. 분자와 분모의 자리를 바꾸면 되고, 부호는 그대로 살린다.">
        <Card>
          <div className="flex flex-col gap-3">
            <ReciprocalRow n="3" r="1/3" />
            <ReciprocalRow n="-4" r="-1/4" />
            <ReciprocalRow n="-5" r="-1/5" />
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>정수 n은 n/1로 보고 분자·분모를 뒤집으면 된다. 부호(−)는 그대로 두고 숫자만 뒤집는 것에 주의.</span>
          </p>
        </Card>
      </Section>

      <Section num="03" title="나눗셈을 곱셈으로 바꾸기" sub="÷ 뒤에 있는 수를 역수로 바꾸면, 나눗셈은 언제나 곱셈이 된다.">
        <Card>
          <EqRow center highlight>
            a <span className="text-[var(--ink-faint)]">÷</span> b <span className="text-[var(--ink-faint)]">=</span> a <span className="text-[var(--ink-faint)]">×</span> (1/b)
          </EqRow>
          <div className="mt-4 flex flex-col items-center gap-3">
            <span className="font-mono-num text-sm text-[var(--ink-soft)]">5 ÷ (4/5) = 5 × (5/4)</span>
            <ResultBadge>
              = <b style={{ color: "var(--prime)" }}>25/4</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="04" title="소수의 덧셈·뺄셈" sub="소수점의 위치만 맞춰 세로로 나란히 쓰면, 그다음은 자연수 계산과 똑같다.">
        <Card>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex justify-center">
              <DecimalStack rows={["0.7", "+ 0.6"]} result="1.3" />
            </div>
            <div className="flex justify-center">
              <DecimalStack rows={["7.63", "− 2.84"]} result="4.79" />
            </div>
          </div>
        </Card>
      </Section>

      <Section num="05" title="소수의 곱셈·나눗셈 — 두 가지 방법" sub="분수로 바꿔서 계산해도 되고, 소수점을 무시하고 자연수처럼 계산한 뒤 나중에 소수점을 찍어도 된다. 실전에서는 두 번째 방법을 훨씬 많이 쓴다.">
        <CompareRow>
          <CompareCard kicker="방법 1" title="분수로 바꿔서 계산">
            0.4 = 4/10, 0.8 = 8/10으로 바꾼 뒤 분수의 곱셈·나눗셈 규칙대로 계산한다. 원리를 이해하기엔 좋지만 느리다.
          </CompareCard>
          <CompareCard kicker="방법 2 · 실전" title="자연수처럼 계산 후 소수점 배치" highlight>
            소수점을 무시하고 자연수 곱셈처럼 계산한 다음, 두 수의 소수점 뒤 자릿수를 더한 만큼 결과에 소수점을 다시 찍는다.
          </CompareCard>
        </CompareRow>

        <Card>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <span className="font-mono-num text-sm text-[var(--ink-soft)]">0.4 × 0.8</span>
              <span className="font-mono-num text-xs text-[var(--ink-faint)]">4 × 8 = 32 → 소수점 뒤 자릿수 1+1=2개</span>
              <ResultBadge>
                = <b style={{ color: "var(--prime)" }}>0.32</b>
              </ResultBadge>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <span className="font-mono-num text-sm text-[var(--ink-soft)]">3.6 ÷ 3</span>
              <span className="font-mono-num text-xs text-[var(--ink-faint)]">36 ÷ 3 = 12 → 원래 소수점 위치 그대로</span>
              <ResultBadge>
                = <b style={{ color: "var(--prime)" }}>1.2</b>
              </ResultBadge>
            </div>
          </div>
        </Card>
      </Section>

      <Section num="06" title="분수와 소수가 섞였을 때 & 연산 순서" sub={<>분수와 소수가 함께 있으면 <b>무조건 소수를 분수로</b> 통일해서 계산한다.</>}>
        <Card>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono-num rounded-lg border-[1.5px] border-[var(--composite)] bg-[var(--composite-tint)] px-3 py-2 text-sm font-semibold text-[var(--composite)]">
              3/4 ÷ 0.5
            </span>
            <span className="font-mono-num text-[var(--ink-faint)]">−</span>
            <span className="font-mono-num rounded-lg border-[1.5px] border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold text-[var(--ink)]">
              1
            </span>
            <span className="font-mono-num text-[var(--ink-faint)]">+</span>
            <span className="font-mono-num rounded-lg border-[1.5px] border-[var(--composite)] bg-[var(--composite-tint)] px-3 py-2 text-sm font-semibold text-[var(--composite)]">
              2 × 1.5
            </span>
          </div>
          <p className="mb-3 text-center text-xs text-[var(--ink-faint)]">색칠된 두 뭉텅이(× ÷로 연결된 것)를 먼저 각각 계산한다</p>
          <div className="flex justify-center">
            <ResultBadge>
              3/2 − 1 + 3 = <b style={{ color: "var(--prime)" }}>3.5</b>
            </ResultBadge>
          </div>

          <div className="mt-6">
            <InsightRow>
              <Insight title="1. 괄호가 최우선">괄호가 있으면 무조건 괄호 안을 가장 먼저 계산한다.</Insight>
              <Insight title="2. ×÷는 한 뭉텅이">곱셈·나눗셈으로 연결된 부분은 하나의 덩어리로 보고 먼저 계산한다.</Insight>
              <Insight title="3. 마지막은 +−">뭉텅이들을 다 계산한 뒤, 남은 덧셈·뺄셈을 순서대로 처리한다.</Insight>
            </InsightRow>
          </div>

          <div className="mt-6">
            <Note center>곱하기·나누기로 연결된 건 하나로 보인다 — 이 감각이 다음 강의 &ldquo;항&rdquo;의 정의로 그대로 이어져요.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 역수">
            곱해서 1이 되는 짝. <span className="text-[var(--ink-soft)]">분자·분모를 바꾸되 부호는 그대로.</span>
          </SummaryTile>
          <SummaryTile idx="02 소수 계산">
            덧셈·뺄셈은 소수점 정렬, <span className="text-[var(--ink-soft)]">곱셈·나눗셈은 자연수처럼 계산 후 소수점 배치.</span>
          </SummaryTile>
          <SummaryTile idx="03 연산 순서">
            괄호 → ×÷ 뭉텅이 → +−. <span className="text-[var(--ink-soft)]">분수·소수 혼합은 분수로 통일.</span>
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">×÷로 묶인 &ldquo;한 뭉텅이&rdquo;가 다음 강의부터는 정식으로 &ldquo;항&rdquo;이라 불린다 — 다항식의 시작.</Teaser>
      </Section>

      <PageFooter>fifty-days · 5강 · 소수의 사칙연산</PageFooter>
    </>
  );
}
