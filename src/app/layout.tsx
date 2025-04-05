import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/app/Components/AuthProvider'
import BlockChainProvider from '@/app/Components/BlockChainProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aavartak',
  description: 'Navigating E-Waste Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BlockChainProvider>
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AuthProvider>
    </BlockChainProvider>
  )
}
