const threats = [
  {
    id: 'T1',
    name: 'Prompt Injection',
    description:
      'Malicious instructions hidden in web content hijack your agent — redirecting tool calls, leaking memory, and overriding user intent.',
  },
  {
    id: 'T2',
    name: 'Supply Chain Attack',
    description:
      'A skill with a backdoor runs with full agent permissions. ClawHub scans every package before install.',
  },
  {
    id: 'T3/T6',
    name: 'Data Exfiltration',
    description:
      'Agent memory silently written to attacker-controlled URLs. ClawGuard intercepts outbound requests and blocks unauthorized exfil.',
  },
  {
    id: 'T7',
    name: 'Credential Theft',
    description:
      'API keys extracted from responses and sent outbound. ClawVault isolates secrets from agent reach.',
  },
]

export default function ThreatSection() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono font-semibold tracking-widest text-red uppercase mb-4">
          The Threat Landscape
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 max-w-xl">
          OpenClaw agents are a new attack surface
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className="bg-red-dim border border-red/20 rounded-xl p-5 group hover:border-red/40 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 font-mono text-xs text-red/60 bg-red/10 border border-red/20 rounded px-1.5 py-0.5">
                  {threat.id}
                </span>
                <h3 className="font-semibold text-text text-sm leading-tight pt-0.5">
                  {threat.name}
                </h3>
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
