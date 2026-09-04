import type { QuizQuestion } from "@/components/quiz/QuizRunner";

export const chapter01Quiz: QuizQuestion[] = [
  {
    id: "c1-q1",
    prompt: "12의 양의 약수는 모두 몇 개인가요?",
    choices: ["4개", "6개", "8개", "12개"],
    answerIndex: 1,
    hint: "12 = 1×12, 2×6, 3×4로 쪼개 보세요.",
  },
  {
    id: "c1-q2",
    prompt: "다음 중 소수가 아닌 것은?",
    choices: ["2", "9", "13", "17"],
    answerIndex: 1,
    hint: "9는 3×3으로 쪼개져요. 소수는 1과 자기 자신 외엔 약수가 없어야 해요.",
  },
  {
    id: "c1-q3",
    prompt: "자연수 1은 어떻게 분류되나요?",
    choices: ["소수", "합성수", "단위수", "정수가 아니다"],
    answerIndex: 2,
    hint: "1은 소수도 합성수도 아닌 유일한 예외예요.",
  },
  {
    id: "c1-q4",
    prompt: "짝수 중에서 소수인 것은?",
    choices: ["2", "4", "6", "8"],
    answerIndex: 0,
    hint: "모든 짝수는 2를 인수로 갖고 있어요. 2 말고 다른 짝수는 전부 합성수예요.",
  },
  {
    id: "c1-q5",
    prompt: "15는 소수인가요, 합성수인가요?",
    choices: ["소수", "합성수"],
    answerIndex: 1,
    hint: "15 = 3 × 5로 쪼개져요.",
  },
];

export const chapter02Quiz: QuizQuestion[] = [
  {
    id: "c2-q1",
    prompt: "3 × 5 × 7의 인수가 아닌 것은?",
    choices: ["15", "21", "25", "35"],
    answerIndex: 2,
    hint: "25는 3, 5, 7의 곱 조합으로 만들 수 없어요.",
  },
  {
    id: "c2-q2",
    prompt: "72를 소인수분해하면?",
    choices: ["2³ × 3²", "2² × 3³", "2 × 3⁴", "2⁴ × 3"],
    answerIndex: 0,
    hint: "72 = 8 × 9, 8 = 2³, 9 = 3²예요.",
  },
  {
    id: "c2-q3",
    prompt: "끝자리가 0으로 끝나는 수는 항상 어떤 소인수를 포함하나요?",
    choices: ["2와 3", "2와 5", "3과 5", "5와 7"],
    answerIndex: 1,
    hint: "10 = 2 × 5이기 때문이에요.",
  },
  {
    id: "c2-q4",
    prompt: "54를 소인수분해한 결과는?",
    choices: ["2¹ × 3³", "2² × 3²", "2³ × 3¹", "2¹ × 3²"],
    answerIndex: 0,
    hint: "54 = 6 × 9 = (2×3) × (3×3)이에요.",
  },
];

export const chapter03Quiz: QuizQuestion[] = [
  {
    id: "c3-q1",
    prompt: "12와 16의 최대공약수는?",
    choices: ["2", "4", "6", "8"],
    answerIndex: 1,
    hint: "공약수 1, 2, 4 중 가장 큰 값이에요.",
  },
  {
    id: "c3-q2",
    prompt: "두 수가 '서로소'라는 것은 무슨 뜻인가요?",
    choices: ["공약수가 없다", "공약수가 1뿐이다", "공배수가 없다", "둘 다 소수이다"],
    answerIndex: 1,
    hint: "1은 항상 공약수이기 때문에 '없다'가 아니라 '1뿐이다'가 맞아요.",
  },
  {
    id: "c3-q3",
    prompt: "6과 8의 최소공배수는?",
    choices: ["16", "24", "32", "48"],
    answerIndex: 1,
    hint: "6의 배수와 8의 배수를 나열해서 겹치는 가장 작은 값을 찾아보세요.",
  },
  {
    id: "c3-q4",
    prompt: "사다리꼴 나눗셈에서 최소공배수를 구하려면?",
    choices: ["왼쪽 숫자만 곱한다", "맨 아래 숫자만 곱한다", "왼쪽과 맨 아래를 모두 곱한다", "오른쪽 숫자만 곱한다"],
    answerIndex: 2,
    hint: "최대공약수는 왼쪽만, 최소공배수는 사다리꼴 전체를 곱해요.",
  },
];

export const chapter04Quiz: QuizQuestion[] = [
  {
    id: "c4-q1",
    prompt: "54 = 2¹×3³, 18 = 2¹×3²일 때 최대공약수는?",
    choices: ["2¹ × 3²", "2¹ × 3³", "2² × 3²", "2¹ × 3¹"],
    answerIndex: 0,
    hint: "같은 소인수는 지수가 더 작은 쪽을 선택해요.",
  },
  {
    id: "c4-q2",
    prompt: "A = 2²×3³×5×7, B = 2×3²×5²×11일 때 최소공배수에 포함되는 소인수는?",
    choices: ["2, 3, 5만", "2, 3, 5, 7, 11 모두", "7과 11만", "공통인 2, 3만"],
    answerIndex: 1,
    hint: "최소공배수는 한쪽에만 있어도 전부 포함시켜요.",
  },
  {
    id: "c4-q3",
    prompt: "최대공약수를 구할 때, 한쪽 수에만 있는 소인수는 어떻게 처리하나요?",
    choices: ["지수를 1로 바꿔서 포함", "그대로 포함", "제외한다", "지수를 더한다"],
    answerIndex: 2,
    hint: "공통이 아니면 최대공약수에는 들어가지 않아요.",
  },
  {
    id: "c4-q4",
    prompt: "같은 소인수의 지수가 다를 때, 최소공배수는 어떤 지수를 선택하나요?",
    choices: ["더 작은 지수", "더 큰 지수", "두 지수의 평균", "항상 1"],
    answerIndex: 1,
    hint: "최소공배수는 두 수를 모두 포함해야 하니 더 큰 지수가 필요해요.",
  },
];

export const chapter05Quiz: QuizQuestion[] = [
  {
    id: "c5-q1",
    prompt: "5의 역수는?",
    choices: ["5", "-5", "1/5", "-1/5"],
    answerIndex: 2,
    hint: "역수는 분자와 분모를 서로 바꾼 것. 5 = 5/1이니 뒤집으면 1/5예요.",
  },
  {
    id: "c5-q2",
    prompt: "3 ÷ (2/3)을 계산하면?",
    choices: ["2/9", "9/2", "6", "2"],
    answerIndex: 1,
    hint: "나눗셈은 뒤의 수를 역수로 바꿔 곱셈으로: 3 × (3/2)를 계산해보세요.",
  },
  {
    id: "c5-q3",
    prompt: "0.4 × 0.8을 계산하면?",
    choices: ["3.2", "0.32", "0.032", "32"],
    answerIndex: 1,
    hint: "소수점을 무시하고 4×8=32를 구한 뒤, 소수점 뒤 자릿수(1+1=2개)만큼 다시 소수점을 찍어요.",
  },
  {
    id: "c5-q4",
    prompt: "(3/4 + 0.5) × 2 − 1 에서 가장 먼저 계산해야 하는 것은?",
    choices: ["괄호 안", "곱셈(×2)", "뺄셈(−1)", "왼쪽부터 순서대로"],
    answerIndex: 0,
    hint: "사칙연산은 괄호 → 곱셈/나눗셈 → 덧셈/뺄셈 순서로 계산해요.",
  },
];

export const chapter06Quiz: QuizQuestion[] = [
  {
    id: "c6-q1",
    prompt: "2x − 3y + 5에서 항은 몇 개인가요?",
    choices: ["2개", "3개", "4개", "5개"],
    answerIndex: 1,
    hint: "+로 연결된 각각이 항이에요. 2x, −3y, 5 세 개죠.",
  },
  {
    id: "c6-q2",
    prompt: "3x²에서 x에 대한 차수와 계수는?",
    choices: ["1차, 계수 3", "2차, 계수 3", "3차, 계수 2", "2차, 계수 1"],
    answerIndex: 1,
    hint: "차수는 문자가 곱해진 개수(지수), 계수는 문자 앞에 곱해진 숫자예요.",
  },
  {
    id: "c6-q3",
    prompt: "x² − 4x + 5x³ + 5의 최고차항은?",
    choices: ["x²", "−4x", "5x³", "5"],
    answerIndex: 2,
    hint: "차수가 가장 높은 항을 찾아보세요. x³이 가장 높아요.",
  },
  {
    id: "c6-q4",
    prompt: "항이 하나뿐인 식을 무엇이라 부르나요?",
    choices: ["다항식", "단항식", "상수항", "계수식"],
    answerIndex: 1,
    hint: "단(하나) + 항식 = 단항식. 참고로 단항식도 다항식의 한 종류예요.",
  },
];

export const chapter07Quiz: QuizQuestion[] = [
  {
    id: "c7-q1",
    prompt: "a³ × a⁴을 계산하면?",
    choices: ["a⁷", "a¹²", "a¹", "2a⁷"],
    answerIndex: 0,
    hint: "곱할 때는 지수끼리 더해요. 3+4=7.",
  },
  {
    id: "c7-q2",
    prompt: "a⁶ ÷ a²을 계산하면?",
    choices: ["a³", "a⁴", "a⁸", "a¹²"],
    answerIndex: 1,
    hint: "나눌 때는 지수끼리 빼요. 6-2=4.",
  },
  {
    id: "c7-q3",
    prompt: "(a²)³을 계산하면?",
    choices: ["a⁵", "a⁶", "a⁸", "a⁹"],
    answerIndex: 1,
    hint: "지수와 지수가 붙어 있으면 곱해서 합쳐요. 2×3=6.",
  },
  {
    id: "c7-q4",
    prompt: "(ab)³을 전개하면?",
    choices: ["a³b", "ab³", "a³b³", "3ab"],
    answerIndex: 2,
    hint: "곱꼴의 지수는 안에 있는 각각에게 나눠줘요.",
  },
];

