import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
