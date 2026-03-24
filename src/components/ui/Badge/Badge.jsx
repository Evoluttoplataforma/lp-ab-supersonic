import styles from './Badge.module.css'

/**
 * Badge de seção — usado em todas as seções da landing page.
 * Suporta Material Icons (check_circle, verified) e texto/emoji.
 * Material Icons: só letras minúsculas e underscores.
 */
function isMaterialIcon(str) {
  return /^[a-z][a-z0-9_]*$/.test(str)
}

export default function Badge({ icon, label, variant = 'default' }) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {icon && (
        isMaterialIcon(icon)
          ? <span className={`${styles.icon} material-icons-outlined`} style={{ fontSize: 18 }}>{icon}</span>
          : <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.label}>{label}</span>
    </span>
  )
}
