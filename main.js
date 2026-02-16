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
  "Cloud", "MLOps", "Data Engineering", "Technical Writing", "Leadership"
];

const LEVEL_OPTIONS = ["low", "mid", "high"];

const ROLE_PROFILES = [
  {
    name: "AI Agent Architect",
    salaryBand: "1.2억~2.5억+",
    neededSkills: ["Python", "Prompt Engineering", "Cloud", "MLOps", "Product Management"],
    boostStrengths: ["Strategic", "Learner", "Analytical", "Ideation", "Achiever"],
    boostMbti: ["INTJ", "ENTJ", "INTP", "ENTP"]
  },
  {
    name: "AI Product Strategist",
    salaryBand: "1.0억~2.0억+",
    neededSkills: ["Product Management", "Prompt Engineering", "Data Engineering", "Leadership", "UX Research"],
    boostStrengths: ["Futuristic", "Communication", "Strategic", "Relator", "Maximizer"],
    boostMbti: ["ENFJ", "ENTJ", "ENFP", "INFJ"]
  },
  {
    name: "AI Workflow Automation Consultant",
    salaryBand: "9천~1.8억+",
    neededSkills: ["No-Code Automation", "Python", "Sales", "Consulting", "Prompt Engineering"],
    boostStrengths: ["Activator", "Communication", "Woo", "Restorative", "Arranger"],
    boostMbti: ["ENTP", "ENFP", "ESTP", "ENTJ"]
  },
  {
    name: "AI Transformation PM",
    salaryBand: "9천~1.7억+",
    neededSkills: ["Leadership", "Product Management", "SQL", "Power BI", "Consulting"],
    boostStrengths: ["Responsibility", "Focus", "Discipline", "Developer", "Connectedness"],
    boostMbti: ["ESTJ", "ENFJ", "ISTJ", "ENTJ"]
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

function calculateRoleScore(profile, role) {
  const skillWeight = { low: 1, mid: 2, high: 3 };
  let score = 0;
  const userSkillMap = new Map(profile.skills.map((s) => [s.name, s.level]));

  role.neededSkills.forEach((skill) => {
    const level = userSkillMap.get(skill);
    if (level) score += skillWeight[level] * 8;
  });

  profile.strengths.forEach((s) => {
    if (role.boostStrengths.includes(s)) score += 7;
  });

  profile.mbti.forEach((m) => {
    if (role.boostMbti.includes(m)) score += 6;
  });

  if (profile.careerText.length > 120) score += 8;
  return score;
}

function buildEvolutionResult(profile) {
  const scored = ROLE_PROFILES
    .map((role) => ({ ...role, score: calculateRoleScore(profile, role) }))
    .sort((a, b) => b.score - a.score);

  const top = scored[0];
  const missingSkills = top.neededSkills.filter((skill) => !profile.skills.some((s) => s.name === skill));
  const mediumSkills = profile.skills.filter((s) => s.level !== "high").map((s) => s.name);
  const focusSkills = [...new Set([...missingSkills, ...mediumSkills])].slice(0, 5);

  const quests = [
    {
      phase: "Phase 1 (0~4주): 기반 구축",
      tasks: [
        "AI/자동화 기본기 집중 학습(주 5시간)",
        `핵심 역량 2개 선택: ${focusSkills.slice(0, 2).join(", ") || "Python, Prompt Engineering"}`,
        "작은 자동화 프로젝트 1개 배포"
      ]
    },
    {
      phase: "Phase 2 (5~8주): 실무 전환",
      tasks: [
        "업무형 데이터/문제 1개 선정 후 AI 솔루션 설계",
        "포트폴리오용 케이스 스터디 작성",
        "성과 지표(시간 절감/매출 기여) 수치화"
      ]
    },
    {
      phase: "Phase 3 (9~12주): 고단가 포지셔닝",
      tasks: [
        "목표 직무 맞춤 이력서/링크드인 리브랜딩",
        "고단가 채용 공고 20개 역분석 후 역량 보완",
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
    alternatives: scored.slice(1, 3),
    focusSkills,
    quests,
    motivation
  };
}

function renderReport(profile, result) {
  reportNode.classList.remove("empty");
  reportNode.innerHTML = `
    <div class="report-block">
      <h3>${profile.name || "사용자"} 님의 커리어 진화 리포트</h3>
      <p><strong>추천 신직업:</strong> ${result.topRole.name} (예상 연봉 밴드: ${result.topRole.salaryBand})</p>
      <p><strong>매칭 점수:</strong> ${result.topRole.score}점</p>
      <p><strong>근거:</strong> MBTI(${profile.mbti.join(", ") || "미선택"}), 강점(${profile.strengths.join(", ") || "미선택"}), 보유 스킬 기반 매칭</p>
    </div>
    <div class="report-block">
      <strong>대안 직무</strong>
      <ul>
        ${result.alternatives.map((a) => `<li>${a.name} (${a.salaryBand})</li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>스킬 갭 분석 (우선 강화 스킬)</strong>
      <ul>
        ${(result.focusSkills.length ? result.focusSkills : ["Python", "Prompt Engineering"]).map((s) => `<li>${s}</li>`).join("")}
      </ul>
    </div>
    <div class="report-block">
      <strong>진화 퀘스트 (학습 + 실무 프로젝트)</strong>
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
