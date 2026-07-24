// 하위 페이지 상단 공통 헤더 (Home 히어로와 같은 그라데이션 면)
export default function PageHeader({ eyebrow, title, desc }) {
  return (
    <header className="page-header">
      <div className="container">
        {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
        <h1 className="page-header__title">{title}</h1>
        {desc && <p className="page-header__desc">{desc}</p>}
      </div>
    </header>
  )
}
