import myPhoto2 from '../assets/My_foto2.png'
import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'

const About = () => {
  const { t } = useI18n()
  return (
    <section id="about" className="py-40 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal className="space-y-6" delay={0}>
          <span className="badge badge-primary badge-outline">{t.about.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            {t.about.titlePrefix}{' '}
            <span className="text-primary">{t.about.titleAccent}</span>
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            {t.about.paragraphs[0]}
            <br />
            <br />
            {t.about.paragraphs[1]}
            <br />
            <br />
            {t.about.paragraphs[2]}
          </p>
          <a
            href="https://www.linkedin.com/in/aranza-herrera-arellano"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            {t.about.cta}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={150}>
          <img
            src={myPhoto2}
            alt={t.about.photoAlt}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-3xl object-cover shadow-xl"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default About
