import Container from '../../layout/Container'
import Button from '../../ui/Button'
import styles from './Selo.module.css'

export default function Selo({ id, data = {} }) {
  const { title = '', description = '', cta = '', ctaHref = '#contato' } = data

  return (
    <section id={id} className={styles.selo}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Selo Reconhecido<br /><strong>Pelo Mercado</strong>
            </h2>
            <p className={styles.description}>{description}</p>
            {cta && (
              <div className={styles.ctaRow}>
                <Button href={ctaHref} variant="dark" size="lg">{cta}</Button>
              </div>
            )}
          </div>
          <div className={styles.sealCol}>
            {/* Diagonal lines */}
            <div className={styles.diagonalLine1} />
            <div className={styles.diagonalLine2} />

            {/* Seal image */}
            <img
              src="/assets/figma/image-business-and-life-coach-free-framer-template0.png"
              alt="Selo Templum - Estamos Implementando"
              className={styles.sealImage}
            />

            {/* Floating badges */}
            <div className={styles.floatingBadge1}>
              <img src="/assets/figma/svg-111466587650.svg" alt="" width="22" height="22" />
              <span>Mais Credibilidade</span>
            </div>
            <div className={styles.floatingBadge2}>
              <img src="/assets/figma/svg-108740119510.svg" alt="" width="22" height="22" />
              <span>Status de implementação</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
