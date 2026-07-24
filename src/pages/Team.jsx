import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PersonCard from '../components/PersonCard'
import { members, postdocs } from '../data/people'
import { useT } from '../lang/LanguageContext'

// 탭 정의 — 배열에 추가하면 탭이 늘어남
// label(메인)은 언어별, eyebrow(보조)는 영문 고유 라벨이라 언어 공통
const GROUPS = [
  {
    key: 'postdoc',
    label: { ko: '전임 연구인력', en: 'Research Staff' },
    eyebrow: 'Research Staff',
    people: postdocs,
  },
  {
    key: 'undergrad',
    label: { ko: '연구원', en: 'Researchers' },
    eyebrow: 'Team',
    people: members,
  },
]

export default function Team() {
  const t = useT()
  // 탭 상태를 URL(?g=...)에 두면 새로고침·뒤로가기·링크 공유에도 유지된다
  const [params, setParams] = useSearchParams()
  const active =
    GROUPS.find((g) => g.key === params.get('g')) ?? GROUPS[0]

  // 같은 탭을 다시 누르면 다른 탭으로 토글
  const pick = (key) => {
    const next = key === active.key
      ? GROUPS.find((g) => g.key !== key) ?? GROUPS[0]
      : GROUPS.find((g) => g.key === key)
    setParams({ g: next.key }, { replace: true })
  }

  return (
    <>
      <PageHeader
        eyebrow={t('People · Team', '')}
        title={t('팀원', 'People · Team')}
        desc={t(
          'SPACE-AI Lab을 함께 이끌어가는 연구원들입니다.',
          'The researchers who drive SPACE-AI Lab together.',
        )}
      />

      <section className="section">
        <div className="container">
          {/* 제목 + 오른쪽 위 그룹 전환 탭 */}
          <div className="people-head">
            <div>
              {t(active.eyebrow, '') && (
                <span className="section-heading__eyebrow">{t(active.eyebrow, '')}</span>
              )}
              <h2 className="section-heading__title">{t(active.label)}</h2>
            </div>

            {/* 어느 쪽을 눌러도 전환됨 (같은 탭을 눌러도 토글) */}
            <div className="people-tabs" role="tablist">
              {GROUPS.map((g) => (
                <button
                  key={g.key}
                  type="button"
                  role="tab"
                  aria-selected={g.key === active.key}
                  className={`people-tab ${g.key === active.key ? 'is-active' : ''}`}
                  onClick={() => pick(g.key)}
                >
                  {t(g.label)}
                  <span className="people-tab__count">{g.people.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* key 를 주면 탭이 바뀔 때 등장 연출이 다시 실행됨 */}
          <div className="people-grid" key={active.key}>
            {active.people.map((p, i) => (
              <PersonCard key={i} person={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
