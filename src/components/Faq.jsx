import { useState } from 'react'
import { faq } from '../data/faq'
import { useT } from '../lang/LanguageContext'

/** 자주 묻는 질문 아코디언 — 클릭하면 답변이 펼쳐짐 */
export default function Faq() {
  const t = useT()
  const [open, setOpen] = useState(0) // 첫 항목은 열어둠

  return (
    <ul className="faq">
      {faq.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={i} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq__q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="faq__mark">Q</span>
              <span className="faq__text">{t(item.q)}</span>
              <i className="fa-solid fa-plus faq__icon"></i>
            </button>

            <div className="faq__a">
              <div className="faq__a-inner">
                {t(item.a).map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