export const chapter08Quiz: QuizQuestion[] = [
  {
    id: "c8-q1",
    prompt: "(x − 3)²을 전개하면?",
    choices: ["x² − 9", "x² − 6x + 9", "x² + 6x + 9", "x² − 3x + 9"],
    answerIndex: 1,
    hint: "앞에 거 제곱, 2×앞×뒤, 뒤에 거 제곱. 2×x×(−3) = −6x예요.",
  },
  {
    id: "c8-q2",
    prompt: "(2x + 1)²을 전개하면?",
    choices: ["4x² + 4x + 1", "4x² + 2x + 1", "2x² + 4x + 1", "4x² + 1"],
    answerIndex: 0,
    hint: "앞을 제곱하면 4x², 2×2x×1=4x, 뒤를 제곱하면 1.",
  },
  {
    id: "c8-q3",
    prompt: "(x + 2)(x − 5)를 전개하면?",
    choices: ["x² + 3x − 10", "x² − 3x − 10", "x² − 3x + 10", "x² + 7x − 10"],
    answerIndex: 1,
    hint: "합은 2+(−5)=−3, 곱은 2×(−5)=−10.",
  },
  {
    id: "c8-q4",
    prompt: "다항식끼리 곱한 결과가 3차식이 될 때, 3차항은 어떻게 만들어지나요?",
    choices: ["최고차항끼리 곱해서", "상수항끼리 곱해서", "임의로 정한다", "항상 계수가 0이다"],
    answerIndex: 0,
    hint: "가장 높은 차수는 양쪽의 최고차항을 곱했을 때만 나와요.",
  },
];

export const chapter09Quiz: QuizQuestion[] = [
  {
    id: "c9-q1",
    prompt: "2x² + 4x의 공통인수는?",
    choices: ["x", "2", "2x", "4x"],
    answerIndex: 2,
    hint: "숫자는 2와 4의 공통인수 2, 문자는 x²과 x의 공통인수 x — 합쳐서 2x예요.",
  },
  {
    id: "c9-q2",
    prompt: "3a + 3b를 인수분해하면?",
    choices: ["3(a + b)", "3ab", "a + b", "3a + 3b"],
    answerIndex: 0,
    hint: "공통인수 3을 밖으로 뽑아내면 돼요.",
  },
  {
    id: "c9-q3",
    prompt: "인수분해는 무엇의 역과정인가요?",
    choices: ["약분", "통분", "전개", "이항"],
    answerIndex: 2,
    hint: "전개는 곱 꼴을 펼치는 것, 인수분해는 그 반대예요.",
  },
  {
    id: "c9-q4",
    prompt: "x(x+1) + 2(x+1)의 공통인수는?",
    choices: ["x", "2", "(x+1)", "x+2"],
    answerIndex: 2,
    hint: "숫자나 문자 하나가 아니라 (x+1)이라는 덩어리 전체가 공통인수예요.",
  },
];

export const chapter10Quiz: QuizQuestion[] = [
  {
    id: "c10-q1",
    prompt: "x² − 6x + 9를 인수분해하면?",
    choices: ["(x − 3)²", "(x + 3)²", "(x − 9)(x + 1)", "(x − 3)(x + 3)"],
    answerIndex: 0,
    hint: "9=3², 가운데 −6x가 2×x×(−3)과 맞는지 확인해보세요.",
  },
  {
    id: "c10-q2",
    prompt: "a² − 16을 인수분해하면?",
    choices: ["(a − 4)²", "(a − 8)(a + 2)", "(a + 4)(a − 4)", "(a − 16)(a + 1)"],
    answerIndex: 2,
    hint: "16=4². 제곱−제곱 형태는 합차공식이에요.",
  },
  {
    id: "c10-q3",
    prompt: "x² + 7x + 12를 인수분해하면?",
    choices: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x − 3)(x − 4)"],
    answerIndex: 0,
    hint: "곱해서 12, 더해서 7이 되는 두 수를 찾아보세요.",
  },
  {
    id: "c10-q4",
    prompt: "최고차항의 계수가 1이 아닐 때 쓰는 인수분해 방법은?",
    choices: ["공통인수만 뽑는다", "대각선으로 곱해 시행착오를 겪는다", "완전제곱식 공식만 쓴다", "인수분해할 수 없다"],
    answerIndex: 1,
    hint: "세로로 두 쌍을 놓고 대각선끼리 곱해 더한 값이 1차항이 되는 조합을 찾아요.",
  },
];

export const chapter11Quiz: QuizQuestion[] = [
  {
    id: "c11-q1",
    prompt: "(a + b + c)²을 전개하면 항이 몇 개인가요?",
    choices: ["3개", "4개", "6개", "9개"],
    answerIndex: 2,
    hint: "각각 제곱 3개 + 두 개씩 짝지은 것 3개 = 6개예요.",
  },
  {
    id: "c11-q2",
    prompt: "(x + y + 1)²을 전개했을 때 xy항의 계수는?",
    choices: ["1", "2", "3", "0"],
    answerIndex: 1,
    hint: "두 개씩 짝지은 항은 항상 2배가 붙어요. 2×x×y = 2xy.",
  },
  {
    id: "c11-q3",
    prompt: "다항식 곱에서 특정 차수의 계수만 필요할 때 가장 빠른 방법은?",
    choices: ["전체를 다 전개한다", "그 차수를 만드는 조합만 계산한다", "무작위로 대입해본다", "계수는 항상 1이다"],
    answerIndex: 1,
    hint: "원하는 차수를 만드는 항의 짝만 찾아서 더하면 충분해요.",
  },
  {
    id: "c11-q4",
    prompt: "(x − y − 1)²을 전개했을 때 xy항의 계수는?",
    choices: ["2", "−2", "1", "−1"],
    answerIndex: 1,
    hint: "2 × x × (−y) = −2xy예요.",
  },
];

export const chapter12Quiz: QuizQuestion[] = [
  {
    id: "c12-q1",
    prompt: "a + b = 4, ab = 3일 때 a² + b²의 값은?",
    choices: ["10", "13", "16", "7"],
    answerIndex: 0,
    hint: "a²+b² = (a+b)² − 2ab = 16 − 6 = 10.",
  },
  {
    id: "c12-q2",
    prompt: "a + b = 4, ab = 3일 때 a³ + b³의 값은?",
    choices: ["16", "28", "36", "64"],
    answerIndex: 1,
    hint: "a³+b³ = (a+b)³ − 3ab(a+b) = 64 − 3×3×4 = 28.",
  },
  {
    id: "c12-q3",
    prompt: "합이 6, 곱이 5일 때 합차곱 관계식으로 구한 차²의 값은?",
    choices: ["11", "16", "1", "31"],
    answerIndex: 1,
    hint: "합² − 차² = 4곱 → 차² = 36 − 20 = 16.",
  },
  {
    id: "c12-q4",
    prompt: "문자 세 개짜리 제곱의 합 공식에서 필요한 재료 두 가지는?",
    choices: ["합과 차", "합과 곱", "합과 둘(둘씩 곱한 합)", "차와 곱"],
    answerIndex: 2,
    hint: "a²+b²+c² = (합)² − 2(둘) — 여기서 둘은 ab+bc+ca예요.",
  },
];

export const chapter13Quiz: QuizQuestion[] = [
  {
    id: "c13-q1",
    prompt: "방정식과 항등식의 결정적인 차이는?",
    choices: ["문자의 개수", "특정 x에서만 성립하는가, 모든 x에서 성립하는가", "차수의 크기", "부호의 유무"],
    answerIndex: 1,
    hint: "방정식은 근을 찾는 게 목적, 항등식은 미정계수를 찾는 게 목적이에요.",
  },
  {
    id: "c13-q2",
    prompt: "ax + 3 = 2x + b가 x에 관한 항등식일 때, a와 b는?",
    choices: ["a=2, b=3", "a=3, b=2", "a=2, b=2", "a=3, b=3"],
    answerIndex: 0,
    hint: "1차항의 계수끼리, 상수항끼리 각각 비교해요.",
  },
  {
    id: "c13-q3",
    prompt: "아무 숫자나 x에 대입해서 미정계수를 구하는 방법을 무엇이라 하나요?",
    choices: ["계수비교법", "수치대입법", "내림차순 정리법", "인수분해법"],
    answerIndex: 1,
    hint: "항등식은 어떤 x를 넣어도 성립한다는 정의를 그대로 이용하는 방법이에요.",
  },
  {
    id: "c13-q4",
    prompt: "항등식 문제에서 최종적으로 구하는 대상은 보통 무엇인가요?",
    choices: ["방정식의 근", "미정계수", "그래프의 기울기", "최댓값"],
    answerIndex: 1,
    hint: "항등식은 이미 모든 x에서 성립하니, x가 아니라 정해지지 않은 계수를 구해요.",
  },
];

export const chapter14Quiz: QuizQuestion[] = [
  {
    id: "c14-q1",
    prompt: "A = B×Q+R로 나눗셈을 항등식으로 바꿀 때, 나머지 R의 조건은?",
    choices: ["항상 상수다", "B보다 차수가 낮다", "Q보다 차수가 높다", "항상 0이다"],
    answerIndex: 1,
    hint: "나머지는 나누는 식보다 차수가 반드시 낮아야 해요.",
  },
  {
    id: "c14-q2",
    prompt: "x³ + 1을 x − 1로 나눈 나머지는?",
    choices: ["0", "1", "2", "−1"],
    answerIndex: 2,
    hint: "1차식으로 나눈 나머지는 나머지정리로 바로 대입: 1³+1=2.",
  },
  {
    id: "c14-q3",
    prompt: "2차식으로 나눈 나머지의 최대 차수는?",
    choices: ["0차(상수)", "1차", "2차", "3차"],
    answerIndex: 1,
    hint: "나머지는 나누는 식(2차)보다 낮아야 하니 최대 1차예요.",
  },
  {
    id: "c14-q4",
    prompt: "다항식 나눗셈 문제가 나오면 가장 먼저 무엇으로 바꿔야 하나요?",
    choices: ["곱셈식", "항등식", "부등식", "지수식"],
    answerIndex: 1,
    hint: "나눗셈에 관련된 이야기는 무조건 항등식으로 고치는 것이 출발점이에요.",
  },
];

export const chapter15Quiz: QuizQuestion[] = [
  {
    id: "c15-q1",
    prompt: "F(2) = 0이면 F(x)는 무엇을 인수로 갖나요?",
    choices: ["(x + 2)", "(x − 2)", "(x × 2)", "2x"],
    answerIndex: 1,
    hint: "F(a)=0이면 (x−a)를 인수로 갖는다는 게 인수정리예요.",
  },
  {
    id: "c15-q2",
    prompt: "조립제법은 어떤 경우에 사용할 수 있나요?",
    choices: ["2차식으로 나눌 때", "3차식으로 나눌 때", "1차식으로 나눌 때", "모든 나눗셈에"],
    answerIndex: 2,
    hint: "조립제법과 나머지정리는 둘 다 1차식으로 나눌 때만 쓸 수 있어요.",
  },
  {
    id: "c15-q3",
    prompt: "'나눠떨어진다'는 말의 뜻은?",
    choices: ["몫이 1이다", "나머지가 0이다", "나머지가 나누는 수와 같다", "몫이 0이다"],
    answerIndex: 1,
    hint: "인수로 갖는다, 나눠떨어진다, 나머지가 0이다 — 모두 같은 말이에요.",
  },
  {
    id: "c15-q4",
    prompt: "조립제법에서 다항식에 중간 차수의 항이 없다면 어떻게 해야 하나요?",
    choices: ["그 자리를 비워둔다", "계수 0을 채워 넣는다", "다음 항으로 건너뛴다", "조립제법을 쓸 수 없다"],
    answerIndex: 1,
    hint: "생략된 차수도 자리를 차지해요. 계수 0을 꼭 써줘야 해요.",
  },
];

