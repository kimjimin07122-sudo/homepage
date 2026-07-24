// ─────────────────────────────────────────────
//  연구 분야 데이터
//  - Home / Research 페이지에서 공통으로 사용
//  - 카드 클릭 시 모달로 세부 항목 표시
//  - 텍스트는 { ko, en } — 화면에서 t() 로 해석
//    · title    : 현재 언어(메인)
//    · subtitle : 반대 언어(보조) → 두 언어를 함께 노출하되 언어별로 주·보조를 뒤바꾼다
// ─────────────────────────────────────────────

// 연구 분야 (클릭 → 모달)
export const researchAreas = [
  {
    id: 'physical-ai',
    no: '01',
    icon: 'fa-solid fa-brain',
    title: { ko: 'Physical AI 및 자율지능', en: 'Physical AI & Autonomous Intelligence' },
    subtitle: { ko: 'Physical AI & Autonomous Intelligence', en: '' },
    desc: {
      ko: '실제 물리 환경에서 인지하고 판단하며 행동하는 자율지능의 핵심 기술을 연구합니다.',
      en: 'We study the core technologies of autonomous intelligence that perceives, reasons, and acts in the real physical world.',
    },
    items: {
      ko: [
        'Physical AI',
        '자율지능 시스템',
        '온디바이스 AI',
        '엣지 AI',
        '뉴로모픽 컴퓨팅',
        'AI 반도체 응용',
      ],
      en: [
        'Physical AI',
        'Autonomous intelligent systems',
        'On-device AI',
        'Edge AI',
        'Neuromorphic computing',
        'AI semiconductor applications',
      ],
    },
  },
  {
    id: 'diagnostics',
    no: '02',
    icon: 'fa-solid fa-heart-pulse',
    title: { ko: '지능형 시스템 진단 및 의사결정', en: 'Intelligent Diagnostics & Decision-Making' },
    subtitle: { ko: 'Intelligent Diagnostics & Decision-Making', en: '' },
    desc: {
      ko: 'AI 기반 진단과 건전성 관리로 시스템의 신뢰성과 안전성을 높이는 의사결정을 연구합니다.',
      en: 'We study AI-based diagnostics, health management, and decision-making that enhance the reliability and safety of systems.',
    },
    items: {
      ko: [
        'AI 기반 이상 · 고장 진단',
        '시스템 건전성 관리 (PHM)',
        '예지보전',
        '위험도 기반 의사결정',
        '신뢰성 및 안전성 AI',
      ],
      en: [
        'AI-based anomaly & fault diagnosis',
        'System health management (PHM)',
        'Predictive maintenance',
        'Risk-based decision-making',
        'Reliability & safety AI',
      ],
    },
  },
  {
    id: 'engineering-systems',
    no: '03',
    icon: 'fa-solid fa-plane-up',
    title: { ko: 'AI 기반 복합 공학시스템', en: 'AI for Complex Engineered Systems' },
    subtitle: { ko: 'AI for Complex Engineered Systems', en: '' },
    desc: {
      ko: '우주항공·로봇·모빌리티 등 복합 공학시스템에 지능을 결합하는 기술을 연구합니다.',
      en: 'We study technologies that embed intelligence into complex engineered systems such as aerospace, robotics, and mobility.',
    },
    items: {
      ko: [
        '자율비행 및 무인시스템',
        '우주항공 AI',
        '로봇 및 지능형 모빌리티',
        '디지털 트윈',
        '센서 융합 및 임베디드 AI',
      ],
      en: [
        'Autonomous flight & unmanned systems',
        'Aerospace AI',
        'Robotics & intelligent mobility',
        'Digital twin',
        'Sensor fusion & embedded AI',
      ],
    },
  },
  {
    id: 'models-data',
    no: '04',
    icon: 'fa-solid fa-diagram-project',
    title: { ko: 'AI 모델 및 데이터 분석', en: 'AI Models & Data Analytics' },
    subtitle: { ko: 'AI Models & Data Analytics', en: '' },
    desc: {
      ko: '생성형·시계열·멀티모달 AI, 의료 · 보건 데이터 AI를 비롯한 데이터 기반 지능 모델을 연구합니다.',
      en: 'We study data-driven intelligence models, including generative, time-series, and multimodal AI, as well as AI for medical and healthcare data.',
    },
    items: {
      ko: [
        '생성형 AI',
        '시계열 AI',
        '멀티모달 AI',
        '의료 · 보건 데이터 AI',
        '산업 데이터 AI',
        '설명가능 AI (XAI)',
      ],
      en: [
        'Generative AI',
        'Time-series AI',
        'Multimodal AI',
        'Medical & health-data AI',
        'Industrial data AI',
        'Explainable AI (XAI)',
      ],
    },
  },
  {
    id: 'implementation',
    no: '05',
    icon: 'fa-solid fa-shield-halved',
    title: { ko: 'AI 시스템 구현 및 검증', en: 'AI System Implementation & Verification' },
    subtitle: { ko: 'AI System Implementation & Verification', en: '' },
    desc: {
      ko: 'AI-하드웨어 공동설계부터 검증·인증까지, 실제로 신뢰할 수 있는 AI 시스템을 구현합니다.',
      en: 'From AI–hardware co-design to verification and certification, we build AI systems that are genuinely trustworthy.',
    },
    items: {
      ko: [
        'AI-하드웨어 공동설계',
        'AI 시스템 통합',
        '실시간 AI 구현',
        'AI 검증 및 시험',
        'AI 인증 및 신뢰성 평가',
      ],
      en: [
        'AI–hardware co-design',
        'AI system integration',
        'Real-time AI implementation',
        'AI verification & testing',
        'AI certification & reliability assessment',
      ],
    },
  },
]
