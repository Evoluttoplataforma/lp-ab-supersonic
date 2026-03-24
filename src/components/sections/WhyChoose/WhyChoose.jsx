import Badge from '../../ui/Badge'
import styles from './WhyChoose.module.css'

export default function WhyChoose({ id, data = {} }) {
  const { badge = {}, title = '', subtitle = '', cards = [] } = data

  return (
    <section id={id} className={styles.whyChoose}>
      <div className={styles.inner}>
        {badge.label && (
          <div className={styles.badgeContainer}>
            <Badge icon={badge.icon} label={badge.label} variant="light" />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              {card.icon && (
                <div className={styles.cardIcon}>
                  <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--primary-500)' }}>
                    {card.icon}
                  </span>
                </div>
              )}
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
