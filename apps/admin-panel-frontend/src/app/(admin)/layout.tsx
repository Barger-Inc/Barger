import { SidePanel } from "@/widgets/side-panel"
import NextTopLoader from "nextjs-toploader"

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
      <main>
        <NextTopLoader />
        {children}
      </main>
    </div>
  )
}
