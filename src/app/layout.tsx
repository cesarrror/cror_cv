import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'César Ortiz — Software Engineer',
  description:
      'Fullstack Software Engineer especializado en frontend, arquitectura de software y bases de datos SQL/NoSQL.',
  keywords: [
    'Software Engineer', 'Frontend Developer', 'Fullstack',
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Laravel',
  ],
  authors: [{ name: 'César Ortiz' }],
  openGraph: {
    title: 'César Ortiz — Software Engineer',
    description: 'Portafolio de César Ortiz, Software Engineer.',
    type: 'website',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="es" suppressHydrationWarning>
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
  )
}