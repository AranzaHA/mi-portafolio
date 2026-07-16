const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {' '}
            <span className="text-primary">Contáctame</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-base-content/60 text-lg mt-6 max-w-xl mx-auto">
            ¿Buscas una desarrolladora full-stack para tu equipo? Escríbeme,
            con gusto conversamos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
        </div>
        <div className="bg-base-200 rounded-3xl p-8 sm:p-10 border border-base-300 text-center">
          <h3 className="text-xl font-bold mb-2">¿Listo para colaborar?</h3>
          <p className="text-base-content/60 mb-6">
            Estoy abierta a nuevas oportunidades y proyectos interesantes.
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
