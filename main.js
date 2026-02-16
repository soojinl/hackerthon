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
const SCORE_NORMALIZER = 227;

const STRENGTH_REASON_MAP = {
  Learner: "배움 강점으로 새 도메인 지식과 규제를 빠르게 학습해 실행 리스크를 낮춥니다.",
  Input: "수집 강점으로 시장/정책/경쟁사 데이터를 구조화해 의사결정 품질을 끌어올립니다.",
  Activator: "행동 강점으로 전략을 빠르게 실험 가능한 단위로 전환해 실행 속도를 높입니다.",
  Analytical: "분석 강점으로 가설·성과지표를 정량 검증해 성장 방향의 정확도를 높입니다.",
  Ideation: "발상 강점으로 차별화된 성장 시나리오와 신규 BM 아이디어를 설계할 수 있습니다."
};

const ROLE_PROFILES = [
  {
    name: "Tokenized Loyalty Economy Architect",
    evolutionFrom: "기존 직무: 전략/사업개발/데이터 기반 성장 리드",
    salaryBand: "1.8억~3.8억+",
    seniorityPreference: "senior",
    neededSkills: ["Strategic Planning", "Financial Analysis", "Data Analysis", "Risk Management", "Leadership"],
    boostStrengths: ["Analytical", "Strategic", "Ideation", "Learner", "Input"],
    boostMbti: ["INTJ", "ENTJ", "INTP", "ENTP"],
    hiringSignals: [
      "포인트/리워드/토큰형 인센티브 구조를 수치 기반으로 설계한 경험",
      "거버넌스/리스크/규제 대응을 고려한 성장 구조 설계 역량",
      "제품-재무-데이터 조직을 엮어 성장 메커니즘을 설계한 경험"
    ],
    demandSignals: [
      { skill: "Strategic Planning", demandPercent: 88, evidence: "중장기 성장 구조 설계" },
      { skill: "Financial Analysis", demandPercent: 84, evidence: "토큰 경제성·수익성 모델링" },
      { skill: "Risk Management", demandPercent: 80, evidence: "규제·유동성·운영 리스크 대응" },
      { skill: "Data Analysis", demandPercent: 78, evidence: "행동 데이터 기반 파라미터 조정" },
      { skill: "Leadership", demandPercent: 75, evidence: "C-level/핵심 조직 정렬 및 실행 리딩" }
    ],
    relevanceKeywords: ["crm", "loyalty", "멤버십", "포인트", "브랜드", "마케팅", "그로스", "리텐션", "캠페인"],
    toolStack: ["SQL/BI", "시나리오 모델링", "자동화 워크플로", "LLM 분석 도구"],
    outcomeMetrics: ["LTV/CAC 개선", "리텐션 상승", "로열티 구조 리스크 감소"],
    linkedinEvidence: ["Animoca Brands", "ConsenSys", "Binance"]
  },
  {
    name: "AI Marketing ROI & Forecast Strategist",
    evolutionFrom: "기존 직무: 마케팅/그로스/사업기획 리드",
    salaryBand: "1.5억~3.2억+",
    seniorityPreference: "senior",
    neededSkills: ["Strategic Planning", "Financial Analysis", "Data Analysis", "Risk Management", "Project Management"],
    boostStrengths: ["Analytical", "Learner", "Input", "Strategic", "Activator"],
    boostMbti: ["INTJ", "ENTJ", "ENTP", "ISTJ"],
    hiringSignals: [
      "AI 기반 ROI 측정 체계를 설계하고 예산 의사결정을 리드한 경험",
      "시즌/이벤트별 마케팅 성과 예측 모델 운영 경험",
      "시나리오 기반 예산 시뮬레이션과 성과 개선 경험"
    ],
    demandSignals: [
      { skill: "Strategic Planning", demandPercent: 89, evidence: "ROI 최적화 전략 수립" },
      { skill: "Financial Analysis", demandPercent: 86, evidence: "예산/수익성 분석" },
      { skill: "Data Analysis", demandPercent: 84, evidence: "성과 예측·민감도 분석" },
      { skill: "Risk Management", demandPercent: 79, evidence: "변동성/리스크 대응 계획" },
      { skill: "Project Management", demandPercent: 75, evidence: "조직 간 실행 관리" }
    ],
    relevanceKeywords: ["마케팅", "광고", "퍼포먼스", "브랜드", "roi", "attribution", "forecast", "예산", "캠페인"],
    toolStack: ["MMM/Attribution", "SQL/BI", "Forecast Models", "LLM 분석 보조"],
    outcomeMetrics: ["마케팅 ROI 개선", "예측 오차 감소", "예산 효율 상승"],
    linkedinEvidence: ["Hyundai Motor", "Unilever", "P&G"]
  },
  {
    name: "Multi-Agent Revenue Operations Lead",
    evolutionFrom: "기존 직무: 운영/사업/프로덕트 조직 리드",
    salaryBand: "1.4억~2.9억+",
    seniorityPreference: "senior",
    neededSkills: ["Leadership", "No-Code Automation", "Data Analysis", "Strategic Planning", "Stakeholder Communication"],
    boostStrengths: ["Activator", "Analytical", "Strategic", "Learner", "Input"],
    boostMbti: ["ENTJ", "INTJ", "ENTP", "ESTJ"],
    hiringSignals: [
      "멀티 에이전트 기반 캠페인/운영 자동화 구조 설계 경험",
      "수익/마진 개선과 연결된 자동화 성과 보유",
      "제품-마케팅-운영 조직을 연결해 실행 체계를 설계한 경험"
    ],
    demandSignals: [
      { skill: "Leadership", demandPercent: 88, evidence: "전사 자동화 프로그램 리딩" },
      { skill: "No-Code Automation", demandPercent: 85, evidence: "업무 자동화 파이프라인 구축" },
      { skill: "Data Analysis", demandPercent: 81, evidence: "성과 모니터링 및 개선" },
      { skill: "Strategic Planning", demandPercent: 79, evidence: "레버리지 중심 우선순위 설계" },
      { skill: "Stakeholder Communication", demandPercent: 76, evidence: "조직 간 의사결정 정렬" }
    ],
    relevanceKeywords: ["영업", "sales", "revenue", "revops", "pipeline", "pricing", "수익", "사업개발", "오퍼레이션"],
    toolStack: ["Agent Orchestrator", "Workflow Automation", "Vector DB", "BI Dashboard"],
    outcomeMetrics: ["운영마진 개선", "처리시간 단축", "자동화 커버리지 확대"],
    linkedinEvidence: ["Forsit", "Workato", "UiPath"]
  },
  {
    name: "Agentic Marketing Systems Architect",
    evolutionFrom: "기존 직무: 영업기획/재무/전략기획",
    salaryBand: "1.3억~2.6억+",
    seniorityPreference: "mid",
    neededSkills: ["Strategic Planning", "Digital Marketing", "No-Code Automation", "Data Analysis", "Stakeholder Communication"],
    boostStrengths: ["Analytical", "Ideation", "Activator", "Input", "Learner"],
    boostMbti: ["ENTP", "INTJ", "ENTJ", "ENFJ"],
    hiringSignals: [
      "캠페인 구조를 멀티 에이전트 워크플로우로 전환한 경험",
      "퍼널 전체를 시스템 단위로 설계하고 성과를 개선한 경험",
      "측정-실험-최적화 루프를 자동화한 경험"
    ],
    demandSignals: [
      { skill: "Strategic Planning", demandPercent: 87, evidence: "시스템 기반 성장 설계" },
      { skill: "No-Code Automation", demandPercent: 84, evidence: "워크플로우 자동화 구축" },
      { skill: "Data Analysis", demandPercent: 81, evidence: "실험/성과 데이터 해석" },
      { skill: "Digital Marketing", demandPercent: 77, evidence: "채널/메시지 운영 최적화" },
      { skill: "Stakeholder Communication", demandPercent: 74, evidence: "제품/마케팅/데이터 협업" }
    ],
    relevanceKeywords: ["마케팅", "콘텐츠", "imc", "브랜딩", "캠페인", "crm", "growth", "creative", "퍼널"],
    toolStack: ["LLM Agent Framework", "Attribution Stack", "Workflow Engine", "Experimentation Platform"],
    outcomeMetrics: ["전환율 개선", "실험 속도 증가", "캠페인 운영비 절감"],
    linkedinEvidence: ["Meta", "Google", "TikTok"]
  },
  {
    name: "AI Supply Chain Decisioning Architect",
    evolutionFrom: "기존 직무: 물류/SCM/운영기획 리드",
    salaryBand: "1.4억~3.0억+",
    seniorityPreference: "senior",
    neededSkills: ["Operations", "Data Analysis", "Risk Management", "Strategic Planning", "Project Management"],
    boostStrengths: ["Analytical", "Input", "Strategic", "Discipline", "Focus"],
    boostMbti: ["INTJ", "ISTJ", "ENTJ", "ESTJ"],
    hiringSignals: [
      "수요/재고/물류 의사결정을 데이터 기반으로 자동화한 경험",
      "운영 리드타임/비용 최적화 프로젝트 리딩 경험",
      "시나리오 기반 공급망 리스크 대응 체계 수립 경험"
    ],
    demandSignals: [
      { skill: "Operations", demandPercent: 88, evidence: "운영 체계 최적화" },
      { skill: "Data Analysis", demandPercent: 84, evidence: "수요·재고 의사결정" },
      { skill: "Risk Management", demandPercent: 81, evidence: "공급망 리스크 대응" },
      { skill: "Strategic Planning", demandPercent: 77, evidence: "중장기 운영 전략 수립" },
      { skill: "Project Management", demandPercent: 73, evidence: "실행 프로젝트 관리" }
    ],
    relevanceKeywords: ["supply", "scm", "물류", "재고", "구매", "운영", "생산", "warehouse", "logistics", "공급망"],
    toolStack: ["Demand Forecasting", "Optimization Solver", "BI Dashboard", "Automation Engine"],
    outcomeMetrics: ["재고회전율 개선", "물류비 절감", "서비스레벨 향상"],
    linkedinEvidence: ["Amazon", "Coupang", "Samsung SDS"]
  },
  {
    name: "AI Finance & Pricing Intelligence Strategist",
    evolutionFrom: "기존 직무: 재무/FP&A/전략기획",
    salaryBand: "1.5억~3.3억+",
    seniorityPreference: "senior",
    neededSkills: ["Financial Analysis", "Strategic Planning", "Data Analysis", "Risk Management", "Stakeholder Communication"],
    boostStrengths: ["Analytical", "Input", "Strategic", "Responsibility", "Learner"],
    boostMbti: ["INTJ", "ISTJ", "ENTJ", "INTP"],
    hiringSignals: [
      "가격/수익성 모델을 구축해 사업 의사결정을 지원한 경험",
      "재무 예측 정밀도를 개선한 자동화 체계 구축 경험",
      "경영진 대상 전략/재무 인사이트 커뮤니케이션 역량"
    ],
    demandSignals: [
      { skill: "Financial Analysis", demandPercent: 90, evidence: "수익성·가격 전략 분석" },
      { skill: "Data Analysis", demandPercent: 84, evidence: "예측 모델링" },
      { skill: "Strategic Planning", demandPercent: 81, evidence: "재무 전략 수립" },
      { skill: "Risk Management", demandPercent: 78, evidence: "변동성 대응 및 시나리오 계획" },
      { skill: "Stakeholder Communication", demandPercent: 72, evidence: "경영진 보고/정렬" }
    ],
    relevanceKeywords: ["재무", "fp&a", "finance", "회계", "원가", "수익성", "pricing", "예산", "손익", "profit"],
    toolStack: ["FP&A Model", "Pricing Simulator", "Scenario Engine", "LLM Copilot"],
    outcomeMetrics: ["마진율 개선", "예측 오차 감소", "의사결정 속도 향상"],
    linkedinEvidence: ["Adobe", "Salesforce", "SAP"]
  },
  {
    name: "Agentic People Operations Architect",
    evolutionFrom: "기존 직무: HR/채용/인사운영",
    salaryBand: "1.2억~2.7억+",
    seniorityPreference: "mid",
    neededSkills: ["Leadership", "Project Management", "No-Code Automation", "Stakeholder Communication", "Data Analysis"],
    boostStrengths: ["Developer", "Empathy", "Responsibility", "Connectedness", "Learner"],
    boostMbti: ["ENFJ", "INFJ", "ESFJ", "ISFJ"],
    hiringSignals: [
      "채용/온보딩/평가 프로세스를 자동화해 운영 효율을 개선한 경험",
      "인사 데이터를 기반으로 조직 운영 개선안을 도출한 경험",
      "현업 리더와 협업해 변화관리 프로젝트를 리딩한 경험"
    ],
    demandSignals: [
      { skill: "No-Code Automation", demandPercent: 84, evidence: "HR 워크플로우 자동화" },
      { skill: "Project Management", demandPercent: 80, evidence: "프로세스 개선 프로젝트 운영" },
      { skill: "Stakeholder Communication", demandPercent: 78, evidence: "현업/리더십 협업" },
      { skill: "Data Analysis", demandPercent: 74, evidence: "인사 지표 해석 및 의사결정" },
      { skill: "Leadership", demandPercent: 70, evidence: "변화관리 리딩" }
    ],
    relevanceKeywords: ["hr", "채용", "인사", "talent", "people", "조직", "온보딩", "평가", "인재"],
    toolStack: ["ATS/HRIS", "Workflow Automation", "Org Analytics", "LLM Assistants"],
    outcomeMetrics: ["채용 리드타임 단축", "온보딩 품질 향상", "운영 효율 개선"],
    linkedinEvidence: ["LinkedIn", "Workday", "Mercer"]
  },
  {
    name: "AI Product Decision Intelligence PM",
    evolutionFrom: "기존 직무: PM/프로덕트/서비스기획",
    salaryBand: "1.4억~3.1억+",
    seniorityPreference: "senior",
    neededSkills: ["Product Management", "Data Analysis", "Strategic Planning", "Stakeholder Communication", "Leadership"],
    boostStrengths: ["Ideation", "Analytical", "Learner", "Activator", "Strategic"],
    boostMbti: ["ENTP", "INTJ", "ENTJ", "INFP"],
    hiringSignals: [
      "제품 의사결정을 데이터/실험 기반으로 운영한 경험",
      "MVP-학습-확장 루프를 설계해 성과를 낸 경험",
      "제품/엔지니어링/비즈니스 조직을 정렬한 리딩 경험"
    ],
    demandSignals: [
      { skill: "Product Management", demandPercent: 88, evidence: "제품 전략 및 우선순위 설계" },
      { skill: "Data Analysis", demandPercent: 83, evidence: "실험/지표 의사결정" },
      { skill: "Strategic Planning", demandPercent: 79, evidence: "로드맵/성장 전략 수립" },
      { skill: "Stakeholder Communication", demandPercent: 76, evidence: "조직 간 합의 형성" },
      { skill: "Leadership", demandPercent: 74, evidence: "크로스펑셔널 실행 리딩" }
    ],
    relevanceKeywords: ["pm", "product", "서비스기획", "프로덕트", "mvp", "로드맵", "ux", "feature", "기획"],
    toolStack: ["Experimentation Platform", "Product Analytics", "AI Copilot", "Workflow Automation"],
    outcomeMetrics: ["활성 사용자 증가", "리텐션 개선", "출시 속도 향상"],
    linkedinEvidence: ["Google", "Microsoft", "Atlassian"]
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

function getStrengthLabel(strengthValue) {
  const item = CLIFTON_STRENGTHS.find((strength) => strength.value === strengthValue);
  if (!item) return strengthValue;
  return getCurrentLanguage() === "en" ? item.en : item.ko;
}

function extractProfileName(profile) {
  const source = `${profile.currentRole || ""}\n${profile.careerText || ""}`;
  const koreanName = source.match(/([가-힣]{2,4})\s*(님|매니저|리드|팀장|실장|이사|부장)/);
  if (koreanName) return koreanName[1];
  return "질문자";
}

function extractBackgroundCompanies(profile) {
  const text = `${profile.careerText || ""}\n${profile.currentRole || ""}`;
  const raw = text.match(/[A-Z][A-Za-z0-9&.\-]{2,}|[가-힣A-Za-z0-9]+(전자|그룹|은행|카드|증권|보험|테크|코리아|컴퍼니|닷컴|마트|슈퍼|롭스)/g) || [];
  const cleaned = raw
    .map((c) => c.replace(/[()\[\],]/g, "").trim())
    .filter((c) => c.length >= 2);
  return [...new Set(cleaned)].slice(0, 5);
}

function buildPersonaSummary(profile) {
  const topStrengths = profile.strengths.slice(0, 5).map(getStrengthLabel);
  const hasStrategicSet = ["Learner", "Input", "Activator", "Analytical", "Ideation"]
    .every((s) => profile.strengths.includes(s));
  const persona = hasStrategicSet ? "전략적 탐구자" : "데이터 기반 실행가";

  return {
    topStrengths,
    persona,
    mbti: profile.mbti.join(", ") || "미입력"
  };
}

function getRoleNarrative(roleName, profile, result) {
  const firstGap = result.focusSkills[0] || "Strategic Planning";
  const secondGap = result.focusSkills[1] || "Data Analysis";

  if (roleName === "Tokenized Loyalty Economy Architect") {
    return {
      whyFit: "포인트/멤버십/CRM 설계 경험은 토큰화된 로열티 경제 설계와 직접적으로 연결됩니다. AI 자동화가 결합되면 단순 운영이 아닌 가치 교환 구조 설계자로 확장됩니다.",
      value: `정량 성과와 자동화 역량을 결합해 LTV/CAC 구조를 재설계하는 포지션입니다. 특히 ${firstGap} 역량을 강화하면 기업의 수익 구조 설계자로서 가치가 급상승합니다.`
    };
  }

  if (roleName === "AI Marketing ROI & Forecast Strategist") {
    return {
      whyFit: "마케팅 성과 분석과 예산 운영 경험은 AI 기반 ROI 분석·예측 직무와 정합성이 높습니다. 특히 시뮬레이션 기반 의사결정 역량이 핵심 경쟁력입니다.",
      value: `캠페인 집행자가 아니라 ROI와 수익성을 설계하는 포지션입니다. ${secondGap} 기반 모델 고도화 역량이 붙으면 보상 레벨이 빠르게 상승합니다.`
    };
  }

  if (roleName === "Multi-Agent Revenue Operations Lead") {
    return {
      whyFit: "운영/마케팅/데이터 흐름을 연결해본 경험은 멀티 에이전트 기반 수익 운영 체계 설계에 직접 활용됩니다.",
      value: "사람 중심 운영을 AI 에이전트 시스템으로 전환해 마진 개선을 만드는 역할이라 경영진 레벨 임팩트를 만듭니다."
    };
  }

  if (roleName === "Agentic Marketing Systems Architect") {
    return {
      whyFit: "퍼널, 실험, 자동화 경험을 시스템 단위로 재설계할 수 있으면 에이전틱 마케팅 구조 설계자로 포지셔닝할 수 있습니다.",
      value: "메시지-채널-측정-최적화를 하나의 자동화 루프로 만든 인재는 대체가 어려워 프리미엄 보상 구간으로 이동합니다."
    };
  }

  return {
    whyFit: "현재 경력의 전략·실행·데이터 역량이 고부가가치 리드 포지션과 정합됩니다.",
    value: "성과 지표와 자동화 시스템을 함께 구축할 수 있는 인재로 포지셔닝할 수 있습니다."
  };
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

function evaluateExperienceSignal(profile) {
  const years = Number.isFinite(profile.careerYearsValue) ? profile.careerYearsValue : 0;
  const careerText = profile.careerText || "";
  const currentRole = profile.currentRole || "";
  const combined = `${careerText}\n${currentRole}`;

  const leadershipMatches = combined.match(/리드|lead|head|director|manager|총괄|팀장|실장|본부장|임원/gi) || [];
  const metricMatches = combined.match(/\d+(\.\d+)?\s?(%|퍼센트|배|억|만|k|m|b|건|명|원)/gi) || [];
  const companyMatches = combined.match(/[A-Z][A-Za-z0-9&.\-]{2,}\s?(Inc|Corp|Ltd|Co|Group)?|[가-힣A-Za-z0-9]+(전자|그룹|은행|카드|증권|보험|테크|테크놀로지|코리아|컴퍼니)/g) || [];

  const yearPoints = Math.min(28, Math.round(years * 1.6));
  const leadershipPoints = Math.min(16, leadershipMatches.length * 4);
  const metricPoints = Math.min(16, metricMatches.length * 4);
  const companyPoints = Math.min(12, companyMatches.length * 3);

  const total = yearPoints + leadershipPoints + metricPoints + companyPoints;
  const level = years >= 12 || leadershipMatches.length >= 2 ? "senior" : years >= 6 ? "mid" : "junior";

  return {
    years,
    level,
    points: total,
    signals: {
      leadershipHits: leadershipMatches.length,
      metricHits: metricMatches.length,
      companyHits: companyMatches.length
    }
  };
}

function calculateRoleRelevance(profile, role) {
  const text = `${profile.currentRole || ""}\n${profile.careerText || ""}`.toLowerCase();
  const keywords = (role.relevanceKeywords || []).map((keyword) => keyword.toLowerCase());
  const hits = keywords.filter((keyword) => keyword && text.includes(keyword));
  const uniqueHits = [...new Set(hits)];
  const points = Math.min(30, uniqueHits.length * 6);
  const hasCurrentRoleInput = (profile.currentRole || "").trim().length > 0;
  const mismatchPenalty = hasCurrentRoleInput && uniqueHits.length === 0 ? 14 : 0;

  return {
    points,
    mismatchPenalty,
    hits: uniqueHits
  };
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
  const experienceSignal = evaluateExperienceSignal(profile);
  const relevance = calculateRoleRelevance(profile, role);
  const strengthPoints = matchedStrengths.length * 7;
  const mbtiPoints = matchedMbti.length * 6;
  const seniorityFitBonus =
    role.seniorityPreference === experienceSignal.level ? 10 :
    role.seniorityPreference === "senior" && experienceSignal.level === "mid" ? 5 : 0;
  const experiencePoints = Math.min(60, experienceSignal.points + seniorityFitBonus);
  const score = skillPoints + strengthPoints + mbtiPoints + experiencePoints + relevance.points - relevance.mismatchPenalty;

  return {
    score,
    scoreBreakdown: {
      skillPoints,
      strengthPoints,
      mbtiPoints,
      experiencePoints,
      relevancePoints: relevance.points
    },
    matchedSkills,
    missingSkills,
    matchedStrengths,
    matchedMbti,
    skillCoverage: Math.round((matchedSkills.length / role.neededSkills.length) * 100),
    experienceSignal,
    relevance
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
  const experienceSignal = top.analysis.experienceSignal;
  const missingSkills = top.analysis.missingSkills;
  const upgradeSkills = top.analysis.matchedSkills.filter((s) => s.level !== "high").map((s) => s.name);
  const focusSkills = [...new Set([...missingSkills, ...upgradeSkills])].slice(0, 5);
  const normalizedScore = Math.min(100, Math.round((top.score / SCORE_NORMALIZER) * 100));
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

  const isSeniorTrack = experienceSignal.level === "senior" || experienceSignal.years >= 12;
  const immediateActions = isSeniorTrack
    ? [
      `${top.name} 기준 12개월 전략 맵 작성 (North Star + 3대 핵심 KPI)`,
      `${firstGap}, ${secondGap} 중심으로 업무 자동화 파이프라인 2개 설계`,
      "리더십/조직 실행 모델: 의사결정 권한-지표-운영 리듬(Rhythm) 재정의",
      "이력서/프로필에 기업명 + 정량 성과(%, 억, 건) 5개를 임팩트 문장으로 전면 배치",
      weaknessKeyword ? weaknessKeyword.plan : "월간 전략 리뷰 미팅(60분)과 주간 실행 점검(30분) 운영"
    ]
    : [
      `이번 주 안에 ${firstGap} 학습 3시간 + 실습 결과물 1개 업로드`,
      `${secondGap} 관련 미니 프로젝트를 ${top.name} 직무 관점으로 1개 설계`,
      "성과지표 템플릿 작성(시간 절감, 품질 개선, 비용 절감 중 1개 이상)",
      profile.careerText.length < 120
        ? "경력 설명을 STAR 구조(상황-과제-행동-결과)로 500자 이상 보강"
        : "현재 경력 설명에서 정량 성과 문장 3개를 추출해 이력서 상단에 배치",
      weaknessKeyword ? weaknessKeyword.plan : "주간 회고 30분을 고정하고 다음 주 1개 목표만 설정"
    ];

  const quests = isSeniorTrack
    ? [
      {
        phase: "Phase 1 (0~4주): 전략 설계",
        tasks: [
          `목표 직무(${top.name}) 기준 성장/수익 구조와 리스크 맵 정의`,
          "핵심 KPI Tree 및 의사결정 기준(Guardrail) 문서화",
          "경영진 리뷰용 1페이지 전략 메모 완성"
        ]
      },
      {
        phase: "Phase 2 (5~8주): 시스템 자동화",
        tasks: [
          "지표 수집-해석-보고 자동화 파이프라인 구축",
          "반복 운영 업무 3개 이상 자동화 및 리드타임 30% 절감",
          "팀 운영 리듬(주간/월간)과 실행 대시보드 정착"
        ]
      },
      {
        phase: "Phase 3 (9~12주): 조직 확장",
        tasks: [
          "전사 협업 체계(RACI) 재설계 및 운영 표준 배포",
          "신규 성장 시나리오 2개를 실험 포트폴리오로 운영",
          "성과 리뷰에서 다음 분기 투자 우선순위 제안"
        ]
      }
    ]
    : [
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

  const strengthReasonSummary = profile.strengths
    .filter((strength) => Boolean(STRENGTH_REASON_MAP[strength]))
    .map((strength) => `${getStrengthLabel(strength)}: ${STRENGTH_REASON_MAP[strength]}`);

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
    motivation,
    strengthReasonSummary,
    experienceSignal
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
  const name = extractProfileName(profile);
  const persona = buildPersonaSummary(profile);
  const topTwoRoles = [result.topRole, ...(result.alternatives || []).slice(0, 1)];
  const backgroundCompanies = extractBackgroundCompanies(profile);
  const companiesText = backgroundCompanies.length ? backgroundCompanies.join(", ") : "입력 경력 기반";

  reportPanel.classList.remove("hidden");
  reportNode.classList.remove("empty");
  reportNode.classList.remove("report-animate");
  reportNode.innerHTML = `
    <div class="report-layout report-narrative">
      <div class="report-hero-block report-hero-strong">
        <p class="mini-label">Hyper-Growth Career Evolution Report</p>
        <h3>🚀 하이퍼-그로우: ${name} 님 커리어 진화 보고서</h3>
      <div class="kpi-grid">
        <div class="kpi-card"><p>준비도 점수</p><strong>${result.normalizedScore}점</strong></div>
        <div class="kpi-card"><p>채용요건 충족도</p><strong>${result.weightedDemandReadiness}%</strong></div>
        <div class="kpi-card"><p>직무 매칭 점수</p><strong>${result.topRole.score}점</strong></div>
      </div>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <p>1. 당신의 3대 핵심 DNA 조합 분석</p>
          <p><strong>강점(Top 5):</strong> ${persona.topStrengths.join(", ")} (${persona.persona}형)</p>
          <p><strong>성격(MBTI):</strong> ${persona.mbti}</p>
          <p><strong>백그라운드:</strong> ${companiesText}까지 이어진 경력 흐름</p>
          <p class="hint">경력 신호: ${result.experienceSignal.years}년차 · 기업 언급 ${result.experienceSignal.signals.companyHits}회 · 정량 성과 ${result.experienceSignal.signals.metricHits}건 · 리더십 표현 ${result.experienceSignal.signals.leadershipHits}회</p>
          <p class="hint">현재 직무 연관 키워드: ${(result.topRole.analysis.relevance.hits || []).slice(0, 5).join(", ") || "연관 키워드 미검출"}</p>
          <p><strong>[종합 진단]</strong> 단순 운영형 인재가 아니라, 데이터를 통해 기회를 포착하고 전략을 실행으로 전환하는 시니어 성장 설계자 유형입니다.</p>
        </div>
      </div>

      <div class="report-block">
        <strong>2. 2027년, 연봉 성장에 유리한 '신인류 직무' 추천</strong>
        ${topTwoRoles.map((role, idx) => {
          const narrative = getRoleNarrative(role.name, profile, result);
          const prefix = idx === 0 ? "①" : "②";
          return `
            <div class="chart-card">
              <h4>${prefix} ${role.name}</h4>
              <p><strong>왜 적합한가?</strong> ${narrative.whyFit}</p>
              <p><strong>수익 가치:</strong> ${narrative.value}</p>
              <p><strong>연봉 밴드:</strong> ${role.salaryBand}</p>
              <p><strong>핵심 채용 시그널:</strong> ${(role.hiringSignals || []).join(" / ")}</p>
            </div>
          `;
        }).join("")}
      </div>

      <div class="report-block">
        <strong>3. 연봉 점프를 위한 '진화 퀘스트' (Action Plan)</strong>
        ${result.quests.map((q) => `
          <div class="chart-card">
            <p><b>${q.phase}</b></p>
            <ul>${q.tasks.map((t) => `<li>${t}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>

      <div class="report-block">
        <strong>강점 데이터 기반 추천 사유</strong>
        <ul>
          ${(result.strengthReasonSummary.length
            ? result.strengthReasonSummary
            : ["핵심 강점 5개(배움, 수집, 행동, 분석, 발상)를 선택하면 직무 추천 근거가 더 구체화됩니다."])
            .map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <p><strong>유사 채용 기업:</strong> ${result.topRole.linkedinEvidence.join(", ")}</p>
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
      careerYearsValue: Number(document.getElementById("career-years").value || 0),
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
