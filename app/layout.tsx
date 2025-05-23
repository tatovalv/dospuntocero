import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: '2.0',
  description: '2.0',
  generator: '2.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
