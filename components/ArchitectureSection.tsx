'use client'

import { useEffect, useRef, useState } from 'react'

type Accent = 'red' | 'blue' | 'green' | 'neutral'

const flow: {
  id: string
  label: string
  detail: string
  badge?: string
  accent: Accent
  isSource?: boolean
  connectorLabel?: string
}[] = [
  {
    id: 'threats',
    label: 'Internet — Threats',
    detail: 'T1 Prompt Injection · T2 Supply Chain · T7 Credential Theft · T3/T6 Exfiltration',
    accent: 'red',
    isSource: true,
    connectorLabel: 'intercepted at browser',
  },
  {
    id: 'extension',
    label: 'ClawGuard Extension',
    detail: 'Scans browser content in real-time before OpenClaw ever touches it.',
    badge: 'Browser Layer',
    accent: 'green',
    connectorLabel: 'pattern-filtered payload',
  },
  {
    id: 'proxy',
    label: 'ClawGuard Proxy',
    detail: '500-rule engine inspects every WS frame and HTTP response. Pro adds LLM semantic analysis.',
    badge: ':18790 → :18789',
    accent: 'blue',
    connectorLabel: 'clean traffic only',
  },
  {
    id: 'openclaw',
    label: 'OpenClaw Agent',
    detail: 'Receives only verified, sanitized traffic. Runs unmodified — zero config changes.',
    badge: ':18789',
    accent: 'neutral',
    connectorLabel: 'isolated secrets access',
  },
  {
    id: 'vault-hub',
    label: 'ClawVault + ClawHub',
    detail: 'Credentials sealed with AES-256-GCM. Every skill install intercepted and scanned.',
    badge: 'AES-256-GCM',
    accent: 'blue',
    connectorLabel: 'containerized runtime',
  },
  {
    id: 'clawbox',
    label: 'ClawBox',
    detail: 'Hardened Docker environment. Reduced attack surface. Isolated from host filesystem.',
    badge: 'Docker Compose',
    accent: 'blue',
  },
]

const accentStyles: Record<Accent, string> = {
  red: 'border-red/30 bg-red-dim',
  blue: 'border-blue/25 bg-blue-dim',
  green: 'border-green/30 bg-green/5',
  neutral: 'border-border bg-surface',
}

const accentLabel: Record<Accent, string> = {
  red: 'text-red/70',
  blue: 'text-blue/70',
  green: 'text-green/70',
  neutral: 'text-text-muted',
}

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div className="lg:sticky lg:top-24">
            <p className={`text-xs font-mono font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Architecture
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold text-text mb-6 transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              One package. Five layers.
              <br />
              <span className="text-text-muted font-normal">All connected.</span>
            </h2>

            <div className={`space-y-5 mb-10 transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <ArchPoint
                icon="shield"
                title="Defense in depth"
                desc="Each layer operates independently. If ClawGuard Proxy misses something, ClawVault still seals your secrets. No single point of failure."
              />
              <ArchPoint
                icon="zap"
                title="Passthrough-first"
                desc="If ClawSentinel encounters an error at any layer, OpenClaw traffic passes through unblocked. Your agent never goes dark."
              />
              <ArchPoint
                icon="eye"
                title="Unified visibility"
                desc="ClawEye correlates events across all five layers in real time. One dashboard, one alert feed, one source of truth."
              />
            </div>

            <a
              href="#features"
              className={`inline-flex items-center gap-2 text-sm text-blue hover:text-blue/80 transition-colors duration-500 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            >
              View all five modules →
            </a>
          </div>

          {/* Right: flow diagram */}
          <div
            className="flex flex-col items-stretch max-w-sm mx-auto lg:mx-0 lg:max-w-none w-full"
          >
            {flow.map((node, i) => (
              <div key={node.id}>
                {/* Node card */}
                <div
                  className={`rounded-xl border p-4 ${accentStyles[node.accent]} transition-all`}
                  style={{
                    animation: visible
                      ? `card-in 0.45s ease ${i * 80 + 200}ms forwards`
                      : 'none',
                    opacity: visible ? undefined : 0,
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <span className="font-semibold text-text text-sm leading-snug">
                      {node.label}
                    </span>
                    {node.badge && (
                      <code className={`flex-shrink-0 font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/20 border border-white/5 ${accentLabel[node.accent]}`}>
                        {node.badge}
                      </code>
                    )}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{node.detail}</p>
                </div>

                {/* Connector arrow */}
                {node.connectorLabel && (
                  <div
                    className="flex flex-col items-center py-1"
                    style={{
                      animation: visible
                        ? `fade-up 0.4s ease ${i * 80 + 280}ms forwards`
                        : 'none',
                      opacity: visible ? undefined : 0,
                    }}
                  >
                    <div className="w-px h-3 bg-border/60" />
                    <span className="font-mono text-[9px] text-text-muted/40 uppercase tracking-wider px-2 py-px border border-border/40 rounded bg-background">
                      {node.connectorLabel}
                    </span>
                    <div className="w-px h-3 bg-border/60" />
                    <svg width="10" height="6" viewBox="0 0 10 6" className="text-border/60 fill-current -mt-px">
                      <path d="M5 6L0 0h10z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {/* ClawEye monitoring bar */}
            <div
              className="mt-5 rounded-xl border border-green/25 bg-green/5 p-4"
              style={{
                animation: visible
                  ? `card-in 0.45s ease ${flow.length * 80 + 250}ms forwards`
                  : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green pulse-green" />
                  <span className="text-sm font-semibold text-text">ClawEye</span>
                </div>
                <code className="font-mono text-[10px] text-green/60">localhost:7432</code>
              </div>
              <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                Monitors all five layers simultaneously. Correlates events, fires alerts, streams the unified event feed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ArchPoint({
  icon,
  title,
  desc,
}: {
  icon: 'shield' | 'zap' | 'eye'
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center mt-0.5">
        {icon === 'shield' && <ShieldIcon className="w-3.5 h-3.5 text-blue" />}
        {icon === 'zap' && <ZapIcon className="w-3.5 h-3.5 text-green" />}
        {icon === 'eye' && <EyeIcon className="w-3.5 h-3.5 text-text-muted" />}
      </div>
      <div>
        <p className="text-sm font-semibold text-text mb-0.5">{title}</p>
        <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
