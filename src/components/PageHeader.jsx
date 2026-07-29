// 하위 페이지 상단 공통 헤더 (Home 히어로와 같은 그라데이션 면)
// variant="article": 실제 글 제목(헤드라인)이라 EN 모드 자동 파란색 강조를 적용하지 않음
export default function PageHeader({ eyebrow, title, desc, variant }) {
  return (
    <header className={`page-header ${variant ? `page-header--${variant}` : ''}`}>
      <div className="container">
        {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
        <h1 className="page-header__title">{title}</h1>
        {desc && <p className="page-header__desc">{desc}</p>}
      </div>
    </header>
  )
}
