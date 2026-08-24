// ─────────────────────────────────────────────
//  구성원 정보
//  - 사진은 data/people/ 폴더에 넣고 아래처럼 import 해서 photo 에 연결합니다.
//  - 사진이 없으면 photo 를 비워두세요. 자동으로 profile-sample 이 사용됩니다.
//  - 새 구성원은 배열에 객체를 추가하기만 하면 됩니다.
//  - 국문/영문이 함께 필요한 값은 { ko, en } 으로 두고 화면에서 t() 로 해석합니다.
//    (영문만 있는 값 — 논문/국제학회 등 — 은 그대로 문자열로 둡니다.)
// ─────────────────────────────────────────────

import profileSample from './people/profile-sample.png'

// 구성원 사진 (data/people/)
import photoAhn from './people/ahn-hyojung.jpg'
import photoArshad from './people/arshad-farhad.jpg'
import photoKangDayeon from './people/kang-dayeon.jpg'
import photoKoYongseok from './people/ko-yongseok.jpg'
import photoKimJimin from './people/kim-jimin.jpg'
import photoByeonSua from './people/byeon-sua.jpg'
import photoHanJiwon from './people/han-jiwon.jpg'
import photoKimRyunhee from './people/kim-ryunhee.jpg'

export const profilePlaceholder = profileSample

