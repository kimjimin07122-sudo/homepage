import { useEffect } from 'react'
import { useT } from '../lang/LanguageContext'

// 연구 분야 상세 모달
export default function ResearchModal({ area, onClose }) {
  const t = useT()
  // ESC 로 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!area) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [area, onClose])

  if (!area) return null

  // 분야 번호에 맞는 포인트 색 (카드 → 모달로 색이 이어짐)
  const n = parseInt(area.no, 10)

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`modal__panel modal__panel--${n}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label={t('닫기', 'Close')}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal__head">
          <span className="modal__icon">
            <i className={area.icon}></i>
          </span>
          <div>
            <span className="modal__no">Research Area {area.no}</span>
            <h3 className="modal__title">{t(area.title)}</h3>
            {t(area.subtitle) && <p className="modal__subtitle">{t(area.subtitle)}</p>}
          </div>
        </div>

        <p className="modal__desc">{t(area.desc)}</p>

        <ul className="modal__items">
          {t(area.items).map((item) => (
            <li key={item}>
              <i className="fa-solid fa-circle-check"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
