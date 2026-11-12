import { useState } from 'react'
import LanguageToggle from './LanguageToggle'
import { useI18n } from '../i18n/LanguageContext'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useI18n()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary">
          <span className=""> Aranza</span>  Herrera
        </a>

        <nav aria-label={t.common.navAriaLabel}>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">{t.nav.skills}</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">{t.nav.experience}</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            className="btn btn-ghost btn-circle md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.menu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
        <nav aria-label={t.common.navAriaLabel} className="md:hidden bg-base-100 border-t border-base-300 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium">
            <li><a href="#about" onClick={() => setMobileOpen(false)}>{t.nav.about}</a></li>
            <li><a href="#skills" onClick={() => setMobileOpen(false)}>{t.nav.skills}</a></li>
            <li><a href="#experience" onClick={() => setMobileOpen(false)}>{t.nav.experience}</a></li>
            <li><a href="#projects" onClick={() => setMobileOpen(false)}>{t.nav.projects}</a></li>
            <li><a href="#contact" onClick={() => setMobileOpen(false)}>{t.nav.contact}</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
