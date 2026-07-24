import { profilePlaceholder } from '../data/people'
import { useLang, useT } from '../lang/LanguageContext'

// 구성원 카드 (교수/팀원 공용)
export default function PersonCard({ person, featured = false }) {
  const { lang } = useLang()
  const t = useT()
  const photo = person.photo || profilePlaceholder

  // 이름: EN 모드에서는 한국어를 완전히 제거(영문명만). KO 모드는 한글명 + 영문 보조.
  const mainName = lang === 'en' && person.nameEn ? person.nameEn : person.name
  const subName = lang === 'en' ? '' : person.nameEn

  return (
    <article className={`person ${featured ? 'person--featured' : ''}`}>
      <div className="person__photo-wrap">
        <img
          src={photo}
          alt={`${mainName} 프로필`}
          className={`person__photo ${person.photo ? '' : 'is-placeholder'}`}
        />
      </div>

      <div className="person__body">
        <h3 className="person__name">
          {mainName}
          {subName && <span className="person__name-en">{subName}</span>}
        </h3>
        <p className="person__role">{t(person.role)}</p>

        {person.affiliation && (
          <p className="person__affiliation">{t(person.affiliation)}</p>
        )}
        {person.period && <p className="person__period">{t(person.period)}</p>}

        {person.previous && (
          <div className="person__previous">
            {person.previous.affiliation && (
              <p className="person__affiliation">{t(person.previous.affiliation)}</p>
            )}
            {person.previous.period && (
              <p className="person__period">{t(person.previous.period)}</p>
            )}
          </div>
        )}

        {person.bio && featured && <p className="person__bio">{t(person.bio)}</p>}

        {person.interests?.length > 0 && (
          <ul className="person__interests">
            {t(person.interests).map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        )}

        {(person.email || person.links?.length > 0) && (
          <div className="person__links">
            {person.email && (
              <a href={`mailto:${person.email}`} aria-label={`${person.name} 이메일`}>
                <i className="fa-solid fa-envelope"></i>
              </a>
            )}
            {person.links?.map((l) => (
              <a
                key={l.label}
                href={l.href}
                aria-label={l.label}
                target={l.href?.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <i className={l.icon}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
