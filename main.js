const MBTI_TYPES = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP"
];

const CLIFTON_34 = [
  "Achiever", "Activator", "Adaptability", "Analytical", "Arranger", "Belief",
  "Command", "Communication", "Competition", "Connectedness", "Consistency", "Context",
  "Deliberative", "Developer", "Discipline", "Empathy", "Focus", "Futuristic",
  "Harmony", "Ideation", "Includer", "Individualization", "Input", "Intellection",
  "Learner", "Maximizer", "Positivity", "Relator", "Responsibility", "Restorative",
  "Self-Assurance", "Significance", "Strategic", "Woo"
];

const SKILL_OPTIONS = [
  "Python", "JavaScript", "TypeScript", "SQL", "Excel", "Power BI",
  "Machine Learning", "Deep Learning", "Prompt Engineering", "No-Code Automation",
  "Product Management", "UX Research", "Digital Marketing", "Sales", "Consulting",
  "Cloud", "MLOps", "Data Engineering", "Technical Writing", "Leadership",
  "Project Management", "Customer Success", "Operations", "Stakeholder Communication"
];

const LEVEL_OPTIONS = ["low", "mid", "high"];

const ROLE_PROFILES = [
  {
    name: "AI Growth Marketing Ops",
    evolutionFrom: "기존 직무: 퍼포먼스/그로스 마케터",
    salaryBand: "8천~1.6억+",
    neededSkills: ["Digital Marketing", "Prompt Engineering", "SQL", "Power BI", "Project Management"],
    boostStrengths: ["Strategic", "Analytical", "Communication", "Activator", "Achiever"],
    boostMbti: ["ENTJ", "ENFP", "ESTJ", "ENTP"],
    hiringSignals: [
      "캠페인 운영 + 실험(AB Test) 설계 경험",
      "데이터 기반 예산/성과 최적화 역량",
      "생성형 AI로 카피/세그먼트/리포트 자동화 경험"
    ],
    demandSignals: [
      { skill: "Digital Marketing", demandPercent: 82, evidence: "캠페인 운영/그로스 실험 주도" },
      { skill: "SQL", demandPercent: 71, evidence: "성과 분석 및 세그먼트 쿼리" },
      { skill: "Power BI", demandPercent: 63, evidence: "대시보드 리포팅/성과 가시화" },
      { skill: "Prompt Engineering", demandPercent: 69, evidence: "카피/요약/실험 아이디어 자동화" },
      { skill: "Project Management", demandPercent: 57, evidence: "캠페인 운영 일정/협업 관리" }
    ],
    toolStack: ["GA4/Amplitude", "CRM/Ads Manager", "LLM 툴", "BI 대시보드"],
    outcomeMetrics: ["CAC 절감", "전환율 개선", "실험 속도 증가"],
    linkedinEvidence: ["Amazon", "Tivity Health", "GetInsured"]
  },
  {
    name: "AI Sales Enablement Manager",
    evolutionFrom: "기존 직무: 영업기획/세일즈 오퍼레이션",
    salaryBand: "8천~1.5억+",
    neededSkills: ["Sales", "Prompt Engineering", "No-Code Automation", "Consulting", "Stakeholder Communication"],
    boostStrengths: ["Woo", "Communication", "Activator", "Relator", "Arranger"],
    boostMbti: ["ENTP", "ENFJ", "ESTP", "ENTJ"],
    hiringSignals: [
      "영업 파이프라인 분석 및 우선순위 운영 경험",
      "콜 요약/제안서 초안/CRM 업데이트 자동화 경험",
      "현업 조직(영업-마케팅-CS)과의 협업 리딩 역량"
    ],
    demandSignals: [
      { skill: "Sales", demandPercent: 84, evidence: "파이프라인/딜 운영 경험" },
      { skill: "Stakeholder Communication", demandPercent: 77, evidence: "영업-마케팅-제품 간 조율" },
      { skill: "Prompt Engineering", demandPercent: 65, evidence: "콜 요약/제안서 초안 생성 자동화" },
      { skill: "No-Code Automation", demandPercent: 61, evidence: "CRM 태스크 자동화" },
      { skill: "Consulting", demandPercent: 58, evidence: "고객 과제 파악 및 솔루션 제안" }
    ],
    toolStack: ["CRM(Salesforce/HubSpot)", "LLM 기반 세일즈 어시스트", "자동화 툴"],
    outcomeMetrics: ["리드 응답 시간 단축", "영업 생산성 향상", "매출 전환율 개선"],
    linkedinEvidence: ["Edward Jones", "Premera Blue Cross", "Humana"]
  },
  {
    name: "AI Talent Ops Partner",
    evolutionFrom: "기존 직무: HR/채용/인사운영",
    salaryBand: "7천~1.4억+",
    neededSkills: ["Leadership", "Prompt Engineering", "No-Code Automation", "Project Management", "Stakeholder Communication"],
    boostStrengths: ["Developer", "Empathy", "Responsibility", "Connectedness", "Harmony"],
    boostMbti: ["ENFJ", "INFJ", "ESFJ", "ISFJ"],
    hiringSignals: [
      "채용/온보딩 프로세스 개선 프로젝트 경험",
      "JD 작성, 스크리닝, 인터뷰 요약 자동화 도입 경험",
      "윤리/개인정보/편향 이슈를 고려한 운영 역량"
    ],
    demandSignals: [
      { skill: "Stakeholder Communication", demandPercent: 81, evidence: "현업 리더/면접관과 채용 운영 조율" },
      { skill: "Project Management", demandPercent: 74, evidence: "채용/온보딩 프로세스 운영" },
      { skill: "Leadership", demandPercent: 62, evidence: "프로세스 개선/변화관리 리드" },
      { skill: "Prompt Engineering", demandPercent: 59, evidence: "JD/인터뷰 노트 자동화 품질 제어" },
      { skill: "No-Code Automation", demandPercent: 56, evidence: "ATS/HRIS 워크플로 자동화" }
    ],
    toolStack: ["ATS", "HRIS", "LLM 요약/문서도구", "워크플로 자동화"],
    outcomeMetrics: ["채용 리드타임 단축", "면접 운영 품질 향상", "온보딩 완료율 증가"],
    linkedinEvidence: ["AWS", "Amazon", "Humana"]
  },
  {
    name: "AI Business Ops Analyst",
    evolutionFrom: "기존 직무: 기획/운영/전략/재무 분석",
    salaryBand: "8천~1.6억+",
    neededSkills: ["SQL", "Excel", "Power BI", "Operations", "No-Code Automation"],
    boostStrengths: ["Analytical", "Discipline", "Focus", "Responsibility", "Context"],
    boostMbti: ["ISTJ", "ESTJ", "INTJ", "ENTJ"],
    hiringSignals: [
      "운영 KPI 설계 및 대시보드 고도화 경험",
      "반복 보고/정산/분류 업무 자동화 경험",
      "AI 도입 전후 생산성/품질 지표를 측정한 경험"
    ],
    demandSignals: [
      { skill: "Operations", demandPercent: 79, evidence: "운영 프로세스 구조화/개선" },
      { skill: "SQL", demandPercent: 73, evidence: "운영 데이터 분석" },
      { skill: "Excel", demandPercent: 71, evidence: "실무 리포팅/모델링" },
      { skill: "Power BI", demandPercent: 64, evidence: "KPI 대시보드 구축" },
      { skill: "No-Code Automation", demandPercent: 60, evidence: "반복 태스크 자동화" }
    ],
    toolStack: ["SQL/BI", "Spreadsheet", "RPA/Automation", "LLM 분석 보조"],
    outcomeMetrics: ["운영 비용 절감", "리포트 리드타임 단축", "의사결정 속도 향상"],
    linkedinEvidence: ["Prime Video", "Amazon", "GetInsured"]
  }
];

