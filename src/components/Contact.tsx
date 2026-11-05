import Reveal from './Reveal'

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-base-100 pb-[calc(10rem+48px)]">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12" delay={0}>
          <h2 className="text-3xl sm:text-4xl font-bold">
            {' '}
            <span className="text-primary">Contáctame</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-base-content/60 text-lg mt-6 max-w-xl mx-auto">
            ¿Buscas una desarrolladora full-stack para tu equipo? Escríbeme,
            con gusto conversamos.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" delay={150}>
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:paloma098@outlook.com"
                className="link link-primary text-sm"
              >
                paloma098@outlook.com
              </a>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/aranza-herrera-arellano"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary text-sm"
              >
                Aranza Herrera
              </a>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold">GitHub</h3>
              <a
                href="https://github.com/AranzaHA"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary text-sm"
              >
                AranzaHA
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="bg-base-200 rounded-3xl p-8 sm:p-10 border border-base-300 text-center" delay={300}>
          <h4 className="text-2xl font-bold mb-2">¿Listo para empezar?</h4>
          <p className="text-base-content/70 mb-6">
            Envíame un mensaje y te respondo lo antes posible
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:paloma098@outlook.com"
              className="btn btn-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar correo
            </a>
            <a
              href="https://www.linkedin.com/in/aranza-herrera-arellano"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/AranzaHA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
