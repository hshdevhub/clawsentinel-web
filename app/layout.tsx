import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ClawSentinel — Five Layers. One Install. Zero Trust.',
  description:
    'The complete security platform for OpenClaw. Blocks prompt injection, supply chain attacks, and credential theft — before they reach your agent.',
  keywords: [
    'OpenClaw security',
    'prompt injection protection',
    'AI agent security',
    'supply chain protection',
    'ClawSentinel',
  ],
  authors: [{ name: 'hshdevhub' }],
  openGraph: {
    title: 'ClawSentinel — Five Layers. One Install. Zero Trust.',
    description:
      'The complete security platform for OpenClaw. Blocks prompt injection, supply chain attacks, and credential theft.',
    url: 'https://clawsentinel.sh',
    siteName: 'ClawSentinel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawSentinel — Five Layers. One Install. Zero Trust.',
    description:
      'The complete security platform for OpenClaw. Blocks prompt injection, supply chain attacks, and credential theft.',
  },
  metadataBase: new URL('https://clawsentinel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans bg-background text-text antialiased">
        {children}
      </body>
    </html>
  )
}
