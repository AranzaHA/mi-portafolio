import { lazy, Suspense } from 'react'
import { useBreakpoint, type Breakpoint } from '../hooks/useBreakpoint'
import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'

const AeroShards = lazy(() => import('./AeroShards'))

interface AeroShardsRange {
  count: number
  shardSize: number
  spread: number
  dpr: number
  placement: 'full' | 'left' | 'right' | 'center'
}

const BASE_DENSITY = 1300

const AERO_SHARDS_BY_BREAKPOINT: Record<Breakpoint, AeroShardsRange> = {
  desktop: { count: BASE_DENSITY, shardSize: 1, spread: 1, dpr: 2, placement: 'full' },
  tablet: { count: Math.round(BASE_DENSITY * 0.7), shardSize: 1, spread: 1.15, dpr: 2, placement: 'full' },
  mobile: { count: Math.round(BASE_DENSITY * 0.45), shardSize: 0.8, spread: 1.5, dpr: 1.5, placement: 'full' },
  mobileSm: { count: Math.round(BASE_DENSITY * 0.3), shardSize: 0.7, spread: 1.8, dpr: 1, placement: 'full' },
}

const Hero = () => {
  const breakpoint = useBreakpoint()
  const shards = AERO_SHARDS_BY_BREAKPOINT[breakpoint]
  const { t } = useI18n()

  return (
    <section className="h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-base-100">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <AeroShards
            key={breakpoint}
            shardColor="#22d3ee"
            accentColor="#3b82f6"
            backgroundColor="transparent"
            markers="none"
            count={shards.count}
            shardSize={shards.shardSize}
            spread={shards.spread}
            dpr={shards.dpr}
            placement={shards.placement}
          />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-base-100/40 lg:bg-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center pointer-events-none">
          <Reveal as="span" onLoad delay={0}>
            <span
              className="font-script text-primary leading-none"
              style={{ fontSize: 'clamp(3rem, 1.944rem + 4.507vw, 6rem)' }}
            >
              {t.hero.greeting}
            </span>
          </Reveal>
          <Reveal onLoad delay={150}>
            <p
              className="font-medium text-base-content/70 leading-tight"
              style={{ fontSize: 'clamp(1.125rem, 0.905rem + 0.939vw, 1.75rem)', marginTop: '0.35em' }}
            >
              {t.hero.intro}
            </p>
          </Reveal>
          <Reveal onLoad delay={300}>
            <h1
              className="font-extrabold uppercase text-base-content leading-[1.05] break-words max-w-full"
              style={{ fontSize: 'clamp(2rem, 0.768rem + 5.258vw, 5.5rem)', letterSpacing: '0.04em', marginTop: '0.1em' }}
            >
              Aranza Herrera
            </h1>
          </Reveal>
          <Reveal onLoad delay={450}>
            <p
              className="font-medium leading-tight"
              style={{ fontSize: 'clamp(1rem, 0.736rem + 1.127vw, 1.75rem)', marginTop: '2.5rem' }}
            >
              {t.hero.role} <span className="text-primary">{t.hero.roleAccent}</span>
            </p>
          </Reveal>

          <Reveal onLoad delay={600}>
            <div className="flex flex-wrap justify-center gap-4 pointer-events-auto" style={{ marginTop: '3rem' }}>
              <a
                href={t.common.cvFile}
                className="btn btn-primary"
              >
                {t.hero.downloadCv}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline btn-primary">
                {t.hero.contactMe}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
{/*          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={myPhoto}
                  alt="Aranza Herrera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-base-100 rounded-2xl shadow-lg p-4 border border-base-300 min-w-[140px]">
                <div className="text-sm text-base-content/60">Experiencia</div>
                <div className="text-2xl font-bold text-primary">3+ años</div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-base-100 rounded-2xl shadow-lg p-4 border border-base-300 min-w-[160px]">
                <div className="text-sm text-base-content/60">Proyectos</div>
                <div className="text-2xl font-bold text-primary">10+ completados</div>
              </div>
              <div className="absolute top-1/2 -right-8 sm:-right-12 bg-primary text-primary-content rounded-2xl shadow-lg p-4 min-w-[120px]">
                <div className="text-sm opacity-80">Stack</div>
                <div className="text-lg font-bold">Full-Stack</div>
              </div>
            </div>
          </div>*/}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 to-transparent" />
    </section>
  )
}

export default Hero
