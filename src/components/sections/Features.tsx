'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const ICON_MAP: Record<string, React.ReactNode> = {
  activity: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  server: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  'git-branch': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
  'phone-call': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 9.75 19.79 19.79 0 0 1 1.65 1.11 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 9.75 19.79 19.79 0 0 1 1.65 1.11 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  users: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  building: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  terminal: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  shield: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  code: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  lock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  'file-text': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  'play-circle': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
  globe: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  'rotate-ccw': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.9"/></svg>,
  archive: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>,
}

const FEATURE_ICONS: Record<string, string> = {
  ruletest: 'play-circle', disaster: 'archive', vmboot: 'rotate-ccw', multilang: 'globe',
  realtime: 'activity', multistation: 'server', dialplan: 'git-branch',
  cdr: 'phone-call', pbx: 'phone', users: 'users', ad: 'building',
  terminal: 'terminal', firewall: 'shield', editor: 'code', ssl: 'lock', logger: 'file-text',
}

const HIDDEN_IDS = new Set(['users'])

export default function Features() {
  const t = useTranslations('features')
  const allItems = t.raw('items') as Array<{ id: string; tag: string; title: string; description: string; items: string[] }>
  const items = allItems.filter(f => !HIDDEN_IDS.has(f.id))
  const [active, setActive] = useState<Set<string>>(() => new Set(['ruletest', 'disaster', 'vmboot']))

  return (
    <section id="features" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="bg-glow-secondary" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 700, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px',
          }}>
            {t('headline1')}<br />
            <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '600px', margin: '0 auto' }}>
            {t('subheadline')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {items.map((feature) => (
            <div key={feature.id}
              onClick={() => setActive(prev => { const next = new Set(prev); next.has(feature.id) ? next.delete(feature.id) : next.add(feature.id); return next })}
              style={{
                background: active.has(feature.id) ? 'var(--bg-elevated)' : 'var(--bg-card)',
                border: `1px solid ${active.has(feature.id) ? 'rgba(0,180,216,0.35)' : 'var(--border)'}`,
                borderRadius: '12px', padding: '24px', cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: active.has(feature.id) ? '0 0 30px rgba(0,180,216,0.1)' : 'none',
              }}
              onMouseEnter={e => { if (active !== feature.id) e.currentTarget.style.borderColor = 'rgba(0,180,216,0.2)' }}
              onMouseLeave={e => { if (active !== feature.id) e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'rgba(0,180,216,0.1)', border: '1px solid rgba(0,180,216,0.2)',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-primary)', flexShrink: 0,
                  }}>
                    {ICON_MAP[FEATURE_ICONS[feature.id] ?? 'activity']}
                  </div>
                  <span className="tag">{feature.tag}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: active.has(feature.id) ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease', flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '0.02em' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                {feature.description}
              </p>

              {active.has(feature.id) && (
                <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {feature.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <polyline points="20 6 9 17 4 12" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
