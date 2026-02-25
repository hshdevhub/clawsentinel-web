'use client'

import { useEffect, useRef, useState } from 'react'

const GITHUB_URL = 'https://github.com/hshdevhub/clawsentinel'
const INSTALL_CMD = 'npm install -g clawsentinel'

function useTypewriter(text: string, speed = 42) {
  const [chars, setChars] = useState(0)
  const done = chars >= text.length
  useEffect(() => {
    if (done) return
    const t = setTimeout(() => setChars((c) => c + 1), speed)
    return () => clearTimeout(t)
  }, [chars, speed, done])
  return { displayed: text.slice(0, chars), done }
}

function useCounter(target: number, enabled: boolean, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!enabled) return
    if (target === 0) { setVal(0); return }
    const steps = 55
    const step = target / steps
    const interval = duration / steps
    let current = 0
    const t = setInterval(() => {
      current += step
      if (current >= target) { setVal(target); clearInterval(t) }
      else setVal(Math.floor(current))
    }, interval)
    return () => clearInterval(t)
  }, [enabled, target, duration])
  return val
}

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const { displayed, done } = useTypewriter(INSTALL_CMD)
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsOn, setStatsOn] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsOn(true); obs.disconnect() } },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const c500 = useCounter(500, statsOn)
  const c7 = useCounter(7, statsOn, 900)

  const copy = async () => {
    try { await navigator.clipboard.writeText(INSTALL_CMD) } catch { /* noop */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden dot-grid">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-red/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[380px] h-[380px] bg-blue/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Status chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-xs text-text-muted mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green pulse-green" />
          Open Source · Elastic License 2.0
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold tracking-tight text-text leading-[1.1] mb-6">
          Five Layers.{' '}
          <span className="text-red glitch-text">One Install.</span>
          <br />
          Zero Trust.
        </h1>

        {/* Sub */}
        <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          The complete security platform for OpenClaw. Blocks prompt injection,
          supply chain attacks, and credential theft —{' '}
          <span className="text-text font-medium">before they reach your agent.</span>
        </p>

        {/* Install box */}
        <div className="flex items-center justify-between max-w-md mx-auto bg-[#080808] border border-blue/20 rounded-lg px-4 py-3 mb-8 install-glow shimmer-parent shimmer-blue">
          <div className="flex items-center font-mono text-sm min-w-0 gap-2">
            <span className="text-green flex-shrink-0">$</span>
            <span className="text-text truncate">{displayed}</span>
            {!done && (
              <span className="inline-block w-[7px] h-[14px] bg-green rounded-[1px] blink flex-shrink-0" />
            )}
          </div>
          {done && (
            <button
              onClick={copy}
              className="ml-3 flex-shrink-0 p-1.5 rounded hover:bg-white/5 text-text-muted hover:text-text transition-colors"
              aria-label="Copy install command"
            >
              {copied
                ? <CheckIcon className="w-4 h-4 text-green" />
                : <CopyIcon className="w-4 h-4" />
              }
            </button>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-2.5 bg-blue hover:bg-blue/90 text-white font-semibold rounded-lg text-sm cta-glow"
          >
            Install Free →
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-2.5 border border-border hover:border-text-muted/50 text-text-muted hover:text-text font-medium rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            <GitHubIcon className="w-4 h-4" />
            View on GitHub
          </a>
        </div>

        {/* Stat strip */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-border pt-8"
        >
          <Stat value={c500} label="pattern rules" />
          <Dot />
          <Stat value={c7} label="correlation rules" />
          <Dot />
          <Stat value={0} label="OpenClaw config changes" green />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label, green }: { value: number; label: string; green?: boolean }) {
  return (
    <span className="flex items-baseline gap-1.5 text-xs text-text-muted">
      <span className={`text-xl font-bold font-mono leading-none ${green ? 'text-green' : 'text-text'}`}>
        {value}
      </span>
      {label}
    </span>
  )
}

function Dot() {
  return <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
