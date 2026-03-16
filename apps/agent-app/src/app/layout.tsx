import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Sidebar } from "../components/Sidebar"
import { createClient } from "@/lib/supabase/server"

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "RealAgent - CRM Immo",
  description: "Dashboard Agent Immobilier",
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isAuthenticated = !!user

  return (
    <html lang="fr">
      <body className={`${roboto.variable} antialiased bg-background-subtle`}>
        {isAuthenticated && <Sidebar />}
        <main className={isAuthenticated ? "pl-64 min-h-screen" : "min-h-screen"}>
          {children}
        </main>
      </body>
    </html>
  )
}
