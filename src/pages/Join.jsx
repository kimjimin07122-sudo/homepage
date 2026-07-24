import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Faq from '../components/Faq'
import { join } from '../data/join'
import { contact } from '../data/site'
import { useT } from '../lang/LanguageContext'

export default function Join() {
  const t = useT()
  return (
    <>
      <PageHeader
        eyebrow={t('Join Us', '')}
        title={t('지원 안내', 'Join Us')}
        desc={t(
          '대학원생 · 학부연구생 · 박사후연구원을 모집합니다.',
          'We recruit graduate students, undergraduate researchers, and postdoctoral researchers.',
        )}
      />

      <section className="section">
        <div className="container about-intro about-intro--wide">
          <div className="join-who" data-reveal-stagger>
            {t(join.welcomeWho).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <p className="about-intro__sub" data-reveal>
            {t(join.welcomeBackground)}
          </p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow={t('Experience', '')}
            title={t('연구실에서 경험할 수 있는 것', 'What You Can Experience')}
            align="center"
          />
          <div className="join-experience" data-reveal>
            {t(join.experience).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow={t('How to Apply', '')}
            title={t('지원 방법', 'How to Apply')}
            desc={t(
              '필요한 자료를 하나의 PDF 또는 압축파일로 정리하여 이메일로 제출해 주세요.',
              'Please gather the required materials into a single PDF or archive file and submit them by email.',
            )}
            align="center"
          />

          <div className="join-apply" data-reveal>
            {/* 1단계 — 제출 서류 */}
            <div className="join-step">
              <span className="join-step__no">01</span>
              <div className="join-step__body">
                <h3 className="join-step__title">{t('서류 준비', 'Prepare documents')}</h3>
                <ul className="join-docs" data-reveal-stagger>
                  {t(join.documents).map((d) => (
                    <li key={d}>
                      <i className="fa-regular fa-file-lines"></i>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2단계 — 이메일 제출 */}
            <div className="join-step">
              <span className="join-step__no">02</span>
              <div className="join-step__body">
                <h3 className="join-step__title">{t('이메일 제출', 'Submit by email')}</h3>
                <div className="join-subject">
                  <span className="join-subject__label">{t('제목', 'Subject')}</span>
                  <code>{t(join.emailSubject)}</code>
                </div>
                <a href={`mailto:${contact.email}`} className="join-subject__mail">
                  <i className="fa-solid fa-envelope"></i> {contact.email}
                </a>
              </div>
            </div>

            {/* 참고 사항 — 단계 아래로 */}
            <ul className="join-apply__notes">
              {t(join.notes).map((n, i) => (
                <li key={i}>
                  <i className="fa-solid fa-circle-info"></i> {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 자주 묻는 질문 ── */}
      <section className="section section--tint">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow={t('FAQ', '')}
            title={t('자주 묻는 질문', 'Frequently Asked Questions')}
            desc={t(
              '연구실 합류를 고민하고 있다면 먼저 확인해 보세요.',
              'If you are considering joining the lab, take a look here first.',
            )}
            align="center"
          />
          <div data-reveal>
            <Faq />
          </div>

          {/* 문의 안내 — 박스 없이 작은 문구 + 버튼 */}
          <p className="join-ask__text" data-reveal>
            {t(
              '찾으시는 답변이 없으신가요? 언제든 편하게 문의해 주세요.',
              'Can’t find the answer you’re looking for? Feel free to reach out anytime.',
            )}
          </p>
          <div className="section__cta section__cta--tight" data-reveal>
            <Link to="/contact" className="btn btn--primary">
              {t('문의하기', 'Contact us')} <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
