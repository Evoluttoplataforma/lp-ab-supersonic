import { useState, useCallback } from 'react'

/**
 * Hook que rastreia a posição do cursor relativa a um elemento.
 * Usado na seção de Velocidade para badge que segue o mouse.
 *
 * @returns {{ position, isActive, handlers }}
 *   - position: { x, y } relativos ao elemento
 *   - isActive: boolean se o cursor está sobre o elemento
 *   - handlers: { onMouseMove, onMouseEnter, onMouseLeave } para passar ao elemento
 */
export function useCursorFollow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const onMouseEnter = useCallback(() => setIsActive(true), [])
  const onMouseLeave = useCallback(() => setIsActive(false), [])

  return {
    position,
    isActive,
    handlers: { onMouseMove, onMouseEnter, onMouseLeave },
  }
}
