import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karussell-Generator — Der Ü40 Muskel Code',
  description: 'Instagram-Karussells in deinem Branding — in 90 Sekunden generiert.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <nav className="px-4 sm:px-8 h-14 border-b border-border flex items-center gap-3 shrink-0">
          <span className="flex items-center gap-2 font-black uppercase tracking-wide text-sm sm:text-base">
            <span className="bg-primary text-white rounded-md px-1.5 py-0.5 text-xs">40+</span>
            <span>
              Der Ü40 <span className="text-primary">Muskel Code</span>
            </span>
          </span>
          <span className="text-sm text-muted hidden sm:inline">/ karussell-generator</span>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border px-4 sm:px-8 py-4 text-xs text-muted text-center shrink-0">
          © Der Ü40 Muskel Code · Karussell-Generator
        </footer>
      </body>
    </html>
  )
}
