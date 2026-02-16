const MBTI_TYPES = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP"
];

const CLIFTON_STRENGTHS = [
  { value: "Achiever", ko: "성취자", en: "Achiever" },
  { value: "Arranger", ko: "정렬", en: "Arranger" },
  { value: "Belief", ko: "믿음", en: "Belief" },
  { value: "Consistency", ko: "일관성", en: "Consistency" },
  { value: "Fairness", ko: "공정성", en: "Fairness" },
  { value: "Discipline", ko: "규율", en: "Discipline" },
  { value: "Focus", ko: "집중", en: "Focus" },
  { value: "Responsibility", ko: "책임", en: "Responsibility" },
  { value: "Restorative", ko: "복구", en: "Restorative" },
  { value: "Activator", ko: "행동", en: "Activator" },
  { value: "Command", ko: "명령", en: "Command" },
  { value: "Communication", ko: "의사소통", en: "Communication" },
  { value: "Competition", ko: "경쟁", en: "Competition" },
  { value: "Maximizer", ko: "승부근성", en: "Maximizer" },
  { value: "Self-Assurance", ko: "자기확신", en: "Self-Assurance" },
  { value: "Includer", ko: "포용", en: "Includer" },
  { value: "Positivity", ko: "긍정", en: "Positivity" },
  { value: "Adaptability", ko: "적응", en: "Adaptability" },
  { value: "Connectedness", ko: "연결", en: "Connectedness" },
  { value: "Developer", ko: "개발", en: "Developer" },
  { value: "Empathy", ko: "공감", en: "Empathy" },
  { value: "Harmony", ko: "화합", en: "Harmony" },
  { value: "Individualization", ko: "개별화", en: "Individualization" },
  { value: "Input", ko: "수집", en: "Input" },
  { value: "Woo", ko: "사교", en: "Woo" },
  { value: "Analytical", ko: "분석", en: "Analytical" },
  { value: "Context", ko: "컨텍스트", en: "Context" },
  { value: "Futuristic", ko: "미래지향", en: "Futuristic" },
  { value: "Ideation", ko: "아이디어", en: "Ideation" },
  { value: "Intellection", ko: "지적", en: "Intellection" },
  { value: "Learner", ko: "학습", en: "Learner" },
  { value: "Strategic", ko: "전략", en: "Strategic" }
];

const SKILL_OPTIONS = [
  "Communication",
  "Stakeholder Communication",
  "Leadership",
  "Team Management",
  "Project Management",
  "Program Management",
  "Problem Solving",
  "Critical Thinking",
  "Strategic Planning",
  "Decision Making",
  "Negotiation",
  "Presentation",
  "Public Speaking",
  "Coaching",
  "Change Management",
  "Conflict Resolution",
  "Time Management",
  "Sales",
  "Account Management",
  "Business Development",
  "Customer Success",
  "Customer Service",
  "Consulting",
  "Digital Marketing",
  "Brand Marketing",
  "Content Marketing",
  "Social Media Marketing",
  "SEO/SEM",
  "Product Management",
  "UX Research",
  "Operations",
  "Supply Chain",
  "Procurement",
  "Financial Analysis",
  "Budget Planning",
  "Risk Management",
  "Compliance",
  "Recruiting",
  "HR Operations",
  "Training & Development",
  "Technical Writing",
  "Excel",
  "Power BI",
  "Data Analysis",
  "SQL",
  "No-Code Automation",
  "Prompt Engineering",
  "Python",
  "JavaScript",
  "TypeScript",
  "Cloud",
  "Data Engineering",
  "Machine Learning",
  "Deep Learning",
  "MLOps"
];
const CUSTOM_SKILL_VALUE = "__custom__";

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

