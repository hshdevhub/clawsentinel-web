const GITHUB_URL = 'https://github.com/hshdevhub/clawsentinel'
const SECURITY_URL = 'https://github.com/hshdevhub/clawsentinel/blob/main/SECURITY.md'
const BILLING_URL = 'https://clawsentinel-api.vercel.app/api/checkout'
const DOCS_URL = 'https://github.com/hshdevhub/clawsentinel#readme'

const links = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'SECURITY.md', href: SECURITY_URL },
  { label: 'Billing Portal', href: BILLING_URL },
  { label: 'Operator Guide', href: DOCS_URL },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          {/* Wordmark */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded bg-red flex items-center justify-center text-xs font-bold text-white font-mono leading-none">
              CS
            </span>
            <div>
              <p className="font-semibold text-text text-sm leading-tight">ClawSentinel</p>
              <p className="text-xs text-text-muted leading-tight">
                The active security layer for OpenClaw
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-text-muted">
            © 2026 hshdevhub · Elastic License 2.0
          </p>
          <p className="text-xs text-text-muted">
            Not affiliated with OpenClaw or Anthropic.
          </p>
        </div>
      </div>
    </footer>
  )
}
