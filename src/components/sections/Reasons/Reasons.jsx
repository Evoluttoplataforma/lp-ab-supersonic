import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import styles from './Reasons.module.css'

export default function Reasons({ id, data = {} }) {
  const { badge = {}, title = '', titleHighlight = '', image = '', cards = [] } = data

  return (
    <section id={id} className={styles.reasons}>
      <Container>
        {badge.label && (
          <div className={styles.badgeContainer}>
            <Badge icon={badge.icon} label={badge.label} variant="primary" />
          </div>
        )}
        <h2 className={styles.title}>
          {title}
          {titleHighlight && <span className={styles.highlight}> {titleHighlight}</span>}
          {title && !titleHighlight ? '' : ' da sua empresa'}
        </h2>
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            {image ? (
              <img src={image} alt="" className={styles.image} />
            ) : (
              <div className={styles.imagePlaceholder} />
            )}
          </div>
          <div className={styles.cardsCol}>
            {cards.map((card, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  <span className="material-icons-outlined" style={{ fontSize: 28, color: 'var(--primary-500)' }}>
                    {card.icon || 'star'}
                  </span>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  {card.description && (
                    <p className={styles.cardText}>{card.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
