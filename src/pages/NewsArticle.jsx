import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { articles } from '../data/news'
import { useT } from '../lang/LanguageContext'

export default function NewsArticle() {
  const { slug } = useParams()
  const t = useT()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="section">
        <div className="container container--narrow">
          <p className="note" data-reveal>
            <i className="fa-solid fa-circle-info"></i>{' '}
            {t('글을 찾을 수 없습니다.', 'Article not found.')}
          </p>
          <Link to="/news" className="link-arrow" data-reveal>
            <i className="fa-solid fa-arrow-left"></i> {t('목록으로', 'Back to News')}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader
        variant="article"
        eyebrow="Lab News"
        title={t(article.title)}
        desc={article.date}
      />

      <section className="section">
        <div className="container container--narrow">
          <Link to="/news" className="link-arrow" data-reveal>
            <i className="fa-solid fa-arrow-left"></i> {t('목록으로', 'Back to News')}
          </Link>

          <article className="article-body" data-reveal>
            {t(article.body).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
