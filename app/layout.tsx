import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Ativo',
  description: 'Simplify your workflow with Ativo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
