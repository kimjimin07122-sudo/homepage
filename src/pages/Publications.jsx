import PageHeader from '../components/PageHeader'
import { publications } from '../data/publications'
import { useT } from '../lang/LanguageContext'

export default function Publications() {
  const t = useT()
  // 연도별 그룹핑 (내림차순)
  const byYear = publications.reduce((acc, p) => {
    ;(acc[p.year] ??= []).push(p)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <>
      <PageHeader
        eyebrow={t('Publications', '')}
        title={t('논문 및 성과', 'Publications')}
        /* \n 은 CSS 의 white-space: pre-wrap 이 줄바꿈으로 처리 */
        desc={t(
          'SPACE-AI Lab의 연구는 다양한 실제 시스템 데이터를 인공지능으로 해석하고,\n' +
            '모델의 신뢰성과 현장 적용성을 높이는 데 초점을 둡니다.',
          'SPACE-AI Lab’s research focuses on interpreting data from diverse real systems with AI\n' +
            'and improving model reliability and real-world applicability.',
        )}
      />

      <section className="section">
        <div className="container">
          {/* 연구 소개 — 목록이 채워져도 계속 보이도록 조건문 바깥에 */}
          <div className="pub-intro" data-reveal>
            <p>
              {t(
                '연구결과는 데이터 품질, 산업기계 진단, 영상분석, 에너지 예측, 자율시스템, 생성형 AI, 뉴로모픽 컴퓨팅과 첨단 전자소자 분야의 국제학술지에 발표되었습니다.',
                'Our results have been published in international journals in the fields of data quality, industrial machinery diagnostics, image analysis, energy prediction, autonomous systems, generative AI, neuromorphic computing, and advanced electronic devices.',
              )}
            </p>
          </div>

          {publications.length === 0 && (
            <p className="note" data-reveal>
              <i className="fa-solid fa-circle-info"></i>{' '}
              {t('논문 목록은 추후 업데이트될 예정입니다.', 'The publication list will be updated soon.')}
            </p>
          )}

          {publications.length > 0 && (
            <div className="pub-list">
              {years.map((year) => (
                <div className="pub-year" key={year} data-reveal>
                  <h2 className="pub-year__label">{year}</h2>
                  <ul>
                    {byYear[year].map((p, i) => (
                      <li className="pub" key={i}>
                        <span className="pub__type">{p.type}</span>
                        <div className="pub__main">
                          <h3 className="pub__title">
                            {p.link ? (
                              <a href={p.link} target="_blank" rel="noreferrer">
                                {p.title}
                              </a>
                            ) : (
                              p.title
                            )}
                            {p.award && (
                              <span className="pub__award">
                                <i className="fa-solid fa-trophy"></i> {p.award}
                              </span>
                            )}
                          </h3>
                          <p className="pub__authors">{p.authors}</p>
                          <p className="pub__venue">{p.venue}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
