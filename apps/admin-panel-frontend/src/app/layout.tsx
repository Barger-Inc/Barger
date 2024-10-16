import Providers from "@/shared/utils/providers"
import { Theme } from "@radix-ui/themes"
import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Barger",
}

export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme>
          <Providers>{children}</Providers>
          {modal}
        </Theme>
      </body>
    </html>
  )
}
