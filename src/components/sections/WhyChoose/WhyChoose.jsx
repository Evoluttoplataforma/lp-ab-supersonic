import Badge from '../../ui/Badge'
import styles from './WhyChoose.module.css'

export default function WhyChoose({ id, data = {} }) {
  const { badge = {}, title = '', titleHighlight = '', subtitle = '', cards = [] } = data

  return (
    <section id={id} className={styles.whyChoose}>
      <div className={styles.inner}>
        {badge.label && (
          <div className={styles.badgeContainer}>
            <Badge icon={badge.icon} label={badge.label} variant="default" />
          </div>
        )}
        <h2 className={styles.title}>
          {title}
          {titleHighlight && <span className={styles.titleHighlight}>{titleHighlight}</span>}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <svg className={styles.cardShape} viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <circle cx="170" cy="30" r="60" fill="var(--primary-50)" opacity="0.5" />
                <circle cx="150" cy="180" r="30" fill="var(--primary-50)" opacity="0.4" />
              </svg>
              {card.icon && (
                <div className={styles.cardIcon}>
                  <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--primary-500)' }}>
                    {card.icon}
                  </span>
                </div>
              )}
              <p className={styles.cardText} dangerouslySetInnerHTML={{ __html: card.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
