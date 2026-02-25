'use client'

import { useEffect, useRef, useState } from 'react'

const GITHUB_URL = 'https://github.com/hshdevhub/clawsentinel'

const auditLines = [
  { text: '> clawsentinel audit --verbose', type: 'cmd' },
  { text: '  Scanning 500 detection rules...', type: 'info', delay: 300 },
  { text: '  Scanning 7 correlation rules...', type: 'info', delay: 600 },
  { text: '  Verifying ClawGuard proxy logic...', type: 'info', delay: 900 },
  { text: '  Checking ClawVault encryption...', type: 'info', delay: 1100 },
  { text: '', type: 'blank', delay: 1300 },
  { text: '  ✓ AUDIT PASSED — 0 hidden rules', type: 'success', delay: 1400 },
  { text: '  ✓ All sources are public on GitHub', type: 'success', delay: 1600 },
]

export default function OpenSourceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [linesShown, setLinesShown] = useState(0)

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

  useEffect(() => {
    if (!visible) return
    auditLines.forEach((line, i) => {
      setTimeout(() => setLinesShown(i + 1), line.delay ?? i * 200)
    })
  }, [visible])

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-text-muted mb-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <LockOpenIcon className="w-3 h-3" />
              Elastic License 2.0
            </div>

            <h2 className={`text-2xl sm:text-3xl font-bold text-text mb-6 transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Open source. Auditable. Yours.
            </h2>

            <p className={`text-sm text-text-muted leading-relaxed mb-4 transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Every rule, every detection, every line of ClawGuard is public.
              Licensed under{' '}
              <span className="text-text">Elastic License 2.0</span> — free to
              use, self-host, and audit. No hidden logic. No black-box rules.
            </p>

            <p className={`text-sm text-text-muted leading-relaxed mb-10 transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Pro semantic engine uses your own API keys (BYOK) — we never
              see your traffic or credentials.
            </p>

            <div className={`transition-all duration-500 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-surface border border-border hover:border-text-muted/50 text-text text-sm font-medium rounded-lg transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                Audit the code yourself
              </a>
            </div>
          </div>

          {/* Right: fake terminal audit output */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="bg-[#080808] border border-[#1c1c1c] rounded-xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-[#1c1c1c] bg-[#0d0d0d]">
                <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green/40" />
                <span className="ml-auto font-mono text-[10px] text-text-muted/40">
                  audit — clawsentinel
                </span>
              </div>

              {/* Terminal output */}
              <div className="p-5 font-mono text-xs leading-loose min-h-[200px]">
                {auditLines.slice(0, linesShown).map((line, i) => (
                  <div key={i}>
                    {line.type === 'cmd' && (
                      <span className="text-text-muted">{line.text}</span>
                    )}
                    {line.type === 'info' && (
                      <span className="text-text-muted/60">{line.text}</span>
                    )}
                    {line.type === 'blank' && <span>&nbsp;</span>}
                    {line.type === 'success' && (
                      <span className="text-green font-semibold">{line.text}</span>
                    )}
                  </div>
                ))}
                {linesShown > 0 && linesShown < auditLines.length && (
                  <span className="inline-block w-[7px] h-[13px] bg-green/70 rounded-[1px] blink" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LockOpenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
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
