import styles from './Validation.module.css'

export default function Validation({ data = {} }) {
  const { title = '', logos = [] } = data
  const track = [...logos, ...logos]

  return (
    <section className={styles.validation}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {logos.length > 0 && (
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {track.map((logo, i) => (
              <div key={i} className={styles.logo} aria-hidden={i >= logos.length ? 'true' : undefined}>
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} className={styles.logoImg} />
                ) : (
                  logo.name || logo
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
