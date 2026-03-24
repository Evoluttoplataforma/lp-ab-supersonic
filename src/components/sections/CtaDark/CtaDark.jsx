import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import styles from './CtaDark.module.css'

export default function CtaDark({ id, data = {} }) {
  const { badge = {}, title = '', description = '', checklist = [], cta = '', ctaHref = '#contato' } = data

  return (
    <section id={id} className={styles.ctaDark}>
      <Container>
        <div className={styles.content}>
          {badge.label && (
            <Badge icon={badge.icon} label={badge.label} variant="dark" />
          )}
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          {description && (
            <p className={styles.description}>{description}</p>
          )}
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
      </Container>
    </section>
  )
}
