'use client'

import { useTranslations } from 'next-intl'

export default function CTA() {
  const t = useTranslations('cta')
  const trust = t.raw('trust') as Array<{ icon: string; label: string }>

  return (
    <section id="contact" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,180,216,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(88,101,242,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <span className="section-label" style={{ marginBottom: '24px', display: 'block' }}>
          {t('sectionLabel')}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 80px)',
          fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.05,
          marginBottom: '24px', letterSpacing: '-0.01em',
        }}>
          {t('headline1')}<br />
          <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
        </h2>
        <p style={{
          color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.7',
          marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px',
        }}>
          {t('subheadline')}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href="mailto:demo@freeng.com" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {t('ctaPrimary')}
          </a>
          <a href="#how-it-works" className="btn-secondary" style={{ fontSize: '18px', padding: '16px 36px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            {t('ctaSecondary')}
          </a>
        </div>

        {/* <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '32px', flexWrap: 'wrap',
          paddingTop: '32px', borderTop: '1px solid var(--border-subtle)',
        }}>
          {trust.map(b => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