const WEAKNESS_ROUTINES = [
  { keyword: "영어", plan: "주 3회 20분 AI 발표 스크립트 훈련 + 월 2회 녹화 피드백" },
  { keyword: "시간", plan: "일일 90분 딥워크 블록 2개 고정 + 자동 리마인더 세팅" },
  { keyword: "집중", plan: "25분 집중/5분 회복 포모도로 6세트 + 업무 로그 기록" },
  { keyword: "포트폴리오", plan: "4주마다 결과물 1개 공개(깃허브+노션) + 개선 사이클" },
  { keyword: "면접", plan: "AI 모의면접 주 2회 + STAR 답변 템플릿 20개 구축" },
  { keyword: "수학", plan: "기초 통계/선형대수 30분 학습 + 주 1회 문제 풀이" }
];

const mbtiGrid = document.getElementById("mbti-grid");
const strengthGrid = document.getElementById("strength-grid");
const mbtiHint = document.getElementById("mbti-hint");
const strengthHint = document.getElementById("strength-hint");
const skillsWrap = document.getElementById("skills-wrap");
const addSkillBtn = document.getElementById("add-skill");
const form = document.getElementById("career-form");
const reportPanel = document.getElementById("report-panel");
const reportNode = document.getElementById("report");

function renderChips(items, container, name, maxCount, hintNode) {
  container.innerHTML = "";
  items.forEach((item) => {
    const label = document.createElement("label");
    label.className = "chip";
    label.innerHTML = `<input type="checkbox" name="${name}" value="${item}">${item}`;
    const input = label.querySelector("input");

    input.addEventListener("change", () => {
      const checked = container.querySelectorAll("input:checked");
      if (checked.length > maxCount) {
        input.checked = false;
        hintNode.classList.add("error");
        hintNode.textContent = `최대 ${maxCount}개까지 선택 가능합니다.`;
        setTimeout(() => {
          hintNode.classList.remove("error");
          hintNode.textContent = `${container.querySelectorAll("input:checked").length} / ${maxCount} 선택됨`;
        }, 1000);
      }
      container.querySelectorAll(".chip").forEach((chip) => {
        chip.classList.toggle("active", chip.querySelector("input").checked);
      });
      hintNode.textContent = `${container.querySelectorAll("input:checked").length} / ${maxCount} 선택됨`;
    });
    container.appendChild(label);
  });
}

