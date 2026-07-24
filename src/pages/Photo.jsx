import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { photos } from '../data/photos'
import { useT } from '../lang/LanguageContext'

const PAGE_SIZE = 6

export default function Photo() {
  const t = useT()
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)

  const totalPages = Math.max(1, Math.ceil(photos.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const pagePhotos = photos.slice(start, start + PAGE_SIZE)
  const emptySlots = Math.max(0, PAGE_SIZE - pagePhotos.length)

  // ESC 로 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <PageHeader
        eyebrow={t('Gallery', '')}
        title={t('갤러리', 'Gallery')}
        desc={t(
          '연구실의 활동 모습을 사진으로 전해드립니다.',
          'Moments from the lab, in pictures.',
        )}
      />

      <section className="section">
        <div className="container">
          <div className="photo-grid" data-reveal-stagger key={page}>
            {pagePhotos.map((p, i) => (
              <figure
                className="photo-card"
                key={start + i}
                onClick={() => setSelected(p)}
              >
                <div className="photo-card__img-wrap">
                  <img src={p.src} alt="" loading="lazy" />
                </div>
                <figcaption>{p.date}</figcaption>
              </figure>
            ))}

            {Array.from({ length: emptySlots }).map((_, i) => (
              <div className="photo-card photo-card--empty" key={`empty-${i}`}>
                <div className="photo-card__img-wrap">
                  <i className="fa-solid fa-image"></i>
                </div>
                <figcaption></figcaption>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="pager" aria-label={t('페이지', 'Pagination')}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  type="button"
                  className={`pager__btn ${page === i + 1 ? 'is-active' : ''}`}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>

      {selected && (
        <div className="modal photo-lightbox" onClick={() => setSelected(null)} role="dialog" aria-modal="true">
          <div className="photo-lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal__close photo-lightbox__close"
              onClick={() => setSelected(null)}
              aria-label={t('닫기', 'Close')}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={selected.src} alt="" />
            {selected.date && <p className="photo-lightbox__date">{selected.date}</p>}
          </div>
        </div>
      )}
    </>
  )
}
