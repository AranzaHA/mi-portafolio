type Widen<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T extends (...args: infer A) => infer R ? (...args: A) => R : T extends readonly (infer U)[] ? readonly Widen<U>[] : T extends object ? { [K in keyof T]: Widen<T[K]> } : T

export const es = {
  common: {
    pageTitle: 'Aranza Herrera | Portafolio',
    cvFile: '/Aranza_Herrera_Arellano_CV.pdf',
    navAriaLabel: 'Navegación principal',
    switchLanguageLabel: 'Cambiar idioma a inglés',
  },
  nav: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    menu: 'Menú',
  },
  hero: {
    greeting: '¡Hola!',
    intro: 'Yo soy',
    role: 'Desarrolladora',
    roleAccent: 'Full-Stack',
    downloadCv: 'Descargar CV',
    contactMe: 'Contáctame',
  },
  ticker: {
    items: [
      { text: 'Excelente visión', author: 'Ahad Sharaf' },
      { text: 'Muy creativa', author: 'Salvador Campos' },
      { text: 'Se adapta muy bien al trabajo en equipo', author: 'Alberto Alva Argaez' },
      { text: 'Excelente sentido del diseño', author: 'Jesus Chirinos Taboada' },
    ],
  },
  about: {
    badge: 'SOBRE MÍ',
    titlePrefix: 'Me apasiona crear',
    titleAccent: 'soluciones digitales',
    paragraphs: [
      'Con casi 5 años de experiencia en desarrollo web, ayudo a empresas e individuos a materializar sus ideas mediante código limpio, eficiente y orientado al usuario.',
      'Me especializo en hacer comprensibles los datos complejos: diagramas interactivos con GoJS y dashboards en tiempo real con Highcharts donde la interfaz tiene que ordenar mucha información.',
      'Antes de escribir código me detengo a pensar la arquitectura, y cuando algo falla depuro de forma sistemática, sin ir a prueba y error.',
    ],
    cta: 'Conoce más sobre mí',
    photoAlt: 'Aranza Herrera, desarrolladora full-stack',
  },
  skills: {
    eyebrow: 'Mis Habilidades',
    title: 'Tecnologías con las que trabajo',
    cvPrompt: '¿Quieres conocer más sobre mis habilidades? Descarga mi CV',
    downloadCv: 'Descargar CV',
  },
  techMarquee: {
    yearsOne: '1 año de experiencia',
    yearsMany: (n: number) => `${n} años de experiencia`,
    yearsLessThanOne: 'Menos de 1 año de experiencia',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    at: 'en',
    present: 'Actualidad',
    items: {
      degree: {
        range: 'Junio 2021',
        title: 'Ingeniera en Sistemas Computacionales',
        org: 'Instituto Tecnológico de Zacatepec',
        description: 'Egreso de la licenciatura en Ingeniería en Sistemas Computacionales.',
      },
      intern: {
        range: 'Julio 2021 – Diciembre 2021',
        title: 'Becaria en el departamento de sistemas',
        org: 'Congreso del Estado de Morelos',
        description: 'Beca profesional en el área de sistemas del Congreso del Estado de Morelos.',
      },
      processEcology: {
        range: 'Enero 2022 – Julio 2026',
        title: 'Desarrolladora Frontend y Full-Stack',
        org: 'Process Ecology Inc.',
        description:
          'Desarrollo remoto de aplicaciones web empresariales de ingeniería de procesos para una empresa canadiense: interfaces en Angular y TypeScript, diagramas interactivos con GoJS, dashboards en tiempo real con Highcharts y Web APIs en .NET (C#) con MongoDB, SQL Server y PostgreSQL. Trabajo con equipos internacionales en inglés bajo metodología ágil Scrum.',
      },
      freelance: {
        range: 'Agosto 2026 – Actualidad',
        title: 'Desarrolladora Freelance',
        org: 'Independiente',
        description: 'Desarrollo de aplicaciones web full-stack.',
      },
    },
  },
  projects: {
    eyebrow: 'Proyectos destacados',
    title: 'Algunos de mis trabajos recientes',
    viewProject: 'Ver proyecto',
    ariaCarousel: 'Proyectos',
    ariaRoleDescription: 'carrusel',
    ariaPrev: 'Proyecto anterior',
    ariaNext: 'Siguiente proyecto',
    ariaGoTo: (n: number) => `Ir al proyecto ${n}`,
    items: {
      methane: {
        imageAlt: 'Captura de la página de inicio de Methane Innovation',
        description:
          'Plataforma web para un consorcio de innovación en tecnologías limpias, con visualización de datos y diagramas interactivos para monitoreo de reducción de emisiones de metano.',
      },
      processEcology: {
        imageAlt: 'Captura de la página de inicio de Process Ecology',
        description:
          'Página representativa de Process Ecology Inc. Empresa canadiense en el rubro de desarrollo de software de simulación de procesos contaminantes.',
      },
      lumina: {
        imageAlt: 'Captura de la página de inicio de LuminaCV',
        description: 'Herramienta web para crear y descargar currículums profesionales de forma sencilla.',
      },
    },
  },
  contact: {
    titlePrefix: '',
    titleAccent: 'Contáctame',
    subtitle: '¿Buscas una desarrolladora full-stack para tu equipo? Escríbeme, con gusto conversamos.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    ctaTitle: '¿Listo para empezar?',
    ctaSubtitle: 'Envíame un mensaje y te respondo lo antes posible',
    sendEmail: 'Enviar correo',
  },
  footer: {
    rights: '© 2026 Aranza Herrera. Todos los derechos reservados.',
  },
}

export type Dictionary = Widen<typeof es>
