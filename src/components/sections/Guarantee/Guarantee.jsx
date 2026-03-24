import Container from '../../layout/Container'
import Button from '../../ui/Button'
import styles from './Guarantee.module.css'

export default function Guarantee({ id, data = {} }) {
  const {
    badge = {},
    titleLine1 = '',
    titleLine2 = '',
    highlight = '',
    titleLine3 = '',
    titleLine4 = '',
    description = '',
    cta = '',
    ctaHref = '#contato',
  } = data

  return (
    <section id={id} className={styles.guarantee}>
      <Container>
        <div className={styles.content}>
          {badge.label && (
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>
                <img src="/assets/figma/verified1.svg" alt="" width="18" height="18" />
                <span>{badge.label}</span>
              </span>
            </div>
          )}

          <h2 className={styles.title}>
            {titleLine1}
            <img src="/assets/figma/icons0.svg" alt="" className={styles.titleIcon} />
            {titleLine2} <span className={styles.highlight}>{highlight}</span>
            <br />
            {titleLine3}
            <img src="/assets/figma/icons1.svg" alt="" className={styles.titleIcon2} />
            {titleLine4}
          </h2>

          {description && <p className={styles.description}>{description}</p>}

          {cta && (
            <div className={styles.ctaRow}>
              <Button href={ctaHref} size="lg">{cta}</Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
