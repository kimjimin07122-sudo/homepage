import { useT } from '../lang/LanguageContext'

// 상세 연구 분야 카드 — 클릭하면 모달로 세부 항목을 보여줌
export default function ResearchCard({ area, onOpen }) {
  const t = useT()
  return (
    <button className="rcard" onClick={() => onOpen(area)} type="button">
      <span className="rcard__no">{area.no}</span>
      <span className="rcard__icon">
        <i className={area.icon}></i>
      </span>
      <span className="rcard__body">
        <span className="rcard__title">{t(area.title)}</span>
        {t(area.subtitle) && <span className="rcard__subtitle">{t(area.subtitle)}</span>}
        <span className="rcard__desc">{t(area.desc)}</span>
      </span>
      <span className="rcard__more">
        {t('자세히 보기', 'Learn more')} <i className="fa-solid fa-arrow-right"></i>
      </span>
    </button>
  )
}
