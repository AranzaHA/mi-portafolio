import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <footer className="footer footer-center p-4 bg-base-200 text-base-content border-t border-base-300">
        <div>
          <p>© 2026 Aranza Herrera. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
