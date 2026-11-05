import TechMarquee from './TechMarquee'
import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'

const Skills = () => {
  const { t } = useI18n()
  return (
      <section id="skills" className="py-40 px-6 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-10" delay={0}>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
              {t.skills.eyebrow}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold">
              {t.skills.title}
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </Reveal>

          <Reveal delay={150}>
            <TechMarquee />
          </Reveal>
        </div>
      </section>
  )
}

export default Skills