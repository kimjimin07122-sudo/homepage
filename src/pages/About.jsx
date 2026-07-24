import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ScatterDecor from '../components/ScatterDecor'
import { lab, keywords, about } from '../data/site'
import { useT } from '../lang/LanguageContext'

const DEAL_DELAY = 450 // 화면에 들어온 뒤 펼치기까지의 텀
const DEAL_DURATION = 800 // 펼침(0.6s) + 마지막 카드 지연(0.18s)

export default function About() {
  const t = useT()
  // stacked → dealt(펼치는 중) → settled(끝. 이제부터 hover 반응)
  const [dealt, setDealt] = useState(false)
  const [settled, setSettled] = useState(false)
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    // 모션 최소화 설정이면 연출 없이 바로 제자리
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDealt(true)
      setSettled(true)
      return
    }

    let dealTimer
    let settleTimer
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect() // 한 번만
        dealTimer = setTimeout(() => {
          setDealt(true)
          // 펼침이 끝난 뒤에야 hover 를 켜야 느린 전환과 겹치지 않음
          settleTimer = setTimeout(() => setSettled(true), DEAL_DURATION)
        }, DEAL_DELAY)
      },
      {
        // 화면 아래 35% 를 잘라내고 관찰 → 카드가 화면 중앙쯤 올라와야 발동
        rootMargin: '0px 0px -35% 0px',
        threshold: 0.15,
      },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      clearTimeout(dealTimer)
      clearTimeout(settleTimer)
    }
  }, [])

  return (
    <>
      <PageHeader
        eyebrow={t('About', '')}
        title={t('연구실 소개', 'About')}
        desc={lab.nameEn}
      />

      {/* 도입 — 헤드라인 + 한 문단 */}
      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow={t(about.headlineEn, '')}
            title={t(about.headlineKo, about.headlineEn)}
            desc={about.tagline}
            align="center"
          />
          <p className="about-lead" data-reveal>
            {t(about.lead)}
          </p>
        </div>
      </section>

      {/* 연구 방식 — 3단계 */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow={t('How We Work', '')}
            title={t('연구 방식', 'How We Work')}
            align="center"
          />
          <div
            className={`approach ${dealt ? 'is-dealt' : ''} ${settled ? 'is-settled' : ''}`}
            ref={gridRef}
          >
            {about.approach.map((step, i) => (
              <div className={`approach__step approach__step--${i + 1}`} key={step.no}>
                <span className="approach__no">{step.no}</span>
                <span className="approach__icon">
                  <i className={step.icon}></i>
                </span>
                <h3 className="approach__title">{t(step.title)}</h3>
                <p className="approach__desc">{t(step.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision
          섹션 전체에 깔린 배경이 좌상 · 우하 대각으로 흩어지고,
          글은 그 위 빈 대각(우상 = Mission, 좌하 = Vision)에 놓인다. */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t('Mission & Vision', '')}
            title={t('우리가 지향하는 것', 'Mission & Vision')}
            align="center"
          />
        </div>

        {/* 제목 아래 영역에만 배경이 깔리도록 별도 래퍼 */}
        <div className="mv-wrap">
          <ScatterDecor />
          <div className="container mv" data-reveal>
            <div className="mv__cell mv__cell--mission">
              <span className="mv__label">
                <i className={about.missionVision[0].icon}></i>{' '}
                {about.missionVision[0].label}
              </span>
              <h3 className="mv__headline">
                {t(about.missionVision[0].headline).map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </h3>
              {t(about.missionVision[0].body).map((p, j) => (
                <p className="mv__body" key={j}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mv__cell mv__cell--vision">
              <span className="mv__label">
                <i className={about.missionVision[1].icon}></i>{' '}
                {about.missionVision[1].label}
              </span>
              <h3 className="mv__headline">
                {t(about.missionVision[1].headline).map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </h3>
              {t(about.missionVision[1].body).map((p, j) => (
                <p className="mv__body" key={j}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 현재 대표 과제 */}

      <section className="section section--tint">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow={t('Current Projects', '')}
            title={t(about.current.title)}
            align="center"
          />
          <ul className="project-list" data-reveal-stagger>
            {t(about.current.projects).map((p) => (
              <li key={p}>
                <i className="fa-solid fa-circle-nodes"></i>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="project-note" data-reveal>
            {t(about.current.note)}
          </p>
        </div>
      </section>

      {/* 확장 방향 */}
      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow={t('Where We Go', '')}
            title={t('확장 방향', 'Where We Go')}
            align="center"
          />
          <ul className="field-chips" data-reveal>
            {t(about.outlookFields).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="about-outlook" data-reveal>
            {t(about.outlook)}
          </p>
        </div>
      </section>

      {/* 키워드 */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow={t('Keywords', '')} title={t('연구 키워드', 'Keywords')} align="center" />
          <ul className="keyword-cloud" data-reveal>
            {keywords.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>

          {/* 연구 분야 상세는 Research 페이지에서 */}
          <div className="section__cta" data-reveal>
            <Link to="/research" className="btn btn--primary">
              {t('연구 분야 자세히 보기', 'Explore research areas')} <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
