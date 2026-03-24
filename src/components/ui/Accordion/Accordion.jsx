import { useState } from 'react'
import styles from './Accordion.module.css'

/**
 * Accordion para a seção FAQ.
 * Apenas um item aberto por vez.
 */
export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
        >
          <button
            className={styles.trigger}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className={styles.question}>{item.question}</span>
            <span className={styles.chevron} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
          <div className={styles.content}>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
