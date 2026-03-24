import Container from '../../layout/Container'
import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import styles from './Hero.module.css'

export default function Hero({ id, data = {} }) {
  const {
    badge = {},
    headline = '',
    highlightText = '',
    subHeadline = '',
    checklist = [],
    cta = '',
    ctaHref = '#contato',
    ctaSubtext = '',
    image = null,
    floatingCard = '',
    socialProof = {},
  } = data

  return (
    <section id={id} className={styles.hero}>
      {/* Decorative circles */}
      <div className={`${styles.circle} ${styles.circle1}`} />
      <div className={`${styles.circle} ${styles.circle2}`} />
      <div className={`${styles.circle} ${styles.circle3}`} />
      <div className={`${styles.circle} ${styles.circle4}`} />
      <div className={`${styles.circle} ${styles.circle5}`} />

      <Container>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.content}>
            <div className={styles.topBlock}>
              {badge.label && <div style={{ display: 'inline-block', width: 'fit-content' }}><Badge icon={badge.icon} label={badge.label} /></div>}
              <h1 className={styles.headline}>
                {headline}
                {highlightText && (
                  <span className={styles.highlight}>{highlightText}</span>
                )}
                {subHeadline}
              </h1>
            </div>

            {checklist.length > 0 && (
              <ul className={styles.checklist}>
                {checklist.map((item, i) => (
                  <li key={i} className={styles.checkItem}>
                    <span className={styles.checkCircle}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4L4.5 7.5L11 1" stroke="#200801" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.bottomBlock}>
              <div className={styles.ctaBlock}>
                <Button href={ctaHref}>{cta}</Button>
                {ctaSubtext && (
                  <p className={styles.ctaSubtext}>{ctaSubtext}</p>
                )}
              </div>

              {socialProof.rating && (
                <div className={styles.socialProof}>
                  <div className={styles.avatars}>
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className={styles.avatar}>
                        <img
                          src={`/assets/avatars/avatar${i}.png`}
                          alt=""
                          width="32"
                          height="32"
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.ratingBlock}>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-500)">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      <span className={styles.ratingValue}>{socialProof.rating}</span>
                    </div>
                    <div className={styles.reviewCount}>
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
                        alt="Google"
                        width="12"
                        height="12"
                      />
                      <span>{socialProof.reviewCount}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageBg} />
            {image && (
              <img
                src={image}
                alt="Profissional Templum"
                className={styles.heroImage}
                fetchpriority="high"
                decoding="async"
              />
            )}

            {/* Spinning Seal */}
            <div className={styles.seal}>
              <svg viewBox="0 0 200 200" className={styles.sealSvg}>
                <defs>
                  <filter id="sealShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12" />
                  </filter>
                  <path id="sealTextPath" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
                </defs>
                <circle cx="100" cy="100" r="96" fill="white" filter="url(#sealShadow)" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="var(--neutral-300)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.33" />
                <text fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif" fill="var(--support-default)" letterSpacing="2">
                  <textPath href="#sealTextPath" startOffset="0%">
                    GARANTIDOS • MENOS CUSTO • CONTRATOS E FINANCIAMENTOS •
                  </textPath>
                </text>
                {/* Center stars */}
                <path d="M100 80l4-8 4 8-8 0z" fill="var(--primary-500)" transform="rotate(45,100,80)" />
                <path d="M90 95l3-6 3 6-6 0z" fill="var(--primary-500)" transform="rotate(45,90,95)" />
                <path d="M110 95l3-6 3 6-6 0z" fill="var(--primary-500)" transform="rotate(45,110,95)" />
                <path d="M100 105l4-8 4 8-8 0z" fill="var(--primary-500)" transform="rotate(45,100,105)" />
              </svg>
            </div>

            {/* Dashed curve connector */}
            <svg className={styles.dashedCurve} viewBox="0 0 200 100" fill="none">
              <path d="M0 50 Q100 0 200 80" stroke="var(--neutral-300)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
            </svg>

            {/* Floating Card */}
            {floatingCard && (
              <div className={styles.floatingCard}>
                <div className={styles.floatingIconBox}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-500)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className={styles.floatingText}>{floatingCard}</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
