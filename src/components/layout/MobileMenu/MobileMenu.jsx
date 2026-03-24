import { useEffect } from 'react'
import Button from '../../ui/Button'
import styles from './MobileMenu.module.css'

/**
 * Menu mobile com overlay.
 * Fecha ao clicar no X ou fora do componente.
 */
export default function MobileMenu({ isOpen, onClose, links = [], onNavClick }) {
  // Trava scroll do body quando menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <nav className={styles.nav}>
          {links.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              className={styles.navLink}
              onClick={(e) => onNavClick(e, link.sectionId)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button
            fullWidth
            size="lg"
            onClick={(e) => {
              onNavClick(e, 'contato')
            }}
          >
            Fale com especialista
          </Button>
        </div>
      </div>
    </div>
  )
}
