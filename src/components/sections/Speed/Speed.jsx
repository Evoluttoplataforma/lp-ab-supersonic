import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import styles from './Speed.module.css'

export default function Speed({ id, data = {} }) {
  const { badge = {}, title = '', titleHighlight = '', checklist = [], cta = '', ctaHref = '#contato' } = data

  return (
    <section id={id} className={styles.speed}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {badge.label && <Badge icon={badge.icon} label={badge.label} />}
            <h2 className={styles.title}>
              {title}<span className={styles.highlight}>{titleHighlight}</span>
            </h2>
            {checklist.length > 0 && (
              <ul className={styles.checklist}>
                {checklist.map((item, i) => (
                  <li key={i} className={styles.checkItem}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="var(--primary-50)" />
                      <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--primary-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          <div className={styles.screenshotCol}>
            <div className={styles.screenshotPlaceholder}>
              <div className={styles.screenshotUI}>
                <div className={styles.uiSidebar}>
                  <div className={styles.uiTitle}>Sua empresa</div>
                  {['Tarefas', 'Estratégico', 'Departamentos', 'Processos', 'Pessoas', 'Pesquisas', 'Documentos', 'Problemas', 'Riscos', 'Oportunidades', 'Reuniões', 'Indicadores'].map((item) => (
                    <div key={item} className={styles.uiMenuItem}>{item}</div>
                  ))}
                </div>
                <div className={styles.uiMain}>
                  <div className={styles.uiWelcome}>Olá, este é seu espaço</div>
                  <div className={styles.uiCard}>Tarefas em Aberto</div>
                  <div className={styles.uiCard}>Meus Indicadores</div>
                  <div className={styles.uiCard}>Próximas Reuniões</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
