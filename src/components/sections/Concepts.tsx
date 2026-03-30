'use client'

import { useTranslations } from 'next-intl'

// Docker logo SVG (simplified)
function DockerLogo() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="15" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="12" y="15" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="24" y="15" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="12" y="5" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="24" y="5" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="24" y="0" width="10" height="4" rx="1" fill="#2496ED"/>
      <path d="M36 19c0-3 2.5-5.5 5.5-5.5 .3 3.5-1.5 6.5-5.5 7.5" stroke="#2496ED" strokeWidth="1.5" fill="none"/>
      <path d="M0 24c2 5 7 8 14 8h22c8 0 14-5 14-11H0z" fill="#2496ED"/>
    </svg>
  )
}

// Asterisk PBX icon
function AsteriskIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#FF6B00" stroke="#FF8C00" strokeWidth="0.5"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">*</text>
    </svg>
  )
}

// MongoDB leaf icon
function MongoIcon() {
  return (
    <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C10 0 2 8 2 15a8 8 0 0 0 7 7.93V25h2v-2.07A8 8 0 0 0 18 15C18 8 10 0 10 0z" fill="#4CAF50"/>
      <path d="M10 0C10 0 2 8 2 15a8 8 0 0 0 7 7.93V25h1V0z" fill="#2E7D32"/>
    </svg>
  )
}

export default function Concepts() {
  const t = useTranslations('concepts')

  return (
    <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,180,216,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginTop: '12px',
            marginBottom: '16px',
          }}>{t('headline')}</h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>{t('subheadline')}</p>
        </div>

        {/* Diagram */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>

          {/* Asteraid outer box */}
          <div style={{
            width: '100%',
            maxWidth: '780px',
            border: '2px solid rgba(0,180,216,0.4)',
            borderRadius: '20px',
            padding: '28px',
            background: 'rgba(0,180,216,0.03)',
            position: 'relative',
          }}>
            {/* Asteraid label */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--bg-base, #0d1117)',
              padding: '4px 20px',
              borderRadius: '20px',
              border: '1px solid rgba(0,180,216,0.4)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--accent-primary)',
              whiteSpace: 'nowrap',
            }}>
              Asteraid
            </div>

            {/* Two docker boxes */}
            <div className="concepts-docker-row" style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: '16px',
              alignItems: 'center',
            }}>
              {/* Config Server */}
              <div style={{
                border: '1.5px solid rgba(76,175,80,0.5)',
                borderRadius: '14px',
                padding: '20px',
                background: 'rgba(76,175,80,0.06)',
              }}>
                {/* docker badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '14px' }}>
                  <DockerLogo />
                  <span style={{ fontSize: '11px', color: '#2496ED', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>docker</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#81C784',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  {t('configServer')}
                </div>
                {/* icon placeholder */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '52px', height: '52px',
                    background: 'rgba(0,180,216,0.1)',
                    border: '1px solid rgba(0,180,216,0.2)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
                      <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                    </svg>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                  {(t.raw('configPoints') as string[]).map((point: string, i: number) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#81C784', marginTop: '2px', flexShrink: 0 }}>●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow between boxes */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '0 4px' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)' }}>
                  {t('configurationsLabel')}
                </span>
                <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
                  <line x1="0" y1="8" x2="42" y2="8" stroke="rgba(0,180,216,0.6)" strokeWidth="1.5"/>
                  <polyline points="36,3 44,8 36,13" fill="none" stroke="rgba(0,180,216,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* MongoDB Server */}
              <div style={{
                border: '1.5px solid rgba(0,180,216,0.4)',
                borderRadius: '14px',
                padding: '20px',
                background: 'rgba(0,180,216,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '14px' }}>
                  <DockerLogo />
                  <span style={{ fontSize: '11px', color: '#2496ED', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>docker</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'var(--accent-primary)',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  {t('mongoServer')}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', gap: '10px', alignItems: 'flex-end' }}>
                  <MongoIcon />
                  <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                    <ellipse cx="20" cy="30" rx="18" ry="6" fill="rgba(0,180,216,0.15)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
                    <rect x="2" y="12" width="36" height="18" rx="2" fill="rgba(0,180,216,0.08)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
                    <rect x="2" y="4" width="36" height="12" rx="2" fill="rgba(0,180,216,0.12)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
                    <ellipse cx="20" cy="4" rx="18" ry="4" fill="rgba(0,180,216,0.2)" stroke="rgba(0,180,216,0.5)" strokeWidth="1.5"/>
                  </svg>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                  {(t.raw('mongoPoints') as string[]).map((point: string, i: number) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }}>●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SSH transfer arrow + label */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 0' }}>
            <svg width="16" height="48" viewBox="0 0 16 48" fill="none">
              <line x1="8" y1="0" x2="8" y2="40" stroke="rgba(0,180,216,0.5)" strokeWidth="1.5"/>
              <polyline points="3,34 8,44 13,34" fill="none" stroke="rgba(0,180,216,0.5)" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              {t('sshLabel')}
            </span>
          </div>

          {/* Three SSH lines fan-out + PBX boxes */}
          <div className="concepts-pbx-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            width: '100%',
            maxWidth: '780px',
          }}>
            {(t.raw('pbxTargets') as Array<{ label: string; type: string }>).map((target, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}>
                {/* Arrow down */}
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                  <line x1="8" y1="0" x2="8" y2="18" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
                  <polyline points="3,12 8,20 13,12" fill="none" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                {/* PBX card */}
                <div style={{
                  border: '1.5px solid rgba(0,180,216,0.25)',
                  borderRadius: '14px',
                  padding: '20px 16px',
                  background: 'var(--bg-card)',
                  width: '100%',
                  textAlign: 'center',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.5)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,180,216,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.25)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '6px',
                  }}>
                    Asterisk PBX
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {target.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .concepts-docker-row {
            grid-template-columns: 1fr !important;
          }
          .concepts-pbx-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
