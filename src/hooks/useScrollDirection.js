import { useState, useEffect, useRef } from 'react'

/**
 * Hook que detecta a direção do scroll.
 * Usado pelo Navbar para show/hide baseado na direção.
 *
 * @param {number} threshold - Pixels mínimos de scroll para mudar direção (evita jitter)
 * @returns {'up' | 'down'} - Direção atual do scroll
 */
export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState('up')
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY.current) < threshold) {
        ticking.current = false
        return
      }

      setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up')
      lastScrollY.current = scrollY > 0 ? scrollY : 0
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrollDirection
}
