import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "RealAgent - CRM Immobilier",
  description: "CRM pour agents immobiliers français",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
