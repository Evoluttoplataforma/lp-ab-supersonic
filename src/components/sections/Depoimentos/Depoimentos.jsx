import { useRef } from 'react'
import Badge from '../../ui/Badge'
import styles from './Depoimentos.module.css'

export default function Depoimentos({ id, data = {} }) {
  const { badge = {}, title = '', titleHighlight = '', subtitle = '', items = [], cases = [] } = data
  const cards = items.length > 0
    ? items
    : cases.map(c => ({ text: c.text, name: c.label || c.name, company: c.company, image: c.image, video: c.video }))
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (!carouselRef.current) return
    const scrollAmount = carouselRef.current.offsetWidth * 0.6
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id={id} className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.header}>
            {badge.label && <Badge icon={badge.icon} label={badge.label} variant="primary" />}
            <h2 className={styles.title}>
              {title}
              {titleHighlight && <span className={styles.titleHighlight}>{titleHighlight}</span>}
            </h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.navDesktop}>
            <button className={styles.arrow} onClick={() => scroll('left')} aria-label="Anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.arrow} onClick={() => scroll('right')} aria-label="Próximo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.carousel} ref={carouselRef}>
            {cards.map((item, i) => (
              <div key={i} className={styles.card}>
                {item.video ? (
                  <div className={styles.cardVideo}>
                    <iframe
                      src={item.video}
                      title={`Depoimento ${item.company || ''}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : item.image ? (
                  <div className={styles.cardImage}>
                    <img src={item.image} alt={`Depoimento de ${item.name}`} loading="lazy" />
                  </div>
                ) : item.text ? (
                  <div className={styles.cardText}>
                    <p className={styles.testimonialText} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ) : null}
                <div className={styles.cardFooter}>
                  <span className={styles.userName}>{item.name}</span>
                  {item.company && (
                    <span className={styles.userCompany}>{item.company}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.navMobile}>
        <button className={styles.arrow} onClick={() => scroll('left')} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.arrow} onClick={() => scroll('right')} aria-label="Próximo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
