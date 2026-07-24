import { useEffect, useRef } from 'react'

/**
 * 섹션 전체를 덮는 리본 물결 배경.
 *
 *   y(x) = 기준선(x) + 진폭(x) · sin(2πx/주기 + 위상(t))
 *
 * 기준선과 진폭에 좌→우 엔벨로프를 씌워서
 *   왼쪽 = 낮고 평평 (글씨가 놓이는 자리)
 *   오른쪽 = 높고 크게 출렁임
 * 엔벨로프는 화면에 고정되고 위상만 흐르므로 물결은 제자리에서 흘러감.
 *
 * 색은 고정된 그라데이션 색면이 담당하고,
 * 그 위를 흰 리본들이 흐르며 띠와 여백을 만든다.
 */

const W = 1440
const H = 460
const PERIOD = 520 // 물결 한 주기
const STEP = 8 // 곡선 샘플링 간격

// 좌 → 우 엔벨로프 (0 = 낮고 평평, 1 = 높고 출렁)
function smoothstep(t) {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}

// 왼쪽 40% 는 글씨 자리 → 물결을 낮고 평평하게 두고, 이후 오른쪽으로 솟아오름
function envelope(x) {
  return smoothstep((x / W - 0.4) / 0.52)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

// 곡선 하나의 y 좌표 — cfg: { yL, yR, aL, aR, ph }
function edgeY(x, cfg, phase) {
  const e = envelope(x)
  const baseline = lerp(cfg.yL, cfg.yR, e)
  const amp = lerp(cfg.aL, cfg.aR, e)
  return baseline + amp * Math.sin((2 * Math.PI * x) / PERIOD + phase + cfg.ph)
}

function edgePoints(cfg, phase, reverse = false) {
  const pts = []
  for (let x = -30; x <= W + 30; x += STEP) {
    pts.push(`${x},${edgeY(x, cfg, phase).toFixed(1)}`)
  }
  return reverse ? pts.reverse() : pts
}

// 물결 위쪽을 덮는 흰 영역
function capPath(cfg, phase) {
  return `M-30,-30 L${edgePoints(cfg, phase).join(' L')} L${W + 30},-30 Z`
}

// 두 곡선 사이의 리본 띠 (위/아래 위상이 달라 두께가 출렁이고 때때로 교차하며 좁아짐)
function bandPath(top, bot, phase) {
  return `M${edgePoints(top, phase).join(' L')} L${edgePoints(bot, phase, true).join(' L')} Z`
}

const LAYERS = [
  {
    kind: 'cap',
    fill: '#fff',
    speed: 0.2,
    top: { yL: H - 66, yR: H - 372, aL: 2, aR: 30, ph: 0 },
  },
  {
    kind: 'band',
    fill: '#fff',
    speed: -0.28,
    top: { yL: H - 50, yR: H - 292, aL: 1.6, aR: 24, ph: 2.1 },
    bot: { yL: H - 42, yR: H - 252, aL: 1.2, aR: 18, ph: 3.7 },
  },
  {
    kind: 'band',
    fill: 'rgba(255, 255, 255, 0.55)',
    speed: 0.16,
    top: { yL: H - 31, yR: H - 196, aL: 1.2, aR: 21, ph: 5.2 },
    bot: { yL: H - 23, yR: H - 142, aL: 1, aR: 25, ph: 0.7 },
  },
  {
    kind: 'band',
    fill: '#fff',
    speed: -0.24,
    top: { yL: H - 13, yR: H - 76, aL: 0.9, aR: 14, ph: 3.1 },
    bot: { yL: H - 7, yR: H - 42, aL: 0.7, aR: 10, ph: 1.6 },
  },
]

function buildPath(layer, phase) {
  return layer.kind === 'cap'
    ? capPath(layer.top, phase)
    : bandPath(layer.top, layer.bot, phase)
}

export default function WaveDecor() {
  const hostRef = useRef(null)
  const pathRefs = useRef([])

  useEffect(() => {
    const paths = pathRefs.current
    const render = (phaseAt) =>
      LAYERS.forEach((layer, i) => {
        paths[i]?.setAttribute('d', buildPath(layer, phaseAt(layer)))
      })

    // 모션을 줄이는 설정이면 정지 화면으로 한 번만 그림
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      render(() => 0)
      return
    }

    let raf = 0
    let running = false
    const start = performance.now()

    const tick = (now) => {
      const t = (now - start) / 1000
      render((layer) => t * layer.speed)
      raf = requestAnimationFrame(tick)
    }

    const play = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(tick)
    }
    const pause = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    // 화면 밖에서는 애니메이션을 돌리지 않음
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : pause()),
      { threshold: 0 },
    )
    if (hostRef.current) io.observe(hostRef.current)

    return () => {
      io.disconnect()
      pause()
    }
  }, [])

  return (
    <div className="wave-decor" ref={hostRef} aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          {/* 좌 보라 → 파랑 → 우 민트 (화면에 고정) */}
          <linearGradient
            id="wave-ribbon"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={H}
            x2={W}
            y2="60"
          >
            <stop offset="0" stopColor="#b39cf9" />
            <stop offset="0.36" stopColor="#8ba8f2" />
            <stop offset="0.68" stopColor="#6ec6f0" />
            <stop offset="1" stopColor="#7fe3cb" />
          </linearGradient>
        </defs>

        {/* 고정 색면 */}
        <rect x="0" y="0" width={W} height={H} fill="url(#wave-ribbon)" />

        {/* 흘러가는 흰 리본들 */}
        {LAYERS.map((layer, i) => (
          <path
            key={i}
            ref={(el) => {
              pathRefs.current[i] = el
            }}
            d={buildPath(layer, 0)}
            fill={layer.fill}
          />
        ))}
      </svg>
    </div>
  )
}
