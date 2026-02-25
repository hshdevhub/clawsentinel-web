'use client'

import { useEffect, useRef, useState } from 'react'

const EXT_URL = 'https://github.com/hshdevhub/clawsentinel'

const features = [
  {
    title: 'Real-time page scanning',
    desc: 'Scans every page load for prompt injection patterns before content reaches your agent.',
  },
  {
    title: 'Injection highlighting',
    desc: 'Visually marks detected injection attempts directly in the page so you see what the agent would have received.',
  },
  {
    title: 'Toolbar threat badge',
    desc: 'Shield icon in your browser toolbar shows the current page threat level at a glance.',
  },
  {
    title: 'Zero data collection',
    desc: 'All scanning is local. No page content, URL, or usage data is ever sent to any server.',
  },
  {
    title: 'Offline-capable',
    desc: 'Works on the 500-rule pattern engine even when the ClawGuard proxy is not running.',
  },
  {
    title: 'Connects to ClawGuard',
    desc: 'When the proxy is active, the extension syncs threat context for deeper correlation in ClawEye.',
  },
]

const browsers = ['Chrome', 'Edge', 'Firefox']

export default function ChromeExtension() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [scanPct, setScanPct] = useState(0)
  const [scanDone, setScanDone] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Trigger scan animation when visible
  useEffect(() => {
    if (!visible) return
    const delay = setTimeout(() => {
      setScanning(true)
      let pct = 0
      const t = setInterval(() => {
        pct += Math.random() * 18 + 6
        if (pct >= 100) {
          setScanPct(100)
          setScanDone(true)
          clearInterval(t)
        } else {
          setScanPct(Math.floor(pct))
        }
      }, 80)
    }, 600)
    return () => clearTimeout(delay)
  }, [visible])

  return (
    <section
      id="extension"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className={`text-xs font-mono font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Browser Extension
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold text-text mb-4 transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Catch threats before your agent reads the page.
            </h2>

            <p className={`text-sm text-text-muted mb-8 leading-relaxed transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              ClawSentinel Guard is the browser-side layer of your defense stack. It scans
              web content at the source — inside your browser — before OpenClaw ever processes
              it. Works alongside the ClawGuard proxy for complete coverage.
            </p>

            {/* Browser compatibility */}
            <div className={`flex items-center gap-2 mb-8 transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-xs text-text-muted mr-1">Available for</span>
              {browsers.map((b) => (
                <span
                  key={b}
                  className="text-xs font-medium px-2.5 py-1 rounded border border-border bg-surface text-text-muted"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Feature list */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="bg-surface border border-border rounded-lg p-3"
                  style={{
                    animation: visible ? `card-in 0.45s ease ${i * 60 + 350}ms forwards` : 'none',
                    opacity: visible ? undefined : 0,
                  }}
                >
                  <p className="text-xs font-semibold text-text mb-1">{f.title}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`flex items-center gap-3 transition-all duration-500 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={EXT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-blue/90 text-white text-sm font-semibold rounded-lg cta-glow"
              >
                <ExtIcon className="w-4 h-4" />
                Get the Extension
              </a>
              <span className="text-xs text-text-muted">Included with ClawSentinel</span>
            </div>
          </div>

          {/* Right: browser popup mockup */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="w-72 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] shadow-2xl overflow-hidden">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a0a0a] border-b border-[#1c1c1c]">
                <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green/40" />
                <div className="ml-2 flex-1 bg-[#1a1a1a] rounded px-2 py-0.5 font-mono text-[9px] text-text-muted/40 truncate">
                  example.com/article
                </div>
                {/* Extension icon in toolbar */}
                <div className="ml-1 w-4 h-4 rounded bg-blue/20 border border-blue/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue text-[7px] font-bold">CS</span>
                </div>
              </div>

              {/* Popup header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1c1c1c] bg-[#0d0d0d]">
                <div className="w-5 h-5 rounded bg-blue/20 border border-blue/30 flex items-center justify-center flex-shrink-0">
                  <ShieldSmIcon className="w-3 h-3 text-blue" />
                </div>
                <span className="text-xs font-semibold text-text">ClawSentinel Guard</span>
                <span className="ml-auto font-mono text-[9px] text-text-muted/40">v0.7.0</span>
              </div>

              {/* Popup body */}
              <div className="p-4 space-y-4">
                {/* Current page */}
                <div>
                  <p className="font-mono text-[9px] text-text-muted/50 uppercase tracking-wider mb-1.5">Current Page</p>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${scanDone ? 'bg-green pulse-green' : 'bg-text-muted/40'}`} />
                    <span className="font-mono text-[11px] text-text-muted truncate">example.com/article</span>
                  </div>
                </div>

                {/* Scan progress */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="font-mono text-[9px] text-text-muted/50 uppercase tracking-wider">
                      {scanDone ? 'Scan Result' : scanning ? 'Scanning...' : 'Awaiting scan'}
                    </p>
                    <span className={`font-mono text-[10px] font-bold ${scanDone ? 'text-green' : 'text-text-muted'}`}>
                      {scanDone ? 'CLEAN' : `${scanPct}%`}
                    </span>
                  </div>
                  <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-200 ${scanDone ? 'bg-green' : 'bg-blue'}`}
                      style={{ width: `${scanPct}%` }}
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Threats detected', value: '0', color: 'text-green' },
                    { label: 'Rules applied', value: '500', color: 'text-text' },
                    { label: 'Injection patterns', value: '0', color: 'text-green' },
                    { label: 'Malicious links', value: '0', color: 'text-green' },
                  ].map((m) => (
                    <div key={m.label} className="bg-[#0a0a0a] border border-[#1c1c1c] rounded-lg px-2.5 py-2">
                      <p className={`font-mono text-sm font-bold ${m.color}`}>{m.value}</p>
                      <p className="text-[9px] text-text-muted leading-tight mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popup footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#1c1c1c] bg-[#0a0a0a]">
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${scanDone ? 'bg-green pulse-green' : 'bg-text-muted/30'}`} />
                  <span className="font-mono text-[10px] text-text-muted">ClawGuard</span>
                  <span className={`font-mono text-[10px] font-semibold ${scanDone ? 'text-green' : 'text-text-muted/50'}`}>
                    {scanDone ? 'CONNECTED' : 'WAITING'}
                  </span>
                </div>
                <code className="font-mono text-[9px] text-text-muted/40">:18790</code>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ShieldSmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ExtIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}
