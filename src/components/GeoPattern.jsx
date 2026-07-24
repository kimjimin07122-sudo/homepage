/**
 * 기하 무늬 5종 — 리본 그라데이션 위에 얹는 공용 장식.
 * 카드(300×140)부터 페이지 헤더(1440×240)까지 쓰이므로
 * 모든 무늬를 폭·높이에 상대적으로 그린다.
 */

const LINE = 'rgba(255, 255, 255, 0.5)'
const FILL = 'rgba(255, 255, 255, 0.34)'

const patterns = [
  // 01 동심원 — 신호가 퍼져나가는 느낌
  (w, h) => {
    const cx = w * 0.82
    const cy = h * 0.5
    const step = Math.max(h * 0.17, 20)
    const max = Math.hypot(w, h)
    const rings = []
    for (let r = step * 0.7; r < max; r += step) rings.push(r)
    return (
      <g fill="none" stroke={LINE} strokeWidth="2">
        {rings.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    )
  },

  // 02 사선
  (w, h) => {
    const gap = Math.max(h * 0.2, 24)
    const n = Math.ceil((w + h) / gap) + 2
    return (
      <g stroke={LINE} strokeWidth={Math.max(h * 0.05, 5)}>
        {Array.from({ length: n }, (_, i) => (
          <line key={i} x1={i * gap - h} y1={h} x2={i * gap} y2={0} />
        ))}
      </g>
    )
  },

  // 03 점 격자 — 오른쪽으로 갈수록 커짐
  (w, h) => {
    const step = Math.max(h * 0.17, 20)
    const cols = Math.ceil(w / step) + 1
    const rows = Math.ceil(h / step) + 1
    const rMax = step * 0.24
    return (
      <g fill={FILL}>
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={step * 0.5 + c * step}
              cy={step * 0.5 + r * step}
              r={rMax * 0.3 + (c / Math.max(cols - 1, 1)) * rMax}
            />
          )),
        )}
      </g>
    )
  },

  // 04 삼각 지그재그
  (w, h) => {
    const bw = Math.max(h * 0.32, 36)
    const n = Math.ceil(w / bw) + 2
    return (
      <g fill={FILL}>
        {Array.from({ length: n }, (_, i) => {
          const x = i * bw - bw * 0.25
          const up = i % 2 === 0
          return (
            <polygon
              key={i}
              points={
                up
                  ? `${x},${h} ${x + bw},${h} ${x + bw / 2},${h - h * 0.46}`
                  : `${x},${h - h * 0.56} ${x + bw},${h - h * 0.56} ${x + bw / 2},${h - h * 0.1}`
              }
            />
          )
        })}
      </g>
    )
  },

  // 05 회전 중첩 사각형
  (w, h) => {
    const cx = w * 0.78
    const cy = h * 0.5
    const step = Math.max(h * 0.16, 18)
    const n = Math.ceil(Math.hypot(w, h) / step / 2) + 1
    return (
      <g fill="none" stroke={LINE} strokeWidth="2">
        {Array.from({ length: n }, (_, i) => {
          const s = step + i * step * 1.4
          return (
            <rect
              key={i}
              x={cx - s / 2}
              y={cy - s / 2}
              width={s}
              height={s}
              transform={`rotate(${i * 8} ${cx} ${cy})`}
            />
          )
        })}
      </g>
    )
  },
]

export const PATTERN_COUNT = patterns.length

export default function GeoPattern({ index = 0, w = 300, h = 140, className }) {
  const draw = patterns[index % patterns.length]
  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {draw(w, h)}
    </svg>
  )
}
