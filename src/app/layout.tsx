import type React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

export const metadata = {
  title: "Thiago Silva | Desenvolvedor Full Stack",
  description:
    "Portfólio de Thiago Silva, Desenvolvedor Full Stack especializado em React, Next.js, Node.js e Tailwind CSS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-black text-white">
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
