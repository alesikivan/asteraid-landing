'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function OrchestraConductor() {
  const t = useTranslations('orchestraConductor')

  return (
    <section
      id="orchestra"
      style={{
        padding: '120px 24px',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0, 180, 216, 0.02) 0%, transparent 60%),
            radial-gradient(ellipse 60% 100% at 80% 100%, rgba(139, 92, 246, 0.02) 0%, transparent 70%)
          `,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes conductorFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .orchestra-conductor-svg {
          animation: conductorFloat 6s ease-in-out infinite;
        }

        .orchestra-text {
          animation: textReveal 0.8s ease-out forwards;
        }

        .orchestra-text:nth-child(2) {
          animation-delay: 0.2s;
        }

        @media (max-width: 768px) {
          #orchestra {
            padding: 80px 24px !important;
          }

          #orchestra > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="orchestra-text" style={{ opacity: 0 }}>
            <span
              className="section-label"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              {t('sectionLabel')}
            </span>
          </div>

          <div className="orchestra-text" style={{ opacity: 0 }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              <span>{t('headline1')}</span>
              <br />
              <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
            </h2>
          </div>

          <p
            className="orchestra-text"
            style={{
              opacity: 0,
              color: 'var(--text-secondary)',
              fontSize: '16px',
              lineHeight: '1.7',
              maxWidth: '480px',
            }}
          >
            {t('description')}
          </p>

          {/* Download button */}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              marginTop: '32px',
              display: 'inline-flex',
            }}
          >
            {t('ctaPrimary')}
          </a>
        </div>

        {/* Right side - Conductor illustration */}
        <div
          style={{
            position: 'relative',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glow background element */}
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          <Image
            src="/system_ptohos/orchestraConductor.png"
            alt="Conductor"
            width={600}
            height={500}
            style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(280px, 90%, 600px)',
              height: 'auto',
              objectFit: 'contain',
            }}
            className="orchestra-conductor-svg"
          />
        </div>
      </div>

    </section>
  )
}
