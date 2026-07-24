import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 스크롤 시 요소가 나타나는 모션.
 *
 * 사용법 — JSX 에 속성만 붙이면 됩니다.
 *   <div data-reveal>          한 덩어리로 나타남
 *   <div data-reveal-stagger>  자식들이 순차적으로 나타남 (최대 8개)
 *
 * 한 번 나타난 요소는 다시 숨지 않습니다(unobserve).
 *
 * ⚠️ 주의: className 이 React state 로 바뀌는 요소에는 붙이지 마세요.
 * 여기서는 classList 로 is-visible 을 직접 넣는데, React 가 리렌더하며
 * className 을 통째로 다시 쓰면 그 클래스가 지워지고 opacity:0 이 되살아나
 * 요소가 사라집니다. 그런 요소는 감싸는 div 에 붙이거나(예: FAQ),
 * 자체 IntersectionObserver 를 쓰세요(예: About 의 approach).
 */
export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal], [data-reveal-stagger]')
    if (targets.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 모션을 줄이는 설정이거나 미지원 브라우저면 즉시 표시
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
