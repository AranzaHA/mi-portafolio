import myPhoto2 from '../assets/My_foto2.png'
import Reveal from './Reveal'

const About = () => {
  return (
    <section id="about" className="py-40 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Description */}
        <Reveal className="space-y-6" delay={0}>
          <span className="badge badge-primary badge-outline">SOBRE MÍ</span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Me apasiona crear{' '}
            <span className="text-primary">soluciones digitales</span>
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            Con casi 5 años de experiencia en desarrollo web, ayudo a empresas
            e individuos a materializar sus ideas mediante código limpio,
            eficiente y orientado al usuario.
            <br/>
            <br/>
            Me especializo en hacer comprensibles los datos complejos: diagramas interactivos con GoJS y
            dashboards en tiempo real con Highcharts donde la interfaz tiene que ordenar mucha información.
            <br/>
            <br/>
            Antes de escribir código me detengo a pensar la arquitectura,
            y cuando algo falla depuro de forma sistemática, sin ir a prueba y error.
          </p>
          <a
            href="https://www.linkedin.com/in/aranza-herrera-arellano"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            Conoce más sobre mí
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </Reveal>

        {/* Right — Stats grid with cross dividers */}
        {/* Stats grid commented out — replaced by photo
        <div className="relative grid grid-cols-2 grid-rows-2">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-base-300" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-base-300" />
          </div>

          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-primary">4+</span>
            <span className="text-sm text-base-content/60 mt-1">Años de Experiencia</span>
          </div>

          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-secondary">10+</span>
            <span className="text-sm text-base-content/60 mt-1">Proyectos Completados</span>
          </div>

          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-secondary">30+</span>
            <span className="text-sm text-base-content/60 mt-1">Clientes Satisfechos</span>
          </div>

          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-primary">100%</span>
            <span className="text-sm text-base-content/60 mt-1">Satisfacción del Cliente</span>
          </div>
        </div>
        */}

        {/* Right — Photo */}
        <Reveal delay={150}>
          <img
            src={myPhoto2}
            alt="Aranza Herrera"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-3xl object-cover shadow-xl"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default About
