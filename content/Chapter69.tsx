import { Hero, Section, PageFooter } from "@/components/layout/PageChrome";
import { Card, Note, EqRow, ResultBadge, SummaryGrid, SummaryTile } from "@/components/diagram/primitives";

export default function Chapter69() {
  return (
    <>
      <Hero
        eyebrow="50일수학 · 69강"
        prevLink="지난 시간: 곱셈공식(세제곱) → 오늘: 완전제곱식의 인수분해"
        title="완전제곱식을 인수분해하는 방법"
        lede="맨 앞 항도, 맨 뒤 항도 제곱 꼴로 보이면 일단 의심한다 — 그 의심을 확인하는 절차가 바로 완전제곱식 인수분해다."
      />

      <Section num="01" title="의심하기 — 맨 앞과 맨 뒤가 제곱 꼴인가" sub="첫 항과 끝 항이 둘 다 어떤 것의 제곱으로 보이면, 완전제곱식일 가능성을 의심해본다.">
        <Card>
          <EqRow center>9x² − 12xy + 4y²</EqRow>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">9x² = (3x)², 4y² = (2y)² — 둘 다 제곱 꼴이니 의심해볼 만하다.</p>
        </Card>
      </Section>

      <Section num="02" title="확인하기 — 가운데 항까지 맞아떨어지는가" sub="의심되는 두 항을 뽑아 (앞±뒤)² 형태로 전개해서, 가운데 항이 실제로 일치하는지 확인한다.">
        <Card>
          <EqRow center>(3x − 2y)² = 9x² − 12xy + 4y²</EqRow>
          <div className="mt-3 flex justify-center">
            <ResultBadge>
              가운데 항 2×3x×2y=12xy 일치 → <b style={{ color: "var(--prime)" }}>확신</b>
            </ResultBadge>
          </div>
          <div className="mt-4">
            <Note center>의심에서 시작해 전개로 검증하는 이 절차를 습관화하면, 완전제곱식 인수분해에서 실수가 사라진다.</Note>
          </div>
        </Card>
      </Section>

      <Section num="03" title="완전제곱식이 되기 위한 상수항 — 반의 제곱" sub="x²의 계수가 1인 이차식이 완전제곱식이 되려면, 상수항은 반드시 1차항 계수의 절반을 제곱한 값이어야 한다.">
        <Card>
          <EqRow center highlight>
            x² + bx + (b/2)² = (x + b/2)²
          </EqRow>
          <div className="mt-4 flex justify-center">
            <ResultBadge>
              x² − 10x + □ → □ = (−10/2)² = <b style={{ color: "var(--prime)" }}>25</b>
            </ResultBadge>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--ink-faint)]">1차항 계수를 2로 나누고, 그 값을 제곱한다 — &ldquo;반의 제곱&rdquo;.</p>
        </Card>
      </Section>

      <Section num="·" title="한 줄 정리">
        <SummaryGrid>
          <SummaryTile idx="01 의심">
            첫 항·끝 항이 둘 다 제곱 꼴이면 완전제곱식을 의심한다.
          </SummaryTile>
          <SummaryTile idx="02 확인">
            전개해서 가운데 항이 일치하는지 검증한다.
          </SummaryTile>
          <SummaryTile idx="03 반의 제곱">
            완전제곱식이 되기 위한 상수항 = (1차항 계수÷2)².
          </SummaryTile>
        </SummaryGrid>
      </Section>

      <PageFooter>fifty-days · 69강 · 완전제곱식의 인수분해</PageFooter>
    </>
  );
}
