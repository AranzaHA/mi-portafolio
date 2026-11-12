import TechMarquee from './TechMarquee'
import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'

const Skills = () => {
  const { t } = useI18n()
  return (
      <section id="skills" aria-labelledby="skills-title" className="py-40 px-6 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-10" delay={0}>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
              {t.skills.eyebrow}
            </p>
            <h2 id="skills-title" className="text-3xl sm:text-4xl font-bold">
              {t.skills.title}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" aria-hidden="true" />
          </Reveal>

          <Reveal delay={150}>
            <TechMarquee />
          </Reveal>
        </div>
      </section>
  )
}

export default Skills