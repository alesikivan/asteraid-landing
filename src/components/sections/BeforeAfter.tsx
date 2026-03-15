'use client'

import { useTranslations } from 'next-intl'

interface CompareItem {
  task: string
  icon: string
  before: string
  after: string
}

export default function BeforeAfter() {
  const t = useTranslations('beforeAfter')
  const items = t.raw('items') as CompareItem[]

  return (
    <section id="before-after" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

      {/* subtle glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,180,216,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

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
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>
            {t('subheadline')}
          </p>
        </div>

        {/* ── Comparison table ── */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '20px', overflow: 'hidden',
        }}>

          {/* Column headers */}
          <div className="ba-header-row">
            {/* task label */}
            <div className="ba-col-task ba-header-cell" style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)' }} />

            {/* before */}
            <div className="ba-col-val ba-header-cell" style={{
              background: 'rgba(239,68,68,0.06)', borderBottom: '1px solid rgba(239,68,68,0.18)',
              borderLeft: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'flex', color: '#f87171' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171' }}>
                  {t('colBefore')}
                </span>
              </div>
            </div>

            {/* after */}
            <div className="ba-col-val ba-header-cell" style={{
              background: 'rgba(0,180,216,0.06)', borderBottom: '1px solid rgba(0,180,216,0.2)',
              borderLeft: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'flex', color: 'var(--accent-primary)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-primary)' }}>
                  {t('colAfter')}
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {items.map((item, i) => (
            <div
              key={i}
              className="ba-row"
              style={{
                borderTop: '1px solid var(--border-subtle)',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.015)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Task */}
              <div className="ba-col-task" style={{ background: 'rgba(255,255,255,0.01)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
                    color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {item.task}
                  </span>
                </div>
              </div>

              {/* Before */}
              <div className="ba-col-val" style={{ borderLeft: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#f87171', flexShrink: 0, marginTop: '2px', display: 'flex' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.before}</span>
                </div>
              </div>

              {/* After */}
              <div className="ba-col-val" style={{ borderLeft: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px', display: 'flex' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.after}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Footer summary — hidden on mobile */}
          <div className="ba-footer-summary" style={{
            borderTop: '1px solid var(--border)',
            display: 'grid', gridTemplateColumns: '200px 1fr 1fr',
          }}>
            <div style={{ background: 'var(--bg-elevated)' }} />
            <div style={{
              padding: '20px 24px', background: 'rgba(239,68,68,0.05)',
              borderLeft: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#f87171' }}>
                {t('summaryBefore')}
              </span>
            </div>
            <div style={{
              padding: '20px 24px', background: 'rgba(0,180,216,0.05)',
              borderLeft: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-primary)' }}>
                {t('summaryAfter')}
              </span>
            </div>
          </div>

        </div>

        {/* Mobile-only summary block */}
        <div className="ba-mobile-summary">
          <div className="ba-mobile-summary-col ba-mobile-summary-before">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f87171', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              {t('colBefore')}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#f87171' }}>
              {t('summaryBefore')}
            </span>
          </div>
          <div className="ba-mobile-summary-col ba-mobile-summary-after">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              {t('colAfter')}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-primary)' }}>
              {t('summaryAfter')}
            </span>
          </div>
        </div>

      </div>

      <style>{`
        /* ── Desktop layout ── */
        .ba-header-row, .ba-row {
          display: grid;
          grid-template-columns: 200px 1fr 1fr;
        }
        .ba-header-cell { padding: 14px 20px; }
        .ba-col-task { padding: 18px 20px; }
        .ba-col-val  { padding: 18px 20px; }

        /* ── Summary cards (all screens) ── */
        .ba-footer-summary { display: none !important; }
        .ba-mobile-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 12px;
        }
        .ba-mobile-summary-col {
          padding: 16px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
        .ba-mobile-summary-before {
          background: rgba(239,68,68,0.05);
          border: 1px solid rgba(239,68,68,0.18);
        }
        .ba-mobile-summary-after {
          background: rgba(0,180,216,0.05);
          border: 1px solid rgba(0,180,216,0.2);
        }

        /* ── Mobile layout ── */
        @media (max-width: 700px) {
          .ba-header-row { display: none !important; }
          .ba-row {
            grid-template-columns: 1fr !important;
            padding: 0;
          }
          .ba-col-task {
            padding: 8px 12px 6px !important;
            background: var(--bg-elevated) !important;
            border-left: none !important;
          }
          .ba-col-val {
            padding: 6px 12px !important;
            border-left: none !important;
            border-top: 1px solid var(--border-subtle);
          }
        }
      `}</style>
    </section>
  )
}