const MARKET_SIGNALS = [
  "WEF Future of Jobs 2025: 2030년까지 전 세계 직무의 약 22%가 재편되고, 순고용은 +78M(신규 170M/감소 92M) 전망.",
  "MGI Skill Shift: 고급 디지털/기술 스킬 수요와 사회정서(소통/리더십) 스킬 수요가 함께 증가.",
  "OpenAI GPTs are GPTs: 업무 단위(Task) 자동화 영향이 빠르게 확대되며, 반복 문서/요약/분류 업무부터 전환 압력이 큼.",
  "국내 채용 사례(무신사 2026.02.05): 면접 전형에서 Codex 지원 등 AI 도구 활용 문제해결 능력을 실전 평가 항목으로 반영."
];

const KNOWLEDGE_SOURCES = {
  globalTrends: [
    "World Economic Forum (WEF) - Future of Jobs Report",
    "McKinsey Global Institute - Skill Shift / Automation 보고서"
  ],
  practicalStack: [
    "LinkedIn Learning & Career Explorer - 직무 전환 경로/스킬 갭",
    "AI-Hub (한국) - 국내 AI 기술 동향/공공 데이터셋"
  ],
  researchAndCommunity: [
    "arXiv.org - AI in Marketing, Labor market impact of LLM 등 최신 논문",
    "전문 교육 플랫폼(인프런/패스트캠퍼스) - 현업형 실무 역량 업데이트"
  ]
};

const mbtiGrid = document.getElementById("mbti-grid");
const strengthGrid = document.getElementById("strength-grid");
const mbtiHint = document.getElementById("mbti-hint");
const strengthHint = document.getElementById("strength-hint");
const skillsWrap = document.getElementById("skills-wrap");
const addSkillBtn = document.getElementById("add-skill");
const form = document.getElementById("career-form");
const submitBtn = form.querySelector('button[type="submit"]');
const reportPanel = document.getElementById("report-panel");
const reportNode = document.getElementById("report");
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const careerYearsSelect = document.getElementById("career-years");

