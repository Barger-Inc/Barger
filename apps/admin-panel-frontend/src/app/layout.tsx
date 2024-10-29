import Providers from "@/shared/utils/providers"
import { Theme } from "@radix-ui/themes"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import localFont from "next/font/local"
import type { ReactNode } from "react"

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

export default async function Layout(
  props: Readonly<{ children: ReactNode; modal: ReactNode }>
) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-2 overflow-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <Theme id={"root"}>
            <Providers>
              {props.children}
              {props.modal}
            </Providers>
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
