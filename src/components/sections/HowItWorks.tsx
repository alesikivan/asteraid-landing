'use client'

import { useTranslations } from 'next-intl'

const WIZARD_STEPS = ['Admin', 'Connection', 'Groups', 'CDR', 'Certificates', 'Finished']

export default function HowItWorks() {
  const t = useTranslations('howItWorks')
  const steps = t.raw('steps') as Array<{ step: string; title: string; description: string }>

  return (
    <section id="how-it-works" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(88,101,242,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px',
          }}>{t('headline')}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
            {t('subheadline')}
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '40px', left: '4%', right: '4%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,180,216,0.2) 10%, rgba(0,180,216,0.2) 90%, transparent)',
            pointerEvents: 'none',
          }} className="connector-line" />

          <div style={{ display: 'grid', gap: '24px', alignItems: 'stretch' }} className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '72px', height: '72px',
                  border: '1px solid rgba(0,180,216,0.3)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', marginBottom: '24px', position: 'relative', zIndex: 1,
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 500, color: 'var(--accent-primary)' }}>
                    {step.step}
                  </span>
                </div>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px', width: '100%', flex: 1,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,180,216,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '0.02em' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.65' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard teaser */}
        <div style={{
          marginTop: '64px', background: 'var(--bg-card)',
          border: '1px solid rgba(0,180,216,0.15)', borderRadius: '16px',
          padding: '32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <div className="tag" style={{ marginBottom: '12px' }}>{t('wizardTag')}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
              {t('wizardTitle')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t('wizardDesc')}</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {WIZARD_STEPS.map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  padding: '6px 14px',
                  background: i < 3 ? 'rgba(0,180,216,0.1)' : 'var(--bg-elevated)',
                  border: `1px solid ${i < 3 ? 'rgba(0,180,216,0.3)' : 'var(--border)'}`,
                  borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: i < 3 ? 'var(--accent-primary)' : 'var(--text-muted)',
                }}>
                  {i + 1}. {step}
                </div>
                {i < WIZARD_STEPS.length - 1 && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .steps-grid { grid-template-columns: repeat(4, 1fr); }
        .connector-line { display: block; }
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connector-line { display: none !important; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
