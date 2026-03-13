'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useUIStore } from '@/store/useUIStore'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from '@/components/ui/Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('nav')
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUIStore()

  const NAV_ITEMS = [
    { label: t('features'), href: '#features' },
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('benefits'), href: '#benefits' },
    { label: t('screenshots'), href: '#screenshots' },
    { label: t('faq'), href: '#faq' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6, 9, 15, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 180, 216, 0.1)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo height={28} />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden-mobile">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none', transition: 'color 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >{item.label}</a>
            ))}
          </nav>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <LocaleSwitcher />
            <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: '10px 20px', fontSize: '14px' }}>
              {t('requestDemo')}
            </a>
            {/* Burger */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="show-mobile"
              style={{
                display: 'none', flexDirection: 'column', gap: '5px',
                background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '24px', height: '2px',
                  background: 'var(--text-primary)', borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  opacity: mobileMenuOpen && i === 1 ? 0 : 1,
                }}/>
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(6, 9, 15, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontFamily: 'var(--font-display)', fontSize: '18px',
                fontWeight: 600, letterSpacing: '0.05em',
                color: 'var(--text-primary)', textDecoration: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                textTransform: 'uppercase',
              }}
            >{item.label}</a>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="#contact" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              {t('requestDemo')}
            </a>
            <LocaleSwitcher />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
