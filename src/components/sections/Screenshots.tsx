'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Screenshots() {
  const t = useTranslations('screenshots')
  const items = t.raw('items') as Array<{
    id: string
    tab: string
    title: string
    description: string
    items: string[]
    image: string
  }>

  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <section id="screenshots" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="status-dot" />
            <span className="section-label">{t('sectionLabel')}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            {t('headline1')}{' '}
            <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
            {t('subheadline')}
          </p>
        </div>

        {/* Tab buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '48px' }}>
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: active === i ? 'var(--accent-primary)' : 'var(--border)',
                background: active === i ? 'rgba(0,180,216,0.1)' : 'transparent',
                color: active === i ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gap: '48px', alignItems: 'start' }} className="screenshots-grid">

          {/* Info panel */}
          <div>
            <span className="tag" style={{ marginBottom: '20px', display: 'inline-block' }}>{current.tab}</span>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}>
              {current.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '28px', fontSize: '16px' }}>
              {current.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {current.items.map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg style={{ marginTop: '3px', flexShrink: 0, color: 'var(--accent-primary)' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.5' }}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot */}
          <Image
            src={`/system_ptohos/${current.image}`}
            alt={current.title}
            width={1280}
            height={800}
            sizes="(max-width: 960px) 100vw, 65vw"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
            quality={80}
          />
        </div>
      </div>

      <style>{`
        .screenshots-grid { grid-template-columns: 360px 1fr; }
        @media (max-width: 960px) {
          .screenshots-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
