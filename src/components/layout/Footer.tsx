'use client'

import { useTranslations } from 'next-intl'
import Logo from '@/components/ui/Logo'

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

  const RESOURCE_ITEMS = [
    { label: t('resourceDocs'), href: '#' },
    { label: t('resourceChangelog'), href: '#' },
    { label: t('resourceSupport'), href: '#' },
    { label: t('resourcePrivacy'), href: '#' },
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
            <div style={{ marginBottom: '16px' }}>
              <Logo height={26} />
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

          {/* Resources */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '16px',
            }}>{t('resources')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {RESOURCE_ITEMS.map(item => (
                <a key={item.href + item.label} href={item.href} style={{
                  color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >{item.label}</a>
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