function createSkillRow(skill = "", level = "mid") {
  const row = document.createElement("div");
  row.className = "skills-row";
  row.innerHTML = `
    <select class="skill-name">
      ${SKILL_OPTIONS.map((s) => `<option value="${s}" ${s === skill ? "selected" : ""}>${s}</option>`).join("")}
    </select>
    <select class="skill-level">
      ${LEVEL_OPTIONS.map((l) => `<option value="${l}" ${l === level ? "selected" : ""}>${l}</option>`).join("")}
    </select>
    <button type="button" class="btn btn--danger remove-skill">삭제</button>
  `;

  row.querySelector(".remove-skill").addEventListener("click", () => {
    row.remove();
  });
  skillsWrap.appendChild(row);
}

function collectSelected(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((el) => el.value);
}

function collectSkills() {
  return Array.from(document.querySelectorAll(".skills-row")).map((row) => ({
    name: row.querySelector(".skill-name").value,
    level: row.querySelector(".skill-level").value
  }));
}

function calculateRoleAnalysis(profile, role) {
  const skillWeight = { low: 1, mid: 2, high: 3 };
  const userSkillMap = new Map(profile.skills.map((s) => [s.name, s.level]));
  const matchedSkills = [];
  const missingSkills = [];
  let skillPoints = 0;

  role.neededSkills.forEach((skill) => {
    const level = userSkillMap.get(skill);
    if (level) {
      matchedSkills.push({ name: skill, level });
      skillPoints += skillWeight[level] * 8;
    } else {
      missingSkills.push(skill);
    }
  });

  const matchedStrengths = profile.strengths.filter((s) => role.boostStrengths.includes(s));
  const matchedMbti = profile.mbti.filter((m) => role.boostMbti.includes(m));
  const strengthPoints = matchedStrengths.length * 7;
  const mbtiPoints = matchedMbti.length * 6;
  const experiencePoints = profile.careerText.length > 120 ? 8 : 0;
  const score = skillPoints + strengthPoints + mbtiPoints + experiencePoints;

  return {
    score,
    scoreBreakdown: {
      skillPoints,
      strengthPoints,
      mbtiPoints,
      experiencePoints
    },
    matchedSkills,
    missingSkills,
    matchedStrengths,
    matchedMbti,
    skillCoverage: Math.round((matchedSkills.length / role.neededSkills.length) * 100)
  };
}