// ── 지도교수 ──
export const professor = {
  name: '안효정',
  nameEn: 'Hyojung Ahn',
  role: { ko: '지도교수 · Principal Investigator', en: 'Principal Investigator' },
  title: {
    ko: '제주대학교 인공지능학과 조교수',
    en: 'Assistant Professor, Dept. of Artificial Intelligence, Jeju National University',
  },
  photo: photoAhn,
  email: 'hjahn@jejunu.ac.kr',
  // 영문은 해외 열람을 전제하므로 국가코드(+82) 포함 · 지역번호 0 은 괄호 처리
  phone: { ko: '064-754-3785', en: '+82 (0)64-754-3785' },
  office: {
    ko: '공과대학 3호관(건물번호 117), C111호',
    en: 'Engineering Bldg. 3 (No. 117), Room C111',
  },
  scholar:
    'https://scholar.google.com/citations?user=S_JRpc0AAAAJ&hl=ko&oi=ao',
  bio: {
    ko: '우주항공 및 복합 공학시스템을 위한 Physical AI를 연구합니다. AI 기반 기계·우주항공시스템의 이상(고장) 진단 및 예측, 에너지 예측·관리, 그리고 뉴로모픽·양자 컴퓨팅 기반 온디바이스 시스템까지 시스템 수준의 자율지능 기술을 폭넓게 연구하고 있습니다.',
    en: 'Prof. Ahn studies Physical AI for aerospace and complex engineered systems. Her research spans system-level autonomous intelligence — AI-based anomaly detection and fault diagnosis for mechanical and aerospace systems, energy forecasting and management, and on-device systems based on neuromorphic and quantum computing.',
  },

  // 학력
  education: [
    { degree: { ko: '박사', en: 'Ph.D.' }, dept: { ko: '한국과학기술원 항공우주공학과', en: 'Dept. of Aerospace Engineering, KAIST' } },
    { degree: { ko: '석사', en: 'M.S.' }, dept: { ko: '서울대학교 기계항공공학부', en: 'School of Mechanical & Aerospace Engineering, Seoul National University' } },
    { degree: { ko: '학사', en: 'B.S.' }, dept: { ko: '부산대학교 기계공학부', en: 'School of Mechanical Engineering, Pusan National University' } },
  ],

  // 주요 경력
  career: [
    { period: { ko: '2025.09 – 현재', en: '2025.09 – Present' }, org: { ko: '제주대학교 인공지능학과 조교수', en: 'Assistant Professor, Dept. of AI, Jeju National University' } },
    { period: { ko: '2010.12 – 2025.08', en: '2010.12 – 2025.08' }, org: { ko: '한국항공우주연구원 책임연구원', en: 'Principal Researcher, Korea Aerospace Research Institute (KARI)' } },
    { period: { ko: '2021.09 – 2025.08', en: '2021.09 – 2025.08' }, org: { ko: '과학기술연합대학원대학교(UST) 인공지능전공 부교수', en: 'Associate Professor, AI Major, University of Science & Technology (UST)' } },
    { period: { ko: '2008.01 – 2010.11', en: '2008.01 – 2010.11' }, org: { ko: '대한항공 항공우주사업본부', en: 'Aerospace Division, Korean Air' } },
    { period: { ko: '2004.01 – 2006.03', en: '2004.01 – 2006.03' }, org: { ko: '현대중공업 선박해양연구소', en: 'Ship & Ocean R&D Institute, Hyundai Heavy Industries' } },
  ],

  // 보유 자격
  certifications: [
    {
      period: { ko: '2023.12 – 현재', en: '2023.12 – Present' },
      name: {
        ko: '미국품질협회(ASQ) 국제품질기사 (Certified Quality Engineer, CQE) 취득 및 활동',
        en: 'Certified Quality Engineer (CQE), American Society for Quality (ASQ)',
      },
    },
    {
      period: { ko: '2014.10 – 현재', en: '2014.10 – Present' },
      name: {
        ko: '미국품질협회(ASQ) 국제신뢰성기사 (Certified Reliability Engineer, CRE) 취득 및 활동',
        en: 'Certified Reliability Engineer (CRE), American Society for Quality (ASQ)',
      },
    },
    {
      period: { ko: '2023.08 – 현재', en: '2023.08 – Present' },
      name: {
        ko: '초경량비행장치 조종자(무인멀티콥터 1종) 취득 및 활동',
        en: 'Ultralight Vehicle Pilot (Unmanned Multicopter, Class 1)',
      },
    },
  ],

  // 수상 경력 (selected)
  awards: [
    { date: '2023.12.19', name: { ko: '장관표창 (연구개발특구 50주년 우수연구)', en: 'Minister’s Commendation (Outstanding Research, 50th Anniversary of R&D Special Zones)' }, org: { ko: '과학기술정보통신부', en: 'Ministry of Science and ICT' } },
    { date: '2023.10.09', name: { ko: '육군참모총장상 (드론타이거대회 1등), 안효정 외 1인', en: 'Army Chief of Staff Award (1st Place, Drone Tiger Competition), H. Ahn et al.' }, org: { ko: '국방부', en: 'Ministry of National Defense' } },
    { date: '2023.08.31', name: { ko: '장관상 (데이터 분석·활용 공모전 우수사례부문 우수상), 안효정 외 2인', en: 'Minister’s Award (Excellence, Data Analysis & Utilization Contest — Best-Practice Category), H. Ahn et al.' }, org: { ko: '과학기술정보통신부', en: 'Ministry of Science and ICT' } },
    { date: '2021.11.18', name: { ko: '약진 멘토상 (취업멘토링 과제 최우수멘토 선정)', en: 'Rising Mentor Award (Best Mentor, Career Mentoring Program)' }, org: { ko: '한국여성과학기술인육성재단', en: 'Center for Women in Science, Engineering and Technology (WISET)' } },
    { date: '2019.10.10', name: { ko: '30주년 기념 원장표창장 (우수연구상)', en: 'President’s Commendation, 30th Anniversary (Outstanding Research Award)' }, org: { ko: '한국항공우주연구원', en: 'Korea Aerospace Research Institute (KARI)' } },
    { date: '2019.05.16', name: { ko: '감사장', en: 'Certificate of Appreciation' }, org: { ko: '대전광역시경찰청장', en: 'Commissioner, Daejeon Metropolitan Police Agency' } },
    { date: '2018.12.27', name: { ko: '우수논문상 (2018년 추계학술대회 우수논문 선정)', en: 'Best Paper Award (2018 Autumn Conference)' }, org: { ko: '한국신재생에너지학회', en: 'Korea Society of New & Renewable Energy' } },
    { date: '2013.04.26', name: { ko: '장관표창 (KC-100 항공기 형식인증 유공 포상)', en: 'Minister’s Commendation (Contribution to KC-100 Aircraft Type Certification)' }, org: { ko: '국토교통부', en: 'Ministry of Land, Infrastructure and Transport' } },
  ],

  // 학술 활동 (group·items 는 언어별 배열)
  service: [
    {
      group: 'Editorial & Journal Activities',
      items: {
        ko: [
          'Guest Editor-in-Chief, Acta Astronautica (Special Edition) | Mar. 2026 – Present',
          'Editor, Astrodynamics | Mar. 2026 – Present',
          'Editorial Board Member, GEO DATA Journal | 2022 – 2025',
        ],
        en: [
          'Guest Editor-in-Chief, Acta Astronautica (Special Edition) | Mar. 2026 – Present',
          'Editor, Astrodynamics | Mar. 2026 – Present',
          'Editorial Board Member, GEO DATA Journal | 2022 – 2025',
        ],
      },
    },
    {
      group: 'Academic Leadership & Committee Service',
      items: {
        ko: [
          'Selection Committee Member (International Review Panel), NSERC–NSTC Joint Research Program on Semiconductors and Artificial Intelligence — Natural Sciences and Engineering Research Council of Canada (NSERC) & National Science and Technology Council (NSTC), Taiwan, 2026',
          'Co-chair, IAA SpaceAI Conference (South Korea) | 2025 – 2026',
          '한국항공우주학회 평의원 | 2025.09 – 현재',
          '한국항공우주학회 항공우주정보AI활용 부문위원회 간사 | 2023.03 – 2025.11',
        ],
        en: [
          'Selection Committee Member (International Review Panel), NSERC–NSTC Joint Research Program on Semiconductors and Artificial Intelligence — Natural Sciences and Engineering Research Council of Canada (NSERC) & National Science and Technology Council (NSTC), Taiwan, 2026',
          'Co-chair, IAA SpaceAI Conference (South Korea) | 2025 – 2026',
          'Board Member, Korean Society for Aeronautical & Space Sciences (KSAS) | Sep 2025 – Present',
          'Secretary, Aerospace Information & AI Applications Committee, KSAS | Mar 2023 – Nov 2025',
        ],
      },
    },
  ],

  // 국제 학회 발표 (주저자 기준, selected) — 영문 공통
  conferences: [
    'Ahn, Hyojung, “Advancing Aerospace Intelligence: Integration of On-Device and Broad AI Technologies for Real-Time Decision-Making.” CKC 2025, Montreal, Canada.',
    'Ahn, Hyojung, “From Drones to Deep Space — Integrating Algorithmic Lightweighting and Neuromorphic Computing.” 2nd IAA Conference on AI in and for Space, 2025, Suzhou, China. (Invited Keynote Speaker)',
    'Ahn, Hyojung. “AI-Based System Anomaly Detection and Monitoring Method Using Korea Pathfinder Lunar Orbiter (KPLO) Operation Data.” IAC 2024, Milan, Italy.',
    'Ahn, Hyojung; Chung, Sonia. “Reducing Annotation Effort for Deep Change Detection Neural Networks Using Segmentation-Based Approaches.” IAC 2023, Baku, Azerbaijan.',
    'Ahn, Hyojung; Yu, J.; Yeom, J. “Deep Learning-Based Prediction of Solar Surface Irradiance Using Geostationary Satellite Images.” IEEE SOSE 2022, Rochester, USA.',
    'Seo, One; Kim, Hanna; Ahn, Hyojung, “Toward MRO Strategies for Urban Air Mobility.” BIEN 2021, Daejeon, Korea.',
    'Kim, Hanna; Seo, One; Ahn, Hyojung, “Research Trends for Big-Data Quality Standardization for AI Applications.” BIEN 2021, Daejeon, Korea.',
    'Jung, Hee-young; Ahn, Hyojung, “Research Trends in Bearings for Liquid Rocket Engine Turbopumps.” BIEN 2021, Daejeon, Korea.',
    'Ahn, Hyojung. “Deep Learning-Based Anomaly Detection for a Vehicle in a Swarm Drone System.” ICUAS 2020, Athens, Greece.',
    'Ahn, Hyojung; Choi, Han-Lim; Joo, Ganghyuk. “Toward Machine Learning-Based Anomaly Detection for Swarm Drones.” APISAT 2019, Gold Coast, Australia.',
    'Ahn, Hyojung. “Development of Quantitative Risk Management Method for Decision Making.” IAC 2018, Bremen, Germany.',
    'Ahn, Hyojung. “Risk Analysis for Recovery Types of Reusable Launch Vehicles.” International Conference of Women Scientists and Engineers (BIEN), Seoul, Korea, 2017.',
    'Ahn, Hyojung; Kim, Hongbae; Choi, Han-Lim. “Integrated Risk Management Method for Multiple Aerospace Projects Based on Risk-Informed Decision Making.” APISAT 2017, Seoul, Korea.',
    'Ahn, Hyojung. “Development of Fuel System and Engine Test for Remotely Piloted Aircraft.” International Conference on Mechanical and Aerospace Engineering, London, UK, 2016.',
    'Ahn, Hyojung; Park, Jonghyuk. “UAS Certification System and Airworthiness Standards.” Asian-Pacific Conference on Aerospace Technology and Science, Jeju, Korea, May 2015.',
    'Ahn, Hyojung. “Status of Aviation Biofuel Development and Certification.” APNN & MAPWiST 2014, Seoul, Korea.',
    'Ahn, Hyojung; Park, Jonghyuk. “Status of Aerospace Safety Management and Assurance and Proposed Domestic Organizational Framework.” BIEN 2013, Seoul, Korea.',
    'Ahn, Hyojung; Cha, SukWon. “Analysis of Performance and Thermal-Fluid Characteristics in a Planar-Type SOFC.” ASME Fuel Cell Science, Engineering & Technology Conference, New York, USA, June 18, 2007.',
  ],

  // 국내 학회 발표 (요약)
  domesticConferences: {
    ko: [
      '2007년 이후 우주항공, 신재생에너지, UAS 정책, 우주항공 시스템을 위한 AI 분야에서 100회 이상 발표하였습니다.',
      '전기추진 항공기, 연료전지·태양광 하이브리드 시스템, UAS 인증, 머신러닝 기반 이상 탐지, 위성 기반 일사량 예측, 우주 응용을 위한 뉴로모픽 AI 등을 다루었습니다.',
      '최근에는 미래 우주 임무를 위한 AI·뉴로모픽 기술을 주제로 다수의 초청 발표를 수행해왔습니다.',
    ],
    en: [
      'Since 2007, she has given more than 100 presentations in aerospace, renewable energy, UAS policy, and AI for aerospace systems.',
      'Topics include electric-propulsion aircraft, fuel-cell·solar hybrid systems, UAS certification, machine-learning-based anomaly detection, satellite-based solar-irradiance prediction, and neuromorphic AI for space applications.',
      'Recently, she has delivered numerous invited talks on AI and neuromorphic technologies for future space missions.',
    ],
  },

  // 주요 논문 (SCI(E), 주저자 기준, selected) — 영문 공통
  publications: [
    {
      authors: 'H. Ahn, J. Yu, C. Lee',
      title:
        'A measurement protocol and multimodal UAV telemetry dataset for fault observability under real-flight and safety-constrained test conditions',
      venue: 'Measurement (Article 122820)',
      year: 2026,
    },
    {
      authors: 'Hyojung Ahn',
      title:
        'On-device generative anomaly detection for unmanned aerial vehicle telemetry using memristor analog compute-in-memory',
      venue: 'Engineering Applications of Artificial Intelligence',
      year: 2026,
    },
    {
      authors: 'Hyuntae Bang, Angelo Lerro, Wonkeun Youn, Hyojung Ahn',
      title:
        'Robust Synthetic Air Data Estimation via Kalman-Aided Deep Learning Approach for Analytical Redundancy',
      venue: 'IEEE Sensors Journal',
      year: 2026,
    },
    {
      authors: 'Hyojung Ahn, Jiwon Lee',
      title:
        'An Objective-Dependent and Reproducible Framework for AI Dataset Quality Assessment: In-Domain and Cross-Dataset Evidence From Building-Footprint Segmentation',
      venue: 'IEEE Access',
      year: 2026,
    },
    {
      authors: 'Sunyoung Kim, Hyojung Ahn',
      title:
        'Integrating Risk Assessment and Deep Learning-Based Anomaly Detection for Efficient Risk-Informed Decision Making for Swarm Flight Robot Systems',
      venue: 'IEEE Transactions on Aerospace and Electronic Systems',
      year: 2025,
    },
    {
      authors: 'Ari Yu, Seungwan Woo, Hyojung Ahn',
      title:
        'Toward transforming space exploration with artificial intelligence neuromorphic computing',
      venue: 'Engineering Applications of Artificial Intelligence',
      year: 2025,
    },
    {
      authors:
        'Wenting Zheng, Keonwoo Park, Joo-Hong Lee, Hae-Jun Seok, Sung-Kwang Jung, Seung-Gu Choi, Han-Ki Kim, Hyojung Ahn, Jin-Wook Lee',
      title:
        'Balancing structural formability and lattice microstrain in methylammonium-free wide bandgap perovskites',
      venue: 'Journal of Physics: Energy',
      year: 2025,
    },
    {
      authors: 'Hyojung Ahn, S. Chung',
      title:
        'Deep learning-based anomaly detection for individual drone vehicles performing swarm missions',
      venue: 'Expert Systems with Applications',
      year: 2024,
    },
    {
      authors: 'Hyojung Ahn, S. Chung, S. Park, D. Kim',
      title:
        'Focused information learning method for change detection based on segmentation with limited annotations',
      venue: 'International Journal of Applied Earth Observation and Geoinformation',
      year: 2024,
    },
    {
      authors: 'Hyojung Ahn, Jeongmin Yu, Jonghan Ko, Jong-Min Yeom',
      title:
        'Enhanced Short-term Prediction of Solar Radiation Using HRNet Model with Geostationary Satellite Data',
      venue: 'IEEE Geoscience and Remote Sensing Letters',
      year: 2024,
    },
    {
      authors: 'Seonggwang Jung, et al., Hyojung Ahn',
      title:
        'Effects of MgF₂ anti-reflection coating on optical losses in metal halide perovskite solar cells',
      venue: 'Nanotechnology',
      year: 2024,
    },
    {
      authors: 'Hyojung Ahn, Inchoon Yeo',
      title:
        'Deep-Learning-Based Approach to Anomaly Detection Techniques for Large Acoustic Data in Machine Operation',
      venue: 'Sensors',
      year: 2021,
    },
    {
      authors: 'Hyojung Ahn, Dawoon Jung, Han-Lim Choi',
      title:
        'Deep Generative Models-Based Anomaly Detection for Spacecraft Control Systems',
      venue: 'Sensors',
      year: 2020,
    },
    {
      authors: 'Hyojung Ahn, Han-Lim Choi, Minguk Kang, SungTae Moon',
      title:
        'Learning-based anomaly detection and monitoring for swarm drone flights',
      venue: 'Applied Sciences',
      year: 2019,
    },
    {
      authors: 'Hyojung Ahn, Hongbae Kim, Han-Lim Choi',
      title:
        'Integrated risk management method development for multiple aerospace projects using a single index expression',
      venue: 'International Journal of Aeronautical and Space Sciences',
      year: 2018,
    },
    {
      authors: 'Hyojung Ahn',
      title:
        'Analysis of performance and thermal-fluid characteristics in a planar-type solid oxide fuel cell',
      venue: 'Journal of Fuel Cell Science and Technology',
      year: 2012,
    },
  ],

  // 공동저자 논문 (Co-author, selected) — 영문 공통
  coAuthorPublications: [
    {
      authors: 'Seokman Hong, et al., Hyojung Ahn',
      title:
        'Realization of selector-memory bi-functionality with self-current regulation utilizing poly-crystalline GST electrolyte for memristor hardware development',
      venue: 'Advanced Materials Interfaces',
      year: 2024,
    },
    {
      authors: 'J. Kang, et al., Hyojung Ahn',
      title:
        'Monolithic 3D integration of 2D materials-based electronics toward ultimate edge computing solutions',
      venue: 'Nature Materials',
      year: 2023,
    },
    {
      authors: 'S. Han, Y. Meng, Z. Xu, J.S. Kim, Y. Li, I.P. Roh, Hyojung Ahn, D.H. Kim, S.H. Bae',
      title: 'Freestanding membranes for unique functionality in electronics',
      venue: 'ACS Applied Electronic Materials',
      year: 2023,
    },
  ],

  // 국내 학술지 논문 (selected) — 영문 공통
  domesticPublications: [
    'Ku, SungKwan; Ahn, Hyojung; Joo, Yohann; Hong, Seokmin. “Test and Evaluation Methods for Navigation System Errors of Small UAVs.” Journal of Korean Navigation and Port Research, 2021.',
    'Kim, Myungeon; Ahn, Hyojung. “Status of Quality Management and Validation of AI Data.” GEO Data Journal, 2021.',
    'Ku, SungKwan; Ahn, Hyojung; Kim, Dohyun. “Evaluation of Navigation Error Requirements in UTM Environments Using the SE Process.” Journal of Korean Navigation and Port Research, 28(4): 47–54, 2020.',
    'Ku, SungKwan; Ahn, Hyojung; Lee, DongJin. “Influencing Factors of Low-Altitude Unmanned Aircraft Navigation Using AHP.” International Promotion Agency of Culture Technology, 8(1): 173–181, 2020.',
    'Ahn, Hyojung. “Machine-Learning-Based Anomaly Diagnosis Techniques for Aerospace Systems.” Aerospace Technology & Information, 26(3): 25–30, 2019.',
    'Ahn, Hyojung; Won, Jungyoon. “Trends in ICAO Policy Development for Unmanned Aircraft Systems.” Transactions of the Korean Society of Mechanical Engineers C, 4(2): 117–122, 2016.',
    'Ahn, Hyojung. “A Study on Category Classification of Civil Unmanned Aircraft Systems.” Journal of the Korean Society for Aeronautical & Space Sciences, 43(7): 657–667, 2015.',
    'Ahn, Hyojung; Park, Jonghyuk. “Regulatory Status and Certification Approaches for Small Unmanned Aerial Vehicles.” Transactions of the Korean Society of Mechanical Engineers C, 3(1): 71–78, 2015.',
    'Ahn, Hyojung; Park, Jonghyuk; Yoo, Seungwoo. “Trends in Certification Systems and Regulations for Civil Unmanned Aircraft Systems.” Journal of the Korean Society for Aeronautical & Space Sciences, 42(10): 893–901, 2014.',
    'Ahn, Hyojung. “Status of Fuel Cell Development and Certification for Aircraft Applications.” Aerospace Promotion, 61(2): 81–91, 2013.',
    'Ahn, Hyojung. “A Study on the Development Status of Electric Propulsion Aircraft.” Aerospace Technology & Information, 19(4): 41–45, 2012.',
    'Ahn, Hyojung; Park, Jonghyuk. “Proposal for a Korean Commercial Space Transportation Act Based on U.S. Legislative Analysis.” Journal of Aerospace System Engineering, 5(1): 24–29, 2011.',
    'Ahn, Hyojung; Park, Jonghyuk. “Market Analysis and Future Outlook of the Commercial Space Transportation Industry.” Aerospace Promotion, 57: 131–145, 2011.',
    'Ahn, Hyojung. “Operational Concept of High-Altitude Long-Endurance Solar UAV Using Directed Energy.” New & Renewable Energy, 7(3): 59–66, 2011.',
    'Ahn, Hyojung; Cha, Sukwon. “Thermal-Fluid Analysis and Performance Evaluation of Planar Solid Oxide Fuel Cells (Single-Channel and Multi-Channel).” Transactions of the Korean Society of Mechanical Engineers B, 31(12): 1033–1041, 2007.',
    'Ahn, Hyojung; Ji, Hyunjin; Bae, Jungmyun; Cha, Sukwon. “Control Strategy and Performance Evaluation of a Fuel-Cell–Solar-Cell Hybrid Vehicle.” Transactions of the Korean Society of Mechanical Engineers B, 31(10): 840–847, 2007.',
  ],

  // 주요 특허 (등록, selected)
  patents: {
    international: [
      { title: 'ELECTRIC AIRCRAFT (PCT/KR2022/012319)', country: { ko: 'PCT', en: 'PCT' }, date: '2022.08' },
      { title: '用于再生型燃料电池的单组元推进剂系统及利用其的单组元推进方法', country: { ko: '중국', en: 'China' }, date: '2021.02' },
      { title: 'MONOPROPELLANT SYSTEM FOR REGENERATIVE FUEL CELL AND METHOD FOR MONO-PROPULSION USING SAME', country: { ko: '미국', en: 'USA' }, date: '2020.07' },
      { title: 'Method for controlling solar panels in a solar propelled aircraft', country: { ko: '미국', en: 'USA' }, date: '2017.10' },
      { title: 'Solar propelled aircraft structure and solar panels control method', country: { ko: '미국', en: 'USA' }, date: '2017.01' },
    ],
    domestic: [
      { title: { ko: '부착형 진단 디바이스', en: 'Attachable Diagnostic Device' }, date: '2025.08' },
      { title: { ko: '군집 시스템에서 개별 이동체의 이상 탐지 방법 및 장치', en: 'Method and Apparatus for Anomaly Detection of Individual Vehicles in a Swarm System' }, date: '2024.05' },
      { title: { ko: '전기추진 항공기', en: 'Electric-Propulsion Aircraft' }, date: '2023.07' },
      { title: { ko: '우주탐사장비의 이상 검출 방법', en: 'Anomaly Detection Method for Space-Exploration Equipment' }, date: '2022.08' },
      { title: { ko: '무인 비행체를 이용한 감시 정찰 대응 방법 및 감시 정찰 대응 시스템', en: 'Surveillance-Reconnaissance Countermeasure Method and System Using Unmanned Aerial Vehicles' }, date: '2022.02' },
      { title: { ko: '통합 위험 관리 방법 및 시스템', en: 'Integrated Risk Management Method and System' }, date: '2021.08' },
      { title: { ko: '군집 시스템에서 실시간 이상 탐지 방법 및 장치', en: 'Real-Time Anomaly Detection Method and Apparatus in a Swarm System' }, date: '2020.10' },
      { title: { ko: '전지 연결 구조체 및 이의 제조 방법', en: 'Battery Connection Structure and Manufacturing Method Thereof' }, date: '2019.01' },
      { title: { ko: '무인항공기 및 그 제어방법', en: 'Unmanned Aerial Vehicle and Control Method Thereof' }, date: '2017.10' },
      { title: { ko: '고체산화물연료전지시스템의 급속 시동 장치 및 이를 이용한 고체산화물연료전지시스템의 급속 시동 방법', en: 'Rapid Start-up Device for a Solid Oxide Fuel Cell System and Rapid Start-up Method Using the Same' }, date: '2017.06' },
      { title: { ko: '재생형 연료전지용 단일추진제 시스템 및 이를 이용한 단일 추진 방법', en: 'Monopropellant System for Regenerative Fuel Cells and Mono-Propulsion Method Using the Same' }, date: '2016.07' },
      { title: { ko: '무인시스템 및 무인시스템의 신호 전달방법', en: 'Unmanned System and Signal Transmission Method for Unmanned Systems' }, date: '2015.12' },
      { title: { ko: '태양광 추진 항공기 구조 및 태양 전지판 제어 방법', en: 'Solar-Propelled Aircraft Structure and Solar Panel Control Method' }, date: '2013.10' },
      { title: { ko: '지향성 에너지를 이용한 태양광 항공기의 전원공급시스템', en: 'Power Supply System for Solar Aircraft Using Directed Energy' }, date: '2013.01' },
    ],
  },
}

