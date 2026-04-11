'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import ScreenshotImage from '@/components/ui/ScreenshotImage'

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

    const codeSnippets = [
      'exten => 101,1,Answer()',
      'exten => 101,2,VoiceMail(u101)',
      'exten => 100,1,Dial(SIP/101)',
      'same => n,Dial(SIP/102&SIP/103)',
      'exten => 200,1,Playback(silence/1)',
      'exten => *77,1,DeviceState(SIP/101)',
      'exten => 777,1,VoiceMailMain()',
      'exten => 999,1,ConfBridge(1,)',
    ]

    interface CodeText {
      text: string
      charIndex: number
      startTime: number
      lineIndex: number
      columnId: number
    }

    interface CodeColumn {
      id: number
      x: number
      y: number
      lines: CodeText[]
    }

    const columns: CodeColumn[] = []
    const fontFamily = 'Monaco, Courier New, monospace'
    const fontSize = 13
    const lineHeight = 20

    // Create 3 non-overlapping column positions
    const zones = [
      { xStart: canvas.width * 0.1, xEnd: canvas.width * 0.35 },
      { xStart: canvas.width * 0.4, xEnd: canvas.width * 0.6 },
      { xStart: canvas.width * 0.65, xEnd: canvas.width * 0.9 },
    ]

    for (let i = 0; i < 3; i++) {
      const zone = zones[i]
      columns.push({
        id: i,
        x: Math.random() * (zone.xEnd - zone.xStart) + zone.xStart,
        y: Math.random() * (canvas.height * 0.5) + canvas.height * 0.15,
        lines: [],
      })
    }

    const createCodeLine = () => {
      const column = columns[Math.floor(Math.random() * columns.length)]
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      column.lines.push({
        text: snippet,
        charIndex: 0,
        startTime: Date.now(),
        lineIndex: column.lines.length,
        columnId: column.id,
      })
    }

    let codeCreationTimer = setInterval(() => {
      const totalLines = columns.reduce((acc, col) => acc + col.lines.length, 0)
      if (totalLines < 15) createCodeLine()
    }, 1500)

    createCodeLine()

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

      // Draw code text in three random columns
      columns.forEach(column => {
        const baseY = column.y - (column.lines.length * lineHeight) / 2

        column.lines.forEach((codeText, idx) => {
          const elapsed = Date.now() - codeText.startTime
          const charDelay = 40
          const targetCharIndex = Math.floor(elapsed / charDelay)
          const displayText = codeText.text.substring(0, targetCharIndex)

          const y = baseY + idx * lineHeight

          ctx.font = `${fontSize}px ${fontFamily}`
          ctx.textAlign = 'center'
          ctx.fillStyle = `rgba(0,180,216,${Math.max(0, 1 - elapsed / 10000)})`
          ctx.fillText(displayText, column.x, y)

          // Remove if fully typed and faded
          if (elapsed > 10000) {
            column.lines.splice(idx, 1)
          }
        })
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      clearInterval(codeCreationTimer)
      cancelAnimationFrame(raf)
    }
  }, [])

  const BADGES = ['Asterisk', 'Active Directory', 'Multi-Station', 'Real-time', 'WebSocket', 'SSH Terminal']

  return (
    <section className="hero-section" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: '80px',
    }}>
      <canvas ref={canvasRef} className="hero-canvas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0,180,216,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="hero-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 2, width: '100%' }}>
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
          .hero-section { min-height: unset !important; align-items: flex-start !important; }
          .hero-inner { padding-top: 25px !important; padding-bottom: 40px !important; }
        }
        @media (max-width: 767px) {
          .hero-canvas { display: none; }
        }
      `}</style>
    </section>
  )
}

function DashboardMockup({ t }: { t: ReturnType<typeof useTranslations<'hero'>> }) {
  return (
    <div className="animate-float" style={{ pointerEvents: 'auto' }}>
      <ScreenshotImage
        src="/system_ptohos/home_page.png"
        alt={t('dashboardTitle')}
        width={1280}
        height={800}
        sizes="(max-width: 900px) 100vw, 50vw"
        quality={100}
        priority
      />
    </div>
  )
}
