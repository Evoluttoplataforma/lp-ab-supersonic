import styles from './BigNumbers.module.css'

export default function BigNumbers({ data = {} }) {
  const { title = '', items = [] } = data

  return (
    <section className={styles.bigNumbers}>
      <div className={styles.grid}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.statsRow}>
          {items.map((item, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.iconBox}>
                <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--primary-500)' }}>
                  {item.icon}
                </span>
              </div>
              <div>
                <div className={styles.value}>{item.value}</div>
                <div className={styles.label}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
