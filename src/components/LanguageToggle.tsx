import { useEffect, useState } from 'react'

type Lang = 'es' | 'en'

const labels: Record<Lang, string> = {
  es: 'ES',
  en: 'EN'
}

const LanguageToggle = () => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null
    return saved || 'es'
  })

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  return (
    <button
      onClick={() => setLang(prev => (prev === 'es' ? 'en' : 'es'))}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle language"
    >
      <span className="text-xs font-bold">{labels[lang]}</span>
    </button>
  )
}

export default LanguageToggle
