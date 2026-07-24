// 섹션 상단 제목 (작은 라벨 + 큰 제목 + 설명)
export default function SectionHeading({ eyebrow, title, desc, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {desc && <p className="section-heading__desc">{desc}</p>}
    </div>
  )
}
