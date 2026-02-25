'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    hex: '0x01',
    title: 'Install',
    cmd: 'npm install -g clawsentinel',
    note: 'One package. All five modules included.',
    prompt: '~',
  },
  {
    num: '02',
    hex: '0x02',
    title: 'Initialize & Start',
    cmd: 'clawsentinel init && clawsentinel start',
    note: 'Auto-detects your OpenClaw config. No edits needed.',
    prompt: '~',
  },
  {
    num: '03',
    hex: '0x03',
    title: 'Protected',
    cmd: null,
    note: 'All five layers active. Dashboard at localhost:7432.',
    prompt: null,
  },
]

const dashboardModules = [
  { name: 'ClawGuard', status: 'ACTIVE',    statusCls: 'text-green' },
  { name: 'ClawVault', status: 'SEALED',    statusCls: 'text-green' },
  { name: 'ClawHub',   status: 'WATCHING',  statusCls: 'text-blue'  },
  { name: 'ClawBox',   status: 'HARDENED',  statusCls: 'text-green' },
]

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className={`text-xs font-mono font-semibold tracking-[0.2em] text-text-muted uppercase mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Getting Started
        </p>

        <h2
          className={`text-2xl sm:text-3xl font-bold text-text mb-3 transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Three commands. Fully protected.
        </h2>

        <p
          className={`text-sm text-text-muted mb-12 max-w-lg leading-relaxed transition-all duration-500 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          ClawSentinel auto-detects your OpenClaw config. No changes to existing setup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex flex-col gap-4"
              style={{
                animation: visible ? `card-in 0.5s ease ${i * 120 + 250}ms forwards` : 'none',
                opacity: visible ? undefined : 0,
              }}
            >
              {/* Step header */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono text-[11px] text-text-muted font-bold flex-shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-text text-sm leading-tight">{step.title}</h3>
                  <span className="font-mono text-[10px] text-text-muted/50">{step.hex}</span>
                </div>
              </div>

              {/* Terminal window */}
              <div className="bg-[#080808] border border-[#1c1c1c] rounded-lg overflow-hidden flex-1 v-scan-parent">
                {/* Title bar */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-[#1c1c1c] bg-[#0d0d0d]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green/40" />
                  <span className="ml-auto font-mono text-[10px] text-text-muted/40">
                    clawsentinel — zsh
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 font-mono text-xs leading-relaxed">
                  {step.cmd ? (
                    <div className="flex gap-2">
                      <span className="text-green/60 flex-shrink-0">{step.prompt} %</span>
                      <span className="text-text">{step.cmd}</span>
                    </div>
                  ) : (
                    /* Dashboard UI — HTML-based to avoid monospace alignment issues */
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1c1c1c]">
                        <span className="text-green font-bold text-[11px] tracking-wide">ClawEye</span>
                        <span className="text-text-muted/50 text-[10px]">localhost:7432</span>
                      </div>
                      {dashboardModules.map((mod) => (
                        <div key={mod.name} className="flex items-center justify-between py-[3px]">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0 pulse-green" />
                            <span className="text-text-muted text-[11px]">{mod.name}</span>
                          </div>
                          <span className={`text-[10px] font-bold tracking-widest ${mod.statusCls}`}>
                            {mod.status}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#1c1c1c]">
                        <span className="text-text-muted/50 text-[10px]">Threats blocked</span>
                        <span className="text-green font-bold text-[11px]">0</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Note */}
              <p className="text-xs text-text-muted leading-relaxed">{step.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
