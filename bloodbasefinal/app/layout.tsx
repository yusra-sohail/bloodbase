

import './globals.css'
import { Navigation } from '/workspaces/bloodbase/bloodbasefinal/components/Navigation'

export const metadata = {
  title: 'Blood-Base',
  description: 'Save lives with Blood-Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

