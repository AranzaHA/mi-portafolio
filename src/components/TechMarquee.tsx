import { useEffect, useRef, useState } from 'react'
import MarqueeImport from 'react-fast-marquee'

const Marquee =
  (MarqueeImport as unknown as { default?: typeof MarqueeImport }).default ??
  MarqueeImport
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
} from '@floating-ui/react'
import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiReactivex,
  SiHtml5,
  SiCss,
  SiGsap,
  SiDotnet,
  SiSharp,
  SiGit,
  SiPostman,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'
import { useI18n } from '../i18n/LanguageContext'

export interface TechItem {
  name: string
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color?: string
  short?: string
  years?: number | '<1'
}

const ROW1: TechItem[] = [
  { name: 'Angular', icon: SiAngular, color: '#DD0031', years: 5 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', years: 5 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', years: 6 },
  { name: 'React', icon: SiReact, color: '#61DAFB', years: 2 },
  { name: 'RxJS', icon: SiReactivex, color: '#B7178C', years: 5 },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', years: 6 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', years: 6 },
  { name: 'Angular Material', short: 'AM', color: '#DD0031', years: 3 },
  { name: 'GSAP', icon: SiGsap, color: '#0AE448', years: 1 },
]

const ROW2: TechItem[] = [
  { name: '.NET', icon: SiDotnet, color: '#512BD4', years: 4 },
  { name: 'C#', icon: SiSharp, color: '#239120', years: 5 },
  { name: 'ASP.NET Core', short: 'ASP', color: '#512BD4', years: 4 },
  { name: 'SQL Server', short: 'SQL', color: '#CC2927', years: 4 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', years: 4 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', years: 3 },
  { name: 'Git', icon: SiGit, color: '#F05032', years: 4 },
  { name: 'Java', short: 'Java', color: '#ED8B00', years: 2 },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', years: 3 },
  { name: 'GoJS', short: 'GoJS', color: '#22D3EE', years: 4 },
  { name: 'Highcharts', short: 'HC', color: '#8085E9', years: 4 },
]

const ChipWithTooltip = ({
  item,
  pausedByTouch,
  onTouchOpen,
  reduceMotion,
}: {
  item: TechItem
  pausedByTouch: boolean
  onTouchOpen: (id: string) => void
  reduceMotion: boolean
}) => {
  const Icon = item.icon
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const arrowRef = useRef<SVGSVGElement>(null)
  const id = item.name

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift({ padding: 8 }), arrow({ element: arrowRef })],
  })

  const hover = useHover(context, {
    move: false,
    delay: { open: 80, close: 0 },
    enabled: !pausedByTouch,
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss, role])

  useEffect(() => {
    if (pausedByTouch && !open) return
    if (pausedByTouch) setOpen(true)
  }, [pausedByTouch, open])

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    onTouchOpen(id)
    setOpen(true)
  }

  const getYearsText = (years: number | '<1') => {
    if (years === '<1') return t.techMarquee.yearsLessThanOne
    if (years === 1) return t.techMarquee.yearsOne
    return t.techMarquee.yearsMany(years)
  }

  return (
    <>
      <div
        ref={refs.setReference}
        className="mx-2 sm:mx-3 group relative flex items-center justify-center w-13 h-13 sm:w-16 sm:h-16 rounded-full border transition-transform duration-300 ease-out hover:scale-[1.12]"
        style={{ backgroundColor: '#131A26', borderColor: 'rgba(0,255,255,0.3)' }}
        aria-label={item.name}
        {...getReferenceProps({ onTouchStart: handleTouchStart })}
      >
        {Icon ? (
          <Icon className="text-xl sm:text-2xl" style={{ color: item.color }} />
        ) : (
          <span
            className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase"
            style={{ color: item.color }}
          >
            {item.short ?? item.name.slice(0, 3)}
          </span>
        )}
      </div>
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              zIndex: 9999,
              fontFamily: "'Plus Jakarta Sans Variable', system-ui, sans-serif",
              backgroundColor: 'rgba(19, 26, 38, 0.95)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(34, 211, 238, 0.35)',
              borderRadius: 14,
              padding: '10px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              maxWidth: 220,
              whiteSpace: 'nowrap',
              animation: reduceMotion ? 'none' : 'tech-marquee-tooltip-in 150ms ease-out',
            }}
            {...getFloatingProps()}
          >
            <div style={{ color: '#F1F5F9', fontWeight: 600 }}>{item.name}</div>
            {item.years !== undefined && (
              <div style={{ color: '#22D3EE', fontSize: '0.75rem', marginTop: 2 }}>
                {getYearsText(item.years)}
              </div>
            )}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill="rgba(19, 26, 38, 0.95)"
              stroke="rgba(34, 211, 238, 0.35)"
              strokeWidth={1}
            />
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

const TechMarquee = () => {
  const { t } = useI18n()
  const [reduceMotion, setReduceMotion] = useState(false)
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const close = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[aria-label]')) setOpenId(null)
    }
    window.addEventListener('touchstart', close)
    return () => window.removeEventListener('touchstart', close)
  }, [])

  const cvBlock = (
    <div className="flex flex-col items-center text-center gap-4 mt-6">
      <p className="text-base sm:text-lg text-base-content/80">{t.skills.cvPrompt}</p>
      <a href={t.common.cvFile} download className="btn btn-primary">
        {t.skills.downloadCv}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  )

  const chip = (item: TechItem) => (
    <ChipWithTooltip
      key={item.name}
      item={item}
      pausedByTouch={openId === item.name}
      onTouchOpen={(id) => setOpenId(id)}
      reduceMotion={reduceMotion}
    />
  )

  if (reduceMotion) {
    return (
      <div className="space-y-2 py-2">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">{ROW1.map(chip)}</div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">{ROW2.map(chip)}</div>
        {cvBlock}
        <style>{`@keyframes tech-marquee-tooltip-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
      </div>
    )
  }

  return (
    <div className="space-y-2 py-2">
      <style>{`@keyframes tech-marquee-tooltip-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
      <Marquee
        direction="left"
        speed={28}
        pauseOnHover
        autoFill
        gradient
        gradientColor="#0A0E17"
        gradientWidth={0}
        style={{ paddingBlock: 12, overflowY: 'hidden' }}
        play={openId === null || !ROW1.some((r) => r.name === openId)}
      >
        {ROW1.map(chip)}
      </Marquee>
      <Marquee
        direction="right"
        speed={28}
        pauseOnHover
        autoFill
        gradient
        gradientColor="#0A0E17"
        gradientWidth={0}
        style={{ paddingBlock: 12, overflowY: 'hidden' }}
        play={openId === null || !ROW2.some((r) => r.name === openId)}
      >
        {ROW2.map(chip)}
      </Marquee>
      {cvBlock}
    </div>
  )
}

export default TechMarquee
