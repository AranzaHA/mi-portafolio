import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { es, type Dictionary } from './es'
import { en } from './en'

export type Lang = 'es' | 'en'

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

const getInitialLang = (): Lang => {
  try {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'es' || saved === 'en') return saved
  } catch {}
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) return 'en'
  return 'es'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {}
    document.documentElement.lang = lang
    const dict = lang === 'es' ? es : en
    document.title = dict.common.pageTitle
  }, [lang])

  const value = useMemo<I18nContextValue>(() => {
    const t = lang === 'es' ? es : en
    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
      t,
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
