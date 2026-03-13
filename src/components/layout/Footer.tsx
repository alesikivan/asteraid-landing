'use client'

import { useTranslations } from 'next-intl'

const LANDING_STACK = ['Next.js 15', 'Zustand', 'shadcn/ui', 'Tailwind CSS', 'TypeScript']

export default function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')

  const NAV_ITEMS = [
    { label: tn('features'), href: '#features' },
    { label: tn('howItWorks'), href: '#how-it-works' },
    { label: tn('benefits'), href: '#benefits' },
    { label: tn('techStack'), href: '#tech-stack' },
    { label: tn('faq'), href: '#faq' },
  ]

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-surface)',
      padding: '48px 24px 32px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px', marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '28px', height: '28px',
                background: 'linear-gradient(135deg, #00b4d8, #0090b8)',
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="#06090f"/>
                  <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.05 4.05l1.41 1.41M12.54 12.54l1.41 1.41M4.05 13.95l1.41-1.41M12.54 5.46l1.41-1.41"
                    stroke="#06090f" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '18px',
                fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-primary)',
              }}>ASTERAID</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', maxWidth: '240px' }}>
              {t('description')}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '12px', fontFamily: 'var(--font-mono)' }}>
              {t('version')}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '16px',
            }}>{t('navigation')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_ITEMS.map(item => (
                <a key={item.href} href={item.href} style={{
                  color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >{item.label}</a>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '16px',
            }}>{t('landingStack')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {LANDING_STACK.map(tech => (
                <span key={tech} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '16px',
            }}>{t('contact')}</h4>
            <a href="#contact" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
              {tn('requestDemo')}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)', paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} {t('copyright')}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="status-dot" />
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
              {t('systemOnline')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
