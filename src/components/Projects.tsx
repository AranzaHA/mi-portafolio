import webDev from '../assets/project-backgrounds/web_development.png'
import dashboards from '../assets/project-backgrounds/dashboards.jpg'
import cvMaker from '../assets/project-backgrounds/cv_maker.png'

const projects = [
  {
    num: '01',
    title: 'Aplicaciones Web Empresariales',
    description: 'Soluciones full-stack con visualización de datos y diagramas interactivos para empresas.',
    tech: ['Angular', '.NET (C#)'],
    image: webDev,
    link: '#',
  },
  {
    num: '02',
    title: 'Dashboards Interactivos',
    description: 'Paneles de control para monitoreo y análisis de datos en tiempo real.',
    tech: ['React', 'Java'],
    image: dashboards,
    link: '#',
  },
  {
    num: '03',
    title: 'Generador de CV',
    description: 'Herramienta web para crear y descargar currículums profesionales de forma sencilla.',
    tech: ['React', '.NET (C#)'],
    image: cvMaker,
    link: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
            Proyectos Destacados
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold">
            Algunos de mis trabajos recientes
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.num}
              className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Image header */}
              <figure className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Number badge */}
                <span className="absolute top-3 left-3 badge badge-lg bg-base-100/90 border-base-300 font-bold text-base-content">
                  {project.num}
                </span>
              </figure>

              {/* Content */}
              <div className="card-body p-5">
                <h4 className="card-title text-base">{project.title}</h4>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="badge badge-outline badge-primary badge-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-2">
                  <a
                    href={project.link}
                    className="link link-primary text-sm font-medium"
                  >
                    Ver Proyecto
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="w-2.5 h-2.5 rounded-full bg-base-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-base-300" />
        </div>
      </div>
    </section>
  )
}

export default Projects
