import PageHeader from '../components/PageHeader'
import { news, newsTagLabels } from '../data/news'
import { useT } from '../lang/LanguageContext'

export default function News() {
  const t = useT()
  // 최신순 정렬
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHeader
        eyebrow={t('News', '')}
        title={t('공지사항', 'News')}
        desc={t(
          '연구실의 소식, 모집 공고, 연구 성과를 전해드립니다.',
          'Lab updates, recruitment notices, and research achievements.',
        )}
      />

      <section className="section">
        <div className="container">
          {sorted.length === 0 ? (
            <div className="empty" data-reveal>
              <i className="fa-solid fa-bell"></i>
              <h3>{t('등록된 공지가 없습니다', 'No announcements yet')}</h3>
              <p>{t('새로운 소식이 생기면 이곳에 게시됩니다.', 'New updates will appear here.')}</p>
            </div>
          ) : (
            <ul className="news-list" data-reveal-stagger>
              {sorted.map((n, i) => (
                <li className="news" key={i}>
                  <span className={`news__tag news__tag--${n.tag}`}>{t(newsTagLabels[n.tag])}</span>
                  <span className="news__title">{t(n.title)}</span>
                  <span className="news__date">{n.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
