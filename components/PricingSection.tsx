'use client'

import { useEffect, useRef, useState } from 'react'

const CHECKOUT_URL = 'https://clawsentinel-api.vercel.app/api/checkout'

const freeModules = [
  'ClawGuard Proxy',
  'ClawVault',
  'ClawHub Scanner',
  'ClawBox',
  'ClawEye Dashboard',
  'Browser Extension',
]

const proFeatures = [
  {
    icon: 'brain',
    name: 'Semantic LLM Engine',
    desc: 'Understands intent — catches novel, rephrased, and zero-day attacks no pattern rule covers.',
    tags: 'BYOK · Anthropic / OpenAI / Ollama',
  },
  {
    icon: 'network',
    name: 'Correlation Engine',
    desc: 'Watches all 5 layers simultaneously. Fires when events combine into a multi-stage attack chain.',
    tags: '7 cross-layer rules',
  },
  {
    icon: 'refresh',
    name: 'Background Token Renewal',
    desc: 'Access token refreshed silently every 23 hours. Zero interruptions to your agent.',
    tags: 'Silent · 23h cycle',
  },
]

const comparison = [
  { attack: 'Known injection (rule match)',  free: 'blocked', pro: 'blocked', note: '' },
  { attack: 'Novel / rephrased injection',   free: 'missed',  pro: 'blocked', note: 'LLM engine' },
  { attack: 'Polymorphic attack variant',    free: 'missed',  pro: 'blocked', note: 'semantic intent' },
  { attack: 'Multi-stage exfiltration',      free: 'partial', pro: 'blocked', note: 'correlation rule' },
  { attack: 'Supply chain + exfil combo',    free: 'partial', pro: 'blocked', note: 'RULE-04 fires' },
  { attack: 'Zero-day technique',            free: 'missed',  pro: 'blocked', note: 'LLM intent check' },
]

