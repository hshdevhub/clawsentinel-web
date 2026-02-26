import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — ClawSentinel',
  description: 'Terms governing your use of ClawSentinel software and services.',
}

const EFFECTIVE_DATE = 'February 26, 2026'

export default function TermsPage() {
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
            href="/privacy"
            className="text-xs text-text-muted hover:text-text transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-red uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-text mb-4">
            Terms of Service
          </h1>
          <p className="text-text-muted text-sm">
            Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-surface border border-border rounded-lg p-5 mb-12 text-sm text-text-muted">
          By installing ClawSentinel, subscribing to ClawSentinel Pro, or accessing{' '}
          <code className="font-mono text-xs">clawsentinel.dev</code> or{' '}
          <code className="font-mono text-xs">api.clawsentinel.dev</code>, you agree to these terms.
          If you do not agree, do not use the software or services. These terms form a binding agreement
          between you and <strong className="text-text">hshdevhub</strong> ("we", "us").
        </div>

        <div className="space-y-12 text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              1. The Software
            </h2>
            <p className="text-text-muted mb-3">
              ClawSentinel is a five-layer security platform for OpenClaw, consisting of:
            </p>
            <ul className="space-y-1.5 text-text-muted list-disc list-inside ml-2">
              <li><strong className="text-text">ClawBox</strong> — hardened Docker deployment</li>
              <li><strong className="text-text">ClawVault</strong> — encrypted local credential store</li>
              <li><strong className="text-text">ClawGuard</strong> — WebSocket and HTTP proxy firewall</li>
              <li><strong className="text-text">ClawHub Scanner</strong> — pre-install skill scanner</li>
              <li><strong className="text-text">ClawEye</strong> — real-time security dashboard</li>
              <li><strong className="text-text">ClawSentinel Guard</strong> — browser extension companion</li>
            </ul>
            <p className="text-text-muted mt-4">
              The software is licensed under the{' '}
              <strong className="text-text">Elastic License 2.0 (ELv2)</strong>. Source code is
              available at{' '}
              <a
                href="https://github.com/hshdevhub/clawsentinel"
                className="text-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/hshdevhub/clawsentinel
              </a>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              2. Licence
            </h2>
            <p className="text-text-muted mb-4">
              Subject to the Elastic License 2.0 and these terms, we grant you a non-exclusive,
              non-transferable licence to use ClawSentinel for your own purposes. You may:
            </p>
            <ul className="space-y-1.5 text-text-muted list-disc list-inside ml-2 mb-4">
              <li>Install and use ClawSentinel on your own machines</li>
              <li>Inspect, audit, and fork the source code</li>
              <li>Use ClawSentinel to protect OpenClaw agents you operate</li>
            </ul>
            <p className="text-text-muted mb-3">You may <strong className="text-text">not</strong>:</p>
            <ul className="space-y-1.5 text-text-muted list-disc list-inside ml-2">
              <li>Provide ClawSentinel as a managed service or hosted product to third parties</li>
              <li>Remove or alter licence notices or attributions</li>
              <li>Sublicence, sell, or transfer your licence rights</li>
              <li>Use ClawSentinel to build a competing security product for OpenClaw or similar platforms</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              3. Free and Pro Plans
            </h2>

            <h3 className="font-semibold text-text mb-2 mt-5">3.1 Free plan</h3>
            <p className="text-text-muted">
              The Free plan is available to all users at no cost. It includes all five modules,
              the pattern-engine firewall (500+ rules), ClawHub skill scanning, ClawVault credential
              storage, and the real-time event feed. No account or registration is required to use
              the Free plan.
            </p>

            <h3 className="font-semibold text-text mb-2 mt-5">3.2 Pro plan</h3>
            <p className="text-text-muted mb-3">
              The Pro plan is available by subscription at{' '}
              <strong className="text-text">$9 USD per month</strong>, including a{' '}
              <strong className="text-text">7-day free trial</strong>. Pro adds:
            </p>
            <ul className="space-y-1.5 text-text-muted list-disc list-inside ml-2">
              <li>Semantic LLM-assisted injection detection engine</li>
              <li>ClawEye correlation engine (7 multi-layer attack rules)</li>
              <li>Silent background licence renewal</li>
            </ul>

            <h3 className="font-semibold text-text mb-2 mt-5">3.3 Trial period</h3>
            <p className="text-text-muted">
              The 7-day free trial begins when your Stripe Checkout session completes. No charge
              is made during the trial. If you cancel before the trial ends, no payment is taken.
            </p>

            <h3 className="font-semibold text-text mb-2 mt-5">3.4 Billing and cancellation</h3>
            <p className="text-text-muted">
              After the trial, Stripe charges $9/month on a recurring basis. You may cancel at any
              time via the{' '}
              <a
                href="https://billing.stripe.com"
                className="text-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stripe Billing Portal
              </a>
              . Cancellation takes effect at the end of the current billing period.
              Pro features downgrade to Free automatically within 24 hours of cancellation.
              We do not offer partial-month refunds.
            </p>

            <h3 className="font-semibold text-text mb-2 mt-5">3.5 Licence enforcement</h3>
            <p className="text-text-muted">
              Each Pro licence covers <strong className="text-text">one machine</strong>. A machine
              fingerprint is recorded at activation. Activating on a new machine migrates the licence
              from the previous one. Sharing activation tokens across machines simultaneously is a
              violation of these terms and may result in immediate licence revocation without refund.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              4. Acceptable Use
            </h2>
            <p className="text-text-muted mb-3">You agree not to use ClawSentinel to:</p>
            <ul className="space-y-1.5 text-text-muted list-disc list-inside ml-2">
              <li>Circumvent, disable, or tamper with any security feature of ClawSentinel or any third-party system</li>
              <li>Conduct unauthorised security testing on systems you do not own or have permission to test</li>
              <li>Violate any applicable law or regulation</li>
              <li>Harass, harm, or infringe the rights of any individual or organisation</li>
              <li>Attempt to reverse-engineer the billing or licence enforcement mechanisms for the purpose of bypassing them</li>
            </ul>
            <p className="text-text-muted mt-4">
              We reserve the right to revoke your licence immediately if you breach this section,
              without refund and without prior notice.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              5. No Warranty
            </h2>
            <div className="bg-surface border border-border rounded-lg p-4 text-text-muted">
              <p>
                CLAWSENTINEL IS PROVIDED <strong className="text-text">"AS IS"</strong> AND{' '}
                <strong className="text-text">"AS AVAILABLE"</strong> WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM
                ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-3">
                WE DO NOT WARRANT THAT CLAWSENTINEL WILL DETECT OR BLOCK ALL THREATS, THAT THE
                SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE CORRECTED.
                SECURITY TOOLS REDUCE RISK — THEY DO NOT ELIMINATE IT.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              6. Limitation of Liability
            </h2>
            <div className="bg-surface border border-border rounded-lg p-4 text-text-muted">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HSHDEVHUB BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE
                LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE
                CLAWSENTINEL.
              </p>
              <p className="mt-3">
                IN ANY CASE, OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER
                THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE
                12 MONTHS PRIOR TO THE CLAIM OR (B) $50 USD.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              7. Third-Party Services
            </h2>
            <p className="text-text-muted">
              ClawSentinel integrates with Stripe (payments), Upstash (billing database),
              Resend (email), and Vercel (API hosting). Your use of these services is subject
              to their respective terms of service. We are not responsible for the availability,
              accuracy, or conduct of these third-party services.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              8. Modifications to the Service
            </h2>
            <p className="text-text-muted">
              We reserve the right to modify, suspend, or discontinue any part of ClawSentinel at
              any time. If we discontinue the Pro service, we will provide at least 30 days' notice
              by email and issue pro-rata refunds for unused subscription periods.
            </p>
            <p className="text-text-muted mt-3">
              We may update these terms from time to time. Material changes will be communicated
              by email to active subscribers at least 14 days in advance. Continued use of
              ClawSentinel after the effective date constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              9. Termination
            </h2>
            <p className="text-text-muted">
              Either party may terminate this agreement at any time. You may terminate by cancelling
              your subscription and uninstalling the software. We may terminate your Pro access
              immediately for breach of these terms. Upon termination, your Pro licence expires,
              and the software reverts to Free tier operation.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              10. Governing Law
            </h2>
            <p className="text-text-muted">
              These terms are governed by applicable law. Any disputes arising under these terms
              shall first be attempted to be resolved through good-faith negotiation. If that fails,
              disputes shall be resolved through binding arbitration or the courts of competent
              jurisdiction, as required by applicable law in your location.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-display font-semibold text-text mb-4 pb-2 border-b border-border">
              11. Contact
            </h2>
            <p className="text-text-muted">
              Questions about these terms, billing disputes, or licence issues:
            </p>
            <div className="mt-4 bg-surface rounded-lg p-4 font-mono text-sm text-text-muted space-y-1">
              <p><span className="text-text-muted">Email:</span>{' '}
                <a href="mailto:security@clawsentinel.dev" className="text-blue hover:underline">
                  security@clawsentinel.dev
                </a>
              </p>
              <p><span className="text-text-muted">Response time:</span> within 5 business days</p>
            </div>
          </section>

        </div>

        {/* Bottom links */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link href="/privacy" className="text-sm text-blue hover:underline">
            Privacy Policy →
          </Link>
          <Link href="/" className="text-sm text-text-muted hover:text-text transition-colors">
            ← Back to clawsentinel.dev
          </Link>
        </div>
      </main>
    </div>
  )
}