export const chapter16Quiz: QuizQuestion[] = [
  {
    id: "c16-q1",
    prompt: "1/3을 소수로 나타내면 어떤 종류의 소수인가요?",
    choices: ["유한소수", "순환소수", "순환하지 않는 무한소수", "정수"],
    answerIndex: 1,
    hint: "0.333…처럼 같은 숫자가 끝없이 반복돼요.",
  },
  {
    id: "c16-q2",
    prompt: "√2는 어떤 수인가요?",
    choices: ["유리수", "무리수", "정수", "자연수"],
    answerIndex: 1,
    hint: "순환하지 않는 무한소수라서 분수로 나타낼 수 없어요.",
  },
  {
    id: "c16-q3",
    prompt: "정수의 세 종류는?",
    choices: ["유리수, 무리수, 실수", "자연수, 0, 음의 정수", "유한소수, 순환소수, 무리수", "실수, 허수, 복소수"],
    answerIndex: 1,
    hint: "정수 = 양의 정수(자연수) + 0 + 음의 정수예요.",
  },
  {
    id: "c16-q4",
    prompt: "실수의 정의로 알맞은 것은?",
    choices: ["분수로 나타낼 수 있는 수", "제곱해서 0보다 크거나 같은 수", "허수가 아닌 모든 수", "정수와 무리수의 합"],
    answerIndex: 1,
    hint: "양수든 음수든 0이든, 제곱하면 항상 0 이상이 되는 게 실수의 성질이에요.",
  },
];

export const chapter17Quiz: QuizQuestion[] = [
  {
    id: "c17-q1",
    prompt: "|−7|의 값은?",
    choices: ["−7", "7", "0", "14"],
    answerIndex: 1,
    hint: "절댓값은 원점까지의 거리라 항상 양수(또는 0)예요.",
  },
  {
    id: "c17-q2",
    prompt: "절댓값의 결과는 항상 어떤 범위인가요?",
    choices: ["0 이상", "1 이상", "음수", "정수만"],
    answerIndex: 0,
    hint: "거리는 음수가 될 수 없어요.",
  },
  {
    id: "c17-q3",
    prompt: "a < 0일 때, |a|를 바르게 나타낸 것은?",
    choices: ["a", "−a", "0", "2a"],
    answerIndex: 1,
    hint: "알맹이가 음수면 마이너스를 붙여서 꺼내요. a에 마이너스를 붙이면 −a.",
  },
  {
    id: "c17-q4",
    prompt: "|5 − 8|의 값은?",
    choices: ["3", "−3", "13", "−13"],
    answerIndex: 0,
    hint: "5−8=−3, 그 절댓값은 3이에요.",
  },
];

export const chapter18Quiz: QuizQuestion[] = [
  {
    id: "c18-q1",
    prompt: "다음 중 교환법칙이 항상 성립하는 연산은?",
    choices: ["뺄셈", "나눗셈", "곱셈", "성립하는 게 없다"],
    answerIndex: 2,
    hint: "덧셈과 곱셈만 순서를 바꿔도 결과가 같아요.",
  },
  {
    id: "c18-q2",
    prompt: "(−2) × (−3) × (−1) × (−4)의 부호는?",
    choices: ["양수", "음수", "0", "알 수 없다"],
    answerIndex: 0,
    hint: "음수가 4개, 짝수 개이므로 양수예요.",
  },
  {
    id: "c18-q3",
    prompt: "2 × (−3)²의 값은?",
    choices: ["−18", "18", "−36", "36"],
    answerIndex: 1,
    hint: "거듭제곱을 먼저: (−3)²=9, 그다음 2×9=18.",
  },
  {
    id: "c18-q4",
    prompt: "혼합계산에서 가장 먼저 계산하는 것은?",
    choices: ["덧셈·뺄셈", "곱셈·나눗셈", "거듭제곱", "괄호 없이 왼쪽부터"],
    answerIndex: 2,
    hint: "거듭제곱 → 괄호 → 곱셈·나눗셈 → 덧셈·뺄셈 순서예요.",
  },
];

export const chapter19Quiz: QuizQuestion[] = [
  {
    id: "c19-q1",
    prompt: "√50을 간단히 하면?",
    choices: ["5√2", "2√5", "10√5", "25√2"],
    answerIndex: 0,
    hint: "50 = 25 × 2, 25는 제곱수라서 5가 밖으로 튀어나와요.",
  },
  {
    id: "c19-q2",
    prompt: "√9의 값은?",
    choices: ["3", "9", "81", "√9는 무리수다"],
    answerIndex: 0,
    hint: "9는 3의 제곱이라 √9는 정수 3이에요.",
  },
  {
    id: "c19-q3",
    prompt: "(√7)²의 값은?",
    choices: ["7", "49", "√7", "−7"],
    answerIndex: 0,
    hint: "루트 전체를 제곱하면 알맹이가 그대로 튀어나와요.",
  },
  {
    id: "c19-q4",
    prompt: "x < 0일 때, √(x²)의 값은?",
    choices: ["x", "−x", "x²", "0"],
    answerIndex: 1,
    hint: "안쪽에서 제곱한 것은 절댓값으로 나와요. x가 음수면 |x|=−x.",
  },
];

export const chapter20Quiz: QuizQuestion[] = [
  {
    id: "c20-q1",
    prompt: "i²의 값은?",
    choices: ["1", "−1", "i", "−i"],
    answerIndex: 1,
    hint: "i = √−1이므로 제곱하면 −1이에요.",
  },
  {
    id: "c20-q2",
    prompt: "i⁵의 값은?",
    choices: ["1", "−1", "i", "−i"],
    answerIndex: 2,
    hint: "5를 4로 나눈 나머지는 1. i¹=i와 같아요.",
  },
  {
    id: "c20-q3",
    prompt: "제곱해서 음수가 되는 수를 무엇이라 하나요?",
    choices: ["실수", "유리수", "허수", "무리수"],
    answerIndex: 2,
    hint: "실수는 제곱해서 0 이상이니, 음수가 되는 건 실수가 아닌 허수예요.",
  },
  {
    id: "c20-q4",
    prompt: "√−9를 간단히 하면?",
    choices: ["3i", "−3i", "9i", "3"],
    answerIndex: 0,
    hint: "√−9 = √9 × √−1 = 3i.",
  },
];

export const chapter21Quiz: QuizQuestion[] = [
  {
    id: "c21-q1",
    prompt: "i + i² + i³ + i⁴의 값은?",
    choices: ["0", "1", "−1", "4i"],
    answerIndex: 0,
    hint: "i −1 −i +1을 더하면 다 사라져서 0이에요.",
  },
  {
    id: "c21-q2",
    prompt: "모든 복소수는 어떤 형태로 나타낼 수 있나요?",
    choices: ["a + b (a,b는 정수)", "a + bi (a,b는 실수)", "ai (a는 실수)", "a/b (b≠0)"],
    answerIndex: 1,
    hint: "실수부와 허수부를 합친 a+bi 형태예요.",
  },
  {
    id: "c21-q3",
    prompt: "z = 3 − 4i에서 허수부는?",
    choices: ["3", "−4", "4", "−4i"],
    answerIndex: 1,
    hint: "허수부는 i에 곱해진 실수 −4예요 (−4i가 아니라 −4).",
  },
  {
    id: "c21-q4",
    prompt: "z = a + bi가 순허수일 조건은?",
    choices: ["a=0, b=0", "a≠0, b=0", "a=0, b≠0", "a≠0, b≠0"],
    answerIndex: 2,
    hint: "실수부가 완전히 죽고 허수부만 남아 있어야 순허수예요.",
  },
];

export const chapter22Quiz: QuizQuestion[] = [
  {
    id: "c22-q1",
    prompt: "등식의 성질에서 절대 하면 안 되는 것은?",
    choices: ["양변에 같은 수를 더하기", "양변에 같은 수를 곱하기", "양변을 0으로 나누기", "양변에서 같은 수를 빼기"],
    answerIndex: 2,
    hint: "0으로 나누는 것은 수학에서 정의되지 않아요.",
  },
  {
    id: "c22-q2",
    prompt: "2x + 5 = 11에서 이항을 이용해 풀면 x는?",
    choices: ["2", "3", "8", "16"],
    answerIndex: 1,
    hint: "+5를 이항하면 −5: 2x=6, x=3.",
  },
  {
    id: "c22-q3",
    prompt: "5x = 20에서 5를 없앨 때, 부호는 어떻게 되나요?",
    choices: ["바뀐다(−5)", "바뀌지 않는다", "곱해진다", "제곱된다"],
    answerIndex: 1,
    hint: "계수를 나누는 것은 이항이 아니라서 부호가 그대로예요.",
  },
  {
    id: "c22-q4",
    prompt: "4x − 3 = x + 6을 풀면 x는?",
    choices: ["1", "2", "3", "4"],
    answerIndex: 2,
    hint: "x항은 좌변, 상수는 우변으로: 3x=9, x=3.",
  },
];

export const chapter23Quiz: QuizQuestion[] = [
  {
    id: "c23-q1",
    prompt: "미지수가 2개일 때, x와 y 값을 하나로 정하려면 식이 몇 개 필요한가요?",
    choices: ["1개", "2개", "3개", "몇 개든 상관없다"],
    answerIndex: 1,
    hint: "미지수 개수와 식의 개수가 같아야 해가 하나로 정해져요.",
  },
  {
    id: "c23-q2",
    prompt: "x+y=7, x−y=3을 가감법으로 풀면 x는?",
    choices: ["3", "4", "5", "7"],
    answerIndex: 2,
    hint: "두 식을 더하면 2x=10, x=5.",
  },
  {
    id: "c23-q3",
    prompt: "두 식을 더하거나 빼서 미지수를 없애는 방법을 무엇이라 하나요?",
    choices: ["대입법", "가감법", "등치법", "소거법"],
    answerIndex: 1,
    hint: "더할 가, 뺄 감 — 가감법이에요.",
  },
  {
    id: "c23-q4",
    prompt: "한 문자에 대해 이미 정리된 식이 있을 때 가장 빠른 풀이법은?",
    choices: ["가감법", "대입법", "그래프를 그린다", "인수분해"],
    answerIndex: 1,
    hint: "x= 또는 y= 형태로 정리돼 있으면 바로 대입하는 게 빨라요.",
  },
];

