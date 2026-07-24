import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 라우트 이동 시 항상 페이지 상단으로 스크롤
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
