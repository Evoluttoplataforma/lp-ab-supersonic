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
            {badge.label && <Badge icon={badge.icon} label={badge.label} variant="primary" />}
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.right}>
            {items.map((item, i) => (
              <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span className={styles.chevron}>{openIndex === i ? '∧' : '∨'}</span>
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
