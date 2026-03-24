import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import styles from './ComparisonTable.module.css'

export default function ComparisonTable({ id, data = {} }) {
  const {
    badge = {},
    title = '',
    columns = { templum: 'Templum', competitor: 'Sem a Templum' },
    rows = [],
  } = data

  return (
    <section id={id} className={styles.section}>
      <Container>
        <div className={styles.header}>
          {badge.label && (
            <Badge icon={badge.icon} label={badge.label} variant="light" />
          )}
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.tableWrapper}>
          {/* Column headers */}
          <div className={styles.columnHeaders}>
            <div className={styles.rowLabel} />
            <div className={`${styles.columnHeader} ${styles.templumHeader}`}>
              <img src="/assets/logo-templum.svg" alt="Templum" width="100" height="27" />
            </div>
            <div className={`${styles.columnHeader} ${styles.competitorHeader}`}>
              <span className={styles.competitorLabel}>
                <span className={styles.competitorRed}>Sem</span> a Templum
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className={styles.rows}>
            {rows.map((row, i) => (
              <div
                key={i}
                className={`${styles.row} ${i % 2 === 0 ? styles.rowEven : styles.rowOdd}`}
              >
                <span className={styles.rowLabel} dangerouslySetInnerHTML={{ __html: row }} />
                <span className={styles.iconCell}>
                  <span className={styles.iconCheck}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
                <span className={styles.iconCell}>
                  <span className={styles.iconX}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M10 4L4 10M4 4l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Column borders */}
          <div className={`${styles.columnBorder} ${styles.templumBorder}`} />
          <div className={`${styles.columnBorder} ${styles.competitorBorder}`} />
        </div>
      </Container>
    </section>
  )
}
