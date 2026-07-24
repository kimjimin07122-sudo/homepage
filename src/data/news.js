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
