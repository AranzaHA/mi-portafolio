import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary">
          <span className=""> Aranza</span>  Herrera
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-primary transition-colors">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="btn btn-ghost btn-circle md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-300 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium">
            <li><a href="#about" onClick={() => setMobileOpen(false)}>Sobre mí</a></li>
            <li><a href="#skills" onClick={() => setMobileOpen(false)}>Habilidades</a></li>
            <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
