import styles from './Spinner.module.css'

/**
 * Spinner com animação contínua em loop.
 * Usado na Hero Section.
 */
export default function Spinner({ size = 48, className = '' }) {
  return (
    <div
      className={`${styles.spinner} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50" cy="50" r="45"
          stroke="var(--primary-100)"
          strokeWidth="4"
        />
        <path
          d="M50 5 A45 45 0 0 1 95 50"
          stroke="var(--primary-500)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
