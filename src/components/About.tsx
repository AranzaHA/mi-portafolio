const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-base-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Sobre{' '}
            <span className="text-primary">mí</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="card-title text-lg">Frontend</h3>
              <p className="text-base-content/60 text-sm">
                Angular, TypeScript, React. Librerías de visualización como GoJS y Highcharts para diagramas interactivos.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="card-title text-lg">Backend</h3>
              <p className="text-base-content/60 text-sm">
                .NET (C#) y ASP.NET Core. Diseño e implementación de aplicaciones empresariales robustas y escalables.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="card-title text-lg">Metodología</h3>
              <p className="text-base-content/60 text-sm">
                Depuración sistemática y claridad arquitectónica. Soluciones claras y mantenibles sobre atajos rápidos.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-base-200 rounded-3xl p-8 sm:p-10 border border-base-300">
          <p className="text-base-content/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Trabajé como desarrolladora remota en{' '}
            <span className="font-semibold text-primary">Process Ecology</span>,
            una empresa canadiense de ingeniería de procesos, donde diseñé e implementé
            funcionalidades para aplicaciones empresariales con diagramas interactivos
            y visualización de datos en tiempo real. Actualmente ampliando mi stack
            con React y buscando nuevas oportunidades para construir aplicaciones
            web robustas de extremo a extremo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
