'use client'

import { useTranslations } from 'next-intl'

const ICON_MAP: Record<string, React.ReactNode> = {
  monitor: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  zap: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  activity: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  'file-text': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  terminal: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  layers: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
}

export default function Benefits() {
  const t = useTranslations('benefits')
  const items = t.raw('items') as Array<{ title: string; description: string; icon: string }>

  return (
    <section id="benefits" style={{
      padding: '100px 24px', background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,180,216,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: '600px', marginBottom: '72px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 700, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px', lineHeight: 1.1,
          }}>
            {t('headline1')}<br />
            <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.65' }}>
            {t('subheadline')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {items.map((b, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '28px', transition: 'all 0.3s ease',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{
                position: 'absolute', top: '12px', right: '16px',
                fontFamily: 'var(--font-mono)', fontSize: '48px', fontWeight: 700,
                color: 'rgba(0,180,216,0.04)', lineHeight: 1, userSelect: 'none',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{
                width: '48px', height: '48px',
                background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.15)',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-primary)', marginBottom: '20px',
              }}>
                {ICON_MAP[b.icon]}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '0.02em' }}>
                {b.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.65' }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
