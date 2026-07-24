import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, lab } from '../data/site'
import { useLang, useT } from '../lang/LanguageContext'
import logo from '../data/logo1.gif'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // 모바일에서 펼쳐진 서브메뉴 label
  const location = useLocation()
  const { lang, toggle } = useLang()
  const t = useT()

  // 라우트 이동 시 메뉴 닫기
  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  // 스크롤 시 헤더 배경 강조
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label={lab.short}>
          <span className="nav__logo-wrap">
            <img src={logo} alt={`${lab.short} 로고`} className="nav__logo" />
          </span>
        </Link>

        <div className="nav__right">
          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={`nav__item nav__item--has-sub ${
                  openMenu === link.label ? 'is-open' : ''
                }`}
              >
                <button
                  type="button"
                  className="nav__link nav__link--parent"
                  onClick={() =>
                    setOpenMenu((m) => (m === link.label ? null : link.label))
                  }
                  aria-expanded={openMenu === link.label}
                >
                  {t(link.label)}
                  <i className="fa-solid fa-chevron-down nav__caret"></i>
                </button>

                <div className="nav__submenu">
                  {link.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `nav__sublink ${isActive ? 'is-active' : ''}`
                      }
                    >
                      {t(child.label)}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav__link ${isActive ? 'is-active' : ''}`
                }
              >
                {t(link.label)}
              </NavLink>
            ),
          )}
          </nav>

          {/* 언어 전환 — 우측 끝, 항상 표시 (people/team 탭처럼 어디를 눌러도 토글) */}
          <button
            type="button"
            className="nav__lang"
            onClick={toggle}
            aria-label={lang === 'ko' ? 'Switch to English' : '한국어로 전환'}
          >
            <span className={`nav__lang-btn ${lang === 'ko' ? 'is-active' : ''}`}>KO</span>
            <span className={`nav__lang-btn ${lang === 'en' ? 'is-active' : ''}`}>EN</span>
          </button>

          <button
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴 열기/닫기"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
