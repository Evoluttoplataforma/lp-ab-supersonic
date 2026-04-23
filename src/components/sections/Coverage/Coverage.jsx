import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import styles from './Coverage.module.css'

export default function Coverage({ id, data = {} }) {
  const {
    badge = {},
    title = '',
    titleHighlight = '',
    titleSuffix = '',
    description = '',
    cta = '',
    ctaHref = '#contato',
    image = '/assets/images/right-image-2-d-ch-d-hgicm-m-7-ts-dl-w-xua-j-oi-4-uw-png0.png',
  } = data

  return (
    <section id={id} className={styles.coverage}>
      <Container>
        <div className={styles.grid}>
          {/* Left Column - Text */}
          <div className={styles.content}>
            {badge.label && <Badge icon={badge.icon} label={badge.label} />}
            {(title || titleHighlight || titleSuffix) && (
              <h2 className={styles.title}>
                {title}
                {titleHighlight && <span className={styles.titleHighlight}>{titleHighlight}</span>}
                {titleSuffix}
              </h2>
            )}
            {description && <p className={styles.description}>{description}</p>}
            {cta && (
              <div className={styles.ctaRow}>
                <Button href={ctaHref} size="lg">{cta}</Button>
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          <div className={styles.imageCol}>
            <img
              src={image}
              alt="Cobertura nacional Templum"
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
