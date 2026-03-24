import styles from './Container.module.css'

const sizes = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
}

export default function Container({ children, size = 'lg', className = '' }) {
  return (
    <div className={`${styles.container} ${sizes[size] || ''} ${className}`}>
      {children}
    </div>
  )
}
