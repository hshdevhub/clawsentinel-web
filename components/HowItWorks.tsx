const steps = [
  {
    num: 1,
    title: 'Install',
    cmd: 'npm install -g clawsentinel',
    note: 'One package. All five modules included.',
  },
  {
    num: 2,
    title: 'Initialize & Start',
    cmd: 'clawsentinel init && clawsentinel start',
    note: 'Auto-detects your OpenClaw config. No edits needed.',
  },
  {
    num: 3,
    title: 'Protected',
    cmd: null,
    ascii: [
      '  ╔═══════════════════════════╗',
      '  ║   ClawEye  localhost:7432 ║',
      '  ╠═══════════════════════════╣',
      '  ║  ● ClawGuard   ACTIVE     ║',
      '  ║  ● ClawVault   SEALED     ║',
      '  ║  ● ClawHub     WATCHING   ║',
      '  ║  ● ClawBox     HARDENED   ║',
      '  ║                           ║',
      '  ║  Threats blocked:  0      ║',
      '  ╚═══════════════════════════╝',
    ],
    note: 'All five layers active. Dashboard at localhost:7432.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono font-semibold tracking-widest text-text-muted uppercase mb-4">
          Getting Started
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
          Three commands. Fully protected.
        </h2>
        <p className="text-sm text-text-muted mb-12 max-w-lg">
          That&apos;s it. ClawSentinel auto-detects your OpenClaw config.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col gap-4">
              {/* Step header */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-xs font-mono text-text-muted font-semibold flex-shrink-0">
                  {step.num}
                </span>
                <h3 className="font-semibold text-text text-sm">{step.title}</h3>
              </div>

              {/* Terminal block */}
              <div className="bg-surface border border-border rounded-lg overflow-hidden flex-1">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-red/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-muted/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-muted/20" />
                </div>
                <div className="p-4">
                  {step.cmd ? (
                    <code className="font-mono text-xs text-text block leading-relaxed">
                      <span className="text-text-muted mr-2">$</span>
                      {step.cmd}
                    </code>
                  ) : (
                    <pre className="font-mono text-xs text-green leading-relaxed overflow-x-auto">
                      {step.ascii!.join('\n')}
                    </pre>
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
