'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const t = useTranslations('faq')
  const [open, setOpen] = useState<string | null>(null)
  const items = t.raw('items') as Array<{ id: string; question: string; answer: string }>

  return (
    <section id="faq" style={{
      padding: '100px 24px', background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)', position: 'relative',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px',
          }}>{t('headline')}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>{t('subheadline')}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item, i) => {
            const isOpen = open === item.id
            return (
              <div key={item.id} style={{
                background: isOpen ? 'var(--bg-elevated)' : 'var(--bg-card)',
                border: `1px solid ${isOpen ? 'rgba(0,180,216,0.3)' : 'var(--border)'}`,
                borderRadius: '10px', overflow: 'hidden', transition: 'all 0.25s ease',
              }}>
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  style={{
                    width: '100%', padding: '20px 24px', background: 'none', border: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '16px', cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-primary)', opacity: 0.6, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>
                      {item.question}
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={isOpen ? 'var(--accent-primary)' : 'var(--text-muted)'}
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease', flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px 52px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