function buildEvolutionResult(profile) {
  const scored = ROLE_PROFILES
    .map((role) => {
      const analysis = calculateRoleAnalysis(profile, role);
      return { ...role, score: analysis.score, analysis };
    })
    .sort((a, b) => b.score - a.score);

  const top = scored[0];
  const missingSkills = top.analysis.missingSkills;
  const upgradeSkills = top.analysis.matchedSkills.filter((s) => s.level !== "high").map((s) => s.name);
  const focusSkills = [...new Set([...missingSkills, ...upgradeSkills])].slice(0, 5);
  const normalizedScore = Math.min(100, Math.round((top.score / 175) * 100));
  const readinessTier = normalizedScore >= 70 ? "상" : normalizedScore >= 45 ? "중" : "하";
  const confidence = profile.mbti.length + profile.strengths.length + profile.skills.length >= 6 ? "높음" : "보통";
  const userSkillMap = new Map(profile.skills.map((s) => [s.name, s.level]));

  const firstGap = focusSkills[0] || "Python";
  const secondGap = focusSkills[1] || "Prompt Engineering";
  const weaknessKeyword = WEAKNESS_ROUTINES.find((r) => profile.weaknessText.toLowerCase().includes(r.keyword));
  const demandSignals = (top.demandSignals || [])
    .map((signal) => {
      const level = userSkillMap.get(signal.skill) || null;
      const levelWeight = level === "high" ? 1 : level === "mid" ? 0.7 : level === "low" ? 0.4 : 0;
      const readiness = Math.round(signal.demandPercent * levelWeight);
      return {
        ...signal,
        level,
        readiness,
        status: level ? (level === "high" ? "충족" : "보완 필요") : "미보유"
      };
    })
    .sort((a, b) => b.demandPercent - a.demandPercent);
  const weightedDemandReadiness = demandSignals.length
    ? Math.round(
      demandSignals.reduce((sum, item) => sum + item.readiness, 0) /
      demandSignals.reduce((sum, item) => sum + item.demandPercent, 0) * 100
    )
    : 0;

  const immediateActions = [
    `이번 주 안에 ${firstGap} 학습 3시간 + 실습 결과물 1개 업로드`,
    `${secondGap} 관련 미니 프로젝트를 ${top.name} 직무 관점으로 1개 설계`,
    "성과지표 템플릿 작성(시간 절감, 품질 개선, 비용 절감 중 1개 이상)",
    profile.careerText.length < 120
      ? "경력 설명을 STAR 구조(상황-과제-행동-결과)로 500자 이상 보강"
      : "현재 경력 설명에서 정량 성과 문장 3개를 추출해 이력서 상단에 배치",
    weaknessKeyword ? weaknessKeyword.plan : "주간 회고 30분을 고정하고 다음 주 1개 목표만 설정"
  ];

  const quests = [
    {
      phase: "Phase 1 (0~4주): 기반 구축",
      tasks: [
        `핵심 역량 2개 집중: ${firstGap}, ${secondGap}`,
        "직무 맞춤 학습 루틴 고정(주 5시간 이상)",
        "작은 자동화 프로젝트 1개 배포 + 결과 지표 1개 기록"
      ]
    },
    {
      phase: "Phase 2 (5~8주): 실무 전환",
      tasks: [
        `${top.name} 포지션 기준으로 실무형 문제 1개 선정`,
        "문제정의-접근방법-결과를 포함한 케이스 스터디 1건 작성",
        "성과 지표(시간 절감/매출 기여/정확도 향상)를 수치로 명시"
      ]
    },
    {
      phase: "Phase 3 (9~12주): 고단가 포지셔닝",
      tasks: [
        "목표 직무 맞춤 이력서/링크드인 리브랜딩",
        "채용 공고 20개 역분석 후 반복 요구 역량 3개 집중 보완",
        "모의 인터뷰 6회 + 제안서형 포트폴리오 완성"
      ]
    }
  ];

  const weaknessText = profile.weaknessText.toLowerCase();
  const motivation = WEAKNESS_ROUTINES
    .filter((r) => weaknessText.includes(r.keyword))
    .map((r) => `- ${r.plan}`);
  if (!motivation.length) {
    motivation.push("- 주간 목표를 1개로 축소하고, 매주 금요일 성과 회고 30분을 고정하세요.");
    motivation.push("- 매월 공개 결과물 1개를 만들어 성취 루프를 끊기지 않게 설계하세요.");
  }

  return {
    topRole: top,
    alternatives: scored.slice(1, 3).map((role) => ({
      name: role.name,
      evolutionFrom: role.evolutionFrom,
      salaryBand: role.salaryBand,
      score: role.score,
      gapFromTop: top.score - role.score
    })),
    readinessTier,
    normalizedScore,
    confidence,
    weightedDemandReadiness,
    demandSignals,
    immediateActions,
    focusSkills,
    quests,
    motivation
  };
}

