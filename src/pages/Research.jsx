import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ResearchCard from '../components/ResearchCard'
import ResearchModal from '../components/ResearchModal'
import { researchAreas } from '../data/research'
import { useT } from '../lang/LanguageContext'

export default function Research() {
  const [active, setActive] = useState(null)
  const t = useT()

  return (
    <>
      <PageHeader
        eyebrow={t('Research', '')}
        title={t('연구 분야', 'Research')}
        /* 줄바꿈(\n)을 그대로 살림 — CSS 의 white-space: pre-wrap 이 처리.
           좁은 화면에서는 pre-wrap 을 풀어 자동으로 흐르게 한다. */
        desc={t(
          'SPACE-AI Lab의 연구는 특정 플랫폼보다 데이터와 문제, 그리고 구현 수준을 중심으로 구성됩니다.\n' +
            '실제 시스템 데이터의 품질과 특성을 이해하고, 탐지·진단·예측·의사결정을 위한 AI를 개발하며, 해당 모델이 실제 하드웨어와 현장에서\n' +
            '작동하도록 만드는 전 과정을 연구합니다.',
          'SPACE-AI Lab’s research is organized around data, problems, and levels of implementation rather than a specific platform.\n' +
            'We study the whole process — understanding the quality and characteristics of real system data, developing AI for detection, diagnosis, prediction, and decision-making,\n' +
            'and enabling those models to operate on real hardware and in the field.',
        )}
      />

      <section className="section">
        <div className="container">
          {/* 클릭 안내는 카드 바로 위에 — 헤더에 넣으면 문단이 너무 길어짐 */}
          <p className="rcard-hint" data-reveal>
            {t('각 분야를 클릭해 세부 주제를 확인하세요.', 'Click each area to see its detailed topics.')}
          </p>
          <div className="rcard-grid rcard-grid--full" data-reveal-stagger>
            {researchAreas.map((area) => (
              <ResearchCard key={area.id} area={area} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      <ResearchModal area={active} onClose={() => setActive(null)} />
    </>
  )
}
