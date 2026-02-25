'use client'

import { useEffect, useRef, useState } from 'react'

const layers = [
  {
    num: '01',
    name: 'ClawBox',
    role: 'Hardened Docker deployment',
    path: 'Docker Compose',
    status: 'HARDENED',
  },
  {
    num: '02',
    name: 'ClawVault',
    role: 'AES-256-GCM credential vault',
    path: '~/.clawsentinel/vault/',
    status: 'SEALED',
  },
  {
    num: '03',
    name: 'ClawGuard',
    role: 'WS + HTTP proxy firewall',
    path: ':18790 → :18789',
    status: 'ACTIVE',
  },
  {
    num: '04',
    name: 'ClawHub',
    role: 'Supply chain scanner',
    path: 'hooks openclaw skill install',
    status: 'WATCHING',
  },
  {
    num: '05',
    name: 'ClawEye',
    role: 'Real-time dashboard',
    path: 'localhost:7432',
    status: 'ONLINE',
  },
]

export default function LayersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label row */}
        <div className={`flex items-center gap-3 mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue pulse-green" />
          <p className="text-xs font-mono font-semibold tracking-[0.2em] text-blue uppercase">
            Defense Architecture — All Systems Online
          </p>
        </div>

        <h2
          className={`text-2xl sm:text-3xl font-bold text-text mb-3 max-w-xl transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Defense in depth.{' '}
          <span className="text-text-muted font-normal">Every layer independent.</span>
        </h2>

        <p
          className={`text-sm text-text-muted mb-12 max-w-lg leading-relaxed transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Five modules. One package. Each layer operates independently —
          if one fails, the others keep running.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layers.map((layer, i) => (
            <div
              key={layer.num}
              className="bg-blue-dim border border-blue/20 rounded-xl p-5 shimmer-parent shimmer-blue hover-glow-blue flex flex-col gap-3"
              style={{
                animation: visible ? `card-in 0.5s ease ${i * 90 + 200}ms forwards` : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-blue/50 font-bold leading-none">
                    {layer.num}
                  </span>
                  <h3 className="font-semibold text-text text-sm">{layer.name}</h3>
                </div>
                {/* Active indicator */}
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green pulse-green" />
                  <span className="font-mono text-[10px] text-green/70">{layer.status}</span>
                </div>
              </div>

              {/* Role */}
              <p className="text-sm text-text-muted leading-relaxed">{layer.role}</p>

              {/* Path */}
              <code className="font-mono text-xs text-blue/70 bg-blue/5 border border-blue/10 rounded px-2.5 py-1.5 block truncate">
                {layer.path}
              </code>
            </div>
          ))}

          {/* Passthrough note */}
          <div
            className="sm:col-span-2 lg:col-span-1 bg-surface border border-border rounded-xl p-5 flex items-center"
            style={{
              animation: visible ? `card-in 0.5s ease ${layers.length * 90 + 200}ms forwards` : 'none',
              opacity: visible ? undefined : 0,
            }}
          >
            <div>
              <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                Passthrough-first design
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                If ClawSentinel encounters an error, OpenClaw traffic passes through uninterrupted.{' '}
                <span className="text-text">Zero downtime guarantee.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
