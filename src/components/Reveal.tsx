import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react'

type AsProp<T extends keyof HTMLElementTagNameMap> = {
  as?: T
  className?: string
  style?: CSSProperties
  children?: ReactNode
  delay?: number
  onLoad?: boolean
}

const showObserver = typeof window !== 'undefined'
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible')
          }
        })
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 }
    )
  : null

const hideObserver = typeof window !== 'undefined'
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            const rect = entry.boundingClientRect
            if (rect.top > 0) {
              (entry.target as HTMLElement).classList.remove('is-visible')
            }
          }
        })
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0 }
    )
  : null

const Reveal = <T extends keyof HTMLElementTagNameMap = 'div'>(
  props: AsProp<T>
) => {
  const {
    as = 'div' as T,
    className = '',
    style = {},
    children,
    delay = 0,
    onLoad = false,
  } = props
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (onLoad) {
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          el.classList.add('is-visible')
        })
        return frame2
      })
      return () => {
        cancelAnimationFrame(frame1)
      }
    }

    if (showObserver) showObserver.observe(el)
    if (hideObserver) hideObserver.observe(el)

    return () => {
      if (showObserver) showObserver.unobserve(el)
      if (hideObserver) hideObserver.unobserve(el)
    }
  }, [onLoad])

  const mergedClassName = ['reveal', className].filter(Boolean).join(' ')
  const mergedStyle: CSSProperties = {
    ...style,
    ['--reveal-delay' as string]: `${delay}ms`,
  }

  return createElement(as, { ref, className: mergedClassName, style: mergedStyle }, children)
}

export default Reveal
