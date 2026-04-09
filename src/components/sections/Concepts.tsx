'use client'

import { useTranslations } from 'next-intl'

function DockerLogo({ size = 18 }: { size?: number }) {
  const h = Math.round(size * 0.72)
  return (
    <svg width={size} height={h} viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="15" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="12" y="15" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="24" y="15" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="12" y="5" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="24" y="5" width="10" height="9" rx="1" fill="#2496ED"/>
      <rect x="24" y="0" width="10" height="4" rx="1" fill="#2496ED"/>
      <path d="M36 19c0-3 2.5-5.5 5.5-5.5 .3 3.5-1.5 6.5-5.5 7.5" stroke="#2496ED" strokeWidth="1.5" fill="none"/>
      <path d="M0 24c2 5 7 8 14 8h22c8 0 14-5 14-11H0z" fill="#2496ED"/>
    </svg>
  )
}

function MongoIcon() {
  return (
    <svg width="18" height="24" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C10 0 2 8 2 15a8 8 0 0 0 7 7.93V25h2v-2.07A8 8 0 0 0 18 15C18 8 10 0 10 0z" fill="#4CAF50"/>
      <path d="M10 0C10 0 2 8 2 15a8 8 0 0 0 7 7.93V25h1V0z" fill="#2E7D32"/>
    </svg>
  )
}

function WebInterfaceIcon() {
  return (
    <svg width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="50" height="42" rx="5" fill="rgba(0,180,216,0.06)" stroke="rgba(0,180,216,0.35)" strokeWidth="1.5"/>
      <rect x="1" y="1" width="50" height="12" rx="5" fill="rgba(0,180,216,0.1)" stroke="rgba(0,180,216,0.35)" strokeWidth="1.5"/>
      <circle cx="8"  cy="7" r="2" fill="#ff5f57"/>
      <circle cx="14" cy="7" r="2" fill="#febc2e"/>
      <circle cx="20" cy="7" r="2" fill="#28c840"/>
      {/* sidebar */}
      <rect x="5"  y="17" width="10" height="22" rx="2" fill="rgba(0,180,216,0.1)" stroke="rgba(0,180,216,0.2)" strokeWidth="1"/>
      <rect x="7"  y="20" width="6" height="2" rx="1" fill="rgba(0,180,216,0.4)"/>
      <rect x="7"  y="24" width="6" height="2" rx="1" fill="rgba(0,180,216,0.25)"/>
      <rect x="7"  y="28" width="6" height="2" rx="1" fill="rgba(0,180,216,0.25)"/>
      <rect x="7"  y="32" width="6" height="2" rx="1" fill="rgba(0,180,216,0.25)"/>
      {/* main content */}
      <rect x="19" y="17" width="28" height="10" rx="2" fill="rgba(0,180,216,0.07)" stroke="rgba(0,180,216,0.15)" strokeWidth="1"/>
      {/* trend line */}
      <polyline points="21,25 25,22 29,23 33,20 37,21 43,18" stroke="#81C784" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="19" y="30" width="28" height="4" rx="1.5" fill="rgba(0,180,216,0.06)"/>
      <rect x="19" y="36" width="18" height="3" rx="1.5" fill="rgba(0,180,216,0.06)"/>
    </svg>
  )
}

function PhysicalServerIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4"  width="30" height="8" rx="2" fill="rgba(0,180,216,0.08)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
      <circle cx="27" cy="8" r="1.8" fill="rgba(0,180,216,0.6)"/>
      <circle cx="31" cy="8" r="1.5" fill="#4CAF50"/>
      <rect x="3" y="14" width="30" height="8" rx="2" fill="rgba(0,180,216,0.08)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
      <circle cx="27" cy="18" r="1.8" fill="rgba(0,180,216,0.6)"/>
      <circle cx="31" cy="18" r="1.5" fill="#4CAF50"/>
      <rect x="3" y="24" width="30" height="8" rx="2" fill="rgba(0,180,216,0.08)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
      <circle cx="27" cy="28" r="1.8" fill="rgba(0,180,216,0.6)"/>
      <circle cx="31" cy="28" r="1.5" fill="#4CAF50"/>
    </svg>
  )
}

function VMIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3L33 11.5V24.5L18 33L3 24.5V11.5L18 3Z" fill="rgba(0,180,216,0.07)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M18 3L18 33"  stroke="rgba(0,180,216,0.2)" strokeWidth="1" strokeDasharray="3 2"/>
      <path d="M3 11.5L33 11.5" stroke="rgba(0,180,216,0.2)" strokeWidth="1" strokeDasharray="3 2"/>
      <path d="M3 24.5L18 18L33 24.5" stroke="rgba(0,180,216,0.3)" strokeWidth="1"/>
    </svg>
  )
}

