import { useEffect, useState } from 'react'
import myPhoto from '../assets/My_foto2.png'
import GradientText from './GradientText'
import SideRays from './SideRays'
import HeroLightEffect from './HeroLightEffect'

const Hero = () => {
  const [isDim, setIsDim] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dim'
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDim(document.documentElement.getAttribute('data-theme') === 'dim')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])
  return (
    <section className={`h-[calc(100vh-4rem)] flex items-center relative overflow-hidden ${isDim ? 'bg-gradient-to-br from-base-200 via-base-100 to-base-200' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none">
        {isDim ? (
          <SideRays
            speed={2.5}
            rayColor1="#96ffc6"
            rayColor2="#44aef2"
            intensity={2.1}
            spread={2}
            origin="top-right"
            tilt={1}
            saturation={2}
            blend={0.64}
            falloff={1.5}
            opacity={0.8}
          />
        ) : (
          <HeroLightEffect />
        )}
      </div>
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="badge badge-primary badge-outline gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Desarrolladora Full-Stack
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hola! Yo soy{' '}
              <GradientText
                colors={isDim ? ['#53bde3', '#14df68'] : ['#5227FF', '#FF9FFC', '#B497CF']}
                animationSpeed={3}
                showBorder={false}
              >
                ARANZA HERRERA
              </GradientText>{' '}
            </h1>
            <h6 className="text-2xl mt-0 font-extrabold leading-tight">  Desarrolladora Full-Stack</h6>

            <p className="text-lg text-base-content/70 leading-relaxed max-w-lg">
              Experiencia en aplicaciones web empresariales de extremo a extremo.
              Backend con .NET (C#) y frontend con Angular y TypeScript,
              integrando librerías complejas de visualización de datos y
              diagramas interactivos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Aranza_Herrera_Arellano-CV.pdf"
                className="btn btn-primary"
              >
                Descargar CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline btn-primary">
                Contáctame
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
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
                <div className="text-2xl font-bold text-primary">4+ años</div>
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
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 to-transparent" />
    </section>
  )
}

export default Hero
