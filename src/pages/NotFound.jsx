import { Link } from 'react-router-dom'
import { useT } from '../lang/LanguageContext'

export default function NotFound() {
  const t = useT()
  return (
    <section className="section notfound">
      <div className="container">
        <span className="notfound__code">404</span>
        <h1>{t('페이지를 찾을 수 없습니다', 'Page not found')}</h1>
        <p>{t('요청하신 페이지가 존재하지 않거나 이동되었습니다.', 'The page you requested does not exist or has moved.')}</p>
        <Link to="/" className="btn btn--primary">
          <i className="fa-solid fa-house"></i> {t('홈으로', 'Back home')}
        </Link>
      </div>
    </section>
  )
}