export const chapter24Quiz: QuizQuestion[] = [
  {
    id: "c24-q1",
    prompt: "이차방정식 ax²+bx+c=0이 성립하기 위한 조건은?",
    choices: ["a=0", "a≠0", "b=0", "c≠0"],
    answerIndex: 1,
    hint: "a=0이면 2차항이 사라져서 더 이상 이차방정식이 아니에요.",
  },
  {
    id: "c24-q2",
    prompt: "(x−2)(x+5)=0의 해는?",
    choices: ["2, 5", "2, −5", "−2, 5", "−2, −5"],
    answerIndex: 1,
    hint: "곱해서 0이면 x−2=0 또는 x+5=0.",
  },
  {
    id: "c24-q3",
    prompt: "(x+1)² = 9를 풀면 x는?",
    choices: ["2 또는 −4", "3 또는 −3", "8 또는 −8", "9 또는 −9"],
    answerIndex: 0,
    hint: "x+1 = ±3이므로 x = −1±3.",
  },
  {
    id: "c24-q4",
    prompt: "이차방정식의 해(근)는 실근과 허근을 합쳐 몇 개인가요?",
    choices: ["항상 1개", "항상 2개", "항상 0개", "경우에 따라 다르다"],
    answerIndex: 1,
    hint: "실근이든 허근이든 합쳐서 항상 2개예요.",
  },
];

export const chapter25Quiz: QuizQuestion[] = [
  {
    id: "c25-q1",
    prompt: "근의 공식이 필요한 경우는 언제인가요?",
    choices: ["항상", "인수분해가 안 될 때", "일차방정식일 때", "근이 없을 때"],
    answerIndex: 1,
    hint: "인수분해가 되면 그게 훨씬 빠르니, 근의 공식은 안 될 때 쓰는 대안이에요.",
  },
  {
    id: "c25-q2",
    prompt: "근의 공식 x=(−b±√(b²−4ac))/2a에서 x²+3x+1=0의 a, b, c는?",
    choices: ["a=1,b=3,c=1", "a=3,b=1,c=1", "a=1,b=1,c=3", "a=0,b=3,c=1"],
    answerIndex: 0,
    hint: "x²의 계수가 a, x의 계수가 b, 상수항이 c예요.",
  },
  {
    id: "c25-q3",
    prompt: "근의 공식은 어떤 풀이법을 일반화한 것인가요?",
    choices: ["인수분해", "완전제곱식", "그래프", "대입법"],
    answerIndex: 1,
    hint: "완전제곱식으로 푸는 과정을 a,b,c로 한 번만 정리해둔 거예요.",
  },
  {
    id: "c25-q4",
    prompt: "x²+5x+1=0의 근을 근의 공식으로 구하면?",
    choices: ["(−5±√21)/2", "(−5±√17)/4", "(−5±√21)/4", "(5±√21)/2"],
    answerIndex: 0,
    hint: "a=1,b=5,c=1. b²−4ac=25−4=21, 2a=2.",
  },
];

export const chapter26Quiz: QuizQuestion[] = [
  {
    id: "c26-q1",
    prompt: "고차방정식이란 몇 차 이상의 방정식을 말하나요?",
    choices: ["1차", "2차", "3차", "4차"],
    answerIndex: 2,
    hint: "3차 이상을 고차방정식이라 불러요.",
  },
  {
    id: "c26-q2",
    prompt: "고차방정식을 푸는 기본 전략은?",
    choices: ["근의 공식 암기", "무조건 인수분해", "그래프로 어림잡기", "계산기 사용"],
    answerIndex: 1,
    hint: "3차 이상엔 근의 공식이 없어서(있어도 고교 범위 밖), 인수분해가 유일한 길이에요.",
  },
  {
    id: "c26-q3",
    prompt: "P(x)=x³−4x²+2x+1에서 P(1)=0을 확인했다면, 다음 단계는?",
    choices: ["바로 근이 1뿐이라고 답한다", "조립제법으로 (x−1)을 나눠 몫을 구한다", "그래프를 그린다", "근의 공식을 쓴다"],
    answerIndex: 1,
    hint: "인수정리로 (x−1)이 인수임을 알았으니, 조립제법으로 나머지 인수를 찾아요.",
  },
  {
    id: "c26-q4",
    prompt: "(x+1)(x−2)(x+3)을 x³+(합)x²+(둘)x+(곱) 형태로 볼 때, 합의 값은?",
    choices: ["0", "2", "−2", "6"],
    answerIndex: 1,
    hint: "1 + (−2) + 3 = 2.",
  },
];

export const chapter27Quiz: QuizQuestion[] = [
  {
    id: "c27-q1",
    prompt: "함수를 가장 쉽게 비유하면 무엇인가요?",
    choices: ["숫자를 저장하는 상자", "무언가 넣으면 하나가 나오는 기계", "그림을 그리는 도구", "값을 비교하는 저울"],
    answerIndex: 1,
    hint: "정의역 원소를 넣으면 규칙에 따라 하나의 결과가 나오는 게 함수예요.",
  },
  {
    id: "c27-q2",
    prompt: "화살을 쏘는 쪽(입력)을 무엇이라 부르나요?",
    choices: ["공역", "치역", "정의역", "대응역"],
    answerIndex: 2,
    hint: "쏘는 쪽이 정의역, 맞는 쪽이 공역이에요.",
  },
  {
    id: "c27-q3",
    prompt: "함수가 되기 위한 두 조건은?",
    choices: ["모두 쏘고, 한 발씩만", "일부만 쏘고, 여러 발도 가능", "아무도 안 쏴도 됨", "가장 빠른 것만 대응"],
    answerIndex: 0,
    hint: "정의역의 모든 원소가 빠짐없이, 딱 한 발씩만 대응해야 해요.",
  },
  {
    id: "c27-q4",
    prompt: "1→5, 2→5, 3→5 인 대응은 함수인가요?",
    choices: ["함수다", "함수가 아니다 (같은 곳을 가리켜서)", "함수가 아니다 (일부가 안 쏴서)", "알 수 없다"],
    answerIndex: 0,
    hint: "여러 명이 같은 곳을 가리켜도 각자 한 발씩이면 함수예요.",
  },
];

export const chapter28Quiz: QuizQuestion[] = [
  {
    id: "c28-q1",
    prompt: "교육과정에서 생략된 곱셈은 어떻게 보기로 약속하나요?",
    choices: ["가장 약한 결합력으로", "가장 센 결합력(한 덩어리)으로", "항상 맨 마지막에 계산", "무시하고 계산 안 함"],
    answerIndex: 1,
    hint: "곱셈 기호를 생략했다는 것 자체가 한 덩어리로 보겠다는 약속이에요.",
  },
  {
    id: "c28-q2",
    prompt: "이 약속에 따르면 abc ÷ abc는?",
    choices: ["0", "1", "a²b²c²", "abc"],
    answerIndex: 1,
    hint: "생략된 곱셈끼리는 같은 덩어리이니 그대로 약분돼요.",
  },
  {
    id: "c28-q3",
    prompt: "이 논란의 진짜 정체는 무엇인가요?",
    choices: ["아직 안 풀린 수학 난제", "표기 약속(정의)의 차이 문제", "계산기 오류", "옛날 교육과정의 실수"],
    answerIndex: 1,
    hint: "수학적 진리가 아니라, 어떻게 약속했는지에 달린 문제예요.",
  },
  {
    id: "c28-q4",
    prompt: "이 강의가 주는 교훈은?",
    choices: ["무조건 암기해서 풀어라", "답이 갈리면 정의부터 확인하자", "인터넷 논쟁에서 이겨야 한다", "곱셈 기호는 항상 써야 한다"],
    answerIndex: 1,
    hint: "정의에 따라 같은 문제의 답이 달라질 수 있다는 걸 기억하면 돼요.",
  },
];

export const chapter29Quiz: QuizQuestion[] = [
  {
    id: "c29-q1",
    prompt: "함수의 그래프란 무엇인가요?",
    choices: ["함수 이름을 적은 표", "대응 관계를 점으로 표현한 것", "정의역만 나열한 목록", "계산 과정을 적은 것"],
    answerIndex: 1,
    hint: "x→y 대응을 좌표평면 위의 점 (x,y)로 옮긴 것이 그래프예요.",
  },
  {
    id: "c29-q2",
    prompt: "y=2x에서 x=3일 때, 좌표평면에 찍을 점은?",
    choices: ["(3,2)", "(3,6)", "(6,3)", "(2,3)"],
    answerIndex: 1,
    hint: "y=2×3=6이므로 점은 (3,6)이에요.",
  },
  {
    id: "c29-q3",
    prompt: "그래프가 함수인지 판별하는 방법은?",
    choices: ["가로선을 긋는다", "세로선을 긋는다", "원점을 지나는지 본다", "점의 개수를 센다"],
    answerIndex: 1,
    hint: "y축과 평행한 세로선을 그어 한 점에서만 만나는지 확인해요.",
  },
  {
    id: "c29-q4",
    prompt: "세로선이 그래프와 두 점에서 만난다면?",
    choices: ["함수다", "함수가 아니다", "정의역이 없다", "상수함수다"],
    answerIndex: 1,
    hint: "같은 x에 y가 두 개 있다는 뜻이라 함수 조건에 어긋나요.",
  },
];

export const chapter31Quiz: QuizQuestion[] = [
  {
    id: "c31-q1",
    prompt: "y = 5x³ − 2는 몇 차 함수인가요?",
    choices: ["1차", "2차", "3차", "5차"],
    answerIndex: 2,
    hint: "x의 최고차항이 x³이니 삼차함수예요.",
  },
  {
    id: "c31-q2",
    prompt: "일차함수 y=ax+b에서 반드시 만족해야 하는 조건은?",
    choices: ["a=0", "a≠0", "b=0", "b≠0"],
    answerIndex: 1,
    hint: "a=0이면 x항이 사라져서 일차함수가 아니게 돼요.",
  },
  {
    id: "c31-q3",
    prompt: "모든 일차함수의 그래프 모양은?",
    choices: ["포물선", "직선", "원", "곡선"],
    answerIndex: 1,
    hint: "점을 찍어 이으면 항상 직선이 나와요.",
  },
  {
    id: "c31-q4",
    prompt: "두 점을 동시에 지나는 직선은 몇 개인가요?",
    choices: ["0개", "1개", "2개", "무수히 많다"],
    answerIndex: 1,
    hint: "점 하나만 지나는 직선은 무수히 많지만, 두 점을 지나는 직선은 딱 하나예요.",
  },
];

