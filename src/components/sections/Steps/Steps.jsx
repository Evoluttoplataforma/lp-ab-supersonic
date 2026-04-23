import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import styles from './Steps.module.css'

export default function Steps({ id, data = {} }) {
  const { badge = {}, title = '', subtitle = '', subtitleHighlight = '', subtitleEnd = '', steps = [] } = data

  return (
    <section id={id} className={styles.steps}>
      <Container>
        {badge.label && (
          <div className={styles.badgeContainer}>
            <Badge icon={badge.icon} label={badge.label} />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>
          {subtitle}<span className={styles.highlight}>{subtitleHighlight}</span>{subtitleEnd}
        </p>

        <div className={styles.grid}>
          {steps.map((step, i) => {
            const isLastSpan = steps.length % 3 === 1 && i === steps.length - 1
            return (
              <div key={i} className={`${styles.card} ${isLastSpan ? styles.cardWide : ''}`}>
                <div className={styles.cardIcon}>
                  <img
                    src={`/assets/figma/${step.icon}`}
                    alt=""
                    width="70"
                    height="60"
                    className={styles.stepImage}
                  />
                </div>
                <div className={styles.stepNumber}>PASSO {i + 1}</div>
                <p className={styles.stepText}>
                  <strong>{step.title}</strong> {step.text}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
