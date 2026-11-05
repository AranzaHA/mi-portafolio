import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useI18n } from './i18n/LanguageContext'

function App() {
  const { t } = useI18n()

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="footer footer-center p-4 bg-base-200 text-base-content border-t border-base-300">
        <div>
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </>
  )
}

export default App
