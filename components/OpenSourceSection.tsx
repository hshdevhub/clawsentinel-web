const GITHUB_URL = 'https://github.com/hshdevhub/clawsentinel'

export default function OpenSourceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          {/* ELv2 badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-text-muted mb-8">
            <LockOpenIcon className="w-3 h-3" />
            Elastic License 2.0
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            Open source. Auditable. Yours.
          </h2>

          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Every rule, every detection, every line of ClawGuard is public.
            Licensed under{' '}
            <span className="text-text">Elastic License 2.0</span> — free to
            use, self-host, and audit. No hidden logic. No black-box rules.
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-10">
            The Pro semantic engine uses your own API keys (BYOK) — we never
            see your traffic or credentials.
          </p>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border hover:border-text-muted text-text text-sm font-medium rounded-lg transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            Audit the code yourself
          </a>
        </div>
      </div>
    </section>
  )
}

function LockOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
