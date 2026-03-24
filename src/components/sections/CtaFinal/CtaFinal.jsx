import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import styles from './CtaFinal.module.css'

export default function CtaFinal({ id, data = {} }) {
  const {
    badge = {},
    title = '',
    subtitle = '',
    checklist = [],
    cta = '',
    ctaHref = '#contato',
    image = '',
    backgroundImage = '',
    rounded = false,
  } = data

  // Layout with background image (ISO 9001 style)
  if (backgroundImage) {
    const sectionStyle = {
      backgroundImage: `linear-gradient(268deg, rgba(13, 13, 13, 0) 20.34%, #0D0D0D 56.74%), url(${backgroundImage})`,
      backgroundPosition: 'right top',
    }

    const classes = [
      styles.ctaFinal,
      styles.withImage,
      rounded ? styles.rounded : '',
    ].filter(Boolean).join(' ')

    return (
      <section id={id} className={classes} style={sectionStyle}>
        <Container>
          <div className={styles.content}>
            {badge.label && <Badge icon={badge.icon} label={badge.label} variant="dark" />}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
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

  // Layout with side image (PBQP-H style) or dark section with checklist
  return (
    <section id={id} className={styles.ctaFinal}>
      <Container>
        <div className={image ? styles.grid : styles.content}>
          {image && (
            <div className={styles.imageCol}>
              <img src={image} alt="" className={styles.image} />
            </div>
          )}
          <div className={styles.textCol}>
            {badge.label && <Badge icon={badge.icon} label={badge.label} variant="dark" />}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {checklist.length > 0 && (
              <ul className={styles.checklist}>
                {checklist.map((item, i) => (
                  <li key={i} className={styles.checkItem}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="var(--primary-500)" />
                      <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className={styles.ctaRow}>
                <Button href={ctaHref} size="lg">{cta}</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