export const chapter32Quiz: QuizQuestion[] = [
  {
    id: "c32-q1",
    prompt: "기울기의 절댓값을 구하는 기하학적 방법은?",
    choices: ["밑변 × 높이", "밑변 분의 높이", "높이 분의 밑변", "밑변 + 높이"],
    answerIndex: 1,
    hint: "직각삼각형을 만들어 밑변 분의 높이로 구해요.",
  },
  {
    id: "c32-q2",
    prompt: "오른쪽 끝이 내려가는 직선의 기울기 부호는?",
    choices: ["양수", "음수", "0", "알 수 없다"],
    answerIndex: 1,
    hint: "오른쪽으로 갈수록 y가 작아지면 음수예요.",
  },
  {
    id: "c32-q3",
    prompt: "두 점 (0,1)과 (2,7)을 지나는 직선의 기울기는?",
    choices: ["2", "3", "4", "6"],
    answerIndex: 1,
    hint: "y증가량(6) ÷ x증가량(2) = 3.",
  },
  {
    id: "c32-q4",
    prompt: "직선의 방정식을 만들기 위해 필요한 두 가지 요소는?",
    choices: ["기울기와 지나는 점", "두 개의 기울기", "x절편과 y절편만", "그래프 색깔"],
    answerIndex: 0,
    hint: "기울기 하나와 지나는 점 하나면 직선이 완전히 결정돼요.",
  },
];

export const chapter33Quiz: QuizQuestion[] = [
  {
    id: "c33-q1",
    prompt: "직선의 방정식 3x + 2y − 4 = 0은 어떤 형태인가요?",
    choices: ["표준형", "일반형", "인수분해형", "근의공식형"],
    answerIndex: 1,
    hint: "ax+by+c=0 형태는 일반형이에요.",
  },
  {
    id: "c33-q2",
    prompt: "2x + y − 5 = 0의 기울기는?",
    choices: ["2", "−2", "5", "−5"],
    answerIndex: 1,
    hint: "기울기 = −(x계수)/(y계수) = −(2)/(1) = −2.",
  },
  {
    id: "c33-q3",
    prompt: "x = 3의 그래프는 함수인가요?",
    choices: ["함수다 (상수함수)", "함수가 아니다", "1차함수다", "2차함수다"],
    answerIndex: 1,
    hint: "세로선 자체라서, 세로선 판정법을 그으면 무한히 겹쳐요.",
  },
  {
    id: "c33-q4",
    prompt: "y = 4의 그래프를 부르는 이름은?",
    choices: ["일차함수", "상수함수", "이차함수", "함수가 아님"],
    answerIndex: 1,
    hint: "y가 항상 같은 값으로 고정된 함수를 상수함수라 해요.",
  },
];

export const chapter34Quiz: QuizQuestion[] = [
  {
    id: "c34-q1",
    prompt: "점 (2,3)을 x축 방향으로 −1, y축 방향으로 5만큼 평행이동하면?",
    choices: ["(1,8)", "(3,8)", "(1,-2)", "(3,-2)"],
    answerIndex: 0,
    hint: "좌표에 그대로 더해요: (2−1, 3+5).",
  },
  {
    id: "c34-q2",
    prompt: "그래프를 x축 방향으로 m만큼 평행이동할 때, 식의 x 자리에 무엇을 대입하나요?",
    choices: ["x + m", "x − m", "mx", "x/m"],
    answerIndex: 1,
    hint: "그래프의 평행이동은 점과 반대로 부호를 바꿔서 대입해요.",
  },
  {
    id: "c34-q3",
    prompt: "y=x²을 x축 방향 2, y축 방향 3만큼 평행이동한 식은?",
    choices: ["y=(x−2)²+3", "y=(x+2)²+3", "y=(x−2)²−3", "y=(x+2)²−3"],
    answerIndex: 0,
    hint: "x 자리에 x−2, y 자리에 y−3을 대입 후 이항하면 y=(x−2)²+3.",
  },
  {
    id: "c34-q4",
    prompt: "점의 평행이동과 그래프의 평행이동의 결정적 차이는?",
    choices: ["차이가 없다", "그래프는 부호를 바꿔서 대입한다", "점은 항상 원점으로 간다", "그래프는 이동이 불가능하다"],
    answerIndex: 1,
    hint: "점은 있는 그대로 더하지만, 그래프 식은 부호를 바꿔 대입해요.",
  },
];

export const chapter35Quiz: QuizQuestion[] = [
  {
    id: "c35-q1",
    prompt: "이차함수의 '태초의 상태'는 어떤 형태인가요?",
    choices: ["y = ax + b", "y = ax²", "y = a/x", "y = a"],
    answerIndex: 1,
    hint: "이차항만 남기고 다 지운 가장 간단한 형태예요.",
  },
  {
    id: "c35-q2",
    prompt: "y = −3x²의 그래프는 어느 방향으로 볼록한가요?",
    choices: ["아래로 볼록", "위로 볼록", "왼쪽으로 볼록", "오른쪽으로 볼록"],
    answerIndex: 1,
    hint: "이차항 계수가 음수면 위로 볼록해요.",
  },
  {
    id: "c35-q3",
    prompt: "y=5x²과 y=x² 중 어느 그래프가 더 좁게 오므라드나요?",
    choices: ["y=5x²", "y=x²", "둘이 같다", "비교할 수 없다"],
    answerIndex: 0,
    hint: "이차항 계수의 절댓값이 클수록 y축 쪽으로 좁아져요.",
  },
  {
    id: "c35-q4",
    prompt: "y=ax² 그래프의 꼭짓점은 항상 어디인가요?",
    choices: ["(1,1)", "원점 (0,0)", "a와 같은 곳", "정해지지 않는다"],
    answerIndex: 1,
    hint: "태초의 상태에서는 꼭짓점이 언제나 원점이에요.",
  },
];

export const chapter36Quiz: QuizQuestion[] = [
  {
    id: "c36-q1",
    prompt: "y = 3(x−2)² + 4의 꼭짓점은?",
    choices: ["(2,4)", "(−2,4)", "(2,−4)", "(3,4)"],
    answerIndex: 0,
    hint: "y=a(x−p)²+q 꼴에서 꼭짓점은 (p,q)예요.",
  },
  {
    id: "c36-q2",
    prompt: "이차함수를 평행이동해도 절대 변하지 않는 것은?",
    choices: ["꼭짓점의 위치", "y절편", "이차항의 계수", "대칭축의 위치"],
    answerIndex: 2,
    hint: "그래프의 벌어진 정도(생김새)를 결정하는 계수는 이동해도 그대로예요.",
  },
  {
    id: "c36-q3",
    prompt: "y = (x−3)² − 2에서 대칭축의 방정식은?",
    choices: ["x = 3", "x = −3", "x = −2", "y = −2"],
    answerIndex: 0,
    hint: "대칭축은 꼭짓점의 x좌표를 그대로 사용해요: x=3.",
  },
  {
    id: "c36-q4",
    prompt: "a<0인 이차함수 y=a(x−p)²+q의 최댓값은?",
    choices: ["p", "q", "a", "존재하지 않는다"],
    answerIndex: 1,
    hint: "위로 볼록하면 꼭짓점의 y좌표 q가 최댓값이에요.",
  },
];

export const chapter37Quiz: QuizQuestion[] = [
  {
    id: "c37-q1",
    prompt: "(g∘f)(x)는 어떤 순서로 계산하나요?",
    choices: ["g를 먼저, f를 나중에", "f를 먼저, g를 나중에", "동시에 계산", "순서는 상관없다"],
    answerIndex: 1,
    hint: "f(x)를 먼저 구하고, 그 결과를 g에 대입해요.",
  },
  {
    id: "c37-q2",
    prompt: "f(x)=x+1, g(x)=2x일 때 (f∘g)(3)의 값은?",
    choices: ["6", "7", "8", "9"],
    answerIndex: 1,
    hint: "g(3)=6을 먼저 구하고, f(6)=7.",
  },
  {
    id: "c37-q3",
    prompt: "합성함수에서 f∘g와 g∘f의 관계는?",
    choices: ["항상 같다", "일반적으로 다르다", "항상 0이다", "항상 상수함수다"],
    answerIndex: 1,
    hint: "합성함수는 교환법칙이 성립하지 않아요.",
  },
  {
    id: "c37-q4",
    prompt: "f(g(x))에서 알맹이(안쪽) 함수는?",
    choices: ["f", "g", "x", "둘 다 아니다"],
    answerIndex: 1,
    hint: "g(x)가 먼저 계산되어 f 안에 통째로 들어가요.",
  },
];

export const chapter39Quiz: QuizQuestion[] = [
  {
    id: "c39-q1",
    prompt: "역함수는 원래 함수와 비교했을 때 무엇을 바꾼 것인가요?",
    choices: ["계수만 바꾼다", "x와 y의 역할을 바꾼다", "정의역만 넓힌다", "아무것도 안 바꾼다"],
    answerIndex: 1,
    hint: "화살 방향을 뒤집는다는 건 x와 y 역할 교환이에요.",
  },
  {
    id: "c39-q2",
    prompt: "역함수가 존재하기 위한 조건은?",
    choices: ["일차함수여야 한다", "일대일대응이어야 한다", "치역이 없어야 한다", "항상 존재한다"],
    answerIndex: 1,
    hint: "공역의 모든 원소가 정확히 한 번씩 대응돼야 뒤집어도 함수가 돼요.",
  },
  {
    id: "c39-q3",
    prompt: "이차함수의 역함수가 일반적으로 존재하지 않는 이유는?",
    choices: ["차수가 너무 높아서", "가로선이 두 점에서 만나서", "그래프가 곡선이라서", "y절편이 없어서"],
    answerIndex: 1,
    hint: "가로선 판정에서 두 점 이상 만나면 일대일대응이 아니에요.",
  },
  {
    id: "c39-q4",
    prompt: "y = 3x + 2의 역함수는?",
    choices: ["y = (x−2)/3", "y = (x+2)/3", "y = 3x−2", "y = x/3 − 2"],
    answerIndex: 0,
    hint: "x,y를 바꾸면 x=3y+2, y에 대해 정리하면 y=(x−2)/3.",
  },
];

export const chapter40Quiz: QuizQuestion[] = [
  {
    id: "c40-q1",
    prompt: "삼각형의 세 내각의 합은?",
    choices: ["90도", "150도", "180도", "360도"],
    answerIndex: 2,
    hint: "삼각형 내각의 합은 언제나 180도예요.",
  },
  {
    id: "c40-q2",
    prompt: "삼각형의 한 외각은 무엇과 같나요?",
    choices: ["이웃한 내각", "나머지 두 내각의 합", "180도에서 자신을 뺀 값(자기 자신)", "항상 90도"],
    answerIndex: 1,
    hint: "외각 = 그와 이웃하지 않는 두 내각의 합.",
  },
  {
    id: "c40-q3",
    prompt: "두 변의 길이와 그 끼인각이 같을 때 성립하는 합동 조건은?",
    choices: ["SSS", "SAS", "ASA", "AAA"],
    answerIndex: 1,
    hint: "Side-Angle-Side, 두 변 사이에 낀 각이 같아야 해요.",
  },
  {
    id: "c40-q4",
    prompt: "삼각형의 넓이를 구할 때 반드시 짝을 맞춰야 하는 두 요소는?",
    choices: ["둘레와 각", "밑변과 높이", "세 변의 길이", "두 각의 크기"],
    answerIndex: 1,
    hint: "어느 변을 밑변으로 잡느냐에 따라 그에 대응하는 높이가 정해져요.",
  },
];