const I18N = {
  ko: {
    hero_eyebrow: "Next-Gen Career Architect",
    hero_title: "AI 커리어 진화 액셀러레이터",
    hero_subtitle: "나의 성격과 강점, 현재 경력과 보유 스킬을 분석해 AI 시대에 연봉 성장을 노릴 수 있는 진화형 신직업과 실행 로드맵을 제안합니다.",
    section_diagnosis: "커리어 진단",
    label_current_role: "현재 직무",
    ph_current_role: "예: B2B SaaS 세일즈 오퍼레이션 매니저 (파이프라인 관리, CRM 자동화)",
    hint_current_role: "산업/역할/핵심업무까지 함께 적어주면 진단 정확도가 올라갑니다.",
    label_career_years: "연차",
    years_default: "선택해주세요",
    years_entry: "신입 (0년차)",
    years_n: "{n}년차",
    label_mbti: "MBTI",
    note_mbti: "(최대 2개 선택)",
    label_strengths: "나의 강점",
    note_strengths: "(최대 5개 선택)",
    label_career: "경력",
    ph_career_text: "핵심 경력과 성과를 붙여넣어 주세요.",
    ph_career_url: "이력서 URL (Notion, LinkedIn 등)",
    label_skills: "스킬",
    btn_add_skill: "스킬 추가",
    label_etc: "기타",
    note_etc: "(ex. 나를 알 수 있는 정보)",
    ph_weakness_url: "참고 URL",
    btn_submit: "커리어 진화 리포트 생성",
    btn_analyzing: "분석 중...",
    section_report: "커리어 진화 리포트 결과",
    report_empty: "입력 후 리포트를 생성하면 여기에 결과가 표시됩니다.",
    hint_limit: "최대 {max}개까지 선택 가능합니다.",
    hint_selected: "{count} / {max} 선택됨",
    skill_custom_option: "직접 입력",
    skill_remove: "삭제",
    ph_skill_custom: "직접 입력 스킬 (예: 협상, 예산관리, 리스크 관리)",
    loading_title: "AI 커리어 시뮬레이션 분석 중",
    loading_phase_1: "입력 데이터 정규화 및 직무 매칭을 시작합니다.",
    loading_phase_2: "LinkedIn 채용 시그널과 스킬 갭을 계산하고 있습니다.",
    loading_phase_3: "시장 리포트 근거를 반영해 실행 계획을 구성하고 있습니다.",
    loading_phase_4: "최종 리포트를 정리하고 있습니다.",
    loading_seconds: "{phase} ({seconds}초)"
  },
  en: {
    hero_eyebrow: "Next-Gen Career Architect",
    hero_title: "AI Career Evolution Accelerator",
    hero_subtitle: "By analyzing your personality, strengths, current career, and skills, we suggest high-growth emerging roles and an execution roadmap for the AI era.",
    section_diagnosis: "Career Diagnosis",
    label_current_role: "Current Role",
    ph_current_role: "e.g., B2B SaaS Sales Operations Manager (pipeline management, CRM automation)",
    hint_current_role: "Include industry, role scope, and core responsibilities for a more accurate diagnosis.",
    label_career_years: "Years of Experience",
    years_default: "Select one",
    years_entry: "Entry level (0 years)",
    years_n: "{n} years",
    label_mbti: "MBTI",
    note_mbti: "(up to 2 selections)",
    label_strengths: "My Strengths",
    note_strengths: "(up to 5 selections)",
    label_career: "Career History",
    ph_career_text: "Paste your core experience and outcomes.",
    ph_career_url: "Resume URL (Notion, LinkedIn, etc.)",
    label_skills: "Skills",
    btn_add_skill: "Add Skill",
    label_etc: "Etc.",
    note_etc: "(e.g., additional information about me)",
    ph_weakness_url: "Reference URL",
    btn_submit: "Generate Career Evolution Report",
    btn_analyzing: "Analyzing...",
    section_report: "Career Evolution Report",
    report_empty: "Your generated report will appear here after submission.",
    hint_limit: "You can select up to {max}.",
    hint_selected: "{count} / {max} selected",
    skill_custom_option: "Custom Input",
    skill_remove: "Remove",
    ph_skill_custom: "Custom skill (e.g., negotiation, budget planning, risk management)",
    loading_title: "Running AI Career Simulation",
    loading_phase_1: "Normalizing input and starting role matching.",
    loading_phase_2: "Calculating LinkedIn hiring signals and skill gaps.",
    loading_phase_3: "Building the execution plan using market evidence.",
    loading_phase_4: "Finalizing your report.",
    loading_seconds: "{phase} ({seconds}s)"
  }
};

function getCurrentLanguage() {
  return (document.documentElement.lang || "ko").toLowerCase().startsWith("en") ? "en" : "ko";
}

function t(key, vars = {}) {
  const lang = getCurrentLanguage();
  const dict = I18N[lang] || I18N.ko;
  const template = dict[key] ?? I18N.ko[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, token) => String(vars[token] ?? ""));
}

function populateCareerYearOptions() {
  const selected = careerYearsSelect.value;
  const options = [`<option value="">${t("years_default")}</option>`, `<option value="0">${t("years_entry")}</option>`];
  for (let year = 1; year <= 30; year += 1) {
    options.push(`<option value="${year}">${t("years_n", { n: year })}</option>`);
  }
  careerYearsSelect.innerHTML = options.join("");
  careerYearsSelect.value = selected;
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
}

function setSelectionHint(hintNode, count, max) {
  hintNode.textContent = t("hint_selected", { count, max });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  applyStaticI18n();
  populateCareerYearOptions();

  const selectedMbti = collectSelected("mbti");
  const selectedStrength = collectSelected("strength");
  renderChips(MBTI_TYPES, mbtiGrid, "mbti", 2, mbtiHint, selectedMbti);
  renderChips(CLIFTON_STRENGTHS, strengthGrid, "strength", 5, strengthHint, selectedStrength);

  const snapshot = Array.from(document.querySelectorAll(".skills-row")).map((row) => ({
    selectedSkill: row.querySelector(".skill-name").value,
    customSkill: row.querySelector(".skill-custom")?.value || "",
    level: row.querySelector(".skill-level").value
  }));

  skillsWrap.innerHTML = "";
  snapshot.forEach((item) => {
    if (item.selectedSkill === CUSTOM_SKILL_VALUE) {
      createSkillRow(item.customSkill, item.level, true);
    } else {
      createSkillRow(item.selectedSkill, item.level);
    }
  });
}

