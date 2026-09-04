import type { Subject } from "./types";

export const subjects: Subject[] = [
  {
    slug: "math-basic",
    name: "수학기본",
    tagline: "정수부터 최소공배수까지, 계산이 아니라 개념으로 다진다.",
    courses: [
      {
        slug: "50days",
        title: "정승제의 50일 수학 (EBS)",
        description: "EBS 정승제 선생님의 50일 수학 강의를 도식과 미니퀴즈로 정리한 코스.",
        placeholder: false,
        chapters: [
          { slug: "01", title: "1강 · 정수와 소수", order: 1 },
          { slug: "02", title: "2강 · 인수분해와 소인수분해", order: 2 },
          { slug: "03", title: "3강 · 공약수와 공배수", order: 3 },
          { slug: "04", title: "4강 · 최대공약수와 최소공배수", order: 4 },
          { slug: "05", title: "5강 · 소수의 사칙연산", order: 5 },
          { slug: "06", title: "6강 · 다항식과 일차식", order: 6 },
          { slug: "07", title: "7강 · 지수법칙", order: 7 },
          { slug: "08", title: "8강 · 완전제곱식과 다항식 곱셈", order: 8 },
          { slug: "09", title: "9강 · 인수분해의 기본", order: 9 },
          { slug: "10", title: "10강 · 인수분해 총정리", order: 10 },
          { slug: "11", title: "11강 · 항 3개짜리 완전제곱식", order: 11 },
          { slug: "12", title: "12강 · 곱셈공식의 변형", order: 12 },
          { slug: "13", title: "13강 · 항등식", order: 13 },
          { slug: "14", title: "14강 · 항등식의 활용", order: 14 },
          { slug: "15", title: "15강 · 인수정리와 조립제법", order: 15 },
          { slug: "16", title: "16강 · 수의 체계", order: 16 },
          { slug: "17", title: "17강 · 절댓값", order: 17 },
          { slug: "18", title: "18강 · 정수와 유리수의 사칙연산", order: 18 },
          { slug: "19", title: "19강 · 루트", order: 19 },
          { slug: "20", title: "20강 · 복소수", order: 20 },
          { slug: "21", title: "21강 · 허수단위 i와 복소수", order: 21 },
          { slug: "22", title: "22강 · 방정식", order: 22 },
          { slug: "23", title: "23강 · 연립방정식", order: 23 },
          { slug: "24", title: "24강 · 이차방정식", order: 24 },
          { slug: "25", title: "25강 · 근의 공식", order: 25 },
          { slug: "26", title: "26강 · 고차방정식", order: 26 },
          { slug: "27", title: "27강 · 함수", order: 27 },
          { slug: "28", title: "28강 · abc÷abc 논란", order: 28 },
          { slug: "29", title: "29강 · 함수의 그래프", order: 29 },
          { slug: "31", title: "31강 · 다항함수와 일차함수", order: 31 },
          { slug: "32", title: "32강 · 기울기", order: 32 },
          { slug: "33", title: "33강 · 일차함수와 일차방정식", order: 33 },
          { slug: "34", title: "34강 · 평행이동", order: 34 },
          { slug: "35", title: "35강 · 이차함수", order: 35 },
          { slug: "36", title: "36강 · 이차함수의 그래프", order: 36 },
          { slug: "37", title: "37강 · 합성함수", order: 37 },
          { slug: "39", title: "39강 · 역함수", order: 39 },
          { slug: "40", title: "40강 · 삼각형의 내각과 외각", order: 40 },
          { slug: "42", title: "42강 · 원과 부채꼴", order: 42 },
          { slug: "43", title: "43강 · 삼각형의 외심과 내심 총정리", order: 43 },
          { slug: "44", title: "44강 · 평행사변형", order: 44 },
          { slug: "45", title: "45강 · 삼각형과 평행선", order: 45 },
          { slug: "46", title: "46강 · 피타고라스 정리", order: 46 },
          { slug: "47", title: "47강 · 삼각비", order: 47 },
          { slug: "48", title: "48강 · 원의 성질", order: 48 },
          { slug: "50", title: "50강 · 두 점 사이의 거리", order: 50 },
          { slug: "52", title: "52강 · 두 직선이 수직일 조건", order: 52 },
          { slug: "53", title: "53강 · 원의 방정식", order: 53 },
          { slug: "54", title: "54강 · 평행이동 완벽 요약", order: 54 },
          { slug: "55", title: "55강 · 부등식의 영역", order: 55 },
          { slug: "59", title: "59강 · 분수를 가장 쉽게 이해하는 법", order: 59 },
          { slug: "61", title: "61강 · 제곱근특강", order: 61 },
          { slug: "63", title: "63강 · 켤레복소수", order: 63 },
          { slug: "66", title: "66강 · 단항식의 곱셈과 나눗셈", order: 66 },
          { slug: "67", title: "67강 · 일차식의 곱셈과 나눗셈", order: 67 },
          { slug: "68", title: "68강 · 곱셈공식 (세제곱)", order: 68 },
          { slug: "69", title: "69강 · 완전제곱식을 인수분해하는 방법", order: 69 },
          { slug: "70", title: "70강 · 고차식의 인수분해", order: 70 },
          { slug: "71", title: "71강 · 일차방정식의 풀이 끝내기", order: 71 },
        ],
      },
      {
        slug: "middle-math-review",
        title: "중학수학 개념 총정리",
        description: "중학교 3년 과정의 핵심 개념만 빠르게 훑는 코스.",
        placeholder: true,
        chapters: [],
      },
      {
        slug: "high1-math-basics",
        title: "고1 수학(상) 기초 다지기",
        description: "고등학교 수학(상)의 첫 단추를 끼우는 코스.",
        placeholder: true,
        chapters: [],
      },
    ],
  },
  {
    slug: "english-basic",
    name: "영어기본",
    tagline: "문법과 어휘의 기초 체력을 만든다.",
    courses: [
      { slug: "grammar-30", title: "기초 영문법 마스터 30일", description: "품사부터 시제까지, 30일 완주 문법 코스.", placeholder: true, chapters: [] },
      { slug: "vocab-1000", title: "중학 필수 영단어 1000", description: "가장 자주 쓰이는 필수 단어 1000개.", placeholder: true, chapters: [] },
      { slug: "reading-start", title: "짧은 지문 독해 시작하기", description: "짧은 지문으로 시작하는 독해 감각 훈련.", placeholder: true, chapters: [] },
    ],
  },
  {
    slug: "korean-basic",
    name: "국어기본",
    tagline: "읽고 이해하는 힘, 기본기부터 다시.",
    courses: [
      { slug: "nonfiction-reading", title: "비문학 독해의 기술", description: "지문 구조를 읽어내는 비문학 독해 기초.", placeholder: true, chapters: [] },
      { slug: "literature-terms", title: "문학 개념어 정리", description: "문학 지문에서 자주 나오는 개념어 정리.", placeholder: true, chapters: [] },
      { slug: "spelling-vocab", title: "맞춤법·어휘 기초", description: "자주 틀리는 맞춤법과 어휘를 바로잡는 코스.", placeholder: true, chapters: [] },
    ],
  },
  {
    slug: "ai-basic",
    name: "AI기본",
    tagline: "AI를 도구로 쓰기 위한 최소한의 개념.",
    courses: [
      { slug: "prompt-first-steps", title: "AI와 프롬프트 첫걸음", description: "프롬프트가 무엇이고 왜 중요한지부터.", placeholder: true, chapters: [] },
      { slug: "what-is-llm", title: "LLM이란 무엇인가", description: "거대언어모델의 개념을 쉽게 이해하기.", placeholder: true, chapters: [] },
      { slug: "ai-in-life", title: "생활 속 AI 활용법", description: "일상과 학습에 AI를 활용하는 법.", placeholder: true, chapters: [] },
    ],
  },
];

export function findSubject(slug: string) {
  return subjects.find((s) => s.slug === slug);
}

export function findCourse(subjectSlug: string, courseSlug: string) {
  const subject = findSubject(subjectSlug);
  const course = subject?.courses.find((c) => c.slug === courseSlug);
  return subject && course ? { subject, course } : undefined;
}

export function findChapterMeta(subjectSlug: string, courseSlug: string, chapterSlug: string) {
  const found = findCourse(subjectSlug, courseSlug);
  const chapter = found?.course.chapters.find((c) => c.slug === chapterSlug);
  return found && chapter ? { ...found, chapter } : undefined;
}
