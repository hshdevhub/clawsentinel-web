const CHECKOUT_URL = 'https://clawsentinel-api.vercel.app/api/checkout'

const freeFeatures = [
  '500 pattern detection rules',
  'WebSocket + HTTP proxy (ClawGuard)',
  'Supply chain scanner (ClawHub)',
  'Encrypted credential vault (ClawVault)',
  'Hardened Docker deploy (ClawBox)',
  'Real-time event feed (ClawEye)',
  'Community support',
]

const proFeatures = [
  'Everything in Free',
  'Semantic LLM engine (BYOK)',
  'Correlation engine — 7 rules',
  'Background token renewal (23h)',
  'Priority support',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono font-semibold tracking-widest text-text-muted uppercase mb-4">
          Pricing
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
          Start free. Upgrade when you need more intelligence.
        </h2>
        <p className="text-sm text-text-muted mb-12 max-w-lg">
          All five security modules are free forever. Pro unlocks the semantic
          LLM engine and correlation engine for deeper threat analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Free */}
          <div className="bg-surface border border-border rounded-xl p-6 flex flex-col">
            <div className="mb-6">
              <h3 className="font-semibold text-text text-lg mb-1">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-text font-mono">$0</span>
                <span className="text-text-muted text-sm">/ forever</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <CheckIcon className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#how-it-works"
              className="w-full py-2.5 text-center text-sm font-medium border border-border hover:border-text-muted text-text-muted hover:text-text rounded-lg transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro */}
          <div className="bg-blue-dim border border-blue/30 rounded-xl p-6 flex flex-col relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <span className="text-xs font-mono bg-blue/20 text-blue border border-blue/30 rounded px-2 py-0.5">
                7-day free trial
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-text text-lg mb-1">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-text font-mono">$9</span>
                <span className="text-text-muted text-sm">/ month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {proFeatures.map((f, i) => (
                <li
                  key={f}
                  className={`flex items-start gap-2.5 text-sm ${
                    i === 0 ? 'text-text-muted' : 'text-text'
                  }`}
                >
                  <CheckIcon
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      i === 0 ? 'text-text-muted' : 'text-blue'
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-medium bg-blue hover:bg-blue/90 text-white rounded-lg transition-colors"
            >
              Start 7-day free trial →
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-text-muted">
          No credit card required for the free plan. Cancel Pro anytime —
          enforced within 24 hours automatically.
        </p>
      </div>
    </section>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
