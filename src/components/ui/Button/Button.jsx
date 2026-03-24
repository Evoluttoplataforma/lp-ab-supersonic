import styles from './Button.module.css'

/**
 * Split button: quadrado com seta + retângulo com texto.
 * Conforme design Figma.
 */
export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  type = 'button',
  disabled = false,
}) {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
  ].filter(Boolean).join(' ')

  const content = (
    <>
      <span className={styles.arrowBox} aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={styles.textBox}>{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
