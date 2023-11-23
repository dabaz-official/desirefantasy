import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.desirefantasy.com'),
  title: {
    default: 'DesireFantasy',
    template: '%s - DesireFantasy'
  },
  description: "DesireFantasy - Ignite Your Fantasy. Specializing in high-quality erotic lingerie, we are committed to bringing elegance, sexiness, and confidence to adults across North America and Europe. At DesireFantasy, we believe that everyone deserves to enjoy their own bodies and emotions, and our carefully designed product line is aimed at enhancing your intimate moments. Whether you're looking to add excitement to everyday life or explore more of your personal allure, DesireFantasy is your go-to destination.",

  icons: {
    icon: [{ url: '/icons/icon.png' }, new URL('/icons/icon.png', 'https://www.desirefantasy.com')],
    shortcut: ['/icons/icon.png'],
    apple: ['/icons/apple-icon.png'],
  },

  openGraph: {
    title: 'DesireFantasy',
    description: "DesireFantasy - Ignite Your Fantasy. Specializing in high-quality erotic lingerie, we are committed to bringing elegance, sexiness, and confidence to adults across North America and Europe. At DesireFantasy, we believe that everyone deserves to enjoy their own bodies and emotions, and our carefully designed product line is aimed at enhancing your intimate moments. Whether you're looking to add excitement to everyday life or explore more of your personal allure, DesireFantasy is your go-to destination.",
    url: 'https://www.desirefantasy.com',
    siteName: 'DesireFantasy',
    images: [
      {
        url: 'https://www.desirefantasy.com/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: "Woman lying on bed wearing patterned lace stockings.",
      },
    ],
    locale: 'en_US',
    type: 'website',
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

  manifest: 'https://www.desirefantasy.com/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'DesireFantasy',
    description: "DesireFantasy - Ignite Your Fantasy. Specializing in high-quality erotic lingerie, we are committed to bringing elegance, sexiness, and confidence to adults across North America and Europe. At DesireFantasy, we believe that everyone deserves to enjoy their own bodies and emotions, and our carefully designed product line is aimed at enhancing your intimate moments. Whether you're looking to add excitement to everyday life or explore more of your personal allure, DesireFantasy is your go-to destination.",
    creator: '@dabaz_official',
    images: {
      url: 'https://www.desirefantasy.com/twitter-image.jpg',
      alt: "Woman lying on bed wearing patterned lace stockings.",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}