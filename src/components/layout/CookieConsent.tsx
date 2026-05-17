'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const STORAGE_KEY = 'asteraid_cookie_consent_v1'

type CategoryKey = 'necessary' | 'functional' | 'analytics' | 'performance' | 'advertisement' | 'uncategorised'

type Preferences = Record<CategoryKey, boolean>

const TOGGLEABLE: CategoryKey[] = ['functional', 'analytics', 'performance', 'advertisement', 'uncategorised']
const ALL_CATEGORIES: CategoryKey[] = ['necessary', ...TOGGLEABLE]

const DEFAULT_PREFS: Preferences = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
  uncategorised: false,
}

export default function CookieConsent() {
  const t = useTranslations('cookies')
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [expandedIntro, setExpandedIntro] = useState(false)
  const [expanded, setExpanded] = useState<Record<CategoryKey, boolean>>({
    necessary: false,
    functional: false,
    analytics: false,
    performance: false,
    advertisement: false,
    uncategorised: false,
  })
  const [prefs, setPrefs] = useState<Preferences>(DEFAULT_PREFS)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (modalOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [modalOpen])

  const persist = (data: Preferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        prefs: data,
        timestamp: Date.now(),
        version: 1,
      }))
    } catch {}
  }

  const handleAcceptAll = () => {
    const all: Preferences = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true,
      uncategorised: true,
    }
    persist(all)
    setPrefs(all)
    setModalOpen(false)
    setVisible(false)
  }

  const handleSave = () => {
    persist(prefs)
    setModalOpen(false)
    setVisible(false)
  }

  const handleReject = () => {
    persist(DEFAULT_PREFS)
    setPrefs(DEFAULT_PREFS)
    setModalOpen(false)
    setVisible(false)
  }

  const toggle = (key: CategoryKey) => {
    if (key === 'necessary') return
    setPrefs((p) => ({ ...p, [key]: !p[key] }))
  }

  const toggleExpanded = (key: CategoryKey) => {
    setExpanded((e) => ({ ...e, [key]: !e[key] }))
  }

  if (!visible) return null

  return (
    <>
      {/* Banner */}
      {!modalOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t('bannerTitle')}
          style={{
            position: 'fixed',
            left: 16,
            right: 16,
            bottom: 16,
            zIndex: 9998,
            background: 'rgba(11, 16, 25, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 180, 216, 0.08)',
            padding: '20px 24px',
            animation: 'fadeInUp 0.45s ease forwards',
          }}
        >
          <div
            className="cookie-banner-grid"
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '1 1 360px', minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: 'var(--text-primary)',
                marginBottom: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-primary)',
                  background: 'rgba(0, 180, 216, 0.08)',
                  border: '1px solid rgba(0, 180, 216, 0.2)',
                  padding: '2px 8px',
                  borderRadius: 4,
                }}>cookies</span>
                {t('bannerTitle')}
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: 13.5,
                lineHeight: 1.55,
                margin: 0,
              }}>
                {t('bannerText')}
              </p>
            </div>

            <div
              className="cookie-banner-actions"
              style={{
                display: 'flex',
                gap: 10,
                flexShrink: 0,
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: 13 }}
              >
                {t('customise')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn-primary"
                style={{ padding: '11px 24px', fontSize: 13 }}
              >
                {t('acceptAll')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false)
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(6, 9, 15, 0.78)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            animation: 'fadeIn 0.25s ease forwards',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 720,
              maxHeight: 'calc(100vh - 32px)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 180, 216, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'fadeInUp 0.35s ease forwards',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              flexShrink: 0,
            }}>
              <h2 id="cookie-modal-title" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: 'var(--text-primary)',
                margin: 0,
              }}>
                {t('modalTitle')}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                aria-label={t('close')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.4)'
                  e.currentTarget.style.color = 'var(--accent-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div style={{
              padding: '20px 24px',
              overflowY: 'auto',
              flex: 1,
            }}>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: 14,
                lineHeight: 1.65,
                margin: '0 0 12px 0',
              }}>
                {t('modalIntro')}
              </p>
              {expandedIntro && (
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: 14,
                  lineHeight: 1.65,
                  margin: '0 0 12px 0',
                }}>
                  {t('modalIntroSecondary')}
                </p>
              )}
              <button
                onClick={() => setExpandedIntro((v) => !v)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-primary)',
                  fontSize: 13,
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: 20,
                  letterSpacing: '0.05em',
                }}
              >
                {expandedIntro ? t('showLess') : t('showMore')}
              </button>

              {/* Categories */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
                {ALL_CATEGORIES.map((key) => {
                  const isOpen = expanded[key]
                  const isNecessary = key === 'necessary'
                  const enabled = prefs[key]
                  return (
                    <div
                      key={key}
                      style={{
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 10,
                        background: 'var(--bg-surface)',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '14px 16px',
                      }}>
                        <button
                          onClick={() => toggleExpanded(key)}
                          aria-expanded={isOpen}
                          aria-label={isOpen ? t('showLess') : t('showMore')}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            padding: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                            flexShrink: 0,
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                        <h3
                          onClick={() => toggleExpanded(key)}
                          style={{
                            flex: 1,
                            fontFamily: 'var(--font-display)',
                            fontSize: 15,
                            fontWeight: 600,
                            letterSpacing: '0.03em',
                            color: 'var(--text-primary)',
                            margin: 0,
                            cursor: 'pointer',
                          }}
                        >
                          {t(`categories.${key}.title`)}
                        </h3>
                        {isNecessary ? (
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 11,
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: '#22c55e',
                            background: 'rgba(34, 197, 94, 0.08)',
                            border: '1px solid rgba(34, 197, 94, 0.25)',
                            padding: '4px 10px',
                            borderRadius: 4,
                            whiteSpace: 'nowrap',
                          }}>
                            {t('alwaysActive')}
                          </span>
                        ) : (
                          <button
                            role="switch"
                            aria-checked={enabled}
                            aria-label={t(`categories.${key}.title`)}
                            onClick={() => toggle(key)}
                            style={{
                              position: 'relative',
                              width: 42,
                              height: 22,
                              borderRadius: 999,
                              border: '1px solid',
                              borderColor: enabled ? 'rgba(0, 180, 216, 0.6)' : 'var(--border)',
                              background: enabled ? 'rgba(0, 180, 216, 0.25)' : 'var(--bg-elevated)',
                              cursor: 'pointer',
                              padding: 0,
                              transition: 'all 0.25s ease',
                              flexShrink: 0,
                              boxShadow: enabled ? '0 0 16px rgba(0, 180, 216, 0.25)' : 'none',
                            }}
                          >
                            <span style={{
                              position: 'absolute',
                              top: 2,
                              left: enabled ? 22 : 2,
                              width: 16,
                              height: 16,
                              borderRadius: '50%',
                              background: enabled ? 'var(--accent-primary)' : 'var(--text-muted)',
                              transition: 'left 0.25s ease, background 0.25s ease',
                            }} />
                          </button>
                        )}
                      </div>

                      {isOpen && (
                        <div style={{
                          padding: '0 16px 16px 42px',
                          color: 'var(--text-secondary)',
                          fontSize: 13.5,
                          lineHeight: 1.6,
                        }}>
                          {t(`categories.${key}.description`)}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div
              className="cookie-modal-footer"
              style={{
                padding: '16px 24px 20px',
                borderTop: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)',
                display: 'flex',
                gap: 10,
                flexShrink: 0,
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={handleReject}
                className="btn-secondary"
                style={{ padding: '11px 20px', fontSize: 13, flex: '1 1 auto', justifyContent: 'center' }}
              >
                {t('rejectAll')}
              </button>
              <button
                onClick={handleSave}
                className="btn-secondary"
                style={{ padding: '11px 20px', fontSize: 13, flex: '1 1 auto', justifyContent: 'center' }}
              >
                {t('savePreferences')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn-primary"
                style={{ padding: '11px 24px', fontSize: 13, flex: '1 1 auto', justifyContent: 'center' }}
              >
                {t('acceptAll')}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .cookie-banner-actions { width: 100%; }
          .cookie-banner-actions > button { flex: 1 1 auto; justify-content: center; }
        }
      `}</style>
    </>
  )
}
