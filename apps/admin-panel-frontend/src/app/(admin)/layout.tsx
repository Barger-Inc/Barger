import { SidePanel } from "@/widgets/side-panel"
import NextTopLoader from "nextjs-toploader"

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout(props: RootLayoutProps) {
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
        <NextTopLoader showSpinner={false} />
        {props.children}
      </main>
    </div>
  )
}
