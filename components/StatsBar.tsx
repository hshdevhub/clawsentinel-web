const stats = [
  { value: '500+', label: 'Detection Rules', note: 'across all threat classes' },
  { value: 'AES-256-GCM', label: 'Vault Cipher', note: 'military-grade encryption' },
  { value: '<1ms', label: 'Proxy Overhead', note: 'zero performance impact' },
  { value: '5', label: 'Security Layers', note: 'independent operation' },
  { value: '0', label: 'Cloud Dependencies', note: 'fully local, offline-capable' },
]

export default function StatsBar() {
  return (
    <div className="border-y border-border bg-surface/30 overflow-x-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-stretch min-w-max sm:min-w-0 divide-x divide-border">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center justify-center gap-0.5 px-5 sm:px-8 py-4 text-center flex-1 group"
            >
              <span className="font-mono font-bold text-text text-sm group-hover:text-blue transition-colors">
                {s.value}
              </span>
              <span className="text-[11px] text-text font-medium">{s.label}</span>
              <span className="text-[10px] text-text-muted hidden sm:block">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
