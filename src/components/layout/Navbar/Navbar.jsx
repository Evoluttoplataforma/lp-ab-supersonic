import { useState } from 'react'
import { scrollToSection } from '../../../utils/smoothScroll'
import Button from '../../ui/Button'
import MobileMenu from '../MobileMenu'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Sobre a Certificação', sectionId: 'sobre' },
  { label: 'Como Funciona', sectionId: 'como-funciona' },
  { label: 'Benefícios', sectionId: 'beneficios' },
  { label: 'Depoimentos', sectionId: 'depoimentos' },
  { label: 'FAQ', sectionId: 'faq' },
]

export default function Navbar({ ctaHref = '#contato' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={styles.navbar}
      >
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <img src="/assets/logo-templum.svg" alt="Templum" width="120" height="32" />
          </a>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.sectionId)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button
              href={ctaHref}
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contato')
              }}
            >
              Fale com especialista
            </Button>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
        onNavClick={handleNavClick}
      />
    </>
  )
}
