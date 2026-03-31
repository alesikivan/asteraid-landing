'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
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
  quality = 100,
  sizes,
  priority,
  borderRadius = '12px',
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const aspectRatio = (height / width) * 100

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreen(false)
      }
    }

    if (fullscreen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [fullscreen])

  return (
    <>
      <div
        style={{ position: 'relative', borderRadius, overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setFullscreen(true)}
      >
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
            imageRendering: 'crisp-edges',
          }}
        />

        {/* Fullscreen icon overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            borderRadius,
          }}
          className="fullscreen-overlay"
        >
          <div style={{ background: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '12px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {fullscreen && mounted && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setFullscreen(false)
            }
          }}
        >
          <div style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', width: '100%', height: '100%' }}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={100}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
              }}
            />

            {/* Close button */}
            <button
              onClick={() => setFullscreen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              }}
              aria-label="Close fullscreen"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </div>,
        document.body
      )}

      <style>{`
        div:hover .fullscreen-overlay {
          opacity: 1 !important;
        }
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
    </>
  )
}
