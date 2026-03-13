'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      })
    }

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,180,216,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,180,216,0.4)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  const BADGES = ['Asterisk', 'Active Directory', 'Multi-Station', 'Real-time', 'WebSocket', 'SSH Terminal']

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: '80px',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0,180,216,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,180,216,0.3), transparent)', pointerEvents: 'none' }} className="animate-scan" />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ display: 'grid', gap: '64px', alignItems: 'center' }} className="hero-grid">
          {/* Text */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }} className="animate-fade-up">
              <span className="status-dot" />
              <span className="section-label">{t('badge')}</span>
            </div>

            <h1 className="animate-fade-up delay-100" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 700, lineHeight: 1.05,
              letterSpacing: '-0.01em', color: 'var(--text-primary)',
              marginBottom: '24px', opacity: 0,
            }}>
              {t('headline1')}{' '}
              <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
              <br />{t('headline3')}<br />
              <span style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('headline4')}
              </span>
            </h1>

            <p className="animate-fade-up delay-200" style={{
              fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.7',
              marginBottom: '36px', maxWidth: '500px', opacity: 0,
            }}>
              {t('subheadline')}
            </p>

            <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px', opacity: 0 }}>
              <a href="#contact" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                {t('ctaPrimary')}
              </a>
              <a href="#features" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
                {t('ctaSecondary')}
              </a>
            </div>

            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', opacity: 0 }}>
              {BADGES.map(b => <span key={b} className="tag">{b}</span>)}
            </div>
          </div>

          {/* Mockup */}
          <div className="animate-fade-up delay-300 hero-right" style={{ opacity: 0 }}>
            <DashboardMockup t={t} />
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none; }
        }
      `}</style>
    </section>
  )
}

function DashboardMockup({ t }: { t: ReturnType<typeof useTranslations<'hero'>> }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid rgba(0,180,216,0.2)',
      borderRadius: '16px', overflow: 'hidden',
      boxShadow: '0 0 80px rgba(0,180,216,0.08), 0 40px 80px rgba(0,0,0,0.5)',
    }} className="animate-float">
      {/* Chrome */}
      <div style={{
        background: 'var(--bg-elevated)', padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ef4444','#f59e0b','#22c55e'].map((c, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'var(--bg-card)', borderRadius: '4px',
          padding: '4px 12px', fontFamily: 'var(--font-mono)',
          fontSize: '11px', color: 'var(--text-muted)',
        }}>{t('dashboardUrl')}</div>
      </div>

      {/* Content */}
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, letterSpacing: '0.05em' }}>
            {t('dashboardTitle')}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="status-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#22c55e' }}>{t('live')}</span>
          </div>
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
          {[
            { label: t('stations'), value: '4', color: '#00b4d8', trend: '+1' },
            { label: t('extensions'), value: '124', color: '#22c55e', trend: t('online') },
            { label: t('trunks'), value: t('trunksValue'), color: '#22c55e', trend: t('trunksStatus') },
          ].map(m => (
            <div key={m.label} style={{
              background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
              borderRadius: '8px', padding: '10px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {m.label}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: m.color }}>{m.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: m.color, opacity: 0.7 }}>{m.trend}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{
          background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
          borderRadius: '8px', padding: '10px', marginBottom: '12px',
          height: '72px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            {t('ramUsage')}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '40px' }}>
            {[35,42,38,55,48,60,52,45,58,65,54,62,48,55,60,58,52,64,70,65,58,72,68,62,75].map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}%`,
                background: `rgba(0,180,216,${0.3 + (h / 100) * 0.5})`,
                borderRadius: '2px', minWidth: '2px',
              }} />
            ))}
          </div>
        </div>

        {/* Station list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { name: 'pbx-main.corp.local', status: 'online', load: 45 },
            { name: 'pbx-branch-1.corp', status: 'online', load: 22 },
            { name: 'pbx-branch-2.corp', status: 'maintenance', load: 0 },
          ].map(s => (
            <div key={s.name} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '6px 10px',
              background: 'var(--bg-elevated)', borderRadius: '6px', border: '1px solid var(--border-subtle)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: s.status === 'online' ? '#22c55e' : '#f59e0b',
                }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)' }}>
                  {s.name}
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: s.status === 'online' ? '#22c55e' : '#f59e0b',
                textTransform: 'uppercase',
              }}>
                {s.status === 'online' ? `${s.load}%` : t('maintenance')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
