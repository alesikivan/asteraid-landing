'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width: number
  height: number
  quality?: number
  sizes?: string
  priority?: boolean
  borderRadius?: string
}

export default function ScreenshotImage({
  src,
  alt,
  width,
  height,
  quality = 80,
  sizes,
  priority,
  borderRadius = '12px',
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const aspectRatio = (height / width) * 100

  return (
    <div style={{ position: 'relative', borderRadius, overflow: 'hidden' }}>
      {/* Skeleton */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-elevated)',
            borderRadius,
          }}
        >
          {/* Shimmer overlay */}
          <div className="skeleton-shimmer" />

          {/* Fake UI lines */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div className="skel-block" style={{ width: '60px', height: '20px', borderRadius: '4px' }} />
              <div className="skel-block" style={{ width: '40px', height: '20px', borderRadius: '4px' }} />
              <div className="skel-block" style={{ width: '80px', height: '20px', borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
              <div className="skel-block" style={{ width: '180px', height: '100%', borderRadius: '6px', flexShrink: 0 }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="skel-block" style={{ width: '100%', height: '80px', borderRadius: '6px' }} />
                <div className="skel-block" style={{ width: '100%', flex: 1, borderRadius: '6px' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Aspect ratio spacer so layout doesn't jump */}
      <div style={{ paddingBottom: `${aspectRatio}%` }} />

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      <style>{`
        .skeleton-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 180, 216, 0.06) 40%,
            rgba(0, 180, 216, 0.12) 50%,
            rgba(0, 180, 216, 0.06) 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
          z-index: 1;
          pointer-events: none;
        }
        .skel-block {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.04);
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
