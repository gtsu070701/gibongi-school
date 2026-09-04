import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter61() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 61강"
        prevLink="지난 시간: 정수와 유리수의 사칙연산 → 오늘: 루트특강 — 제곱근의 두 얼굴"
        title="제곱근특강 — 제곱근 5 vs 5의 제곱근"
        lede="글자 순서만 바뀌었을 뿐인데, 완전히 다른 뜻이 된다. 이 둘을 헷갈리면 답의 개수부터 틀린다."
      />

      <Section num="01" title="루트를 한국말로 읽으면 제곱근" sub="√a는 영어로 읽으면 &ldquo;루트 a&rdquo;, 한국말로 읽으면 &ldquo;제곱근 a&rdquo; — 완전히 같은 말이다.">
        <Card>
          <EqRow center>√5 = 제곱근 5</EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">루트는 언제나 양수이므로, &ldquo;제곱근 a&rdquo;(숫자가 뒤에)도 언제나 양수 하나뿐이다.</p>
        </Card>
      </Section>

      <Section num="02" title="'a의 제곱근'은 방정식 용어" sub="순서가 바뀌면 뜻이 완전히 달라진다 — 제곱해서 a가 되는 모든 수, 즉 x²=a의 해를 구하라는 뜻이다.">
        <CompareRow>
          <CompareCard kicker="숫자가 뒤에" title="제곱근 5 = √5">
            √a를 한국말로 읽은 것뿐. 답은 양수 하나.
          </CompareCard>
          <CompareCard kicker="숫자가 앞에" title="5의 제곱근 = ±√5" highlight>
            x²=5를 만족하는 모든 x. 양수·음수 두 개가 답.
          </CompareCard>
        </CompareRow>
        <Card>
          <EqRow center>(√5)² = 5, (−√5)² = 5</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              5의 제곱근 = <b style={{ color: "var(--prime)" }}>±√5</b> (플러스마이너스 루트 5)
            </ResultBadge>
          </div>
        </Card>
      </Section>

      <Section num="03" title="왜 두 개가 나오는가" sub="양수든 음수든, 제곱하면 둘 다 같은 양수가 된다 — 짝수 번 곱하면 부호가 사라지기 때문이다.">
        <Card>
          <Note center>√5는 &ldquo;제곱해서 5가 되는 양수 하나&rdquo;를 가리키는 기호지만, &ldquo;5의 제곱근&rdquo;은 &ldquo;제곱해서 5가 되는 수를 전부 구하라&rdquo;는 질문이라 양수·음수 둘 다 답이 된다.</Note>
        </Card>
      </Section>

      <Section num="04" title="실전 — 헷갈리지 않는 순서" sub="문제에서 숫자가 어디 있는지부터 확인하는 습관을 들이면 실수가 사라진다.">
        <div className="flex flex-col gap-2">
          <EqRow tag="제곱근 9를 구하라">답은 하나 — √9 = 3</EqRow>
          <EqRow tag="9의 제곱근을 구하라">답은 둘 — ±√9 = ±3</EqRow>
        </div>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 제곱근 a">
            √a를 한국말로 읽은 것. 항상 양수 하나.
          </SummaryTile>
          <SummaryTile idx="02 a의 제곱근">
            x²=a의 해. 양수·음수 두 개 — ±√a.
          </SummaryTile>
          <SummaryTile idx="03 구분법">
            숫자가 &ldquo;제곱근&rdquo; 뒤면 하나, 앞이면 둘.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 61강 · 제곱근특강</PageFooter>
    </>
  );
}
