'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function OrchestraConductor() {
  const t = useTranslations('orchestraConductor')
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

    const codeSnippets = [
      'exten => 101,1,Answer()',
      'exten => 101,2,VoiceMail(u101)',
      'exten => 100,1,Dial(SIP/101)',
      'same => n,Dial(SIP/102&SIP/103)',
      'exten => 200,1,Playback(silence/1)',
      'exten => *77,1,DeviceState(SIP/101)',
      'exten => 777,1,VoiceMailMain()',
      'exten => 999,1,ConfBridge(myconf,)',
      'exten => _9.,1,Dial(DAHDI/g1/${EXTEN:1})',
      'same => n,Set(CALLERID(name)=Office)',
      'exten => h,1,Hangup()',
      'same => n,GotoIf($[${DIALSTATUS}=BUSY]?busy)',
      'exten => _1XX,1,Answer()',
      'same => n,AGI(scripts/ivr.py)',
      'exten => s,1,Set(TIMEOUT(digit)=5)',
      'same => n,Background(mainmenu)',
      'exten => 1,1,Goto(sales,s,1)',
      'exten => 2,1,Goto(support,s,1)',
      'same => n,WaitExten(10)',
      'exten => *98,1,VoiceMailMain(${MAILBOX})',
      'same => n,Set(CHANNEL(language)=ru)',
      'exten => _0.,1,Dial(SIP/trunk/${EXTEN})',
      'same => n,Queue(support,t,,60)',
      'exten => 888,1,MeetMe(100,Mq)',
      'same => n,Record(calls/${UNIQUEID}.wav)',
    ]

    interface CodeText {
      text: string
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

    const fontFamily = 'Monaco, Courier New, monospace'
    const fontSize = 13
    const lineHeight = 20

    const zones = [
      { xStart: canvas.width * 0.1, xEnd: canvas.width * 0.35 },
      { xStart: canvas.width * 0.4, xEnd: canvas.width * 0.6 },
      { xStart: canvas.width * 0.65, xEnd: canvas.width * 0.9 },
    ]

    const columns: CodeColumn[] = []
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
        startTime: Date.now(),
        lineIndex: column.lines.length,
        columnId: column.id,
      })
    }

    const codeCreationTimer = setInterval(() => {
      const totalLines = columns.reduce((acc, col) => acc + col.lines.length, 0)
      if (totalLines < 15) createCodeLine()
    }, 1500)

    createCodeLine()

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      columns.forEach(column => {
        const baseY = column.y - (column.lines.length * lineHeight) / 2

        column.lines.forEach((codeText, idx) => {
          const elapsed = Date.now() - codeText.startTime
          const targetCharIndex = Math.floor(elapsed / 40)
          const displayText = codeText.text.substring(0, targetCharIndex)
          const y = baseY + idx * lineHeight

          ctx.font = `${fontSize}px ${fontFamily}`
          ctx.textAlign = 'center'
          ctx.fillStyle = `rgba(0,180,216,${Math.max(0, 1 - elapsed / 10000)})`
          ctx.fillText(displayText, column.x, y)

          if (elapsed > 10000) column.lines.splice(idx, 1)
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

  return (
    <section
      id="orchestra"
      style={{
        padding: '120px 24px',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      {/* Atmospheric background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0, 180, 216, 0.02) 0%, transparent 60%),
            radial-gradient(ellipse 60% 100% at 80% 100%, rgba(139, 92, 246, 0.02) 0%, transparent 70%)
          `,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .orchestra-text {
          animation: textReveal 0.8s ease-out forwards;
        }

        .orchestra-text:nth-child(2) {
          animation-delay: 0.2s;
        }

        @media (max-width: 768px) {
          #orchestra {
            padding: 80px 24px !important;
          }

          #orchestra > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="orchestra-text" style={{ opacity: 0 }}>
            <span
              className="section-label"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              {t('sectionLabel')}
            </span>
          </div>

          <div className="orchestra-text" style={{ opacity: 0 }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              <span>{t('headline1')}</span>
              <br />
              <span style={{ color: 'var(--accent-primary)' }}>{t('headline2')}</span>
            </h2>
          </div>

          <p
            className="orchestra-text"
            style={{
              opacity: 0,
              color: 'var(--text-secondary)',
              fontSize: '16px',
              lineHeight: '1.7',
              maxWidth: '480px',
            }}
          >
            {t('description')}
          </p>

          {/* Download button */}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              marginTop: '32px',
              display: 'inline-flex',
            }}
          >
            {t('ctaPrimary')}
          </a>
        </div>

        {/* Right side - Conductor illustration */}
        <div
          style={{
            position: 'relative',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glow background element */}
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          <Image
            src="/system_ptohos/orchestraConductor.png"
            alt="Conductor"
            width={600}
            height={500}
            style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(220px, 70%, 460px)',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

    </section>
  )
}
