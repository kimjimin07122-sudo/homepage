import { createContext, useCallback, useContext } from 'react'

/**
 * 한국어 / 영어 전환 — context 와 훅.
 * (Provider 컴포넌트는 fast-refresh 규칙 때문에 LanguageProvider.jsx 로 분리)
 *
 * - lang: 'ko' | 'en'  (localStorage 에 저장 → 새로고침해도 유지)
 * - t(ko, en)          : 두 문자열 중 현재 언어 선택
 * - t({ ko, en })      : 이중언어 객체(데이터)에서 현재 언어 선택
 *
 * 데이터 파일은 값을 { ko, en } 형태로 두고, 화면에서 t() 로 해석한다.
 */

export const LanguageContext = createContext(null)

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

/** t('안녕', 'Hello') 또는 t({ ko:'안녕', en:'Hello' }) */
export function useT() {
  const { lang } = useLang()
  return useCallback(
    (ko, en) => {
      if (ko && typeof ko === 'object') {
        return ko[lang] ?? ko.ko ?? ko.en ?? ''
      }
      return lang === 'en' ? (en ?? ko) : ko
    },
    [lang],
  )
}
