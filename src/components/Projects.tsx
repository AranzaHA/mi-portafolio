import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'
import webDev from '../assets/project-backgrounds/ngIf.png'
import dashboards from '../assets/project-backgrounds/processEcology.png'
import cvMaker from '../assets/project-backgrounds/luminaCV.png'
import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'

type ProjectId = 'methane' | 'processEcology' | 'lumina'

interface ProjectStatic {
  id: ProjectId
  num: string
  title: string
  tech: string[]
  image: string
  link: string
}

const projects: ProjectStatic[] = [
  {
    id: 'methane',
    num: '01',
    title: 'Methane Innovation',
    tech: ['Angular', '.NET (C#)'],
    image: webDev,
    link: 'https://www.methaneinnovation.ca/',
  },
  {
    id: 'processEcology',
    num: '02',
    title: 'Process Ecology',
    tech: ['React', 'Java'],
    image: dashboards,
    link: 'https://processecology.com/',
  },
  {
    id: 'lumina',
    num: '03',
    title: 'LuminaCV',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: cvMaker,
    link: 'https://luminacv-maker.vercel.app/',
  },
]

const Projects = () => {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragDelta, setDragDelta] = useState(0)
  const regionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + projects.length) % projects.length)
  }, [])

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  useEffect(() => {
    const el = regionRef.current
    if (!el) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
    }
    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  const onPointerDown = (e: React.PointerEvent) => {
    setDragStartX(e.clientX)
    setDragDelta(0)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX === null) return
    setDragDelta(e.clientX - dragStartX)
  }

  const onPointerUp = () => {
    if (dragStartX === null) return
    if (dragDelta > 50) goPrev()
    else if (dragDelta < -50) goNext()
    setDragStartX(null)
    setDragDelta(0)
  }

  return (
    <section id="projects" className="py-40 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14" delay={0}>
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
            {t.projects.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold">{t.projects.title}</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        <Reveal delay={150}>
          <div
            ref={regionRef}
            role="region"
            aria-roledescription="carousel"
            aria-label={t.projects.ariaCarousel}
            tabIndex={0}
            className="mx-auto max-w-[960px] outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[20px]"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ touchAction: 'pan-y' }}
          >
            <div className="relative grid">
              {projects.map((project, index) => {
                const isActive = index === activeIndex
                const tr = t.projects.items[project.id]
                return (
                  <article
                    key={project.id}
                    className={`col-start-1 row-start-1 w-full rounded-[20px] border overflow-hidden flex flex-col ${
                      reduceMotion ? '' : 'transition-all duration-[350ms]'
                    } ${
                      isActive
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none invisible'
                    }`}
                    style={{
                      backgroundColor: 'rgba(19,26,38,0.6)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      borderColor: 'rgba(148,163,184,0.15)',
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="grid flex-1 grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1">
                      <div className="relative w-full aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover object-top md:rounded-[14px]"
                        />
                        <span
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold"
                          style={{
                            backgroundColor: 'rgba(10,14,23,0.8)',
                            color: '#F1F5F9',
                            border: '1px solid rgba(148,163,184,0.25)',
                          }}
                        >
                          {project.num}
                        </span>
                      </div>
                      <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-7">
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold" style={{ color: '#F1F5F9' }}>
                            {project.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                            {tr.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full text-xs"
                              style={{ border: '1px solid rgba(34,211,238,0.4)', color: '#22D3EE' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && project.link !== '#' && (
                          <div className="mt-auto">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                              style={{
                                background: 'linear-gradient(90deg, #22D3EE 0%, #3B82F6 100%)',
                                color: '#0A0E17',
                              }}
                            >
                              {t.projects.viewProject}
                              <FaArrowRight className="h-4 w-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label={t.projects.ariaPrev}
                className="w-[44px] h-[44px] rounded-full flex items-center justify-center border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  backgroundColor: '#131A26',
                  borderColor: 'rgba(148,163,184,0.25)',
                  color: '#F1F5F9',
                }}
              >
                <FaChevronLeft />
              </button>
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={t.projects.ariaGoTo(index + 1)}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      index === activeIndex ? 'w-6 bg-primary' : 'w-2'
                    }`}
                    style={
                      index === activeIndex ? undefined : { backgroundColor: 'rgba(148,163,184,0.35)' }
                    }
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: '#94A3B8' }}>
                {projects[activeIndex].num} / {String(projects.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={goNext}
                aria-label={t.projects.ariaNext}
                className="w-[44px] h-[44px] rounded-full flex items-center justify-center border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  backgroundColor: '#131A26',
                  borderColor: 'rgba(148,163,184,0.25)',
                  color: '#F1F5F9',
                }}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects
