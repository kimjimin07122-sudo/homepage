/**
 * Mission & Vision 섹션 배경.
 *
 * 좌상 · 우하 두 덩어리가 각각 대각선 안쪽으로 흩어진다.
 * 꽉 찬 면에서 시작해 타일이 점점 작아지고 성겨지며 사라지는 형태로,
 * 완전한 평면도 아니고 각진 픽셀도 아닌 중간 질감을 노린다.
 *
 * 무늬는 좌표 기반 해시로 만들어 매 렌더 동일하다(랜덤 아님).
 */

const W = 1440
const H = 620
const CELL = 26

// 좌표 기반 결정적 해시 (0~1)
function hash(c, r, seed) {
  const v = Math.sin(c * 127.1 + r * 311.7 + seed * 74.7) * 43758.5453
  return v - Math.floor(v)
}

/**
 * corner: 'tl' | 'br'
 * 덩어리의 모서리에서 대각선 방향으로 멀어질수록 성겨진다.
 */
function tiles(corner) {
  const out = []
  const cols = Math.ceil(W / CELL)
  const rows = Math.ceil(H / CELL)
  const seed = corner === 'tl' ? 1 : 2

  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      // 각 모서리 기준 0(모서리) ~ 1(반대편) 대각 거리
      const nx = corner === 'tl' ? c / (cols - 1) : 1 - c / (cols - 1)
      const ny = corner === 'tl' ? r / (rows - 1) : 1 - r / (rows - 1)
      // 가중치를 키울수록 덩어리가 모서리 쪽으로 물러난다.
      // 가로(x)를 크게 잡아 가운데 글을 침범하지 않게, 세로(y)는 완만하게.
      const d = Math.min(1, Math.hypot(nx * 2.15, ny * 1.15))

      // 남을 확률 — 가까이는 꽉 차고 멀수록 급격히 성겨짐
      const keep = Math.pow(1 - d, 2.1)
      if (hash(c, r, seed) > keep) continue

      // 멀어질수록 타일이 작아져 각진 느낌을 덜어냄
      const shrink = 0.34 + (1 - d) * 0.66
      const size = (CELL - 2) * shrink
      const off = (CELL - size) / 2

      out.push({
        x: c * CELL + off,
        y: r * CELL + off,
        s: size,
        o: (0.25 + (1 - d) * 0.75).toFixed(2),
      })
    }
  }
  return out
}

const TL = tiles('tl')
const BR = tiles('br')

export default function ScatterDecor() {
  return (
    <div className="mv-bg" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="mv-tl" x1="0" y1="0" x2={W * 0.6} y2={H} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--rib-purple)" />
            <stop offset="1" stopColor="var(--rib-blue)" />
          </linearGradient>
          <linearGradient id="mv-br" x1={W} y1={H} x2={W * 0.4} y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--rib-mint)" />
            <stop offset="1" stopColor="var(--rib-sky)" />
          </linearGradient>
        </defs>

        <g fill="url(#mv-tl)">
          {TL.map((t, i) => (
            <rect key={i} x={t.x} y={t.y} width={t.s} height={t.s} rx="2" opacity={t.o} />
          ))}
        </g>
        <g fill="url(#mv-br)">
          {BR.map((t, i) => (
            <rect key={i} x={t.x} y={t.y} width={t.s} height={t.s} rx="2" opacity={t.o} />
          ))}
        </g>
      </svg>
    </div>
  )
}
