'use client'

import { useEffect, useState } from 'react'

const GITHUB_URL = 'https://github.com/hshdevhub/clawsentinel'
const CHECKOUT_URL = 'https://api.clawsentinel.dev/api/checkout'

const navLinks = [
  { label: 'Features',     id: 'features'     },
  { label: 'Architecture', id: 'architecture' },
  { label: 'Extension',    id: 'extension'    },
  { label: 'Pricing',      id: 'pricing'      },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="w-7 h-7 rounded bg-red flex items-center justify-center text-xs font-bold text-white font-mono leading-none shadow-[0_0_12px_rgba(255,59,59,0.4)]">
            CS
          </span>
          <span className="font-semibold text-text text-sm tracking-tight font-display">
            ClawSentinel
          </span>
        </a>

        {/* Center nav — desktop only */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-1.5 text-xs text-text-muted hover:text-text transition-colors rounded hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted hover:text-text transition-colors rounded border border-border hover:border-text-muted/50"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => scrollTo('how-it-works')}
            className="px-3 py-1.5 text-xs font-medium bg-blue hover:bg-blue/90 text-white rounded transition-colors shadow-[0_0_14px_rgba(59,130,246,0.35)]"
          >
            Install Free
          </button>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-3 py-1.5 text-xs font-medium border border-border hover:border-text-muted/50 text-text-muted hover:text-text rounded transition-colors"
          >
            Upgrade Pro
          </a>
        </div>
      </nav>
    </header>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
