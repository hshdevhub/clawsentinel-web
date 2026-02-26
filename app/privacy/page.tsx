import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — ClawSentinel',
  description: 'How ClawSentinel collects, uses, and protects your data.',
}

const EFFECTIVE_DATE = 'February 26, 2026'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Top nav */}
      <header className="border-b border-border px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded bg-red flex items-center justify-center text-xs font-bold text-white font-mono">
              CS
            </span>
            <span className="font-semibold text-sm group-hover:text-text-muted transition-colors">
              ClawSentinel
            </span>
          </Link>
          <Link
            href="/terms"
            className="text-xs text-text-muted hover:text-text transition-colors"
          >
            Terms of Service →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-red uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm">
            Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}
          </p>
        </div>

        {/* TL;DR box */}
        <div className="bg-surface border border-green/20 rounded-lg p-5 mb-12">
          <p className="text-xs font-mono text-green uppercase tracking-widest mb-3">
            TL;DR — The short version
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex gap-2"><span className="text-green mt-0.5">✓</span><span>Your LLM traffic, prompts, and responses <strong className="text-text">never leave your machine</strong>. ClawGuard inspects everything locally.</span></li>
            <li className="flex gap-2"><span className="text-green mt-0.5">✓</span><span>Your API keys are stored <strong className="text-text">encrypted on your device</strong>. We never see them.</span></li>
            <li className="flex gap-2"><span className="text-green mt-0.5">✓</span><span>We collect only what billing requires: your <strong className="text-text">email address</strong> and a <strong className="text-text">machine fingerprint</strong> for licence enforcement.</span></li>
            <li className="flex gap-2"><span className="text-green mt-0.5">✓</span><span><strong className="text-text">No telemetry. No analytics. No beacons.</strong> We have no visibility into how or where you use ClawSentinel.</span></li>
            <li className="flex gap-2"><span className="text-green mt-0.5">✓</span><span>Payments are handled entirely by <strong className="text-text">Stripe</strong>. We never store card details.</span></li>
          </ul>
        </div>

        <div className="space-y-12 text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              1. Who We Are
            </h2>
            <p className="text-text-muted">
              ClawSentinel is developed and operated by <strong className="text-text">hshdevhub</strong>
              {' '}(<a href="mailto:security@clawsentinel.dev" className="text-blue hover:underline">security@clawsentinel.dev</a>).
              References to "we", "us", or "our" in this policy refer to hshdevhub.
            </p>
            <p className="text-text-muted mt-3">
              This policy applies to the ClawSentinel software package, the billing API at{' '}
              <code className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">api.clawsentinel.dev</code>,
              the marketing website at{' '}
              <code className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">clawsentinel.dev</code>,
              and the ClawSentinel Guard browser extension.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              2. What Data We Collect and Why
            </h2>

            <h3 className="font-semibold text-text mb-2 mt-6">2.1 Billing data (Pro subscribers only)</h3>
            <p className="text-text-muted mb-3">
              When you subscribe to ClawSentinel Pro, Stripe collects your payment details and provides us with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-text-muted ml-2">
              <li><strong className="text-text">Email address</strong> — used to send your activation key and billing receipts.</li>
              <li><strong className="text-text">Stripe customer ID</strong> — used to manage your subscription.</li>
              <li><strong className="text-text">Subscription status</strong> (active / cancelled) — used to enforce your plan.</li>
            </ul>
            <p className="text-text-muted mt-3">
              We <strong className="text-text">never receive or store</strong> your card number, CVV, or bank details.
              These are handled exclusively by Stripe (PCI DSS Level 1 certified).
            </p>

            <h3 className="font-semibold text-text mb-2 mt-6">2.2 Machine fingerprint (Pro subscribers only)</h3>
            <p className="text-text-muted">
              To enforce the one-machine-per-licence policy, we store a machine fingerprint derived from a one-way
              SHA-256 hash of your device's hostname, operating system, username, and CPU model. This hash is a
              32-character hex string. It <strong className="text-text">cannot be reversed</strong> to identify your
              machine or your identity. It is used solely to prevent a single licence being shared across multiple machines.
            </p>

            <h3 className="font-semibold text-text mb-2 mt-6">2.3 Activation token</h3>
            <p className="text-text-muted">
              A cryptographically random 64-character activation token is generated when you subscribe and
              stored server-side. This is sent to your email and used to activate your licence. It is not
              linked to any personal information beyond your email and subscription status.
            </p>

            <h3 className="font-semibold text-text mb-2 mt-6">2.4 Website analytics</h3>
            <p className="text-text-muted">
              We do <strong className="text-text">not</strong> currently run any analytics or tracking scripts on
              clawsentinel.dev. No cookies are set. No third-party trackers are loaded.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              3. What We Do Not Collect
            </h2>
            <p className="text-text-muted mb-4">
              The following data <strong className="text-text">never leaves your machine</strong> and is
              never transmitted to ClawSentinel servers under any circumstances:
            </p>
            <div className="bg-surface rounded-lg p-4 space-y-2">
              {[
                'Your LLM prompts, responses, or conversation history',
                'WebSocket or HTTP traffic passing through ClawGuard',
                'API keys stored in ClawVault (stored encrypted locally only)',
                'Security events logged by ClawEye (stored in local SQLite database)',
                'Pattern engine scan results',
                'Semantic engine analysis results',
                'OpenClaw skill source code scanned by ClawHub',
                'File system paths or file contents',
                'IP addresses beyond what Vercel\'s infrastructure logs (standard web server logs)',
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm text-text-muted">
                  <span className="text-red mt-0.5 shrink-0">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted mt-4">
              The semantic engine (Pro feature) sends content to the LLM provider
              <strong className="text-text"> you configure</strong> (Anthropic, OpenAI, or a local Ollama instance).
              This is a direct connection from your machine to your LLM provider.
              ClawSentinel does not relay, intercept, or log these requests.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              4. Third-Party Services
            </h2>
            <p className="text-text-muted mb-4">
              We use the following sub-processors. Each handles data only as necessary to provide their service:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-text">Service</th>
                    <th className="text-left py-2 pr-4 font-semibold text-text">Purpose</th>
                    <th className="text-left py-2 font-semibold text-text">Data shared</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  {[
                    ['Stripe', 'Payment processing', 'Email, payment details'],
                    ['Upstash Redis', 'Billing database', 'Email, machine fingerprint, subscription status, activation token'],
                    ['Resend', 'Transactional email', 'Email, activation token (in email body)'],
                    ['Vercel', 'API hosting', 'Standard server logs (IP, timestamp, endpoint)'],
                  ].map(([service, purpose, data]) => (
                    <tr key={service} className="border-b border-border/50">
                      <td className="py-2.5 pr-4 font-mono text-xs text-text">{service}</td>
                      <td className="py-2.5 pr-4">{purpose}</td>
                      <td className="py-2.5">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-muted mt-4">
              All third-party services are contractually bound to process data only for the stated purpose and
              are prohibited from using it for their own commercial purposes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              5. Data Retention
            </h2>
            <ul className="space-y-3 text-text-muted">
              <li className="flex gap-3">
                <span className="text-text font-mono text-xs bg-surface px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">Active sub</span>
                <span>Email, machine fingerprint, and subscription status are retained for the duration of your subscription.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-text font-mono text-xs bg-surface px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">Cancelled</span>
                <span>After cancellation, your subscription record is marked inactive. We retain it for 90 days to handle disputes or reactivation, then delete it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-text font-mono text-xs bg-surface px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">Deletion</span>
                <span>To request immediate deletion of all server-side data, email <a href="mailto:security@clawsentinel.dev" className="text-blue hover:underline">security@clawsentinel.dev</a>. We will action it within 30 days.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-text font-mono text-xs bg-surface px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">Local data</span>
                <span>All local data (SQLite database, ClawVault, plan.json) is under your complete control. Run <code className="font-mono text-xs">clawsentinel uninstall</code> to remove everything.</span>
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              6. Your Rights
            </h2>
            <p className="text-text-muted mb-4">
              Regardless of your location, you have the right to:
            </p>
            <ul className="space-y-2 text-text-muted list-disc list-inside ml-2">
              <li><strong className="text-text">Access</strong> — request a copy of the personal data we hold about you.</li>
              <li><strong className="text-text">Rectification</strong> — request correction of inaccurate data.</li>
              <li><strong className="text-text">Erasure</strong> — request deletion of your data (subject to legal retention requirements).</li>
              <li><strong className="text-text">Portability</strong> — receive your data in a machine-readable format.</li>
              <li><strong className="text-text">Objection</strong> — object to processing of your data.</li>
              <li><strong className="text-text">Opt out of sale</strong> — we do not sell your data. Ever.</li>
            </ul>
            <p className="text-text-muted mt-4">
              To exercise any of these rights, email{' '}
              <a href="mailto:security@clawsentinel.dev" className="text-blue hover:underline">
                security@clawsentinel.dev
              </a>{' '}
              with the subject line "Data Request". We respond within 30 days.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              7. Security
            </h2>
            <ul className="space-y-2 text-text-muted list-disc list-inside ml-2">
              <li>All API endpoints are served over HTTPS only.</li>
              <li>Server-side data is stored in Upstash Redis with encryption at rest.</li>
              <li>Activation tokens are cryptographically random (256 bits of entropy).</li>
              <li>Access tokens are short-lived JWTs (24-hour expiry, HS256).</li>
              <li>ClawSentinel's source code is open for public audit at{' '}
                <a href="https://github.com/hshdevhub/clawsentinel" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                  github.com/hshdevhub/clawsentinel
                </a>.
              </li>
            </ul>
            <p className="text-text-muted mt-4">
              To report a security vulnerability, follow the responsible disclosure process in{' '}
              <a
                href="https://github.com/hshdevhub/clawsentinel/blob/main/SECURITY.md"
                className="text-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                SECURITY.md
              </a>.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              8. Children's Privacy
            </h2>
            <p className="text-text-muted">
              ClawSentinel is a developer tool intended for users aged 18 and above. We do not knowingly
              collect personal data from anyone under 18. If you believe we have inadvertently done so,
              contact us immediately and we will delete the data.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              9. Changes to This Policy
            </h2>
            <p className="text-text-muted">
              If we make material changes to this policy — particularly changes that affect what data we
              collect or how we use it — we will notify active subscribers by email at least 14 days
              before the changes take effect. The effective date at the top of this page is always
              the date of the most recent revision.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              10. Contact
            </h2>
            <p className="text-text-muted">
              For any privacy-related questions, data requests, or concerns:
            </p>
            <div className="mt-4 bg-surface rounded-lg p-4 font-mono text-sm text-text-muted space-y-1">
              <p><span className="text-text-muted">Email:</span> <a href="mailto:security@clawsentinel.dev" className="text-blue hover:underline">security@clawsentinel.dev</a></p>
              <p><span className="text-text-muted">Response time:</span> within 5 business days</p>
            </div>
          </section>

        </div>

        {/* Bottom links */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link href="/terms" className="text-sm text-blue hover:underline">
            Terms of Service →
          </Link>
          <Link href="/" className="text-sm text-text-muted hover:text-text transition-colors">
            ← Back to clawsentinel.dev
          </Link>
        </div>
      </main>
    </div>
  )
}
