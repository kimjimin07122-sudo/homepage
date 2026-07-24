import GeoPattern from './GeoPattern'
import { useT } from '../lang/LanguageContext'

/**
 * 연구 분야 카드가 오른쪽 → 왼쪽으로 흐르는 마퀴.
 *
 * 이음매 없이 반복하려면 이동량이 "한 세트"와 정확히 일치해야 한다.
 * flex gap 을 쓰면 트랙의 50% 가 한 세트와 어긋나므로,
 * 카드 묶음을 그룹으로 감싸고 그룹에 padding-right(=gap)을 줘서
 * translateX(-50%) = 정확히 그룹 하나가 되게 만든다.
 *
 * 클릭 반응 없음(정보 전달용). 상세는 Research 페이지에서.
 */

function Tile({ area, index }) {
  const t = useT()
  return (
    <article className="rtile">
      <div className={`rtile__art geo-${(index % 5) + 1}`}>
        <GeoPattern index={index} w={300} h={140} />
        <span className="rtile__no">{area.no}</span>
      </div>
      <div className="rtile__body">
        <h3 className="rtile__title">{t(area.title)}</h3>
        {t(area.subtitle) && <p className="rtile__sub">{t(area.subtitle)}</p>}
      </div>
    </article>
  )
}

export default function ResearchMarquee({ areas }) {
  // 같은 그룹을 두 번 깔고 -50% 이동 → 이음매 없음
  const group = (hidden) => (
    <div className="rmarquee__group" aria-hidden={hidden || undefined}>
      {areas.map((area, i) => (
        <Tile key={area.id} area={area} index={i} />
      ))}
    </div>
  )

  return (
    <div className="rmarquee">
      <div className="rmarquee__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
