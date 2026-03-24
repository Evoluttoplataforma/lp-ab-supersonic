import { useState } from 'react'

/**
 * LazyImage — a performance-optimized image component.
 *
 * - Uses native `loading="lazy"` and `decoding="async"`
 * - Optional blur placeholder that fades out once loaded
 *
 * @param {string}  src          - Image source URL
 * @param {string}  alt          - Alt text
 * @param {string}  [className]  - Optional CSS class
 * @param {string}  [placeholder] - Optional low-res / blur placeholder URL
 * @param {number}  [width]      - Intrinsic width
 * @param {number}  [height]     - Intrinsic height
 * @param {object}  [style]      - Inline styles
 * @param {object}  rest         - Any additional img attributes
 */
export default function LazyImage({
  src,
  alt,
  className,
  placeholder,
  width,
  height,
  style,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)

  const wrapperStyle = placeholder
    ? {
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-block',
        ...style,
      }
    : style

  if (placeholder) {
    return (
      <span style={wrapperStyle} className={className}>
        {/* Blur placeholder */}
        {!loaded && (
          <img
            src={placeholder}
            alt=""
            aria-hidden="true"
            width={width}
            height={height}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
            }}
          />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          {...rest}
        />
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      style={style}
      {...rest}
    />
  )
}
