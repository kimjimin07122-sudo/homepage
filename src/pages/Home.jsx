import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import WaveDecor from '../components/WaveDecor'
import ResearchMarquee from '../components/ResearchMarquee'
import { lab, keywords, recruit, acronym } from '../data/site'
import { researchAreas } from '../data/research'
import { news, newsTagLabels } from '../data/news'
import { useLang, useT } from '../lang/LanguageContext'
import campus from '../data/back-image-sample.jpg'

// 홈에 노출할 최신 공지 개수
const NEWS_ON_HOME = 4

// 머리글자 목록 — 반짝임을 S→P→A→C→E 순서로 흘리기 위한 순번용
const keyOrder = acronym.filter((w) => w.key)

export default function Home() {
  const t = useT()
  const { lang } = useLang()
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__inner">
          <span className="hero__badge">{t(lab.department)}</span>

          {/* hover 하면 워드마크가 왼쪽으로 빠지고, 정중앙에서 풀네임이 등장 */}
          <div className="hero__name">
            <h1 className="hero__wordmark">
              <span className="hero__wordmark-main">
                SPACE<span className="hero__wordmark-ai">-AI</span>
              </span>
              <span className="hero__wordmark-lab">Lab</span>
            </h1>

            {/* 머리글자를 강조해 SPACE 의 유래를 드러냄 */}
            <p className="hero__fullname">
              {acronym.map((word, i) => (
                <span key={i}>
                  {word.key && (
                    <span
                      className="fn__key"
                      style={{
                        // 풀네임이 뜬 뒤부터, 글자마다 밀려서 반짝이도록
                        animationDelay: `${0.74 + keyOrder.indexOf(word) * 0.16}s`,
                      }}
                    >
                      {word.key}
                    </span>
                  )}
                  {word.rest}
                </span>
              ))}
            </p>
          </div>

          {lang === 'ko' && <p className="hero__ko">{lab.name.ko}</p>}
          <p className="hero__desc">{t(lab.intro)}</p>
        </div>
      </section>

      {/* ── Keyword marquee ── */}
      <section className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="marquee__item">
              {k}
            </span>
          ))}
        </div>
      </section>

      {/* ── Intro / Stats ── */}
      <section className="section section--wave">
        <WaveDecor />
        <div className="container">
          <div className="intro-text">
            <SectionHeading
              eyebrow={t('About the Lab', '')}
              title={t('시스템 수준의 자율지능을 연구합니다', 'We research system-level autonomous intelligence')}
            />
            {t(lab.introSub).map((p, i) => (
              <p className="lead" key={i} data-reveal>
                {p}
              </p>
            ))}
            <Link to="/about" className="link-arrow" data-reveal>
              {t('더 알아보기', 'Learn more')} <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── News / 공지사항 ── */}
      {news.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <SectionHeading
              eyebrow={t('News', '')}
              title={t('공지사항', 'News')}
              desc={t('연구실의 최신 소식을 전해드립니다.', 'The latest updates from our lab.')}
              align="center"
            />
            <ul className="news-list" data-reveal-stagger>
              {news.slice(0, NEWS_ON_HOME).map((n, i) => (
                <li className="news" key={i}>
                  <span className={`news__tag news__tag--${n.tag}`}>{t(newsTagLabels[n.tag])}</span>
                  <span className="news__title">{t(n.title)}</span>
                  <span className="news__date">{n.date}</span>
                </li>
              ))}
            </ul>
            {news.length > NEWS_ON_HOME && (
              <div className="section__cta" data-reveal>
                <Link to="/news" className="btn btn--ghost">
                  {t('공지 전체 보기', 'View all news')} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Research areas — 카드가 흘러감. 상세는 Research 페이지에서 ── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t('Research', '')}
            title={t('연구 분야', 'Research')}
            desc={t('5개 분야에서 시스템 수준의 자율지능을 연구합니다.', 'We research system-level autonomous intelligence across five areas.')}
            align="center"
          />
        </div>

        <div data-reveal>
          <ResearchMarquee areas={researchAreas} />
        </div>

        <div className="container">
          <div className="section__cta" data-reveal>
            <Link to="/research" className="btn btn--primary">
              {t('연구 분야 자세히 보기', 'Explore research areas')} <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recruit / Join Us ── */}
      {recruit.open && (
        <section className="section section--tint">
          <div className="container">
            <div className="recruit" data-reveal>
              <div className="recruit__badge">
                <i className="fa-solid fa-bullhorn"></i> We are recruiting
              </div>
              <h2 className="recruit__title">{t(recruit.headline)}</h2>
              <p className="recruit__desc">{t(recruit.desc)}</p>
              <ul className="recruit__targets">
                {t(recruit.targets).map((target) => (
                  <li key={target}>
                    <i className="fa-solid fa-check"></i> {target}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn--primary">
                {t('지원 · 문의하기', 'Apply · Contact')} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Banner ──
          배경을 background-attachment:fixed 로 하면 iOS Safari 가 제대로 못 그림.
          대신 뷰포트에 고정된 요소를 두고 배너가 clip-path 로 잘라 보여준다. */}
      <section className="banner">
        <div
          className="banner__bg"
          style={{ backgroundImage: `url(${campus})` }}
        />
        <div className="banner__overlay" />
        <div className="container banner__inner" data-reveal>
          <h2>{t('실제 환경에서 인지하고, 판단하고, 행동하는 AI', 'AI that perceives, decides, and acts in the real world')}</h2>
          <p>
            {t(
              '우주항공 · 로봇 · 모빌리티 · 국방 · 보건의료까지, 다양한 공학 시스템의 신뢰할 수 있는 자율지능을 함께 연구합니다.',
              'From aerospace, robotics, and mobility to defense and healthcare — we research reliable autonomous intelligence for diverse engineered systems, together.',
            )}
          </p>
          <Link to="/contact" className="btn btn--light">
            {t('함께 연구하기', 'Join our research')} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