// ── 팀 구성원 (학부연구생) ──
const undergradRole = { ko: '연구원', en: 'Researcher' }
export const members = [
  {
    name: '강다연',
    nameEn: 'Kang Dayeon',
    role: undergradRole,
    group: 'Undergraduate Researcher',
    photo: photoKangDayeon,
    email: '',
  },
  {
    name: '고영석',
    nameEn: 'Ko Yeongseok',
    role: undergradRole,
    group: 'Undergraduate Researcher',
    photo: photoKoYongseok,
    email: '',
  },
  {
    name: '김지민',
    nameEn: 'Kim Jimin',
    role: undergradRole,
    group: 'Undergraduate Researcher',
    photo: photoKimJimin,
    email: '',
  },
  {
    name: '변수아',
    nameEn: 'Byeon Sua',
    role: undergradRole,
    group: 'Undergraduate Researcher',
    photo: photoByeonSua,
    email: '',
  },
  {
    name: '한지원',
    nameEn: 'Han Jiwon',
    role: undergradRole,
    group: 'Undergraduate Researcher',
    photo: photoHanJiwon,
    email: '',
  },
]

// ── 전문인력 (박사후연구원 · 스태프) ──
export const postdocs = [
  {
    name: 'Arshad Farhad, PhD',
    role: { ko: '박사후연구원', en: 'Post-doctoral Researcher' },
    affiliation: 'SPACE-AI Lab',
    period: 'Aug. 2026 – Present',
    previous: {
      affiliation: 'Assistant Professor, Bahria University, Islamabad, Pakistan',
      period: 'Sept. 2024 – July 2026',
    },
    photo: photoArshad,
    email: '',
  },
  {
    name: '김륜희',
    nameEn: 'Kim Ryunhee',
    role: { ko: '스태프', en: 'Staff' },
    group: 'Staff',
    photo: photoKimRyunhee,
    email: '',
  },
]
