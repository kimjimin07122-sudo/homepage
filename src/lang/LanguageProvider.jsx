import { useCallback, useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'

/** 언어 상태(ko/en)를 제공. localStorage 에 저장해 새로고침에도 유지된다. */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ko')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(
    () => setLang((l) => (l === 'ko' ? 'en' : 'ko')),
    [],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}