function CloudVMIcon() {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29 16c0-5-4-9-9-9a8.98 8.98 0 0 0-8.32 5.56C8.39 13.12 5 16.4 5 20.5A7.5 7.5 0 0 0 12.5 28H29a5.5 5.5 0 0 0 0-11z" fill="rgba(100,160,255,0.08)" stroke="rgba(100,160,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="13" y="22" width="14" height="10" rx="2" fill="rgba(100,160,255,0.1)" stroke="rgba(100,160,255,0.35)" strokeWidth="1"/>
      <circle cx="17" cy="27" r="1.3" fill="rgba(100,160,255,0.6)"/>
      <circle cx="20" cy="27" r="1.3" fill="rgba(100,160,255,0.6)"/>
      <circle cx="23" cy="27" r="1.3" fill="rgba(100,160,255,0.6)"/>
    </svg>
  )
}

function AsteriskPBXIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="20" fill="rgba(255,107,0,0.14)" stroke="rgba(255,107,0,0.45)" strokeWidth="1.5"/>
      <circle cx="22" cy="22" r="13" fill="rgba(255,107,0,0.18)"/>
      <text x="22" y="29" textAnchor="middle" fill="#FF8C00" fontSize="22" fontWeight="bold" fontFamily="sans-serif">*</text>
    </svg>
  )
}

const PBX_ICONS: Record<string, React.ReactNode> = {
  physical: <PhysicalServerIcon />,
  vm:       <VMIcon />,
  cloud:    <CloudVMIcon />,
}

