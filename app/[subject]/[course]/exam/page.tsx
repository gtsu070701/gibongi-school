import { notFound, redirect } from "next/navigation";
import { PageContainer, Hero } from "@/components/layout/PageChrome";
import { findCourse } from "@/lib/content/subjects";
import { getExam } from "@/lib/content/exams";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { ExamRunner } from "@/components/quiz/ExamRunner";

export default async function ExamPage({ params }: { params: Promise<{ subject: string; course: string }> }) {
  const { subject: subjectSlug, course: courseSlug } = await params;
  const found = findCourse(subjectSlug, courseSlug);
  if (!found) notFound();
  const exam = getExam(subjectSlug, courseSlug);
  if (!exam) notFound();

  if (!isSupabaseConfigured()) {
    return (
      <PageContainer>
        <Hero
          eyebrow="종합문제"
          title={`${found.course.title} · 종합문제`}
          lede="로그인 기능이 아직 연결되지 않았어요. 관리자가 Supabase 설정(.env.local)을 마치면 응시할 수 있습니다."
        />
      </PageContainer>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect(`/login?redirect=${encodeURIComponent(`/${subjectSlug}/${courseSlug}/exam`)}`);
  }

  return (
    <PageContainer>
      <Hero
        eyebrow="종합문제"
        title={`${found.course.title} · 종합문제`}
        lede={`${user.email}로 로그인되어 있어요. 모든 문제를 풀고 제출하면 바로 점수를 확인할 수 있습니다.`}
      />
      <ExamRunner courseKey={`${subjectSlug}/${courseSlug}`} email={user.email} questions={exam} />
    </PageContainer>
  );
}
