import { ReactNode } from 'react'
import './globals.css'
import AppProvider from './provider'
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Learn To Clone - LeetCode',
  description: 'This is the clone application to learn Next.js and TypeScript',
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
        <Toaster />
      </body>
    </html>
  )
}
