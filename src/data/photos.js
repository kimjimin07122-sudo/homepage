// ─────────────────────────────────────────────
//  갤러리 (Gallery) — 추후 채우기
//  · 사진은 이 폴더(data/)에 넣고 아래처럼 import 해서 src 에 연결합니다.
//  · date 는 화면에 그대로 표시되는 문자열입니다 (예: '2026.05.26').
//  · 6장 단위로 페이지가 나뉘고, 6장을 못 채우면 빈 칸은 자동으로 채워집니다.
// ─────────────────────────────────────────────

import openmember from './openmember.jpg'
import sportsCompetition from './sports_competition.jpg'

export const photos = [
  {
    src: sportsCompetition,
    date: `인공지능학과 (안효정 교수, 김경언 조교, 장민주 조교) 우승
2026.10.30`,
  },
  {
    src: openmember,
    date: `연구원 단체 사진
2026.05.26`,
  },
]
