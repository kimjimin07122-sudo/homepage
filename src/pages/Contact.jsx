import PageHeader from '../components/PageHeader'
import { contact, lab } from '../data/site'
import { useT } from '../lang/LanguageContext'

export default function Contact() {
  const t = useT()

  // contact 의 이중언어 값은 여기서 t() 로 해석 (모듈 스코프에서 하면 언어 전환이 안 됨)
  const items = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: 'fa-solid fa-phone',
      label: 'Phone',
      value: t(contact.phone),
    },
    {
      icon: 'fa-solid fa-location-dot',
      label: 'Address',
      value: t(contact.address),
      sub: t(contact.addressDetail),
    },
    {
      icon: 'fa-solid fa-building-columns',
      label: 'Office',
      value: t(contact.building),
    },
    {
      icon: 'fa-solid fa-flask',
      label: 'Lab',
      list: contact.labs.map((l) => `${t(l.name)} (${t(l.room)})`),
    },
  ]

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery,
  )}&output=embed`

  return (
    <>
      <PageHeader
        eyebrow={t('Contact', '')}
        title={t('오시는 길 · 문의', 'Contact')}
        desc={t(
          '연구실 합류, 협력 연구 및 기타 문의를 환영합니다.',
          'We welcome inquiries about joining the lab, collaborative research, and more.',
        )}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info" data-reveal>
            <h2>{lab.short}</h2>
            <p className="contact-info__dept">{t(lab.department)}</p>

            <ul className="contact-list">
              {items.map((it) => (
                <li key={it.label}>
                  <span className="contact-list__icon">
                    <i className={it.icon}></i>
                  </span>
                  <div>
                    <span className="contact-list__label">{it.label}</span>
                    {it.list ? (
                      it.list.map((v) => (
                        <span className="contact-list__value" key={v}>
                          {v}
                        </span>
                      ))
                    ) : it.href ? (
                      <a href={it.href} className="contact-list__value">
                        {it.value}
                      </a>
                    ) : (
                      <span className="contact-list__value">{it.value}</span>
                    )}
                    {it.sub && <span className="contact-list__sub">{it.sub}</span>}
                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="contact-map" data-reveal>
            <iframe
              title={t('연구실 위치', 'Lab location')}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