function renderChips(items, container, name, maxCount, hintNode, selectedValues = []) {
  const lang = getCurrentLanguage();
  const selectedSet = new Set(selectedValues);
  container.innerHTML = "";
  items.forEach((item) => {
    const normalized = typeof item === "string"
      ? { value: item, label: item }
      : { value: item.value, label: lang === "en" ? item.en : item.ko };
    const label = document.createElement("label");
    label.className = "chip";
    label.innerHTML = `<input type="checkbox" name="${name}" value="${normalized.value}">${normalized.label}`;
    const input = label.querySelector("input");
    if (selectedSet.has(normalized.value)) {
      input.checked = true;
      label.classList.add("active");
    }

    input.addEventListener("change", () => {
      const checked = container.querySelectorAll("input:checked");
      if (checked.length > maxCount) {
        input.checked = false;
        hintNode.classList.add("error");
        hintNode.textContent = t("hint_limit", { max: maxCount });
        setTimeout(() => {
          hintNode.classList.remove("error");
          setSelectionHint(hintNode, container.querySelectorAll("input:checked").length, maxCount);
        }, 1000);
      }
      container.querySelectorAll(".chip").forEach((chip) => {
        chip.classList.toggle("active", chip.querySelector("input").checked);
      });
      setSelectionHint(hintNode, container.querySelectorAll("input:checked").length, maxCount);
    });
    container.appendChild(label);
  });
  setSelectionHint(hintNode, container.querySelectorAll("input:checked").length, maxCount);
}

function createSkillRow(skill = "", level = "mid", forceCustom = false) {
  const row = document.createElement("div");
  row.className = "skills-row";
  const isPresetSkill = !forceCustom && SKILL_OPTIONS.includes(skill);
  const selectedSkill = isPresetSkill ? skill : CUSTOM_SKILL_VALUE;
  const customSkill = isPresetSkill ? "" : skill;

  row.innerHTML = `
    <select class="skill-name">
      ${SKILL_OPTIONS.map((s) => `<option value="${s}" ${s === selectedSkill ? "selected" : ""}>${s}</option>`).join("")}
      <option value="${CUSTOM_SKILL_VALUE}" ${selectedSkill === CUSTOM_SKILL_VALUE ? "selected" : ""}>${t("skill_custom_option")}</option>
    </select>
    <select class="skill-level">
      ${LEVEL_OPTIONS.map((l) => `<option value="${l}" ${l === level ? "selected" : ""}>${l}</option>`).join("")}
    </select>
    <button type="button" class="btn btn--danger remove-skill">${t("skill_remove")}</button>
    <input type="text" class="skill-custom ${selectedSkill === CUSTOM_SKILL_VALUE ? "" : "hidden"}" placeholder="${t("ph_skill_custom")}">
  `;

  const nameSelect = row.querySelector(".skill-name");
  const customInput = row.querySelector(".skill-custom");
  customInput.value = customSkill;

  nameSelect.addEventListener("change", () => {
    const isCustom = nameSelect.value === CUSTOM_SKILL_VALUE;
    customInput.classList.toggle("hidden", !isCustom);
    if (isCustom) customInput.focus();
  });

  row.querySelector(".remove-skill").addEventListener("click", () => {
    row.remove();
  });
  skillsWrap.appendChild(row);
}

function collectSelected(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((el) => el.value);
}

