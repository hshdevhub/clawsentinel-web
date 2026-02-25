import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans bg-background text-text antialiased">
        {children}
      </body>
    </html>
  )
}
