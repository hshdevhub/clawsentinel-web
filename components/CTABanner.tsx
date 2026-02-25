'use client'

import { useState, useEffect, useRef } from 'react'

const INSTALL_CMD = 'npm install -g clawsentinel'
const GITHUB_URL = 'https://github.com/hshdevhub/clawsentinel'

export default function CTABanner() {
  const [copied, setCopied] = useState(false)
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

  const copy = async () => {
    try { await navigator.clipboard.writeText(INSTALL_CMD) } catch { /* noop */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 border-t border-border overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {/* subtle dot grid overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-mono font-semibold tracking-[0.2em] text-text-muted uppercase mb-6">
            Secure Your Agent Today
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-5 leading-tight">
            Zero Trust protection
            <br />
            <span className="text-blue">in 30 seconds.</span>
          </h2>

          <p className="text-sm sm:text-base text-text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            No cloud. No data collection. No changes to your OpenClaw config.
            Just install and start — all five layers activate automatically.
          </p>

          {/* Install box */}
          <div className="flex items-center justify-between max-w-md mx-auto bg-[#080808] border border-blue/20 rounded-lg px-4 py-3 mb-8 install-glow shimmer-parent shimmer-blue">
            <div className="flex items-center font-mono text-sm gap-2">
              <span className="text-green flex-shrink-0">$</span>
              <span className="text-text">{INSTALL_CMD}</span>
            </div>
            <button
              onClick={copy}
              className="ml-3 flex-shrink-0 p-1.5 rounded hover:bg-white/5 text-text-muted hover:text-text transition-colors"
              aria-label="Copy"
            >
              {copied
                ? <CheckIcon className="w-4 h-4 text-green" />
                : <CopyIcon className="w-4 h-4" />
              }
            </button>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3 bg-blue hover:bg-blue/90 text-white font-semibold rounded-lg text-sm cta-glow"
            >
              Install Free →
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 border border-border hover:border-text-muted/50 text-text-muted hover:text-text font-medium rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <GitHubIcon className="w-4 h-4" />
              View Source
            </a>
          </div>

          {/* Reassurance strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-green" />Free tier includes all 5 modules
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-green" />No account required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-green" />Open source · Auditable
            </span>
          </div>
        </div>
      </div>
    </section>
  )
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
