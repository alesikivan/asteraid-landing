'use client'

import { useTranslations } from 'next-intl'

export default function TechStack() {
  const t = useTranslations('techStack')
  const serverItems = t.raw('server') as string[]
  const clientItems = t.raw('client') as string[]

  return (
    <section id="tech-stack" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px',
          }}>
            {t('headline1')}{' '}
            <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            {t('subheadline')}
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px' }} className="tech-grid">
          <TechColumn title={t('backendTitle')} color="#00b4d8" items={serverItems} icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
          } />
          <TechColumn title={t('frontendTitle')} color="#a855f7" items={clientItems} icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          } />
        </div>

        <div style={{
          marginTop: '32px', padding: '20px 24px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {t('landingLabel')}
          </span>
          {['Next.js 15', 'TypeScript', 'Zustand', 'shadcn/ui', 'Tailwind CSS'].map(tech => (
            <span key={tech} style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--accent-primary)',
              background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.15)',
              borderRadius: '4px', padding: '4px 10px',
            }}>{tech}</span>
          ))}
        </div>
      </div>

      <style>{`
        .tech-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 700px) { .tech-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function TechColumn({ title, color, items, icon }: { title: string; color: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
      <div style={{
        padding: '20px 24px', background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <div style={{ color }}>{icon}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {title}
        </h3>
      </div>
      <div style={{ padding: '8px 0' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 24px', transition: 'background 0.15s ease' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, opacity: 0.6, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
