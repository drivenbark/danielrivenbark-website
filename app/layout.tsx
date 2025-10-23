import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daniel Rivenbark | Product Leader & AI Strategist',
  description: 'Product leader with experience spanning startups, Fortune 1 enterprises, and AI implementation. Building digital products that transform how organizations work.',
  keywords: ['Product Management', 'AI', 'Innovation', 'Computer Vision', 'Digital Transformation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