export default function Concepts() {
  const t = useTranslations('concepts')
  const pbxTargets = t.raw('pbxTargets') as Array<{ label: string; type: string }>
  const configPoints = t.raw('configPoints') as string[]
  const mongoPoints  = t.raw('mongoPoints')  as string[]

  return (
    <section className="cpts-section">
      <div className="cpts-bg-grid" />
      <div className="cpts-bg-glow" />

      <div className="cpts-container">

        {/* ── Header ── */}
        <div className="cpts-header">
          <span className="section-label">{t('sectionLabel')}</span>
          <h2 className="cpts-headline">{t('headline')}</h2>
          <p className="cpts-sub">{t('subheadline')}</p>
        </div>

        {/* ── TOP ROW: Web Interface ↔ Asteraid VM ── */}
        <div className="cpts-top-row">

          {/* Web Interface */}
          <div className="cpts-webui">
            <div className="cpts-webui-inner">
              <WebInterfaceIcon />
              <div className="cpts-webui-label">{t('webInterfaceLabel')}</div>
            </div>
          </div>

          {/* Bidirectional arrows — CSS particle style (same as Configurations) */}
          <div className="cpts-bidir">
            {/* Config → Web (RTL) */}
            <div className="cpts-bidir-row">
              <svg width="9" height="12" viewBox="0 0 9 12" fill="none" style={{ flexShrink: 0 }}>
                <polyline points="8,1 1,6 8,11" stroke="rgba(0,180,216,0.55)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
              <div className="cpts-bidir-track">
                <div className="cpts-bidir-line" />
                <div className="cpts-bidir-particle cpts-bidir-particle--rtl" />
              </div>
            </div>
            {/* Web → Config (LTR) */}
            <div className="cpts-bidir-row">
              <div className="cpts-bidir-track">
                <div className="cpts-bidir-line" />
                <div className="cpts-bidir-particle cpts-bidir-particle--ltr" />
              </div>
              <svg width="9" height="12" viewBox="0 0 9 12" fill="none" style={{ flexShrink: 0 }}>
                <polyline points="1,1 8,6 1,11" stroke="rgba(0,180,216,0.55)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Asteraid VM outer box */}
          <div className="cpts-vm-outer">

            {/* VM label badge (top-left) */}
            <div className="cpts-vm-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(0,180,216,0.8)" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="M8 10h8M8 14h5"/>
              </svg>
              <div>
                <div className="cpts-vm-name">Asteraid</div>
                <div className="cpts-vm-type">{t('vmLabel')}</div>
              </div>
            </div>

            {/* Docker containers dashed inner box */}
            <div className="cpts-docker-box">
              <div className="cpts-docker-box-title">
                <DockerLogo size={20} />
                <span>{t('dockerContainersLabel')}</span>
              </div>

              <div className="cpts-docker-grid">

                {/* Configuration Server */}
                <div className="cpts-card cpts-card--green">
                  <div className="cpts-card-top">
                    <div className="cpts-docker-chip">
                      <DockerLogo size={16}/>
                    </div>
                    <div className="cpts-card-title cpts-card-title--green">{t('configServer')}</div>
                  </div>
                  <div className="cpts-card-icons">
                    <div className="cpts-icon-box cpts-icon-box--green">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#81C784" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
                      </svg>
                    </div>
                    <div className="cpts-icon-box cpts-icon-box--green">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#81C784" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    </div>
                  </div>
                  <ul className="cpts-points">
                    {configPoints.map((point, i) => (
                      <li key={i} className="cpts-point">
                        <span className="cpts-dot cpts-dot--green" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Configurations arrow */}
                <div className="cpts-conn-arrow">
                  <span className="cpts-conn-label">{t('configurationsLabel')}</span>
                  <div className="cpts-conn-track">
                    <div className="cpts-conn-line" />
                    <div className="cpts-conn-particle" />
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} className="cpts-arrow-svg">
                      <polyline points="1,1 8,6.5 1,12" stroke="rgba(0,180,216,0.7)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* MongoDB Server */}
                <div className="cpts-card cpts-card--cyan">
                  <div className="cpts-card-top">
                    <div className="cpts-docker-chip">
                      <DockerLogo size={16}/>
                    </div>
                    <div className="cpts-card-title cpts-card-title--cyan">{t('mongoServer')}</div>
                  </div>
                  <div className="cpts-card-icons" style={{ gap: '10px' }}>
                    <MongoIcon />
                    <svg width="34" height="30" viewBox="0 0 40 36" fill="none">
                      <ellipse cx="20" cy="30" rx="18" ry="6" fill="rgba(0,180,216,0.1)" stroke="rgba(0,180,216,0.35)" strokeWidth="1.5"/>
                      <rect x="2" y="12" width="36" height="18" rx="2" fill="rgba(0,180,216,0.06)" stroke="rgba(0,180,216,0.35)" strokeWidth="1.5"/>
                      <rect x="2" y="4" width="36" height="12" rx="2" fill="rgba(0,180,216,0.09)" stroke="rgba(0,180,216,0.35)" strokeWidth="1.5"/>
                      <ellipse cx="20" cy="4" rx="18" ry="4" fill="rgba(0,180,216,0.16)" stroke="rgba(0,180,216,0.45)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <ul className="cpts-points">
                    {mongoPoints.map((point, i) => (
                      <li key={i} className="cpts-point">
                        <span className="cpts-dot cpts-dot--cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>{/* /docker-grid */}
            </div>{/* /docker-box */}
          </div>{/* /vm-outer */}
        </div>{/* /top-row */}

        {/* ── Connector: Asteraid VM → SSH Banner ── */}
        <div className="cpts-vm-to-ssh">
          <div className="cpts-vm-to-ssh-line" />
          <div className="cpts-vm-to-ssh-particle" />
        </div>

        {/* ── SSH Banner ── */}
        <div className="cpts-ssh-banner-wrap">
          <div className="cpts-ssh-banner">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,180,216,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
            <span>{t('sshBannerLabel')}</span>
          </div>
        </div>

        {/* ── Fan-out SVG — CSS stroke-dashoffset particles (same style as Configurations) ── */}
        <div className="cpts-fanout">
          <svg className="cpts-fanout-svg" viewBox="0 0 900 72" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Static background lines */}
            <line x1="450" y1="0"  x2="450" y2="36" stroke="rgba(0,180,216,0.2)"  strokeWidth="1.5"/>
            <line x1="450" y1="36" x2="150" y2="72" stroke="rgba(0,180,216,0.18)" strokeWidth="1.5"/>
            <line x1="450" y1="36" x2="450" y2="72" stroke="rgba(0,180,216,0.18)" strokeWidth="1.5"/>
            <line x1="450" y1="36" x2="750" y2="72" stroke="rgba(0,180,216,0.18)" strokeWidth="1.5"/>
            {/* Arrowheads removed per design */}
            {/*
              Animated particle lines — pathLength="100" normalizes all paths to the same
              coordinate space so dasharray="12 88" means the same 12% particle on every line.
              Animation: dashoffset -12→88 moves particle from before-start to near-end.
            */}
            <line x1="450" y1="0" x2="450" y2="36"
              stroke="rgba(0,180,216,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="12 188" pathLength="100"
              style={{ animation: 'fp-flow 1.8s linear infinite 0s' }}/>
            <path d="M450,36 L150,72"
              stroke="rgba(0,180,216,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="12 188" pathLength="100"
              style={{ animation: 'fp-flow 1.8s linear infinite 0.3s' }}/>
            <line x1="450" y1="36" x2="450" y2="72"
              stroke="rgba(0,180,216,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="12 188" pathLength="100"
              style={{ animation: 'fp-flow 1.8s linear infinite 0.6s' }}/>
            <path d="M450,36 L750,72"
              stroke="rgba(0,180,216,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="12 188" pathLength="100"
              style={{ animation: 'fp-flow 1.8s linear infinite 0.9s' }}/>
          </svg>
        </div>

        {/* ── PBX Targets ── */}
        <div className="cpts-pbx-grid">
          {pbxTargets.map((target, i) => (
            <div key={i} className={`cpts-pbx-card cpts-pbx-card--${target.type}`}>
              <div className="cpts-pbx-glow-top" />
              <div className="cpts-pbx-host-label">
                <div className="cpts-pbx-host-icon">
                  {PBX_ICONS[target.type] ?? <VMIcon />}
                </div>
                <div className="cpts-pbx-host-name">{target.label}</div>
              </div>
              <div className="cpts-pbx-asterisk-card">
                <AsteriskPBXIcon />
                <div className="cpts-pbx-asterisk-label">Asterisk PBX</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Connections with upward arrows to PBX boxes ── */}
        <div className="cpts-conn-section">
          {/* SVG: orthogonal connectors PBX → pills
              viewBox 900×155 matches section (padding-top 75 + pill×2 + gap ≈ 155px)
              PBX centers: left x=150, center x=450, right x=750
              Green  (Media RTP)    : 450,0 → vertical down to pill center y≈88
              Purple (SIP Signaling): 150,0 / 750,0 → vertical to pill y≈137 → horizontal to 450  */}
          <svg className="cpts-conn-svg" viewBox="0 0 900 155" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Static background paths */}
            <line x1="450" y1="0" x2="450" y2="88"  stroke="rgba(76,175,80,0.25)"   strokeWidth="1.5"/>
            <path d="M150,0 L150,137 L450,137"       stroke="rgba(156,111,228,0.22)" strokeWidth="1.5" fill="none"/>
            <path d="M750,0 L750,137 L450,137"       stroke="rgba(156,111,228,0.22)" strokeWidth="1.5" fill="none"/>
            {/* Animated particle — green */}
            <line x1="450" y1="0" x2="450" y2="88"
              stroke="rgba(76,175,80,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="10 90" pathLength="100"
              style={{ animation: 'fp-flow 1.8s linear infinite 0s' }}/>
            {/* Animated particles — purple left */}
            <path d="M150,0 L150,137 L450,137"
              stroke="rgba(156,111,228,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="10 90" pathLength="100" fill="none"
              style={{ animation: 'fp-flow 2s linear infinite 0.3s' }}/>
            {/* Animated particles — purple right */}
            <path d="M750,0 L750,137 L450,137"
              stroke="rgba(156,111,228,0.85)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="10 90" pathLength="100" fill="none"
              style={{ animation: 'fp-flow 2s linear infinite 0.7s' }}/>
          </svg>
          {/* Pills — normal flow BELOW the SVG, no overlap */}
          <div className="cpts-pills-wrap">
            <div className="cpts-conn-pill cpts-conn-pill--green">
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none">
                <path d="M1 9c2-4 5-7 7-7s3 4 4 7-1 9 2 9 5-3 7-7" stroke="#81C784" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="1"  cy="9" r="1.5" fill="#81C784"/>
                <circle cx="23" cy="9" r="1.5" fill="#81C784"/>
              </svg>
              <span>{t('mediaRtpLabel')}</span>
            </div>
            <div className="cpts-conn-pill cpts-conn-pill--purple">
              <svg width="16" height="14" viewBox="0 0 20 16" fill="none">
                <polyline points="6,1 1,8 6,15"   stroke="#9C6FE4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14,1 19,8 14,15" stroke="#9C6FE4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="1" x2="8" y2="15" stroke="#9C6FE4" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span>{t('commandsLabel')}</span>
            </div>
          </div>
        </div>

        {/* ── Periphery connector (pills → periphery) ── */}
        <div className="cpts-periph-connector">
          <div className="cpts-periph-conn-line" />
        </div>

        {/* ── Periphery (Asterisk PBX ecosystem, muted) ── */}
        <div className="cpts-periph-wrap">
          <svg className="cpts-periph-fanout" viewBox="0 0 900 44" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="450" y1="0" x2="75"  y2="44" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
            <line x1="450" y1="0" x2="225" y2="44" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
            <line x1="450" y1="0" x2="375" y2="44" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
            <line x1="450" y1="0" x2="525" y2="44" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
            <line x1="450" y1="0" x2="675" y2="44" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
            <line x1="450" y1="0" x2="825" y2="44" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
          </svg>
          <div className="cpts-periph-grid">

            {/* SIP Providers */}
            <div className="cpts-periph-item cpts-periph-item--phones">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                <path d="M23 6c0-3-2.5-5.5-6-5.5a6.4 6.4 0 0 0-5.9 4C8.1 5.1 5 7.7 5 11a6 6 0 0 0 5.5 6H23a4 4 0 0 0 0-8z" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" fill="rgba(0,180,216,0.12)"/>
              </svg>
              <span>SIP Providers</span>
            </div>

            {/* VOIP Gateways */}
            <div className="cpts-periph-item cpts-periph-item--phones">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                <rect x="2" y="5" width="28" height="12" rx="3" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" fill="rgba(0,180,216,0.12)"/>
                <circle cx="8"  cy="11" r="1.8" fill="rgba(0,180,216,0.9)"/>
                <line x1="13" y1="11" x2="26" y2="11" stroke="rgba(0,180,216,0.6)" strokeWidth="1" strokeDasharray="2 2"/>
              </svg>
              <span>VOIP Gateways</span>
            </div>

            {/* PSTN */}
            <div className="cpts-periph-item cpts-periph-item--phones">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                <ellipse cx="16" cy="11" rx="14" ry="9" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" fill="rgba(0,180,216,0.12)"/>
                <ellipse cx="16" cy="11" rx="6"  ry="9" stroke="rgba(0,180,216,0.5)"  strokeWidth="1" fill="none"/>
                <line x1="2" y1="11" x2="30" y2="11" stroke="rgba(0,180,216,0.5)" strokeWidth="1"/>
              </svg>
              <span>PSTN</span>
            </div>

            {/* Analog Phones */}
            <div className="cpts-periph-item cpts-periph-item--phones">
              <div className="cpts-periph-phones">
                {([0,1,2] as number[]).map(i => (
                  <svg key={i} width="15" height="18" viewBox="0 0 15 18" fill="none">
                    <polygon points="7.5,1 14,16 1,16" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(0,180,216,0.12)"/>
                  </svg>
                ))}
              </div>
              <span>Analog Phones</span>
            </div>

            {/* Other PBXs */}
            <div className="cpts-periph-item cpts-periph-item--phones">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                <rect x="2" y="2"  width="28" height="8" rx="2" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" fill="rgba(0,180,216,0.12)"/>
                <rect x="2" y="12" width="28" height="8" rx="2" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" fill="rgba(0,180,216,0.12)"/>
                <circle cx="26" cy="6"  r="1.5" fill="rgba(0,180,216,0.9)"/>
                <circle cx="26" cy="16" r="1.5" fill="rgba(0,180,216,0.9)"/>
              </svg>
              <span>Other PBXs</span>
            </div>

            {/* SIP Phones */}
            <div className="cpts-periph-item cpts-periph-item--phones">
              <div className="cpts-periph-phones">
                {([0,1,2,3] as number[]).map(i => (
                  <svg key={i} width="11" height="18" viewBox="0 0 11 18" fill="none">
                    <rect x="1" y="1" width="9" height="16" rx="2" stroke="rgba(0,180,216,0.85)" strokeWidth="1.4" fill="rgba(0,180,216,0.12)"/>
                    <rect x="3" y="3" width="5" height="7" rx="1" fill="rgba(0,180,216,0.18)"/>
                    <circle cx="5.5" cy="14" r="1" fill="rgba(0,180,216,0.9)"/>
                  </svg>
                ))}
              </div>
              <span>SIP Phones</span>
            </div>

          </div>{/* /periph-grid */}
        </div>{/* /periph-wrap */}

      </div>{/* /container */}

      <style>{`
        /* ── Section ── */
        .cpts-section {
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }
        .cpts-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,180,216,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,180,216,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          -webkit-mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent);
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent);
        }
        .cpts-bg-glow {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 50% 15%, rgba(0,180,216,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 50% 85%, rgba(0,180,216,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .cpts-container { max-width: 960px; margin: 0 auto; position: relative; }

        /* ── Header ── */
        .cpts-header { text-align: center; margin-bottom: 60px; }
        .cpts-headline {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 50px);
          font-weight: 700;
          color: var(--text-primary);
          margin: 12px 0 16px;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .cpts-sub {
          color: var(--text-secondary);
          font-size: 16px;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Top Row ── */
        .cpts-top-row {
          display: flex;
          align-items: center;
          gap: 0;
          width: 100%;
          margin-bottom: 28px;
        }

        /* ── Web Interface ── */
        .cpts-webui {
          flex-shrink: 0;
          width: 140px;
        }
        .cpts-webui-inner {
          border: 1.5px solid rgba(0,180,216,0.3);
          border-radius: 14px;
          background: rgba(0,180,216,0.03);
          padding: 16px 12px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .cpts-webui-inner:hover {
          border-color: rgba(0,180,216,0.5);
          box-shadow: 0 0 24px rgba(0,180,216,0.08);
        }
        .cpts-webui-label {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-primary, #00B4D8);
          text-align: center;
        }

        /* ── Bidirectional arrows ── */
        .cpts-bidir {
          flex-shrink: 0;
          width: 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          padding: 0 4px;
        }
        .cpts-bidir-row {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .cpts-bidir-track {
          flex: 1;
          position: relative;
          height: 14px;
          display: flex;
          align-items: center;
        }
        .cpts-bidir-line {
          position: absolute; top: 50%; left: 0;
          width: 100%; height: 1.5px;
          background: rgba(0,180,216,0.25);
          transform: translateY(-50%);
        }
        .cpts-bidir-particle {
          position: absolute; top: 50%;
          width: 14px; height: 2px; border-radius: 2px;
          transform: translateY(-50%);
        }
        .cpts-bidir-particle--ltr {
          background: linear-gradient(90deg, transparent, rgba(0,180,216,0.9));
          animation: cpts-flow-ltr 1.8s linear infinite;
        }
        .cpts-bidir-particle--rtl {
          background: linear-gradient(270deg, transparent, rgba(0,180,216,0.9));
          animation: cpts-flow-rtl 1.8s linear infinite;
        }
        @keyframes cpts-flow-ltr {
          0%   { left: -14px; opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes cpts-flow-rtl {
          0%   { left: 100%; opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { left: -14px; opacity: 0; }
        }

        /* ── Asteraid VM outer box ── */
        .cpts-vm-outer {
          flex: 1;
          border: 1.5px solid rgba(0,180,216,0.3);
          border-radius: 18px;
          padding: 20px 20px 20px;
          background: rgba(0,180,216,0.02);
          position: relative;
          box-shadow: 0 0 0 1px rgba(0,180,216,0.05) inset;
        }
        .cpts-vm-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-base, #0d1117);
          border: 1px solid rgba(0,180,216,0.3);
          border-radius: 8px;
          padding: 6px 12px;
          margin-bottom: 16px;
        }
        .cpts-vm-name {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: var(--accent-primary, #00B4D8);
          line-height: 1.2;
        }
        .cpts-vm-type {
          font-size: 10px;
          font-family: var(--font-mono);
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        /* ── Docker containers dashed inner box ── */
        .cpts-docker-box {
          border: 1.5px dashed rgba(0,180,216,0.25);
          border-radius: 14px;
          padding: 14px 16px 16px;
          background: rgba(0,180,216,0.015);
        }
        .cpts-docker-box-title {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 14px;
        }
        .cpts-docker-box-title span {
          font-size: 11px;
          font-family: var(--font-mono);
          color: #2496ED;
          letter-spacing: 0.06em;
        }

        /* ── Docker grid ── */
        .cpts-docker-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
        }

        /* ── Cards ── */
        .cpts-card {
          border-radius: 12px;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .cpts-card:hover { transform: translateY(-2px); }
        .cpts-card--green {
          border: 1.5px solid rgba(76,175,80,0.4);
          background: rgba(76,175,80,0.05);
        }
        .cpts-card--green:hover { box-shadow: 0 0 24px rgba(76,175,80,0.12); }
        .cpts-card--cyan {
          border: 1.5px solid rgba(0,180,216,0.35);
          background: rgba(0,180,216,0.04);
        }
        .cpts-card--cyan:hover { box-shadow: 0 0 24px rgba(0,180,216,0.12); }

        .cpts-card-top {
          padding: 14px 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .cpts-docker-chip {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .cpts-card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 13px;
          text-align: center;
        }
        .cpts-card-title--green { color: #81C784; }
        .cpts-card-title--cyan  { color: var(--accent-primary, #00B4D8); }

        .cpts-card-icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 14px 12px;
        }
        .cpts-icon-box {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 9px;
        }
        .cpts-icon-box--green { background: rgba(76,175,80,0.08); border: 1px solid rgba(76,175,80,0.2); }
        .cpts-icon-box--cyan  { background: rgba(0,180,216,0.06); border: 1px solid rgba(0,180,216,0.15); }

        .cpts-points {
          list-style: none; padding: 0 14px 14px; margin: 0;
          display: flex; flex-direction: column; gap: 6px;
        }
        .cpts-point {
          display: flex; align-items: center; gap: 8px;
          font-size: 11.5px; color: var(--text-secondary);
        }
        .cpts-dot { flex-shrink: 0; width: 5px; height: 5px; border-radius: 50%; }
        .cpts-dot--green { background: #81C784; }
        .cpts-dot--cyan  { background: var(--accent-primary, #00B4D8); }

        /* ── Configurations connector ── */
        .cpts-conn-arrow {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 0 4px;
        }
        .cpts-conn-label {
          font-size: 9px; font-family: var(--font-mono);
          color: var(--text-muted); white-space: nowrap; letter-spacing: 0.06em;
        }
        .cpts-conn-track {
          position: relative; width: 52px; height: 14px;
          display: flex; align-items: center;
        }
        .cpts-conn-line {
          position: absolute; top: 50%; left: 0;
          width: calc(100% - 9px); height: 1.5px;
          background: rgba(0,180,216,0.25); transform: translateY(-50%);
        }
        .cpts-conn-particle {
          position: absolute; top: 50%; left: -14px;
          width: 14px; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,180,216,0.9));
          transform: translateY(-50%);
          animation: cpts-flow 1.8s linear infinite;
        }
        @keyframes cpts-flow {
          0%   { left: -14px; opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { left: calc(100% - 9px); opacity: 0; }
        }
        /* Fan-out SVG particles — stroke-dashoffset technique, same speed as Configurations.
           dasharray="12 188" → period=200 > pathLength=100, no wraparound.
           offset: 12 (particle just before path start) → -100 (particle just past path end).
           This moves the particle TOP→BOTTOM (SSH banner → PBX boxes). */
        @keyframes fp-flow {
          0%   { stroke-dashoffset:   12; opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { stroke-dashoffset: -100; opacity: 0; }
        }

        /* ── VM → SSH connector ── */
        .cpts-vm-to-ssh {
          width: 100%;
          height: 32px;
          position: relative;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }
        .cpts-vm-to-ssh-line {
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          width: 1.5px;
          transform: translateX(-50%);
          background: rgba(0,180,216,0.22);
        }
        .cpts-vm-to-ssh-particle {
          position: absolute;
          top: -14px;
          left: calc(50% - 1px);
          width: 2px;
          height: 14px;
          border-radius: 2px;
          background: linear-gradient(180deg, transparent, rgba(0,180,216,0.9));
          animation: cpts-flow-down 1.8s linear infinite;
        }
        @keyframes cpts-flow-down {
          0%   { top: -14px; opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { top: calc(100% + 14px); opacity: 0; }
        }

        /* ── SSH Banner ── */
        .cpts-ssh-banner-wrap {
          display: flex; justify-content: center; margin-bottom: 0;
        }
        .cpts-ssh-banner {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(0,24,48,0.7);
          border: 1px solid rgba(0,180,216,0.35);
          border-radius: 30px;
          padding: 8px 22px;
          box-shadow: 0 0 24px rgba(0,180,216,0.12), 0 2px 12px rgba(0,0,0,0.3);
        }
        .cpts-ssh-banner span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: rgba(0,180,216,0.85);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        /* ── Fan-out ── */
        .cpts-fanout { width: 100%; }
        .cpts-fanout-svg { width: 100%; height: 72px; display: block; }

        /* ── PBX Grid ── */
        .cpts-pbx-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          margin-bottom: 8px;
        }
        .cpts-pbx-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .cpts-pbx-card:hover { transform: translateY(-3px); }
        .cpts-pbx-card--physical {
          border: 1.5px solid rgba(0,180,216,0.28);
          background: rgba(0,180,216,0.025);
        }
        .cpts-pbx-card--physical:hover { box-shadow: 0 0 28px rgba(0,180,216,0.12); }
        .cpts-pbx-card--vm {
          border: 1.5px solid rgba(0,180,216,0.28);
          background: rgba(0,180,216,0.025);
        }
        .cpts-pbx-card--vm:hover { box-shadow: 0 0 28px rgba(0,180,216,0.12); }
        .cpts-pbx-card--cloud {
          border: 1.5px solid rgba(100,160,255,0.28);
          background: rgba(100,160,255,0.025);
        }
        .cpts-pbx-card--cloud:hover { box-shadow: 0 0 28px rgba(100,160,255,0.12); }

        .cpts-pbx-glow-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,180,216,0.4), transparent);
        }
        .cpts-pbx-card--cloud .cpts-pbx-glow-top {
          background: linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent);
        }

        .cpts-pbx-host-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 14px 10px;
        }
        .cpts-pbx-host-icon { flex-shrink: 0; }
        .cpts-pbx-host-name {
          font-size: 12px;
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--text-secondary);
          line-height: 1.3;
        }

        .cpts-pbx-asterisk-card {
          margin: 0 10px 14px;
          background: rgba(0,0,0,0.25);
          border-radius: 10px;
          border: 1px solid rgba(255,107,0,0.2);
          padding: 12px 10px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .cpts-pbx-asterisk-label {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: #FF8C00;
        }

        /* ── Bottom Connections ── */
        .cpts-conn-section {
          position: relative;
          width: 100%;
        }
        .cpts-conn-svg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: block;
          pointer-events: none;
          overflow: visible;
        }
        .cpts-pills-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          padding-top: 75px;
          pointer-events: none;
        }
        .cpts-pills-wrap > * { pointer-events: auto; }
        .cpts-conn-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 30px;
          padding: 7px 20px;
          width: 100%;
          max-width: 400px;
          justify-content: center;
        }
        .cpts-conn-pill--green {
          background: var(--bg-base, #0d1117);
          background: linear-gradient(rgba(76,175,80,0.10), rgba(76,175,80,0.10)), var(--bg-base, #0d1117);
          border: 1.5px solid rgba(76,175,80,0.35);
          box-shadow: 0 0 16px rgba(76,175,80,0.08);
        }
        .cpts-conn-pill--green span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: #81C784;
          letter-spacing: 0.05em;
        }
        .cpts-conn-pill--purple {
          background: var(--bg-base, #0d1117);
          background: linear-gradient(rgba(156,111,228,0.08), rgba(156,111,228,0.08)), var(--bg-base, #0d1117);
          border: 1.5px solid rgba(156,111,228,0.35);
          box-shadow: 0 0 16px rgba(156,111,228,0.08);
        }
        .cpts-conn-pill--purple span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: #9C6FE4;
          letter-spacing: 0.05em;
        }

        /* ── Responsive ── */
        @media (max-width: 720px) {
          .cpts-top-row { flex-direction: column; gap: 16px; }
          .cpts-webui { width: 100%; }
          .cpts-webui-inner { flex-direction: row; justify-content: center; gap: 12px; }
          .cpts-bidir { transform: rotate(90deg); }
          .cpts-vm-outer { width: 100%; }
          .cpts-docker-grid { grid-template-columns: 1fr !important; }
          .cpts-conn-arrow { flex-direction: row; align-items: center; gap: 8px; justify-content: center; }
          .cpts-conn-label { font-size: 9px; white-space: nowrap; order: -1; }
          .cpts-conn-track { width: 14px; height: 52px; position: relative; display: flex; flex-direction: column; justify-content: flex-start; }
          .cpts-conn-line { position: absolute; left: 50%; top: 0; width: 1.5px; height: calc(100% - 9px); background: rgba(0,180,216,0.25); transform: translateX(-50%); }
          .cpts-conn-particle { position: absolute; left: 50%; top: -14px; width: 2px; height: 14px; background: linear-gradient(180deg, transparent, rgba(0,180,216,0.9)); transform: translateX(-50%); animation: cpts-flow-vertical 1.8s linear infinite; }
          .cpts-arrow-svg { position: absolute !important; right: auto !important; left: 50% !important; bottom: -4px !important; top: auto !important; transform: translateX(-50%) rotate(90deg) !important; }
          @keyframes cpts-flow-vertical {
            0%   { top: -14px; opacity: 0; }
            10%  { opacity: 1; }
            80%  { opacity: 1; }
            100% { top: calc(100% - 9px); opacity: 0; }
          }
          .cpts-pbx-grid { grid-template-columns: 1fr !important; }
          .cpts-fanout-svg { height: 100px; }
          .cpts-periph-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .cpts-periph-fanout { display: none !important; }
        }

        /* ── Periphery connector ── */
        .cpts-periph-connector {
          display: flex; justify-content: center;
          height: 8px;
        }
        .cpts-periph-conn-line {
          width: 1.5px; height: 100%;
          background: rgba(0,180,216,0.12);
        }

        /* ── Periphery wrap ── */
        .cpts-periph-wrap {
          opacity: 1;
          transition: opacity 0.35s ease;
        }
        .cpts-periph-wrap:hover { opacity: 1; }
        .cpts-periph-fanout { width: 100%; height: 44px; display: block; }

        /* ── Periphery grid ── */
        .cpts-periph-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 8px;
        }
        .cpts-periph-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 10px 6px 8px;
          text-align: center;
        }
        .cpts-periph-item--oval {
          border: 1px solid rgba(0,180,216,0.55);
          background: rgba(0,180,216,0.07);
          border-radius: 50px;
        }
        .cpts-periph-item--rect {
          border: 1px solid rgba(0,180,216,0.55);
          background: rgba(0,180,216,0.07);
          border-radius: 8px;
        }
        .cpts-periph-item--phones {
          border: none;
          background: transparent;
        }
        .cpts-periph-item span {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .cpts-periph-phones {
          display: flex;
          align-items: flex-end;
          gap: 2px;
        }
      `}</style>
    </section>
  )
}
