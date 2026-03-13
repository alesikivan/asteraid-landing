'use client'

import { useTranslations } from 'next-intl'

interface TableRow {
  component: string
  physical: string
  virtual: string
}

interface NetworkItem {
  label: string
  text: string
}

const networkIcons: React.ReactNode[] = [
  // wifi / internet
  <svg key="wifi" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/>
    <path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>,
  // server / dhcp
  <svg key="dhcp" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>,
  // shield / firewall
  <svg key="fw" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  // settings / proxy
  <svg key="proxy" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
  </svg>,
]

export default function SystemRequirements() {
  const t = useTranslations('systemRequirements')
  const rows = t.raw('rows') as TableRow[]
  const networkItems = t.raw('networkItems') as NetworkItem[]

  return (
    <section id="system-requirements" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px',
          }}>
            {t('headline1')}{' '}
            <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '540px', margin: '0 auto' }}>
            {t('subheadline')}
          </p>
        </div>

        {/* ── Hardware table ── */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '16px', overflow: 'hidden', marginBottom: '20px',
        }}>
          {/* Desktop header */}
          <div className="sysreq-header">
            <div className="sysreq-col-comp">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
                {t('colComponent')}
              </span>
            </div>
            <div className="sysreq-col-val">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-primary)' }}>
                  {t('colPhysical')}
                </span>
              </div>
            </div>
            <div className="sysreq-col-val">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-secondary)', display: 'flex' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="12" rx="2"/>
                    <path d="M16 8h4a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-1"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-secondary)' }}>
                  {t('colVirtual')}
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="sysreq-row"
              style={{ borderTop: '1px solid var(--border-subtle)', transition: 'background 0.15s ease' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,180,216,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div className="sysreq-col-comp">
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>{row.component}</span>
              </div>
              <div className="sysreq-col-val">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', lineHeight: '1.5', background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.12)', borderRadius: '5px', padding: '3px 9px', display: 'inline-block' }}>
                  {row.physical}
                </span>
              </div>
              <div className="sysreq-col-val">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', lineHeight: '1.5', background: 'rgba(88,101,242,0.06)', border: '1px solid rgba(88,101,242,0.15)', borderRadius: '5px', padding: '3px 9px', display: 'inline-block' }}>
                  {row.virtual}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Note ── */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '12px',
          background: 'rgba(0,180,216,0.05)', border: '1px solid rgba(0,180,216,0.2)',
          borderLeft: '3px solid var(--accent-primary)', borderRadius: '8px',
          padding: '14px 18px', marginBottom: '20px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>
            <strong style={{ color: 'var(--text-primary)' }}>{t('noteTitle')}</strong>{' '}{t('noteText')}
          </p>
        </div>

        {/* ── Network Requirements ── */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '16px', overflow: 'hidden',
        }}>
          {/* Network header */}
          <div style={{
            padding: '18px 24px', background: 'var(--bg-elevated)',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/>
                <path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
              {t('networkTitle')}
            </h3>
          </div>

          {/* Network items grid */}
          <div className="sysreq-net-grid" style={{ padding: '20px 24px', gap: '12px' }}>
            {networkItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '14px 16px',
                  background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                  borderRadius: '10px', transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,180,216,0.25)'
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(0,180,216,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                  background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}>
                  {networkIcons[i] ?? networkIcons[0]}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px', lineHeight: '1.4' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* ── Table layout ── */
        .sysreq-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: var(--bg-elevated);
          border-bottom: 1px solid rgba(0,180,216,0.15);
        }
        .sysreq-header > div {
          padding: 13px 20px;
        }
        .sysreq-header > div + div {
          border-left: 1px solid var(--border-subtle);
        }
        .sysreq-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
        }
        .sysreq-col-comp,
        .sysreq-col-val {
          padding: 14px 20px;
        }
        .sysreq-col-val {
          border-left: 1px solid var(--border-subtle);
        }

        /* ── Network grid ── */
        .sysreq-net-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ── Mobile ── */
        @media (max-width: 680px) {
          .sysreq-header { display: none !important; }
          .sysreq-row {
            grid-template-columns: 1fr !important;
            padding: 14px 16px;
            gap: 6px;
          }
          .sysreq-col-comp { padding: 0 !important; border-left: none !important; }
          .sysreq-col-val  { padding: 4px 0 0 !important; border-left: none !important; }
          .sysreq-col-val span { font-size: 11px !important; }
          .sysreq-net-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
