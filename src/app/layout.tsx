import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://casenotepro.com'),
  title: {
    default: 'Casenotepro - AI-Powered Case Notes for Social Workers',
    template: '%s | Casenotepro'
  },
  description: 'Transform your case note documentation with AI. Dictate naturally, get professionally structured case notes. Built for social workers, counselors, and human services professionals in Australia, New Zealand, and globally.',
  keywords: [
    'social work case notes',
    'case management software',
    'social worker app',
    'case documentation app',
    'AI case notes',
    'speech to text case notes',
    'counselor documentation',
    'human services app',
    'professional case notes',
    'HIPAA compliant case notes',
    'social work technology',
    'case note templates',
    'voice recording case notes',
    'social worker documentation',
    'case management app',
    'Australia social work',
    'New Zealand social work',
    'USA social work',
    'privacy compliant documentation',
    'professional ethics compliance'
  ].join(', '),
  authors: [{ name: 'Casenotepro Team' }],
  creator: 'Casenotepro',
  publisher: 'Casenotepro',
  applicationName: 'Casenotepro',
  category: 'Productivity',
  openGraph: {
    title: 'Casenotepro - AI-Powered Case Notes for Social Workers',
    description: 'Transform your case note documentation with AI-powered speech recognition. Designed for social workers, counselors, and human services professionals worldwide.',
    url: 'https://casenotepro.com',
    siteName: 'Casenotepro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Casenotepro - Professional Case Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casenotepro - AI-Powered Case Notes for Social Workers',
    description: 'Transform your case note documentation with AI-powered speech recognition. Privacy-first, professionally compliant.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here', // You'll need to add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
