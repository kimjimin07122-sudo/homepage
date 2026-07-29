// ─────────────────────────────────────────────
//  공지사항 / News (추후 채우기)
//  · tag 는 CSS class(news__tag--모집 …) 키로도 쓰이므로 한글 키를 유지하고,
//    화면 표시는 newsTagLabels 로 언어에 맞게 해석한다.
//  · title 은 { ko, en }
// ─────────────────────────────────────────────

// 태그 표시 라벨 (키: 한글 → { ko, en })
export const newsTagLabels = {
  소식: { ko: '소식', en: 'News' },
  모집: { ko: '모집', en: 'Recruiting' },
  논문: { ko: '논문', en: 'Paper' },
  수상: { ko: '수상', en: 'Award' },
  세미나: { ko: '세미나', en: 'Seminar' },
}

// 연구실 소식(보도자료 등 전문이 있는 글) — 클릭하면 /news/:slug 상세 페이지로 이동.
// 본문은 보도자료 원문(국문)이라 번역 없이 그대로 싣는다 (다른 언어에서도 동일하게 노출).
export const articles = [
  {
    slug: 'lab-news-1',
    tag: '소식',
    date: '2026-07-29',
    title: {
      ko: '안효정 교수, 2026년도 개인기초연구사업 ‘핵심연구 유형B’ 선정',
      en: 'Prof. Hyojung Ahn Selected for the 2026 Individual Basic Research Program (Core Research Type B)',
    },
    summary: {
      ko: '제주대학교 인공지능학과 안효정 교수가 과학기술정보통신부가 추진하고 한국연구재단이 지원하는 ‘2026년도 1차 개인기초연구사업(핵심연구 유형B)’ 신규과제에 선정됐다.',
      en: 'Prof. Hyojung Ahn of the Dept. of Artificial Intelligence at Jeju National University has been selected for a new project under the 2026 (1st round) Individual Basic Research Program (Core Research Type B), led by the Ministry of Science and ICT and supported by the National Research Foundation of Korea.',
    },
    body: {
      ko: [
        '제주대학교 인공지능학과 안효정 교수가 과학기술정보통신부가 추진하고 한국연구재단이 지원하는 ‘2026년도 1차 개인기초연구사업(핵심연구 유형B)’ 신규과제에 선정됐다.',
        '핵심연구는 창의성 높은 개인연구를 지원해 우수한 기초연구 역량을 배양하고, 연구자가 향후 리더연구자로 성장할 수 있는 기반을 마련하기 위한 사업이다. 핵심연구 유형B는 1년에서 최대 5년간 연간 2억 원 내외의 연구비를 지원하며, 안 교수는 이번 선정에 따라 향후 4년간 연구를 수행할 예정이다.',
        '선정된 과제명은 ‘군집시스템 실시간 자율진단을 위한 저전력 Edge-AI/뉴로모픽 통합 임베디드 플랫폼 연구’다. 이번 연구는 드론과 초소형 위성(CubeSat) 등 여러 이동체가 협력해 임무를 수행하는 군집시스템에서 각 기체가 지상국이나 외부 서버에 의존하지 않고, 센서와 통신 데이터를 스스로 분석해 고장과 이상 상태를 실시간으로 진단할 수 있는 온보드 자율지능 플랫폼을 개발하는 것을 목표로 한다.',
        '현재 드론이나 위성의 상태 진단은 기체에서 수집한 데이터를 지상국으로 전송한 후 고성능 서버에서 분석하는 방식이 주로 활용되고 있다. 그러나 이러한 방식은 통신 대역폭의 한계와 데이터 손실, 통신 지연에 따른 대응 지연, 통신 장애 발생 시 진단이 어려워지는 문제를 안고 있다. 특히 전력과 무게에 제약이 큰 군집 드론이나 초소형 위성에서는 각 기체가 스스로 상태를 판단할 수 있는 저전력 온보드 인공지능 기술이 중요하다.',
        '안 교수 연구팀은 Transformer 기반의 다변량 시계열 이상 탐지 기술과 뇌 신경망의 작동 방식을 모사한 스파이킹 신경망(SNN) 기반 뉴로모픽 컴퓨팅 기술을 결합할 계획이다. 이를 통해 높은 진단 정확도를 유지하면서도 전력 소모와 연산 지연을 줄이고, 배터리 잔량이나 통신 상태 등 운용 환경에 따라 고성능 Edge-AI와 초저전력 뉴로모픽 진단 모드를 선택적으로 활용할 수 있는 통합 임베디드 플랫폼을 구현할 예정이다.',
        '이번 연구 성과는 재난·재해 감시와 송전선, 풍력발전 시설, 교량, 플랜트 등 장거리 인프라 점검, 우주 임무처럼 사람이 직접 접근하기 어려운 환경에서 군집시스템의 신뢰성과 안전성을 높이는 데 활용될 것으로 기대된다. 또한 드론과 초소형 위성뿐 아니라 자율주행차, 로봇, 산업설비 등 다양한 분야에 적용할 수 있는 범용 자율진단 기술로 확장될 수 있으며, 엣지 인공지능과 뉴로모픽 반도체, 임베디드 시스템 분야의 국내 독자 기술 확보와 전문 연구인력 양성에도 기여할 전망이다.',
        '안효정 교수는 “통신이 제한된 환경에서도 군집시스템의 각 기체가 스스로 이상 상태를 진단하고 대응할 수 있는 초저전력 온보드 지능을 구현하는 것이 이번 연구의 목표”라며 “드론과 초소형 위성을 넘어 로봇, 자율주행 시스템, 산업설비 등으로 확장할 수 있는 자율진단 원천기술을 확보하고, 학생들이 인공지능과 하드웨어를 함께 이해하는 융합형 연구자로 성장할 수 있는 기반을 마련하겠다”고 밝혔다.',
      ],
      en: [
        'Prof. Hyojung Ahn of the Dept. of Artificial Intelligence at Jeju National University has been selected for a new project under the 2026 (1st round) Individual Basic Research Program (Core Research Type B), led by the Ministry of Science and ICT and supported by the National Research Foundation of Korea.',
        'The Core Research program supports highly creative individual research to cultivate excellent foundational research capacity and help researchers grow into future research leaders. Core Research Type B provides funding of roughly KRW 200 million per year for one to five years; Prof. Ahn will carry out the project for the next four years under this selection.',
        'The selected project is titled “Low-Power Edge-AI/Neuromorphic Integrated Embedded Platform for Real-Time Autonomous Diagnosis of Swarm Systems.” It aims to develop an onboard autonomous-intelligence platform for swarm systems — such as drones and CubeSats operating together on a shared mission — that lets each vehicle analyze its own sensor and communication data and diagnose faults or anomalies in real time, without depending on a ground station or external server.',
        'Today, the health of drones and satellites is typically diagnosed by transmitting onboard data to a ground station and analyzing it on a high-performance server. This approach is limited by communication bandwidth, data loss, delayed response due to communication lag, and difficulty diagnosing issues when communication fails. Low-power onboard AI that lets each vehicle judge its own state is especially critical for swarm drones and CubeSats, which face tight constraints on power and weight.',
        'Prof. Ahn’s team plans to combine Transformer-based multivariate time-series anomaly detection with neuromorphic computing based on spiking neural networks (SNNs) that mimic how the brain’s neural circuits operate. This will maintain high diagnostic accuracy while reducing power consumption and computational latency, and will realize an integrated embedded platform that can selectively switch between a high-performance Edge-AI mode and an ultra-low-power neuromorphic diagnostic mode depending on operating conditions such as remaining battery or communication status.',
        'The results are expected to improve the reliability and safety of swarm systems in settings that are hard for people to access directly — disaster and hazard monitoring, long-range infrastructure inspection of power lines, wind farms, bridges, and plants, and space missions. The technology could also extend beyond drones and CubeSats into a general-purpose autonomous-diagnosis technology applicable to autonomous vehicles, robots, and industrial equipment, while contributing to securing domestic technology and training specialized researchers in edge AI, neuromorphic semiconductors, and embedded systems.',
        'Prof. Ahn said, “The goal of this research is to realize ultra-low-power onboard intelligence that lets each vehicle in a swarm system diagnose and respond to anomalies on its own, even in communication-constrained environments,” adding, “We aim to secure core autonomous-diagnosis technology that extends beyond drones and CubeSats to robots, autonomous driving systems, and industrial equipment, and to build a foundation for students to grow into convergence researchers who understand both AI and hardware.”',
      ],
    },
  },
]

export const news = [
  {
    date: '2026-07-18',
    tag: '모집',
    title: {
      ko: '보건의료 데이터 기반 AI 예측모델 연구 참여 연구원을 모집합니다.',
      en: 'Recruiting researchers for AI predictive-model research based on healthcare data.',
    },
  },
  {
    date: '2026-07-18',
    tag: '모집',
    title: {
      ko: '드론 운용 데이터 기반 AI 예측모델 연구 참여 연구원을 모집합니다.',
      en: 'Recruiting researchers for AI predictive-model research based on drone operation data.',
    },
  },
  {
    date: '2026-07-18',
    tag: '모집',
    title: {
      ko: 'AI 임베딩 · 경량화 연구 참여 연구원을 모집합니다.',
      en: 'Recruiting researchers for AI embedding & model-compression research.',
    },
  },
]
