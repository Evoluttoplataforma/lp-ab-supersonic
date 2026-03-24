import styles from './Validation.module.css'

export default function Validation({ data = {} }) {
  const { title = '', logos = [] } = data

  return (
    <section className={styles.validation}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.logosRow}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.logo}>
              {logo.image ? (
                <img src={logo.image} alt={logo.name} className={styles.logoImg} />
              ) : (
                logo.name || logo
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
