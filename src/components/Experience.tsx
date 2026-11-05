import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'

type ExperienceId = 'degree' | 'intern' | 'processEcology' | 'freelance'

interface ExperienceStatic {
  id: ExperienceId
  year: string
  tags?: string[]
  current?: boolean
}

const items: ExperienceStatic[] = [
  { id: 'degree', year: '2021' },
  { id: 'intern', year: '2021', tags: ['Javascript', 'Java 8', 'css', 'servlets'] },
  {
    id: 'processEcology',
    year: '2022',
    tags: ['Angular', 'TypeScript', '.NET', 'GoJS', 'Highcharts'],
  },
  { id: 'freelance', year: '2026', current: true },
]

const Experience = () => {
  const { t } = useI18n()
  return (
    <section id="experience" className="py-40 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14" delay={0}>
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
            {t.experience.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold">{t.experience.title}</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        <ol className="relative space-y-8">
          {items.map((item, index) => {
            const tr = t.experience.items[item.id]
            const isLast = index === items.length - 1
            return (
              <Reveal as="li" key={item.id} delay={Math.min(450, index * 150)}>
                <div className="relative grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-6">
                  <div className="relative flex justify-center">
                    <div
                      className="relative z-10 flex items-center justify-center w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-full text-sm sm:text-base font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #22D3EE 0%, #3B82F6 100%)',
                        color: '#0A0E17',
                        boxShadow: item.current ? '0 0 0 4px rgba(34,211,238,0.18)' : undefined,
                      }}
                    >
                      {item.year}
                    </div>
                    {!isLast && (
                      <div
                        className="absolute top-[44px] sm:top-[56px] bottom-[-32px] w-[2px]"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(34,211,238,0.8) 0%, rgba(59,130,246,0.4) 100%)',
                        }}
                      />
                    )}
                  </div>

                  <article
                    className="relative rounded-[14px] border p-5 sm:p-6 transition-all duration-200 ease-out hover:-translate-y-[2px]"
                    style={{
                      backgroundColor: '#131A26',
                      borderColor: 'rgba(148,163,184,0.15)',
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold" style={{ color: '#F1F5F9' }}>
                          {tr.title}
                        </h4>
                        <p className="mt-1">
                          <span className="text-sm" style={{ color: '#22D3EE' }}>
                            {t.experience.at} {tr.org}
                          </span>
                        </p>
                      </div>
                      {item.current && (
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: 'rgba(34,211,238,0.12)',
                            color: '#22D3EE',
                            border: '1px solid rgba(34,211,238,0.35)',
                          }}
                        >
                          {t.experience.present}
                        </span>
                      )}
                    </div>

                    <time
                      className="mt-2 block text-xs sm:text-sm"
                      style={{ color: '#94A3B8' }}
                      dateTime={tr.range}
                    >
                      {tr.range}
                    </time>

                    <p className="mt-3 text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                      {tr.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{ border: '1px solid rgba(34,211,238,0.4)', color: '#22D3EE' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Experience
