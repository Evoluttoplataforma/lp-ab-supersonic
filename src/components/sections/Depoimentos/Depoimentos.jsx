import { useRef, useState, useCallback } from 'react'
import Badge from '../../ui/Badge'
import styles from './Depoimentos.module.css'

/**
 * Extract YouTube video ID from an embed URL.
 * Handles patterns like:
 *   https://www.youtube.com/embed/VIDEO_ID
 *   https://www.youtube.com/embed/VIDEO_ID?...
 */
function extractVideoId(embedUrl) {
  if (!embedUrl) return null
  const match = embedUrl.match(/\/embed\/([a-zA-Z0-9_-]+)/)
  return match ? match[1] : null
}

function YouTubeFacade({ embedUrl, title }) {
  const [playing, setPlaying] = useState(false)
  const videoId = extractVideoId(embedUrl)

  const handlePlay = useCallback(() => {
    setPlaying(true)
  }, [])

  if (playing || !videoId) {
    // Fallback: show the actual iframe (autoplay after click, or if we cannot parse the ID)
    const src = videoId
      ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`
      : embedUrl
    return (
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className={styles.videoFacade}
      onClick={handlePlay}
      aria-label={`Reproduzir ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className={styles.videoThumb}
        loading="lazy"
        decoding="async"
      />
      <span className={styles.playButton} aria-hidden="true">
        <svg width="68" height="48" viewBox="0 0 68 48">
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="red"
          />
          <path d="M45 24L27 14v20" fill="white" />
        </svg>
      </span>
    </button>
  )
}

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
            {badge.label && <Badge icon={badge.icon} label={badge.label} variant="default" />}
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
                    <YouTubeFacade
                      embedUrl={item.video}
                      title={`Depoimento ${item.company || ''}`}
                    />
                  </div>
                ) : item.image ? (
                  <div className={styles.cardImage}>
                    <img src={item.image} alt={`Depoimento de ${item.name}`} loading="lazy" decoding="async" />
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
