import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import { ThemeProvider } from '@/hooks/use-theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AirtonSena - Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Menu />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
