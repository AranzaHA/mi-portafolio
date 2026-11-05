import { useI18n } from '../i18n/LanguageContext'

const LanguageToggle = () => {
  const { lang, toggleLang, t } = useI18n()

  return (
    <button
      onClick={toggleLang}
      className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-base-300 bg-base-100/70 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={t.common.switchLanguageLabel}
    >
      <span className={lang === 'es' ? 'text-primary' : 'text-base-content/60'}>ES</span>
      <span className="text-base-content/40">|</span>
      <span className={lang === 'en' ? 'text-primary' : 'text-base-content/60'}>EN</span>
    </button>
  )
}

export default LanguageToggle
