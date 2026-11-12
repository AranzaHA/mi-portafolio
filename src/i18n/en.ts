import type { Dictionary } from './es'

export const en: Dictionary = {
  common: {
    pageTitle: 'Aranza Herrera | Portfolio',
    cvFile: '/Aranza_Herrera_Arellano_CV_EN.pdf',
    switchLanguageLabel: 'Switch language to Spanish',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    menu: 'Menu',
  },
  hero: {
    greeting: 'Hello!',
    intro: "I'm",
    role: 'Full-Stack',
    roleAccent: 'Developer',
    downloadCv: 'Download CV',
    contactMe: 'Contact me',
  },
  ticker: {
    items: [
      { text: 'Excellent vision', author: 'Ahad Sharaf' },
      { text: 'Very creative', author: 'Salvador Campos' },
      { text: 'Adapts very well to teamwork', author: 'Alberto Alva Argaez' },
      { text: 'Excellent design sense', author: 'Jesus Chirinos Taboada' },
    ],
  },
  about: {
    badge: 'ABOUT ME',
    titlePrefix: 'I love building',
    titleAccent: 'digital solutions',
    paragraphs: [
      'With nearly 5 years of experience in web development, I help companies and individuals bring their ideas to life through clean, efficient, user-focused code.',
      'I specialize in making complex data understandable: interactive diagrams with GoJS and real-time dashboards with Highcharts where the interface must organize a lot of information.',
      'Before writing code, I take time to think about the architecture, and when something breaks, I debug systematically rather than through trial and error.',
    ],
    cta: 'Learn more about me',
    photoAlt: 'Aranza Herrera',
  },
  skills: {
    eyebrow: 'My Skills',
    title: 'Technologies I work with',
    cvPrompt: 'Want to know more about my skills? Download my CV',
    downloadCv: 'Download CV',
  },
  techMarquee: {
    yearsOne: '1 year of experience',
    yearsMany: (n: number) => `${n} years of experience`,
    yearsLessThanOne: 'Less than 1 year of experience',
  },
  experience: {
    eyebrow: 'Career path',
    title: 'Experience',
    at: 'at',
    present: 'Present',
    items: {
      degree: {
        range: 'June 2021',
        title: "Bachelor's degree in Computer Systems Engineering",
        org: 'Instituto Tecnológico de Zacatepec',
        description: "Graduated with a Bachelor's degree in Computer Systems Engineering.",
      },
      intern: {
        range: 'July 2021 – December 2021',
        title: 'IT Department Intern',
        org: 'Congress of the State of Morelos',
        description: 'Professional internship in the IT department at the Congress of the State of Morelos.',
      },
      processEcology: {
        range: 'January 2022 – July 2026',
        title: 'Frontend and Full-Stack Developer',
        org: 'Process Ecology Inc.',
        description:
          'Remote development of enterprise web applications for process engineering at a Canadian company: Angular and TypeScript interfaces, interactive diagrams with GoJS, real-time dashboards with Highcharts, and .NET (C#) Web APIs with MongoDB, SQL Server, and PostgreSQL. Collaborated with international teams in English under Agile Scrum methodology.',
      },
      freelance: {
        range: 'August 2026 – Present',
        title: 'Freelance Developer',
        org: 'Independent',
        description: 'Full-stack web application development.',
      },
    },
  },
  projects: {
    eyebrow: 'Featured projects',
    title: 'Some of my recent work',
    viewProject: 'View project',
    ariaCarousel: 'Projects',
    ariaPrev: 'Previous project',
    ariaNext: 'Next project',
    ariaGoTo: (n: number) => `Go to project ${n}`,
    items: {
      methane: {
        description:
          'Web platform for a clean technology innovation consortium, featuring data visualization and interactive diagrams to monitor methane emission reductions.',
      },
      processEcology: {
        description:
          'Corporate website for Process Ecology Inc., a Canadian company focused on process simulation software for environmental impact.',
      },
      lumina: {
        description: 'Web tool for creating and downloading professional resumes easily.',
      },
    },
  },
  contact: {
    titlePrefix: '',
    titleAccent: 'Contact me',
    subtitle: "Looking for a full-stack developer for your team? Reach out, I'd be happy to talk.",
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    ctaTitle: 'Ready to get started?',
    ctaSubtitle: "Send me a message and I'll get back to you as soon as possible",
    sendEmail: 'Send email',
  },
  footer: {
    rights: '© 2026 Aranza Herrera. All rights reserved.',
  },
}