function renderReport(profile, result) {
  reportPanel.classList.remove("hidden");
  reportNode.classList.remove("empty");
  reportNode.innerHTML = `
    <div class="report-block">
      <h3>${profile.name || "사용자"} 님의 커리어 진화 리포트</h3>
      <p><strong>추천 신직업:</strong> ${result.topRole.name} (예상 연봉 밴드: ${result.topRole.salaryBand})</p>
      <p><strong>직무 진화 기준:</strong> ${result.topRole.evolutionFrom}</p>
      <p><strong>매칭 점수:</strong> ${result.topRole.score}점 / 준비도 ${result.normalizedScore}점(${result.readinessTier})</p>
      <p><strong>채용요건 충족도:</strong> ${result.weightedDemandReadiness}% (요구조건 빈도 가중)</p>
      <p><strong>분석 신뢰도:</strong> ${result.confidence} (입력 데이터 기반)</p>
      <p><strong>핵심 근거:</strong> MBTI(${profile.mbti.join(", ") || "미선택"}), 강점(${profile.strengths.join(", ") || "미선택"}), 보유 스킬 기반 매칭</p>
    </div>
    <div class="report-block">
      <strong>점수 분해</strong>
      <ul>
        <li>필수 스킬 점수: ${result.topRole.analysis.scoreBreakdown.skillPoints}점 (충족률 ${result.topRole.analysis.skillCoverage}%)</li>
        <li>강점 시너지 점수: ${result.topRole.analysis.scoreBreakdown.strengthPoints}점</li>
        <li>MBTI 적합 점수: ${result.topRole.analysis.scoreBreakdown.mbtiPoints}점</li>
        <li>경력 서술 점수: ${result.topRole.analysis.scoreBreakdown.experiencePoints}점</li>
      </ul>
    </div>
    <div class="report-block">
      <strong>직무 적합도 디테일</strong>
      <ul>
        <li>이미 보유한 핵심 스킬: ${(result.topRole.analysis.matchedSkills.map((s) => `${s.name}(${s.level})`).join(", ") || "없음")}</li>
        <li>부족한 핵심 스킬: ${(result.topRole.analysis.missingSkills.join(", ") || "없음")}</li>
        <li>활용 가능한 강점: ${(result.topRole.analysis.matchedStrengths.join(", ") || "없음")}</li>
        <li>유리한 MBTI 포인트: ${(result.topRole.analysis.matchedMbti.join(", ") || "없음")}</li>
      </ul>
    </div>
    <div class="report-block">
      <strong>LinkedIn 채용 시그널 (실제 공고 패턴 반영)</strong>
      <ul>
        ${result.topRole.hiringSignals.map((signal) => `<li>${signal}</li>`).join("")}
      </ul>
      <p><strong>현업 도구 스택:</strong> ${result.topRole.toolStack.join(", ")}</p>
      <p><strong>기업이 보는 성과지표:</strong> ${result.topRole.outcomeMetrics.join(", ")}</p>
      <p><strong>유사 채용 기업 예시:</strong> ${result.topRole.linkedinEvidence.join(", ")}</p>
    </div>
    <div class="report-block">
      <strong>LinkedIn 요구조건 빈도 기반 우선순위</strong>
      <ul>
        ${result.demandSignals.map((item) => `<li>${item.skill} - 공고 등장 빈도 ${item.demandPercent}% / 내 상태: ${item.status}${item.level ? `(${item.level})` : ""}<br><small>${item.evidence}</small></li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>대안 직무</strong>
      <ul>
        ${result.alternatives.map((a) => `<li>${a.name} - ${a.evolutionFrom} (${a.salaryBand}, ${a.score}점, 1순위 대비 -${a.gapFromTop}점)</li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>즉시 실행 액션 (이번 주 시작)</strong>
      <ul>
        ${result.immediateActions.map((action) => `<li>${action}</li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>스킬 갭 분석 (우선 강화 순서)</strong>
      <ul>
        ${(result.focusSkills.length ? result.focusSkills : ["Python", "Prompt Engineering"]).map((s) => `<li>${s}</li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>30/60/90일 진화 퀘스트</strong>
      ${result.quests.map((q) => `
        <p><b>${q.phase}</b></p>
        <ul>${q.tasks.map((t) => `<li>${t}</li>`).join("")}</ul>
      `).join("")}
    </div>
    <div class="report-block">
      <strong>동기 부여 루틴</strong>
      <ul>
        ${result.motivation.map((m) => `<li>${m.replace("- ", "")}</li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>입력 데이터 참고</strong>
      <ul>
        <li>경력 텍스트 길이: ${profile.careerText.length}자</li>
        <li>경력 파일: ${profile.careerFile || "없음"} / URL: ${profile.careerUrl || "없음"}</li>
        <li>약점 파일: ${profile.weaknessFile || "없음"} / URL: ${profile.weaknessUrl || "없음"}</li>
      </ul>
    </div>
  `;
}

addSkillBtn.addEventListener("click", () => createSkillRow());

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = {
    name: document.getElementById("name").value.trim(),
    mbti: collectSelected("mbti"),
    strengths: collectSelected("strength"),
    careerText: document.getElementById("career-text").value.trim(),
    careerFile: document.getElementById("career-file").files[0]?.name || "",
    careerUrl: document.getElementById("career-url").value.trim(),
    skills: collectSkills(),
    weaknessText: document.getElementById("weakness-text").value.trim(),
    weaknessFile: document.getElementById("weakness-file").files[0]?.name || "",
    weaknessUrl: document.getElementById("weakness-url").value.trim()
  };

  const result = buildEvolutionResult(profile);
  renderReport(profile, result);
});

renderChips(MBTI_TYPES, mbtiGrid, "mbti", 2, mbtiHint);
renderChips(CLIFTON_34, strengthGrid, "strength", 5, strengthHint);
createSkillRow("Python", "mid");
createSkillRow("Prompt Engineering", "low");
