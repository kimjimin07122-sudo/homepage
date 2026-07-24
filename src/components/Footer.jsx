import { lab, contact, socials } from '../data/site'
import { useT } from '../lang/LanguageContext'

export default function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__wordmark">
            SPACE<span>-AI</span> <em>LAB</em>
          </div>
          <p className="footer__desc">
            {t(lab.name)}
            <br />
            <span>{t(lab.department)}</span>
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                {t(contact.address)}, {t(contact.building)}
              </span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>{t(contact.phone)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {year} {lab.short} ({t(lab.name)}). All rights reserved.
        </p>
        <p>{lab.department.en}</p>
      </div>
    </footer>
  )
}
