import './globals.css'
import AppProvider from './provider'

export const metadata = {
  title: 'Learn To Clone - LeetCode',
  description: 'This is the clone application to learn Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
