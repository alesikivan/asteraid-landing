'use client'

import { useTranslations } from 'next-intl'

interface WhyItem {
  title: string
  description: string
  icon: string
}

const ICONS: Record<string, React.ReactNode> = {
  recovery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36M20.49 15a9 9 0 0 1-14.85 3.36"></path>
    </svg>
  ),
  ui: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="2" y1="20" x2="22" y2="20"></line>
    </svg>
  ),
  update: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1 .12-8.49"></path>
    </svg>
  ),
  cluster: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="11" r="8"></circle>
      <path d="M21 11a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      <circle cx="12" cy="11" r="3"></circle>
    </svg>
  ),
  cost: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 15 16 10 5 21 3 19 12 8 3 3 8 3 19 14"></polyline>
    </svg>
  ),
  container: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  ),
}

export default function WhyAsteraid() {
  const t = useTranslations('whyAsteraid')
  const items = t.raw('items') as WhyItem[]

  return (
    <section id="why-asteraid" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,180,216,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ marginBottom: '16px', display: 'block' }}>
            {t('sectionLabel')}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1,
            marginBottom: '24px', letterSpacing: '-0.01em',
          }}>
            {t('headline1')}<br />
            <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.7',
            maxWidth: '600px', margin: '0 auto', marginBottom: '48px',
          }}>
            {t('subheadline')}
          </p>
        </div>

        {/* 6-card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px 24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(0,180,216,0.3)'
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Decorative number */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                fontSize: '56px',
                fontWeight: 700,
                color: 'rgba(0,180,216,0.04)',
                fontFamily: 'var(--font-display)',
                lineHeight: 1,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(0,180,216,0.1)',
                border: '1px solid rgba(0,180,216,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                marginBottom: '16px',
              }}>
                {ICONS[item.icon] || ICONS['recovery']}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                lineHeight: 1.4,
                fontFamily: 'var(--font-display)',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.65',
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Free highlight block */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(0,217,126,0.08) 0%, rgba(0,217,126,0.02) 100%)',
          border: '2px solid rgba(0,217,126,0.3)',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          overflow: 'hidden',
        }}>
          {/* Glow background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,217,126,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Badge */}
            <span style={{
              display: 'inline-block',
              background: 'rgba(0,217,126,0.2)',
              border: '1px solid rgba(0,217,126,0.4)',
              color: '#00d97e',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)',
            }}>
              {t('freeBlock.badge')}
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              {t('freeBlock.title')}
            </h3>

            {/* Big price */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '32px',
            }}>
              <span style={{
                fontSize: 'clamp(80px, 12vw, 140px)',
                fontWeight: 700,
                color: '#00d97e',
                fontFamily: 'var(--font-display)',
                lineHeight: 1,
                textShadow: '0 0 30px rgba(0,217,126,0.3)',
              }}>
                {t('freeBlock.price')}
              </span>
              <span style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 600,
                color: '#00d97e',
                fontFamily: 'var(--font-display)',
              }}>
                {t('freeBlock.currency')}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              maxWidth: '500px',
              margin: '0 auto 16px',
            }}>
              {t('freeBlock.description')}
            </p>

            {/* Note */}
            <p style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              margin: 0,
              fontStyle: 'italic',
            }}>
              {t('freeBlock.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
