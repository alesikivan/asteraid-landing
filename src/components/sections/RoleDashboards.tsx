'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const ROLE_COLORS: Record<string, string> = {
  admin: '#00b4d8',
  supervisor: '#a855f7',
  user: '#22c55e',
  security: '#f59e0b',
}

export default function RoleDashboards() {
  const t = useTranslations('roles')
  const [activeRole, setActiveRole] = useState('admin')

  const roles = t.raw('items') as Array<{
    id: string; name: string; description: string; badge: string; features: string[]
  }>
  const matrix = t.raw('matrix') as Array<{
    module: string; admin: boolean; supervisor: boolean; user: boolean; security: boolean
  }>

  const role = roles.find(r => r.id === activeRole)!
  const color = ROLE_COLORS[activeRole]

  return (
    <section style={{
      padding: '100px 24px',
      background: 'var(--bg-surface)',
      position: 'relative',
      borderTop: '1px solid var(--border-subtle)',
    }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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

        {/* Role tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {roles.map(r => (
            <button key={r.id} onClick={() => setActiveRole(r.id)} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px',
              background: activeRole === r.id ? `${ROLE_COLORS[r.id]}15` : 'var(--bg-card)',
              border: `1px solid ${activeRole === r.id ? ROLE_COLORS[r.id] : 'var(--border)'}`,
              borderRadius: '8px',
              color: activeRole === r.id ? ROLE_COLORS[r.id] : 'var(--text-secondary)',
              fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600,
              letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s ease',
              textTransform: 'uppercase',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: ROLE_COLORS[r.id] }} />
              {r.name}
            </button>
          ))}
        </div>

        {/* Role detail */}
        <div style={{ display: 'grid', gap: '32px', alignItems: 'stretch' }} className="role-grid">
          {/* Features */}
          <div style={{
            background: 'var(--bg-card)', border: `1px solid ${color}22`,
            borderRadius: '16px', padding: '32px',
            boxShadow: `0 0 40px ${color}0d`,
          }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'inline-block', padding: '4px 12px',
                background: `${color}15`, border: `1px solid ${color}40`,
                borderRadius: '4px', fontFamily: 'var(--font-mono)',
                fontSize: '11px', color, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{role.badge}</div>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color, marginBottom: '8px', letterSpacing: '0.02em' }}>
              {role.name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px' }}>
              {role.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {role.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '15px' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Matrix */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{
              padding: '20px 24px', background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)',
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>{t('matrixTitle')}</div>

            {matrix.map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                padding: '12px 24px', fontSize: '13px',
                borderBottom: i < matrix.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
              }}>
                <span style={{ color: 'var(--text-secondary)' }}>{row.module}</span>
                {(['admin', 'supervisor', 'user', 'security'] as const).map(role => (
                  <div key={role} style={{ display: 'flex', justifyContent: 'center' }}>
                    {row[role] ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <polyline points="20 6 9 17 4 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}

            <div style={{
              display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
              padding: '10px 24px', background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('module')}</span>
              {['Admin', 'Super', 'User', 'Sec'].map(r => (
                <div key={r} style={{ display: 'flex', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .role-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) { .role-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
