import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Site from '@/components/Site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vaughn Robison — Producer, Director, Creative Strategist',
  description:
    'Portfolio of Vaughn Robison — Producer, Director, and Creative Strategist behind In Whose Name, Pepsi x Just Don, Chance the Rapper Acid Rap Tour, Abel Paul George, and New Bible Belt.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=brown-20261017', sizes: 'any' },
      { url: '/favicon.svg?v=brown-20261017', type: 'image/svg+xml' },
      { url: '/icon-brown.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon-brown.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  authors: [{ name: 'Vaughn Robison', url: 'https://vaughn-robison.com' }],
  creator: 'Vaughn Robison',
  verification: {
    google: 'lJKvgxb6wMjcqptOk5LKqH4A6FNCmvS2xR-PacC4Npk',
    other: { 'msvalidate.01': '1FAB2C0864A4FAE16F387C74CF29086A' },
  },
  metadataBase: new URL('https://vaughn-robison.com'),
  openGraph: {
    title: 'Vaughn Robison',
    description: 'Producer · Director · Creative Strategist',
    type: 'website',
    siteName: 'Vaughn Robison',
    locale: 'en_US',
    url: 'https://vaughn-robison.com',
    images: [
      {
        url: '/og-image-brown.png',
        width: 2400,
        height: 1260,
        alt: 'Vaughn Robison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaughn Robison',
    description: 'Producer · Director · Creative Strategist',
    images: ['/og-image-brown.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}<Site /></body>
    </html>
  )
}
