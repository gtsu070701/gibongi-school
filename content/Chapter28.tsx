import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile, CompareRow, CompareCard } from "@/components/diagram/primitives";

export default function Chapter28() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 28강 · 쉬어가기"
        prevLink="지난 시간: 함수 → 오늘: 인터넷을 달군 계산 논란"
        title="abc ÷ abc는 왜 논란이 될까"
        lede="인터넷에서 계속 싸움이 나는 이 계산, 사실 수학자들이 연구할 만한 문제가 아니다. 답은 '어떻게 약속했느냐'에 달려 있다."
      />

      <Section num="01" title="문제의 논란" sub="abc ÷ abc를 계산하면 1일까, 아니면 다른 값일까?">
        <Card>
          <EqRow center highlight>
            abc ÷ abc = ?
          </EqRow>
          <p className="mt-4 text-center text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            &ldquo;당연히 1이지&rdquo;와 &ldquo;아니, bc²이 나와야 해&rdquo;로 편이 갈린다. 이게 몇 년째 인터넷에서 반복되는 논쟁이다.
          </p>
        </Card>
      </Section>

      <Section num="02" title="교과서의 약속" sub="중학교 1학년 교육과정에는 '생략된 곱셈은 결합력이 더 센 것으로 본다'고 명시돼 있다.">
        <Card>
          <EqRow center highlight>
            abc = (abc), 하나의 덩어리로 본다
          </EqRow>
          <div className="mt-4">
            <Note center>수와 문자, 문자와 문자의 곱셈 기호를 생략했다는 것 자체가 &ldquo;이 둘을 한 덩어리로 보겠다&rdquo;는 약속이다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="이 약속을 적용하면" sub="같은 abc로 나누면, 생략된 곱셈끼리는 같은 덩어리이므로 그대로 소거된다.">
        <CompareRow>
          <CompareCard kicker="생략된 곱셈 = 한 덩어리" title="abc ÷ abc = 1" highlight>
            뒤의 abc 전체가 나누는 대상이므로, 같은 덩어리끼리 약분되어 1이 된다.
          </CompareCard>
          <CompareCard kicker="기호가 살아있는 곱셈" title="48 ÷ 2 × 3 = 72">
            ÷와 × 사이에 생략이 없으면 결합력이 같다 — 왼쪽부터 순서대로 계산한다.
          </CompareCard>
        </CompareRow>
      </Section>

      <Section num="04" title="결론 — 정의(약속)에 따라 달라진다" sub="이건 수학적 진리의 문제가 아니라, 표기법을 어떻게 약속했는지의 문제다.">
        <Card>
          <p className="text-[14px] leading-relaxed text-[var(--ink-soft)]">
            2차방정식의 근이 항상 2개인 것은 <b className="text-[var(--ink)]">허근까지 포함해서 근을 정의</b>했을 때의 이야기다. 어떻게 정의하느냐에 따라 같은 질문의 답이 달라지는 건 수학에서 드문 일이 아니다. 이 논란도 마찬가지 — &ldquo;생략된 곱셈을 어떻게 보기로 약속했는가&rdquo;의 문제다.
          </p>
          <div className="mt-4">
            <Note center>답이 갈리는 문제를 만나면 싸우지 말고, 어떤 약속을 전제로 하는지부터 확인하자.</Note>
          </div>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 약속">
            생략된 곱셈은 결합력이 더 센 하나의 덩어리.
          </SummaryTile>
          <SummaryTile idx="02 abc ÷ abc">
            같은 덩어리끼리 나누면 1.
          </SummaryTile>
          <SummaryTile idx="03 교훈">
            정의에 따라 답이 달라질 수 있다 — 약속을 먼저 확인하자.
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 28강 · 쉬어가는 시간</PageFooter>
    </>
  );
}
