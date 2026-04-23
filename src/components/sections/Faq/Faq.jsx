import { useState } from 'react'
import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import styles from './Faq.module.css'

export default function Faq({ id, data = {} }) {
  const { badge = {}, title = '', items = [] } = data
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id={id} className={styles.faq}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.left}>
            {badge.label && <Badge icon={badge.icon} label={badge.label} variant="default" />}
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.right}>
            {items.map((item, i) => (
              <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{item.question}</span>
                  <svg
                    className={styles.chevron}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