export const chapter42Quiz: QuizQuestion[] = [
  {
    id: "c42-q1",
    prompt: "두 반지름과 그 사이의 호로 둘러싸인 원의 한 조각을 무엇이라 하나요?",
    choices: ["현", "호", "부채꼴", "지름"],
    answerIndex: 2,
    hint: "부채꼴은 반지름 두 개 + 호로 만들어진 조각이에요.",
  },
  {
    id: "c42-q2",
    prompt: "원 위의 두 점을 곧게 잇는 선분을 무엇이라 하나요?",
    choices: ["호", "현", "부채꼴", "중심각"],
    answerIndex: 1,
    hint: "곧은 선분은 현, 곡선은 호예요.",
  },
  {
    id: "c42-q3",
    prompt: "반지름이 r인 원의 둘레는?",
    choices: ["πr", "2πr", "πr²", "2πr²"],
    answerIndex: 1,
    hint: "둘레 = 2πr (지름 × π와 같아요).",
  },
  {
    id: "c42-q4",
    prompt: "반지름이 2배가 되면 원의 넓이는 몇 배가 되나요?",
    choices: ["2배", "3배", "4배", "8배"],
    answerIndex: 2,
    hint: "넓이는 πr²이라 반지름의 제곱에 비례해요. 2²=4.",
  },
];

export const chapter43Quiz: QuizQuestion[] = [
  {
    id: "c43-q1",
    prompt: "세 변의 수직이등분선이 만나는 점을 무엇이라 하나요?",
    choices: ["내심", "무게중심", "외심", "수심"],
    answerIndex: 2,
    hint: "외심은 외접원의 중심이자, 세 꼭짓점까지 거리가 같은 점이에요.",
  },
  {
    id: "c43-q2",
    prompt: "둔각삼각형의 외심은 삼각형의 어디에 있나요?",
    choices: ["내부", "외부", "변 위", "항상 무게중심과 겹침"],
    answerIndex: 1,
    hint: "예각삼각형은 내부, 둔각삼각형은 외부, 직각삼각형은 빗변 중점이에요.",
  },
  {
    id: "c43-q3",
    prompt: "세 내각의 이등분선이 만나는 점, 내접원의 중심을 무엇이라 하나요?",
    choices: ["외심", "내심", "수심", "무게중심"],
    answerIndex: 1,
    hint: "내심은 세 변까지의 거리가 모두 같은 점이에요.",
  },
  {
    id: "c43-q4",
    prompt: "내접원의 반지름 r을 구하는 공식은? (넓이 S, 세 변 a,b,c)",
    choices: ["r = S/(a+b+c)", "r = 2S/(a+b+c)", "r = S/2(a+b+c)", "r = (a+b+c)/2S"],
    answerIndex: 1,
    hint: "내심에서 세 조각으로 나눈 넓이의 합 = 전체 넓이에서 유도돼요.",
  },
];

export const chapter44Quiz: QuizQuestion[] = [
  {
    id: "c44-q1",
    prompt: "평행사변형에서 두 대각선의 관계는?",
    choices: ["항상 수직이다", "서로 이등분한다", "길이가 항상 같다", "관계가 없다"],
    answerIndex: 1,
    hint: "두 대각선의 교점이 각 대각선을 정확히 반으로 나눠요.",
  },
  {
    id: "c44-q2",
    prompt: "평행사변형에서 이웃한 두 내각의 합은?",
    choices: ["90도", "150도", "180도", "360도"],
    answerIndex: 2,
    hint: "대변이 평행하므로 한 변을 가로지르는 두 각은 동측내각 관계예요.",
  },
  {
    id: "c44-q3",
    prompt: "평행사변형에 '대각선의 길이가 같다'는 조건이 추가되면 무엇이 되나요?",
    choices: ["마름모", "직사각형", "사다리꼴", "정사각형"],
    answerIndex: 1,
    hint: "대각선 길이가 같아지는 평행사변형이 직사각형이에요.",
  },
  {
    id: "c44-q4",
    prompt: "정사각형이 되려면 평행사변형에 어떤 조건이 모두 필요한가요?",
    choices: ["대각선이 평행", "대각선 길이가 같음 + 수직으로 만남", "한 각이 예각", "네 변이 평행"],
    answerIndex: 1,
    hint: "직사각형 조건(대각선 길이 같음)과 마름모 조건(대각선 수직)을 모두 만족해야 해요.",
  },
];

export const chapter45Quiz: QuizQuestion[] = [
  {
    id: "c45-q1",
    prompt: "삼각형의 두 변의 중점을 이은 선분은 나머지 변과 어떤 관계인가요?",
    choices: ["수직이다", "평행하고 길이가 절반이다", "길이가 같다", "관계없다"],
    answerIndex: 1,
    hint: "중점연결정리: 평행 + 길이는 절반.",
  },
  {
    id: "c45-q2",
    prompt: "삼각형의 중선이란 무엇인가요?",
    choices: ["각을 이등분하는 선", "꼭짓점과 마주보는 변의 중점을 잇는 선", "변에 수직인 선", "외접원의 반지름"],
    answerIndex: 1,
    hint: "마주보는 변(대변)의 중점을 연결한 선이 중선이에요.",
  },
  {
    id: "c45-q3",
    prompt: "무게중심은 각 중선을 몇 대 몇으로 나누나요? (꼭짓점 쪽 : 변 쪽)",
    choices: ["1대1", "2대1", "3대1", "3대2"],
    answerIndex: 1,
    hint: "무게중심은 중선을 2:1로 내분해요 — 꼭짓점 쪽이 더 길다.",
  },
  {
    id: "c45-q4",
    prompt: "무게중심과 세 꼭짓점을 연결해 만든 여섯 조각의 넓이는 어떤 관계인가요?",
    choices: ["모두 다르다", "모두 같다", "두 개씩만 같다", "규칙이 없다"],
    answerIndex: 1,
    hint: "중선이 넓이를 반으로 나눈다는 사실을 겹쳐 쓰면 여섯 조각이 모두 같아져요.",
  },
];

export const chapter46Quiz: QuizQuestion[] = [
  {
    id: "c46-q1",
    prompt: "직각삼각형에서 빗변의 제곱은 무엇과 같나요?",
    choices: ["나머지 두 변의 합", "나머지 두 변의 제곱의 합", "나머지 두 변의 곱", "둘레의 절반"],
    answerIndex: 1,
    hint: "a² + b² = c² (c는 빗변).",
  },
  {
    id: "c46-q2",
    prompt: "직각삼각형의 세 변 중 빗변은 어떤 변인가요?",
    choices: ["가장 짧은 변", "가장 긴 변", "직각을 낀 변 중 하나", "아무 변이나"],
    answerIndex: 1,
    hint: "빗변은 직각을 마주보는, 세 변 중 가장 긴 변이에요.",
  },
  {
    id: "c46-q3",
    prompt: "두 변의 길이가 6과 8인 직각삼각형의 빗변의 길이는?",
    choices: ["10", "12", "14", "48"],
    answerIndex: 0,
    hint: "6²+8²=36+64=100, √100=10.",
  },
  {
    id: "c46-q4",
    prompt: "다음 중 피타고라스 수(직각삼각형을 이루는 세 변) 조합이 아닌 것은?",
    choices: ["3-4-5", "5-12-13", "2-3-4", "6-8-10"],
    answerIndex: 2,
    hint: "2²+3²=13 ≠ 4²=16 이라서 직각삼각형이 아니에요.",
  },
];

export const chapter47Quiz: QuizQuestion[] = [
  {
    id: "c47-q1",
    prompt: "sin θ는 어떤 비율인가요?",
    choices: ["밑변/빗변", "높이/빗변", "높이/밑변", "빗변/높이"],
    answerIndex: 1,
    hint: "θ에서 출발해 고개를 넘어 직각으로 — 높이/빗변이 사인이에요.",
  },
  {
    id: "c47-q2",
    prompt: "cos θ는 어떤 비율인가요?",
    choices: ["밑변/빗변", "높이/빗변", "높이/밑변", "빗변/밑변"],
    answerIndex: 0,
    hint: "θ를 사이에 두고 빗변에서 출발 — 밑변/빗변이 코사인이에요.",
  },
  {
    id: "c47-q3",
    prompt: "tan θ를 sin θ와 cos θ로 나타내면?",
    choices: ["sin θ × cos θ", "cos θ / sin θ", "sin θ / cos θ", "sin θ + cos θ"],
    answerIndex: 2,
    hint: "탄젠트는 코사인분의 사인이에요.",
  },
  {
    id: "c47-q4",
    prompt: "밑변 3, 높이 4, 빗변 5인 직각삼각형에서 tan θ의 값은?",
    choices: ["3/4", "4/3", "3/5", "4/5"],
    answerIndex: 1,
    hint: "tan θ = 높이/밑변 = 4/3.",
  },
];

export const chapter48Quiz: QuizQuestion[] = [
  {
    id: "c48-q1",
    prompt: "원의 중심에서 현에 내린 수선은 그 현을 어떻게 하나요?",
    choices: ["연장한다", "수직이등분한다", "평행이동한다", "원 밖으로 옮긴다"],
    answerIndex: 1,
    hint: "중심에서 현에 내린 수선은 현을 정확히 반으로 나눠요.",
  },
  {
    id: "c48-q2",
    prompt: "원의 접점에서 그은 반지름과 접선의 관계는?",
    choices: ["평행하다", "수직이다", "60도로 만난다", "관계없다"],
    answerIndex: 1,
    hint: "반지름과 접선은 접점에서 항상 수직으로 만나요.",
  },
  {
    id: "c48-q3",
    prompt: "같은 호에 대한 중심각과 원주각의 관계는?",
    choices: ["중심각 = 원주각", "중심각 = 원주각의 2배", "중심각 = 원주각의 절반", "관계없다"],
    answerIndex: 1,
    hint: "중심각은 원주각의 두 배, 즉 원주각은 중심각의 절반이에요.",
  },
  {
    id: "c48-q4",
    prompt: "지름에 대한 원주각의 크기는?",
    choices: ["45도", "60도", "90도", "180도"],
    answerIndex: 2,
    hint: "지름의 중심각은 180도이므로, 원주각은 그 절반인 90도예요.",
  },
];

