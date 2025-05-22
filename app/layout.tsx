import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

export const metadata = {
  title: 'Ultimate Dynasties',
  description: 'Visualization of Ultimate Frisbee College Championships',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${lato.variable} font-lato`}>{children}</body>
    </html>
  )
} 