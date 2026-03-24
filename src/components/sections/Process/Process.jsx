import React from 'react'
import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import styles from './Process.module.css'

const ICON_FILES = {
  orbit: '/assets/figma/arrow-split0.svg',
  document: '/assets/figma/contract0.svg',
  headset: '/assets/figma/headset-mic0.svg',
  tasks: '/assets/figma/calendar-check0.svg',
}

export default function Process({ id, data = {} }) {
  const { badge = {}, title = '', subtitle = '', items = [] } = data

  return (
    <section id={id} className={styles.process}>
      <Container>
        {badge.label && (
          <div className={styles.badgeContainer}>
            <Badge icon={badge.icon} label={badge.label} variant="light" />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <div className={styles.itemsContainer}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <hr className={styles.divider} />}
              <div
                className={`${styles.item} ${index % 2 !== 0 ? styles.reversed : ''}`}
              >
              <div className={styles.textContent}>
                <img className={styles.itemIcon} src={ICON_FILES[item.icon] || '/assets/figma/arrow-split0.svg'} alt="" width="28" height="28" />
                <h3 className={styles.itemTitle}>{item.title}</h3>
                {item.description && (
                  <p className={styles.itemDescription}>{item.description}</p>
                )}
                {item.checklist && (
                  <ul className={styles.checklist}>
                    {item.checklist.map((check, ci) => (
                      <li key={ci} className={styles.checkItem}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
                          <circle cx="12" cy="12" r="12" fill="var(--primary-50)" />
                          <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--primary-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.cta && (
                  <div className={styles.ctaRow}>
                    <Button href={item.ctaHref || '#contato'} size="lg">
                      {item.cta}
                    </Button>
                  </div>
                )}
              </div>

              <div className={styles.videoContainer}>
                {item.motion ? (
                  <video className={styles.video} autoPlay loop muted playsInline>
                    <source src={item.motion} type="video/webm" />
                    {item.motionFallback && (
                      <img src={item.motionFallback} alt={item.title} className={styles.fallbackImage} />
                    )}
                  </video>
                ) : item.motionFallback ? (
                  <img src={item.motionFallback} alt={item.title} className={styles.fallbackImage} />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>
            </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  )
}
