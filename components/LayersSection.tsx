const layers = [
  {
    num: '01',
    name: 'ClawBox',
    role: 'Hardened Docker deployment',
    path: 'Docker Compose',
  },
  {
    num: '02',
    name: 'ClawVault',
    role: 'AES-256-GCM credential vault',
    path: '~/.clawsentinel/vault/',
  },
  {
    num: '03',
    name: 'ClawGuard',
    role: 'WS + HTTP proxy firewall',
    path: ':18790 → :18789',
  },
  {
    num: '04',
    name: 'ClawHub',
    role: 'Supply chain scanner',
    path: 'hooks openclaw skill install',
  },
  {
    num: '05',
    name: 'ClawEye',
    role: 'Real-time dashboard',
    path: 'localhost:7432',
  },
]

export default function LayersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono font-semibold tracking-widest text-blue uppercase mb-4">
          Five Layers
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 max-w-xl">
          Defense in depth.{' '}
          <span className="text-text-muted font-normal">
            Every layer independent.
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {layers.map((layer) => (
            <div
              key={layer.num}
              className="bg-blue-dim border border-blue/20 rounded-xl p-5 hover:border-blue/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-blue/50 font-bold">
                  {layer.num}
                </span>
                <h3 className="font-semibold text-text text-sm">{layer.name}</h3>
              </div>
              <p className="text-sm text-text-muted mb-3 leading-relaxed">
                {layer.role}
              </p>
              <code className="font-mono text-xs text-blue/70 bg-blue/5 border border-blue/10 rounded px-2 py-1 block truncate">
                {layer.path}
              </code>
            </div>
          ))}

          {/* Passthrough note — spans remaining space */}
          <div className="sm:col-span-2 lg:col-span-1 bg-surface border border-border rounded-xl p-5 flex items-center">
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-text font-medium">Passthrough-first:</span>{' '}
              if ClawSentinel fails, OpenClaw is never interrupted.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
