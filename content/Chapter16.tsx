import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, Teaser } from "@/components/diagram/primitives";
import { Tree, type TreeNode } from "@/components/diagram/Tree";

const numberTree: TreeNode = {
  label: "수",
  size: "root",
  children: [
    {
      label: "실수",
      size: "mid",
      tone: "neutral",
      children: [
        {
          label: "유리수",
          size: "mid",
          tone: "neutral",
          children: [
            {
              label: "정수",
              size: "mid",
              tone: "neutral",
              children: [
                { label: "자연수", sub: "양의 정수", size: "leaf", tone: "prime" },
                { label: "0", size: "leaf", tone: "unit" },
                { label: "음의 정수", size: "leaf", tone: "composite" },
              ],
            },
            {
              label: "정수 아닌 유리수",
              size: "mid",
              tone: "neutral",
              children: [
                { label: "유한소수", size: "leaf", tone: "prime" },
                { label: "순환소수", size: "leaf", tone: "prime" },
              ],
            },
          ],
        },
        { label: "무리수", sub: "순환 안 하는 무한소수", size: "leaf", tone: "composite" },
      ],
    },
    { label: "허수", sub: "다음 단원에서", size: "leaf", tone: "unit" },
  ],
};

export default function Chapter16() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 16강"
        prevLink="지난 시간: 인수정리와 조립제법 → 오늘: 수의 체계"
        title="수의 체계"
        lede="1강에서 정수를 세 갈래로 나눴던 그 지도를, 이제 수 전체로 넓힌다. 실수와 허수, 유리수와 무리수, 그리고 그 안의 정수까지."
      />

      <Section num="01" title="수 전체의 지도" sub={<>수는 <b>실수</b>와 <b>허수</b>로 나뉜다. 실수는 다시 유리수와 무리수로, 유리수는 정수와 정수 아닌 유리수로 계속 갈라진다.</>}>
        <Card>
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-[560px] justify-center">
              <Tree node={numberTree} />
            </div>
          </div>
          <div className="mt-6">
            <Note center>허수는 다음 &ldquo;복소수&rdquo; 단원에서 진하게 다룬다. 지금은 실수 쪽 지도만 완성하면 된다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="02" title="유리수 vs 무리수" sub="분수(정수/정수)로 나타낼 수 있는가가 유일한 기준이다.">
        <Card>
          <div className="flex flex-col gap-2">
            <EqRow tag="유리수 — 유한소수">1/2 = 0.5</EqRow>
            <EqRow tag="유리수 — 순환소수">1/3 = 0.333…</EqRow>
            <EqRow tag="무리수 — 순환하지 않는 무한소수">√2 = 1.41421356…</EqRow>
          </div>
          <p className="mt-4 flex gap-2.5 border-t border-dashed border-[var(--border)] pt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            <span>→</span>
            <span>무한히 이어지는 소수라도 <b className="text-[var(--ink)]">순환</b>하면 분수로 바꿀 수 있어 유리수, 순환하지 않으면 무리수.</span>
          </p>
        </Card>
      </Section>

      <Section num="03" title="양수와 음수 — 실수만의 성질" sub="0을 기준으로 크면 양수, 작으면 음수. 이 대소 비교는 실수에서만 가능하다.">
        <Card>
          <EqRow center highlight>
            실수 = 제곱해서 0보다 크거나 같은 수
          </EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              양수²{'>'}0, 음수²{'>'}0, 0² = 0 → <b style={{ color: "var(--prime)" }}>항상 0 이상</b>
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 수의 지도">
            수 = 실수 + 허수. <span className="text-[var(--ink-soft)]">실수 = 유리수 + 무리수.</span>
          </SummaryTile>
          <SummaryTile idx="02 유리수">
            분수로 나타낼 수 있는 수. <span className="text-[var(--ink-soft)]">유한소수 또는 순환소수.</span>
          </SummaryTile>
          <SummaryTile idx="03 실수의 성질">
            제곱하면 항상 0 이상. <span className="text-[var(--ink-soft)]">그래서 대소 비교가 가능하다.</span>
          </SummaryTile>
        </SummaryGrid>
        <Teaser tone="prime">대소 비교가 안 되는 수, 허수 — 다음 복소수 단원에서 정식으로 만난다.</Teaser>
      </Section>

      <PageFooter>fifty-days · 16강 · 수의 체계</PageFooter>
    </>
  );
}