export const chapter50Quiz: QuizQuestion[] = [
  {
    id: "c50-q1",
    prompt: "수직선 위의 두 점 A(2), B(7) 사이의 거리는?",
    choices: ["3", "5", "9", "14"],
    answerIndex: 1,
    hint: "큰 좌표에서 작은 좌표를 빼요: 7-2=5.",
  },
  {
    id: "c50-q2",
    prompt: "좌표평면 위 두 점 사이의 거리 공식은 어떤 정리에서 나왔나요?",
    choices: ["피타고라스 정리", "중점연결정리", "삼각비", "인수분해"],
    answerIndex: 0,
    hint: "x좌표 차이와 y좌표 차이를 두 변으로 하는 직각삼각형에 피타고라스 정리를 적용해요.",
  },
  {
    id: "c50-q3",
    prompt: "두 점 A(0,0), B(3,4) 사이의 거리는?",
    choices: ["4", "5", "7", "12"],
    answerIndex: 1,
    hint: "√(3²+4²)=√25=5.",
  },
  {
    id: "c50-q4",
    prompt: "P(x,y)와 A(2,-1) 사이의 거리를 나타내는 식은?",
    choices: ["√((x-2)²+(y+1)²)", "√((x+2)²+(y-1)²)", "(x-2)+(y+1)", "√(x²+y²)"],
    answerIndex: 0,
    hint: "x좌표 차이는 x-2, y좌표 차이는 y-(-1)=y+1.",
  },
];

export const chapter52Quiz: QuizQuestion[] = [
  {
    id: "c52-q1",
    prompt: "두 직선이 서로 수직일 조건은?",
    choices: ["기울기가 같다", "기울기의 곱이 -1이다", "기울기의 합이 0이다", "y절편이 같다"],
    answerIndex: 1,
    hint: "두 직선이 수직이면 기울기끼리 곱해서 -1이 돼요.",
  },
  {
    id: "c52-q2",
    prompt: "기울기가 2/3인 직선에 수직인 직선의 기울기는?",
    choices: ["2/3", "3/2", "-2/3", "-3/2"],
    answerIndex: 3,
    hint: "역수를 취하고 부호를 바꿔요: 2/3 → 3/2 → -3/2.",
  },
  {
    id: "c52-q3",
    prompt: "직선 y=4x에 수직인 직선의 기울기는?",
    choices: ["4", "-4", "1/4", "-1/4"],
    answerIndex: 3,
    hint: "4의 역수는 1/4, 부호를 바꾸면 -1/4.",
  },
  {
    id: "c52-q4",
    prompt: "ax+by+c=0 꼴의 두 직선이 수직일 조건은?",
    choices: ["a:a′=b:b′", "aa′+bb′=0", "a:a′=b:b′=c:c′", "ab′=a′b"],
    answerIndex: 1,
    hint: "일반형에서 수직 조건은 계수끼리 곱해서 더하면 0.",
  },
];

export const chapter53Quiz: QuizQuestion[] = [
  {
    id: "c53-q1",
    prompt: "원의 정의는 무엇인가요?",
    choices: ["세 점을 지나는 도형", "한 정점으로부터 같은 거리에 있는 점들의 자취", "두 점을 잇는 선분", "네 변이 같은 사각형"],
    answerIndex: 1,
    hint: "정점(중심)으로부터 같은 거리(반지름)에 있는 점들의 자취가 원이에요.",
  },
  {
    id: "c53-q2",
    prompt: "중심 (a,b), 반지름 r인 원의 방정식은?",
    choices: ["(x−a)+(y−b)=r", "(x−a)²+(y−b)²=r", "(x−a)²+(y−b)²=r²", "(x+a)²+(y+b)²=r²"],
    answerIndex: 2,
    hint: "두 점 사이의 거리 공식을 제곱한 형태예요.",
  },
  {
    id: "c53-q3",
    prompt: "중심 (2,-1), 반지름 4인 원의 방정식은?",
    choices: ["(x-2)²+(y+1)²=4", "(x-2)²+(y+1)²=16", "(x+2)²+(y-1)²=16", "(x-2)²+(y-1)²=16"],
    answerIndex: 1,
    hint: "중심 좌표를 부호 바꿔서 넣고, 반지름은 제곱해서 16.",
  },
  {
    id: "c53-q4",
    prompt: "x²+(y-3)²=9의 중심과 반지름은?",
    choices: ["중심(0,3), 반지름3", "중심(0,-3), 반지름9", "중심(3,0), 반지름3", "중심(0,3), 반지름9"],
    answerIndex: 0,
    hint: "완전제곱식을 0으로 만드는 값이 중심 좌표, 우변에 루트 씌우면 반지름.",
  },
];

export const chapter54Quiz: QuizQuestion[] = [
  {
    id: "c54-q1",
    prompt: "점 (2,3)을 x축 방향으로 4, y축 방향으로 -1만큼 평행이동한 점은?",
    choices: ["(6,2)", "(-2,4)", "(6,4)", "(2,2)"],
    answerIndex: 0,
    hint: "점은 있는 그대로 더해요: (2+4, 3-1)=(6,2).",
  },
  {
    id: "c54-q2",
    prompt: "y=f(x)의 그래프를 x축 방향 m, y축 방향 n만큼 평행이동한 식은?",
    choices: ["y+n=f(x+m)", "y-n=f(x-m)", "y=f(x)+m+n", "y-n=f(x+m)"],
    answerIndex: 1,
    hint: "그래프는 부호를 바꿔서 대입해요: x 대신 x-m, y 대신 y-n.",
  },
  {
    id: "c54-q3",
    prompt: "점의 평행이동과 그래프의 평행이동, 어느 쪽이 부호를 바꿔서 대입하나요?",
    choices: ["점", "그래프", "둘 다", "둘 다 아니다"],
    answerIndex: 1,
    hint: "점은 있는 그대로 더하고, 그래프(식)는 부호를 바꿔서 대입해요.",
  },
  {
    id: "c54-q4",
    prompt: "중심 (1,-3), 반지름 5인 원을 x축 방향 2, y축 방향 1만큼 평행이동하면 새 중심은?",
    choices: ["(3,-2)", "(-1,-4)", "(1,-2)", "(3,-4)"],
    answerIndex: 0,
    hint: "원을 옮길 때는 중심을 점처럼 그대로 더하면 돼요: (1+2,-3+1)=(3,-2).",
  },
];

export const chapter55Quiz: QuizQuestion[] = [
  {
    id: "c55-q1",
    prompt: "등식을 만족하는 점들의 집합은 무엇으로 나타나나요?",
    choices: ["영역(면)", "선", "점 하나", "아무것도 아니다"],
    answerIndex: 1,
    hint: "등식은 직선이든 곡선이든 선으로 나타나요.",
  },
  {
    id: "c55-q2",
    prompt: "부등식 y > (경계선의 식)을 만족하는 영역은 어디인가요?",
    choices: ["경계선 위쪽", "경계선 아래쪽", "경계선 자체", "원점"],
    answerIndex: 0,
    hint: "y 기준으로 크다는 것은 경계선보다 위쪽에 있다는 뜻이에요.",
  },
  {
    id: "c55-q3",
    prompt: "부등식에 등호(≥, ≤)가 포함되어 있으면 경계선은?",
    choices: ["포함하지 않는다", "포함한다", "점선으로 그린다", "무시한다"],
    answerIndex: 1,
    hint: "등호가 있으면 경계선 자체도 부등식을 만족시키므로 포함해요.",
  },
  {
    id: "c55-q4",
    prompt: "부등식이 나타내는 영역이 헷갈릴 때 가장 확실한 방법은?",
    choices: ["그냥 외운 규칙만 믿는다", "경계선 밖의 아무 점을 대입해본다", "포기한다", "그래프를 지운다"],
    answerIndex: 1,
    hint: "경계선 위에 있지 않은 점(보통 원점)을 대입해서 성립하는지 확인하면 확실해요.",
  },
];

export const chapter63Quiz: QuizQuestion[] = [
  {
    id: "c63-q1",
    prompt: "z = 3 - 2i 의 켤레복소수는?",
    choices: ["3 + 2i", "-3 - 2i", "-3 + 2i", "3 - 2i"],
    answerIndex: 0,
    hint: "실수부는 그대로, 허수부의 부호만 바꿔요.",
  },
  {
    id: "c63-q2",
    prompt: "z = 2 + 5i 일 때 z + z̄ 의 값은?",
    choices: ["5", "4", "10", "2"],
    answerIndex: 1,
    hint: "자기 자신과 켤레복소수의 합은 실수부의 2배: 2×2=4.",
  },
  {
    id: "c63-q3",
    prompt: "z = 1 + 3i 일 때 z × z̄ 의 값은?",
    choices: ["10", "1", "9", "-8"],
    answerIndex: 0,
    hint: "곱은 실수부 제곱 + 허수부 제곱: 1²+3²=10.",
  },
  {
    id: "c63-q4",
    prompt: "실수 z의 켤레복소수는 z 자신과 어떤 관계인가요?",
    choices: ["항상 다르다", "완전히 같다", "부호만 반대다", "허수부만 같다"],
    answerIndex: 1,
    hint: "실수는 허수부가 0이라 부호를 바꿔도 똑같아요.",
  },
];

export const chapter66Quiz: QuizQuestion[] = [
  {
    id: "c66-q1",
    prompt: "3x² × 4x³ 을 계산하면?",
    choices: ["7x⁵", "12x⁵", "12x⁶", "7x⁶"],
    answerIndex: 1,
    hint: "계수는 3×4=12, 문자는 지수법칙으로 x²⁺³=x⁵.",
  },
  {
    id: "c66-q2",
    prompt: "8a³ ÷ 2a 를 계산하면?",
    choices: ["4a²", "4a³", "6a²", "16a²"],
    answerIndex: 0,
    hint: "나눗셈은 분수로 바꿔서 약분: 8/2=4, a³/a=a².",
  },
  {
    id: "c66-q3",
    prompt: "abc ÷ abc 의 값은?",
    choices: ["bc", "1", "b²c²", "0"],
    answerIndex: 1,
    hint: "생략된 곱셈은 하나의 덩어리 — 같은 것으로 나누면 1이에요.",
  },
  {
    id: "c66-q4",
    prompt: "단항식의 곱셈에서 가장 먼저 해야 할 일은?",
    choices: ["문자부터 계산", "계수와 문자를 각각 분리해서 계산", "무조건 전개", "괄호부터 없앤다"],
    answerIndex: 1,
    hint: "계수는 계수끼리, 문자는 문자끼리 나눠서 계산하면 실수가 줄어요.",
  },
];

