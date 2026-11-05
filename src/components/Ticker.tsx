import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/LanguageContext'

const Ticker = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
      },
      { threshold: 0 }
    )

    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  const items = [...t.ticker.items, ...t.ticker.items, ...t.ticker.items]

  return (
    <div className="bg-base-300 border-y border-base-content/10 overflow-hidden">
      <div ref={trackRef} className="flex w-max animate-ticker">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8 py-3 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <span className="font-medium text-sm text-base-content/80">{item.text}</span>
            <span className="text-xs text-base-content/50">— {item.author}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ticker
