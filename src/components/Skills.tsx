const skills = [
  { name: 'Angular',        level: 90, icon: 'fa-brands fa-2x fa-angular',       primary: true },
  { name: 'TypeScript',     level: 88, icon: 'fa-brands fa-2x fa-js',            primary: true },
  { name: 'React',          level: 70, icon: 'fa-brands fa-2x fa-react',         primary: false },
  { name: '.NET (C#)',      level: 67, icon: 'fa-brands fa-2x fa-microsoft',     primary: true },
  { name: 'ASP.NET Core',   level: 70, icon: 'fa-solid fa-2x fa-server',         primary: false },
  { name: 'MongoDB',        level: 80, icon: 'fa-solid fa-2x fa-database',       primary: false },
  { name: 'SQL Server',     level: 65, icon: 'fa-solid fa-2x fa-database',       primary: true },
  { name: 'PostgreSQL',     level: 80, icon: 'fa-solid fa-2x fa-database',       primary: false },
  { name: 'Git',            level: 60, icon: 'fa-brands fa-2x fa-git-alt',       primary: true },
  { name: 'Java',           level: 66, icon: 'fa-brands fa-2x fa-java',          primary: false },
  { name: 'Highcharts',     level: 79, icon: 'fa-solid  fa-2x fa-chart-line',     primary: true },
  { name: 'Vite',           level: 81, icon: 'fa-solid fa-2x fa-bolt',           primary: false },
]

const Skills = () => {
  return (
    <section id="skills" className="py-40 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
            Mis Habilidades
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold">
            Tecnologías que domino
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-4">
              {/* Icon */}
              <div className={skill.primary
                ? 'w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-base shrink-0'
                : 'w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-base shrink-0'
              }>
                <i className={skill.icon} />
              </div>

              {/* Bar */}
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm font-medium text-base-content">{skill.name}</span>
                  <span className="text-xs text-base-content/60">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-base-300 rounded-full overflow-hidden">
                  <div
                    className={skill.primary
                      ? 'h-full rounded-full bg-primary'
                      : 'h-full rounded-full bg-secondary'
                    }
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