export const chapter67Quiz: QuizQuestion[] = [
  {
    id: "c67-q1",
    prompt: "x(2x - 3y)를 전개하면?",
    choices: ["2x² - 3y", "2x² - 3xy", "2x - 3xy", "2x² - 3x"],
    answerIndex: 1,
    hint: "괄호 안 모든 항에 x를 곱해요: x×2x - x×3y.",
  },
  {
    id: "c67-q2",
    prompt: "(6x² - 3x) ÷ 3x 를 계산하면?",
    choices: ["2x - 1", "2x² - x", "3x - 1", "2x - 3"],
    answerIndex: 0,
    hint: "각 항을 3x로 나눠요: 6x²/3x=2x, 3x/3x=1.",
  },
  {
    id: "c67-q3",
    prompt: "다항식을 전개한다는 것은 어떤 방향의 변환인가요?",
    choices: ["곱 꼴 → 합차 꼴", "합차 꼴 → 곱 꼴", "숫자만 남기기", "문자만 남기기"],
    answerIndex: 0,
    hint: "전개는 곱 꼴을 다항식(합차 꼴)으로 펼치는 거예요.",
  },
  {
    id: "c67-q4",
    prompt: "x(2x-3y) + y(3x+2y)를 전개했을 때 xy의 계수는?",
    choices: ["0", "1", "-1", "6"],
    answerIndex: 0,
    hint: "-3xy + 3xy = 0, xy항이 사라져요.",
  },
];

export const chapter68Quiz: QuizQuestion[] = [
  {
    id: "c68-q1",
    prompt: "(a+b)³을 전개하면?",
    choices: ["a³+b³", "a³+3a²b+3ab²+b³", "a³+3ab+b³", "a³+ab²+b³"],
    answerIndex: 1,
    hint: "앞만 세제곱, 3×앞²×뒤, 3×앞×뒤², 뒤만 세제곱.",
  },
  {
    id: "c68-q2",
    prompt: "a³+b³을 인수분해하면?",
    choices: ["(a+b)(a²-ab+b²)", "(a+b)(a²+ab+b²)", "(a-b)(a²+ab+b²)", "(a+b)³"],
    answerIndex: 0,
    hint: "합의 공식: 앞은 그대로, 뒤는 앞제곱-앞뒤곱+뒤제곱.",
  },
  {
    id: "c68-q3",
    prompt: "x³-8을 인수분해하면?",
    choices: ["(x-2)(x²+2x+4)", "(x-2)(x²-2x+4)", "(x+2)(x²-2x+4)", "(x-2)³"],
    answerIndex: 0,
    hint: "8=2³이니까 (x-2)(x²+2x+4).",
  },
  {
    id: "c68-q4",
    prompt: "a²-b²와 달리 a³-b³이 항상 인수분해되는 이유는?",
    choices: ["부호가 항상 양수라서", "세제곱은 합이든 차든 공식이 성립해서", "우연이다", "성립하지 않는다"],
    answerIndex: 1,
    hint: "세제곱의 합·차는 부호에 상관없이 항상 인수분해 공식이 적용돼요.",
  },
];

export const chapter69Quiz: QuizQuestion[] = [
  {
    id: "c69-q1",
    prompt: "완전제곱식인지 의심해보는 신호는 무엇인가요?",
    choices: ["항이 3개일 때", "첫 항과 끝 항이 둘 다 제곱 꼴일 때", "계수가 클 때", "부호가 다를 때"],
    answerIndex: 1,
    hint: "맨 앞과 맨 뒤가 어떤 것의 제곱으로 보이면 의심해봐요.",
  },
  {
    id: "c69-q2",
    prompt: "9x²-12xy+4y²을 인수분해하면?",
    choices: ["(3x-2y)²", "(3x+2y)²", "(3x-4y)²", "(9x-4y)²"],
    answerIndex: 0,
    hint: "9x²=(3x)², 4y²=(2y)², 가운데 -12xy가 일치해요.",
  },
  {
    id: "c69-q3",
    prompt: "x²의 계수가 1인 이차식 x²+8x+□가 완전제곱식이 되려면 □는?",
    choices: ["8", "16", "4", "64"],
    answerIndex: 1,
    hint: "1차항 계수 8의 절반(4)을 제곱하면 16.",
  },
  {
    id: "c69-q4",
    prompt: "완전제곱식이 되기 위한 상수항을 구하는 공식은?",
    choices: ["1차항 계수의 제곱", "1차항 계수를 2로 나눈 값", "(1차항 계수÷2)²", "1차항 계수×2"],
    answerIndex: 2,
    hint: "이른바 '반의 제곱' — 1차항 계수의 절반을 제곱해요.",
  },
];

export const chapter70Quiz: QuizQuestion[] = [
  {
    id: "c70-q1",
    prompt: "3차식 이상의 다항식을 인수분해할 때 첫 단계는?",
    choices: ["바로 조립제법", "인수정리로 근 하나를 찾는다", "완전제곱식 의심", "그래프를 그린다"],
    answerIndex: 1,
    hint: "F(a)=0이 되는 값을 찾아 인수 (x-a)를 확정해요.",
  },
  {
    id: "c70-q2",
    prompt: "근의 후보를 찾는 공식은?",
    choices: ["±(최고차항의 약수)/(상수항의 약수)", "±(상수항의 약수)/(최고차항 계수의 약수)", "±(상수항)", "±(최고차항의 계수)"],
    answerIndex: 1,
    hint: "상수항의 약수를 최고차항 계수의 약수로 나눈 값이 후보예요.",
  },
  {
    id: "c70-q3",
    prompt: "x³-2x²-5x+6에 x=1을 대입하면 0이 된다. 이것이 뜻하는 것은?",
    choices: ["x=1은 근이 아니다", "(x-1)이 인수다", "3차식이 아니다", "인수분해가 불가능하다"],
    answerIndex: 1,
    hint: "인수정리: F(1)=0이면 (x-1)이 인수예요.",
  },
  {
    id: "c70-q4",
    prompt: "인수 하나를 찾은 뒤 남은 몫을 구할 때 사용하는 방법은?",
    choices: ["완전제곱식 공식", "조립제법", "근의 공식", "인수분해 공식"],
    answerIndex: 1,
    hint: "1차식으로 나눈 몫과 나머지는 조립제법으로 빠르게 구해요.",
  },
];

export const chapter71Quiz: QuizQuestion[] = [
  {
    id: "c71-q1",
    prompt: "소수가 섞인 방정식을 풀 때 가장 먼저 하면 좋은 일은?",
    choices: ["양변에 10의 거듭제곱을 곱한다", "바로 이항한다", "양변을 나눈다", "그래프를 그린다"],
    answerIndex: 0,
    hint: "등식의 성질을 이용해 소수를 정수로 바꿔버려요.",
  },
  {
    id: "c71-q2",
    prompt: "분수가 섞인 방정식을 풀 때 양변에 곱하면 좋은 수는?",
    choices: ["분모들의 최대공약수", "분모들의 최소공배수", "1", "분자들의 합"],
    answerIndex: 1,
    hint: "최소공배수를 곱하면 모든 분모가 한 번에 사라져요.",
  },
  {
    id: "c71-q3",
    prompt: "비례식 a:b = c:d 에서 항상 성립하는 관계는?",
    choices: ["a+d=b+c", "ad=bc", "ab=cd", "a-b=c-d"],
    answerIndex: 1,
    hint: "외항의 곱(ad)과 내항의 곱(bc)은 항상 같아요.",
  },
  {
    id: "c71-q4",
    prompt: "방정식의 해가 어떤 조건(예: 자연수)을 만족해야 할 때는?",
    choices: ["조건을 무시한다", "식을 세운 뒤 조건을 만족하는 값만 고른다", "무조건 양수로 바꾼다", "방정식을 다시 세운다"],
    answerIndex: 1,
    hint: "해를 문자로 구한 뒤, 주어진 조건에 맞는 값만 남겨요.",
  },
];

export const chapter59Quiz: QuizQuestion[] = [
  {
    id: "c59-q1",
    prompt: "약분을 끝낸, 더 이상 약분할 수 없는 분수를 무엇이라 하나요?",
    choices: ["순환소수", "기약분수", "유한소수", "가분수"],
    answerIndex: 1,
    hint: "분자와 분모가 서로소가 되어 더 이상 약분되지 않는 분수예요.",
  },
  {
    id: "c59-q2",
    prompt: "5/6과 3/8을 통분할 때 분모로 쓰기 가장 좋은 수는?",
    choices: ["14", "24", "48", "6"],
    answerIndex: 1,
    hint: "6과 8의 최소공배수는 24예요.",
  },
  {
    id: "c59-q3",
    prompt: "분수 b/a에 c를 곱하면 결과는?",
    choices: ["b/(a×c)", "(b×c)/a", "(b+c)/a", "b/(a+c)"],
    answerIndex: 1,
    hint: "분수에 수를 곱할 때는 분모가 아니라 분자에 곱해요.",
  },
  {
    id: "c59-q4",
    prompt: "5/8의 역수는?",
    choices: ["8/5", "-5/8", "5/8", "-8/5"],
    answerIndex: 0,
    hint: "역수는 분자와 분모를 뒤집은 수 — 곱하면 1이 돼요.",
  },
];

export const chapter61Quiz: QuizQuestion[] = [
  {
    id: "c61-q1",
    prompt: "'제곱근 5'가 뜻하는 것은?",
    choices: ["√5 하나", "±√5 두 개", "5 자체", "5의 배수"],
    answerIndex: 0,
    hint: "숫자가 '제곱근' 뒤에 있으면 √a를 한국말로 읽은 것 — 답은 양수 하나예요.",
  },
  {
    id: "c61-q2",
    prompt: "'9의 제곱근'을 구하면?",
    choices: ["3", "±3", "9", "81"],
    answerIndex: 1,
    hint: "숫자가 '제곱근' 앞에 있으면 x²=9의 해를 구하라는 뜻 — 답은 두 개예요.",
  },
  {
    id: "c61-q3",
    prompt: "왜 '5의 제곱근'은 답이 두 개인가요?",
    choices: ["실수를 해서", "양수와 음수 모두 제곱하면 같은 양수가 되니까", "5가 짝수라서", "관례일 뿐 이유는 없다"],
    answerIndex: 1,
    hint: "짝수 번(제곱, 즉 2번) 곱하면 부호가 사라져서 양수·음수 둘 다 답이 돼요.",
  },
  {
    id: "c61-q4",
    prompt: "'제곱근 16'과 '16의 제곱근' 중 답이 하나뿐인 것은?",
    choices: ["제곱근 16", "16의 제곱근", "둘 다 하나", "둘 다 둘"],
    answerIndex: 0,
    hint: "제곱근 16 = √16 = 4 하나. 16의 제곱근 = ±4 두 개.",
  },
];
