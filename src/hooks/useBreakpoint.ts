import { useEffect, useState } from 'react'

export type Breakpoint = 'desktop' | 'tablet' | 'mobile' | 'mobileSm'

export const getBreakpoint = (width: number): Breakpoint => {
  if (width >= 1024) return 'desktop'
  if (width >= 768) return 'tablet'
  if (width >= 480) return 'mobile'
  return 'mobileSm'
}

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(typeof window === 'undefined' ? 1024 : window.innerWidth)
  )

  useEffect(() => {
    const queries = [
      { breakpoint: 'desktop' as const, mql: window.matchMedia('(min-width: 1024px)') },
      { breakpoint: 'tablet' as const, mql: window.matchMedia('(min-width: 768px) and (max-width: 1023.98px)') },
      { breakpoint: 'mobile' as const, mql: window.matchMedia('(min-width: 480px) and (max-width: 767.98px)') },
      { breakpoint: 'mobileSm' as const, mql: window.matchMedia('(max-width: 479.98px)') },
    ]

    const update = () => {
      const match = queries.find(q => q.mql.matches)
      if (match) setBreakpoint(match.breakpoint)
    }

    update()
    queries.forEach(q => q.mql.addEventListener('change', update))
    return () => queries.forEach(q => q.mql.removeEventListener('change', update))
  }, [])

  return breakpoint
}