export default function PricingSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="pricing" ref={ref} className="py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className={`text-xs font-mono font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Pricing
        </p>
        <h2 className={`text-2xl sm:text-3xl font-bold text-text mb-3 max-w-2xl transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Pattern rules block what we know.{' '}
          <span className="text-blue">Semantic intelligence blocks what we&nbsp;don&apos;t.</span>
        </h2>
        <p className={`text-sm text-text-muted mb-12 max-w-xl leading-relaxed transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Free covers all known threats forever. Pro adds the intelligence layer for everything else.
        </p>

        {/* ── Equal-height cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch mb-10">

          {/* FREE */}
          <div
            className="rounded-2xl border border-border bg-surface flex flex-col"
            style={{ animation: visible ? 'card-in 0.5s ease 200ms forwards' : 'none', opacity: visible ? undefined : 0 }}
          >
            {/* Plan label */}
            <div className="flex items-center justify-between px-6 pt-6 pb-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-text-muted uppercase tracking-widest">Free</span>
                <span className="text-[10px] font-mono text-text-muted/60 border border-border rounded-full px-2 py-0.5">Pattern Guard</span>
              </div>
            </div>

            {/* Price */}
            <div className="px-6 pt-4 pb-5 border-b border-border">
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-5xl font-bold text-text font-mono">$0</span>
                <span className="text-text-muted text-sm">/ forever</span>
              </div>
              <p className="text-sm text-text-muted">All five modules. All known threats. Zero config.</p>
            </div>

            {/* Modules — 2 col checklist */}
            <div className="px-6 py-5 flex-1">
              <p className="text-[10px] font-mono text-text-muted/40 uppercase tracking-wider mb-3">Included modules</p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-6">
                {freeModules.map((m) => (
                  <div key={m} className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-green/70 flex-shrink-0" />
                    <span className="text-sm text-text-muted">{m}</span>
                  </div>
                ))}
              </div>

              {/* Limitation */}
              <div className="flex items-start gap-2.5 rounded-xl bg-background border border-border px-3.5 py-3">
                <WarnIcon className="w-3.5 h-3.5 text-text-muted/40 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-text-muted leading-relaxed">
                  Matches <span className="text-text">known signatures only.</span>{' '}
                  Novel, rephrased, and zero-day attacks that miss every rule will pass through.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
              <a
                href="#how-it-works"
                className="block w-full py-3 text-center text-sm font-medium border border-border hover:border-text-muted/50 text-text-muted hover:text-text rounded-xl transition-colors"
              >
                Install Free
              </a>
            </div>
          </div>

          {/* PRO */}
          <div
            className="rounded-2xl border border-blue/30 bg-blue-dim flex flex-col relative overflow-hidden pro-glow"
            style={{ animation: visible ? 'card-in 0.5s ease 330ms forwards' : 'none', opacity: visible ? undefined : 0 }}
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/70 to-transparent" />

            {/* Plan label */}
            <div className="flex items-center justify-between px-6 pt-6 pb-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-blue uppercase tracking-widest">Pro</span>
                <span className="text-[10px] font-mono text-blue/70 border border-blue/30 rounded-full px-2 py-0.5">Semantic Intelligence</span>
              </div>
              <span className="text-[10px] font-mono text-green bg-green/10 border border-green/20 rounded-full px-2.5 py-0.5">
                7-day trial
              </span>
            </div>

            {/* Price */}
            <div className="px-6 pt-4 pb-5 border-b border-blue/15">
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-5xl font-bold text-text font-mono">$9</span>
                <span className="text-text-muted text-sm">/ month</span>
              </div>
              <p className="text-sm text-text-muted">Everything in Free, plus the intelligence layer.</p>
            </div>

            {/* Pro-exclusive features */}
            <div className="px-6 py-5 flex-1">
              <p className="text-[10px] font-mono text-text-muted/40 uppercase tracking-wider mb-3">
                Pro exclusive — on top of Free
              </p>
              <div className="space-y-3">
                {proFeatures.map((f) => (
                  <div key={f.name} className="flex gap-3.5 rounded-xl bg-blue/5 border border-blue/15 p-4">
                    <div className="w-9 h-9 rounded-xl bg-blue/20 border border-blue/25 flex items-center justify-center flex-shrink-0">
                      {f.icon === 'brain'   && <BrainIcon   className="w-4 h-4 text-blue" />}
                      {f.icon === 'network' && <NetworkIcon className="w-4 h-4 text-blue" />}
                      {f.icon === 'refresh' && <RefreshIcon className="w-4 h-4 text-blue" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-text">{f.name}</p>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed mb-2">{f.desc}</p>
                      <span className="text-[10px] font-mono text-blue/60">{f.tags}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-sm font-semibold bg-blue hover:bg-blue/90 text-white rounded-xl cta-glow"
              >
                Start 7-day free trial →
              </a>
              <p className="text-[10px] text-text-muted text-center mt-2.5">
                No charge for 7 days · Cancel anytime · Access revoked within 24 h
              </p>
            </div>
          </div>
        </div>

        {/* ── Comparison table ── */}
        <div
          style={{ animation: visible ? 'card-in 0.5s ease 500ms forwards' : 'none', opacity: visible ? undefined : 0 }}
        >
          <p className="text-[10px] font-mono text-text-muted/40 uppercase tracking-wider mb-4">What each plan detects</p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left px-5 py-3.5 text-[10px] font-mono text-text-muted/40 uppercase tracking-wider">Attack Type</th>
                  <th className="px-5 py-3.5 text-center text-[10px] font-mono text-text-muted/40 uppercase tracking-wider border-l border-border w-36">Free</th>
                  <th className="px-5 py-3.5 text-center text-[10px] font-mono text-blue uppercase tracking-wider border-l border-blue/20 bg-blue/5 w-44">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.attack} className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-surface/30'}`}>
                    <td className="px-5 py-3 text-xs text-text-muted">{row.attack}</td>
                    <td className="px-5 py-3 border-l border-border">
                      <StatusPill status={row.free} />
                    </td>
                    <td className="px-5 py-3 border-l border-blue/20 bg-blue/5">
                      <StatusPill status={row.pro} note={row.note} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-muted">
            Pro uses your own API key (BYOK). No traffic is processed by ClawSentinel servers.
          </p>
        </div>

      </div>
    </section>
  )
}

function StatusPill({ status, note }: { status: string; note?: string }) {
  const map = {
    blocked: { label: 'Blocked', dot: 'bg-green', text: 'text-green' },
    missed:  { label: 'Missed',  dot: 'bg-red',   text: 'text-red/80' },
    partial: { label: 'Partial', dot: 'bg-orange-400', text: 'text-orange-400' },
  }
  const s = map[status as keyof typeof map]
  if (!s) return null
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className={`flex items-center gap-1.5 text-xs font-mono font-semibold ${s.text}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
        {s.label}
      </div>
      {note && <span className="text-[9px] font-mono text-blue/55">{note}</span>}
    </div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
function WarnIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" /><path d="M12 17h.01" />
    </svg>
  )
}
function BrainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  )
}
function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}
function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}
