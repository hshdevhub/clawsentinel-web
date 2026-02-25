'use client'

import { useEffect, useRef, useState } from 'react'

const threats = [
  {
    id: 'T1',
    name: 'Prompt Injection',
    severity: 'CRITICAL',
    description:
      'Malicious instructions hidden in web content hijack your agent — redirecting tool calls, leaking memory, and overriding user intent.',
  },
  {
    id: 'T2',
    name: 'Supply Chain Attack',
    severity: 'HIGH',
    description:
      'A skill with a backdoor runs with full agent permissions. ClawHub scans every package before install.',
  },
  {
    id: 'T3/T6',
    name: 'Data Exfiltration',
    severity: 'HIGH',
    description:
      'Agent memory silently written to attacker-controlled URLs. ClawGuard intercepts outbound requests and blocks unauthorized exfil.',
  },
  {
    id: 'T7',
    name: 'Credential Theft',
    severity: 'CRITICAL',
    description:
      'API keys extracted from responses and sent outbound. ClawVault isolates secrets from agent reach.',
  },
]

export default function ThreatSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

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

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label row */}
        <div className={`flex items-center gap-3 mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-red pulse-red" />
          <p className="text-xs font-mono font-semibold tracking-[0.2em] text-red uppercase">
            Threat Landscape — Scanning Active
          </p>
        </div>

        <h2
          className={`text-2xl sm:text-3xl font-bold text-text mb-3 max-w-xl transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          OpenClaw agents are a new attack surface
        </h2>

        <p
          className={`text-sm text-text-muted mb-12 max-w-lg leading-relaxed transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Agents browse the web, install skills, and hold your API keys.
          Every capability is also a vector.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {threats.map((threat, i) => (
            <div
              key={threat.id}
              className="bg-red-dim border border-red/20 rounded-xl p-5 shimmer-parent hover-glow-red"
              style={{
                animation: visible ? `card-in 0.5s ease ${i * 100 + 200}ms forwards` : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 font-mono text-[10px] text-red/60 bg-red/10 border border-red/20 rounded px-1.5 py-0.5 leading-relaxed mt-0.5">
                    {threat.id}
                  </span>
                  <h3 className="font-semibold text-text text-sm leading-snug">
                    {threat.name}
                  </h3>
                </div>
                <span
                  className={`flex-shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    threat.severity === 'CRITICAL'
                      ? 'text-red bg-red/10 border-red/30'
                      : 'text-orange-400 bg-orange-400/10 border-orange-400/30'
                  }`}
                >
                  {threat.severity}
                </span>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                {threat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
