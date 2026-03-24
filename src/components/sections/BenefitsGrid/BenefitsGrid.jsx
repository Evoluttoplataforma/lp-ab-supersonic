import Badge from '../../ui/Badge'
import styles from './BenefitsGrid.module.css'

export default function BenefitsGrid({ data = {} }) {
  const { badge = {}, title = '', items = [] } = data

  return (
    <section className={styles.benefitsGrid}>
      <div className={styles.inner}>
        {badge.label && (
          <Badge icon={badge.icon} label={badge.label} variant="primary" />
        )}
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>
                <img
                  src={`/assets/figma/${item.icon}`}
                  alt=""
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
