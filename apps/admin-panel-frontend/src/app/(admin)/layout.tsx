import { SidePanel } from "@/widgets/side-panel"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Barger",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <SidePanel
        links={[
          {
            href: "/",
            title: "Home",
          },
          {
            href: "/profile",
            title: "Profile",
          },
          {
            href: "/users",
            title: "Users",
          },
          {
            href: "/collections",
            title: "Collections",
          },
          {
            href: "/content",
            title: "Content",
          },
          {
            href: "/media",
            title: "Media",
          },
          {
            href: "/settings",
            title: "Settings",
          },
        ]}
      />
      <main>{children}</main>
    </div>
  )
}
