import PageHeader from '../components/PageHeader'
import { professor as p } from '../data/people'
import { useLang, useT } from '../lang/LanguageContext'

export default function Professor() {
  const { lang } = useLang()
  const t = useT()
  const mainName = lang === 'en' ? p.nameEn : p.name
  const subName = lang === 'en' ? '' : p.nameEn // EN 모드에서는 한글명 제거

  return (
    <>
      <PageHeader
        eyebrow={t('People · Professor', '')}
        title={t('지도교수', 'People · Professor')}
      />

      <section className="section">
        <div className="container">
          {/* ── 프로필 카드 ── */}
          <div className="prof" data-reveal>
            <div className="prof__photo-wrap">
              <img src={p.photo} alt={`${mainName}`} className="prof__photo" />
            </div>

            <div className="prof__intro">
              <h2 className="prof__name">
                {mainName}
                {subName && <span className="prof__name-en">{subName}</span>}
              </h2>
              <p className="prof__title">{t(p.title)}</p>
              <p className="prof__bio">{t(p.bio)}</p>

              <ul className="prof__contact">
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <span>{t(p.phone)}</span>
                </li>
                <li>
                  <i className="fa-solid fa-door-open"></i>
                  <span>{t('연구실', 'Office')} {t(p.office)}</span>
                </li>
                {p.scholar && (
                  <li>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <a href={p.scholar} target="_blank" rel="noreferrer">
                      Google Scholar
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* ── 학력 & 경력 ── */}
          <div className="prof-cols">
            <div className="prof-block" data-reveal>
              <h3 className="prof-block__title">
                <i className="fa-solid fa-user-graduate"></i> {t('학력', 'Education')}
              </h3>
              <ul className="timeline">
                {p.education.map((e) => (
                  <li key={e.dept.en}>
                    <span className="timeline__tag">{t(e.degree)}</span>
                    <span className="timeline__text">{t(e.dept)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prof-block" data-reveal>
              <h3 className="prof-block__title">
                <i className="fa-solid fa-briefcase"></i> {t('주요 경력', 'Experience')}
              </h3>
              <ul className="timeline">
                {p.career.map((c) => (
                  <li key={c.org.en}>
                    <span className="timeline__period">{t(c.period)}</span>
                    <span className="timeline__text">{t(c.org)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 보유 자격 & 수상 경력 ── */}
          <div className="prof-cols">
            <div className="prof-block" data-reveal>
              <h3 className="prof-block__title">
                <i className="fa-solid fa-certificate"></i> {t('보유 자격', 'Certifications')}
              </h3>
              <ul className="timeline">
                {p.certifications.map((c) => (
                  <li key={c.name.en}>
                    <span className="timeline__period">{t(c.period)}</span>
                    <span className="timeline__text">{t(c.name)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prof-block" data-reveal>
              <h3 className="prof-block__title">
                <i className="fa-solid fa-award"></i> {t('수상 경력', 'Awards')}
                <span className="prof-block__sub">selected</span>
              </h3>
              <ul className="award-list">
                {p.awards.map((a) => (
                  <li key={a.date + a.name.en}>
                    <span className="award__date">{a.date}</span>
                    <div>
                      <p className="award__name">{t(a.name)}</p>
                      <p className="award__org">{t(a.org)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 학술 활동 ── */}
          <div className="prof-block" data-reveal>
            <h3 className="prof-block__title">
              <i className="fa-solid fa-users-between-lines"></i> {t('학술 활동', 'Academic Service')}
            </h3>
            <div className="prof-cols">
              {p.service.map((s) => (
                <div key={s.group}>
                  <h4 className="patent-group">{s.group}</h4>
                  <ul className="service-list">
                    {t(s.items).map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── 주요 논문 ── */}
          <div className="prof-block" data-reveal>
            <h3 className="prof-block__title">
              <i className="fa-solid fa-file-lines"></i> {t('주요 논문', 'Selected Publications')}
              <span className="prof-block__sub">{t('SCI(E), 주저자 기준 · selected', 'SCI(E), first/corresponding author · selected')}</span>
            </h3>
            <ul className="paper-list">
              {p.publications.map((pub, i) => (
                <li className="paper" key={i}>
                  <p className="paper__title">{pub.title}</p>
                  <p className="paper__authors">{pub.authors}</p>
                  {/* 연도는 저널명 뒤에 표기 — "저널명, 2026." */}
                  <p className="paper__venue">
                    {pub.venue}, {pub.year}.
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 주요 특허 ── */}
          <div className="prof-block" data-reveal>
            <h3 className="prof-block__title">
              <i className="fa-solid fa-lightbulb"></i> {t('주요 특허', 'Selected Patents')}
              <span className="prof-block__sub">{t('등록 · selected', 'registered · selected')}</span>
            </h3>

            <div className="prof-cols">
              <div>
                <h4 className="patent-group">{t('국외 특허', 'International Patents')}</h4>
                <ul className="patent-list">
                  {p.patents.international.map((pt, i) => (
                    <li key={i}>
                      <span className="patent-list__country">{t(pt.country)}</span>
                      <span className="patent-list__title">{pt.title}</span>
                      <span className="patent-list__date">{pt.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="patent-group">{t('국내 특허', 'Domestic Patents')}</h4>
                <ul className="patent-list">
                  {p.patents.domestic.map((pt, i) => (
                    <li key={i}>
                      <span className="patent-list__title">{t(pt.title)}</span>
                      <span className="patent-list__date">{pt.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── 국제 학회 발표 ── */}
          <div className="prof-block" data-reveal>
            <h3 className="prof-block__title">
              <i className="fa-solid fa-microphone-lines"></i> {t('국제 학회 발표', 'International Conferences')}
              <span className="prof-block__sub">{t('주저자 기준 · selected', 'first author · selected')}</span>
            </h3>
            <ul className="conf-list">
              {p.conferences.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* ── 국내 학회 발표 ── */}
          <div className="prof-block" data-reveal>
            <h3 className="prof-block__title">
              <i className="fa-solid fa-comments"></i> {t('국내 학회 발표', 'Domestic Conferences')}
              <span className="prof-block__sub">{t('요약', 'summary')}</span>
            </h3>
            <ul className="conf-list">
              {t(p.domesticConferences).map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