function collectSkills() {
  return Array.from(document.querySelectorAll(".skills-row"))
    .map((row) => {
      const selectedSkill = row.querySelector(".skill-name").value;
      const customSkill = row.querySelector(".skill-custom").value.trim();
      const name = selectedSkill === CUSTOM_SKILL_VALUE ? customSkill : selectedSkill;
      if (!name) return null;

      return {
        name,
        level: row.querySelector(".skill-level").value
      };
    })
    .filter(Boolean);
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

function showLoadingState() {
  reportPanel.classList.remove("hidden");
  reportNode.classList.remove("empty");
  reportNode.innerHTML = `
    <div class="loading-card">
      <div class="loading-spinner" aria-hidden="true"></div>
      <h3>${t("loading_title")}</h3>
      <p id="loading-text">${t("loading_seconds", { phase: t("loading_phase_1"), seconds: 7 })}</p>
      <div class="loading-track">
        <div id="loading-progress" class="loading-progress" style="width: 0%"></div>
      </div>
    </div>
  `;

  const phases = [
    t("loading_phase_1"),
    t("loading_phase_2"),
    t("loading_phase_3"),
    t("loading_phase_4")
  ];

  let remaining = 7;
  let phaseIdx = 0;
  const textNode = document.getElementById("loading-text");
  const progressNode = document.getElementById("loading-progress");

  const timer = setInterval(() => {
    remaining -= 1;
    phaseIdx = Math.min(phases.length - 1, phaseIdx + 1);
    const done = Math.round(((7 - remaining) / 7) * 100);
    if (progressNode) progressNode.style.width = `${done}%`;
    if (textNode) textNode.textContent = t("loading_seconds", { phase: phases[phaseIdx], seconds: Math.max(remaining, 0) });
    if (remaining <= 0) clearInterval(timer);
  }, 1000);

  return () => clearInterval(timer);
}

function renderReport(profile, result) {
  const breakdown = result.topRole.analysis.scoreBreakdown;
  const profileSummary = [profile.currentRole, profile.careerYears].filter(Boolean).join(" · ");
  const chartItems = [
    { label: "필수 스킬", value: breakdown.skillPoints, max: 120 },
    { label: "강점 시너지", value: breakdown.strengthPoints, max: 35 },
    { label: "MBTI 적합", value: breakdown.mbtiPoints, max: 12 },
    { label: "경력 서술", value: breakdown.experiencePoints, max: 8 }
  ].map((item) => ({
    ...item,
    percent: Math.min(100, Math.round((item.value / item.max) * 100))
  }));

  reportPanel.classList.remove("hidden");
  reportNode.classList.remove("empty");
  reportNode.classList.remove("report-animate");
  reportNode.innerHTML = `
    <div class="report-layout">
      <div class="report-hero-block">
        <p class="mini-label">AI Career Evolution Report</p>
        <h3>추천 포지션: ${result.topRole.name}</h3>
        <p>${profileSummary ? `<b>${profileSummary}</b> 정보를 기준으로 ` : ""}${result.topRole.evolutionFrom} 기반 진화 경로를 분석했습니다. 예상 연봉 밴드: <b>${result.topRole.salaryBand}</b></p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <p>준비도 점수</p>
          <strong>${result.normalizedScore}점</strong>
          <span>${result.readinessTier} 단계</span>
        </div>
        <div class="kpi-card">
          <p>채용요건 충족도</p>
          <strong>${result.weightedDemandReadiness}%</strong>
          <span>빈도 가중 기준</span>
        </div>
        <div class="kpi-card">
          <p>직무 매칭 점수</p>
          <strong>${result.topRole.score}점</strong>
          <span>분석 신뢰도 ${result.confidence}</span>
        </div>
      </div>

      <div class="charts-grid">
        <div class="chart-card">
          <h4>종합 지표 도넛</h4>
          <div class="donut-grid">
            <div class="donut" style="--value:${result.normalizedScore}">
              <div><span>준비도</span><b>${result.normalizedScore}%</b></div>
            </div>
            <div class="donut donut--mint" style="--value:${result.weightedDemandReadiness}">
              <div><span>요건 충족</span><b>${result.weightedDemandReadiness}%</b></div>
            </div>
          </div>
        </div>

        <div class="chart-card">
          <h4>점수 구성 차트</h4>
          <div class="bars">
            ${chartItems.map((item) => `
              <div class="bar-row">
                <div class="bar-head">
                  <span>${item.label}</span>
                  <b>${item.value}점</b>
                </div>
                <div class="bar-track"><div class="bar-fill" style="width:${item.percent}%"></div></div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="chart-card">
          <h4>요구조건 빈도 Top 5</h4>
          <div class="bars">
            ${result.demandSignals.map((item) => `
              <div class="bar-row">
                <div class="bar-head">
                  <span>${item.skill}</span>
                  <b>${item.demandPercent}%</b>
                </div>
                <div class="bar-track"><div class="bar-fill bar-fill--alt" style="width:${item.demandPercent}%"></div></div>
                <small>${item.status}${item.level ? `(${item.level})` : ""} · ${item.evidence}</small>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="chart-card">
          <h4>대안 직무 비교</h4>
          <div class="bars">
            <div class="bar-row">
              <div class="bar-head">
                <span>${result.topRole.name}</span>
                <b>${result.topRole.score}점</b>
              </div>
              <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, Math.round((result.topRole.score / 175) * 100))}%"></div></div>
            </div>
            ${result.alternatives.map((item) => `
              <div class="bar-row">
                <div class="bar-head">
                  <span>${item.name}</span>
                  <b>${item.score}점</b>
                </div>
                <div class="bar-track"><div class="bar-fill bar-fill--soft" style="width:${Math.min(100, Math.round((item.score / 175) * 100))}%"></div></div>
                <small>1순위 대비 -${item.gapFromTop}점</small>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="report-block">
        <strong>LinkedIn 채용 시그널</strong>
        <ul>
          ${result.topRole.hiringSignals.map((signal) => `<li>${signal}</li>`).join("")}
        </ul>
        <p><strong>현업 도구:</strong> ${result.topRole.toolStack.join(", ")}</p>
        <p><strong>중요 KPI:</strong> ${result.topRole.outcomeMetrics.join(", ")}</p>
        <p><strong>유사 채용 기업:</strong> ${result.topRole.linkedinEvidence.join(", ")}</p>
      </div>

      <div class="report-block">
        <strong>즉시 실행 액션 (이번 주)</strong>
        <ul>
          ${result.immediateActions.map((action) => `<li>${action}</li>`).join("")}
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
        <strong>시장 변화 인사이트</strong>
        <ul>${MARKET_SIGNALS.map((signal) => `<li>${signal}</li>`).join("")}</ul>
      </div>

      <div class="report-block">
        <strong>학습/리서치 소스</strong>
        <p><b>글로벌 트렌드</b></p>
        <ul>${KNOWLEDGE_SOURCES.globalTrends.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p><b>실무 스택</b></p>
        <ul>${KNOWLEDGE_SOURCES.practicalStack.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p><b>학술/커뮤니티</b></p>
        <ul>${KNOWLEDGE_SOURCES.researchAndCommunity.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    reportNode.classList.add("report-animate");
  });
}

addSkillBtn.addEventListener("click", () => createSkillRow());

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (form.dataset.loading === "true") return;
  form.dataset.loading = "true";
  submitBtn.disabled = true;
  submitBtn.textContent = t("btn_analyzing");

  try {
    const profile = {
      currentRole: document.getElementById("current-role").value.trim(),
      careerYears: document.getElementById("career-years").selectedOptions[0]?.textContent?.trim() || "",
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
    const stopLoading = showLoadingState();
    await new Promise((resolve) => setTimeout(resolve, 7000));
    stopLoading();
    renderReport(profile, result);
  } finally {
    form.dataset.loading = "false";
    submitBtn.disabled = false;
    submitBtn.textContent = t("btn_submit");
  }
});

createSkillRow("Communication", "mid");
createSkillRow("Project Management", "mid");
langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});
applyLanguage(getCurrentLanguage());
