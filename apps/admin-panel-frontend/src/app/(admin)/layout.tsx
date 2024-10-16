import { SidePanel } from "@/widgets/side-panel"
import NextTopLoader from "nextjs-toploader"
import type { ReactNode } from "react"

type RootLayoutProps = Readonly<{
  children: ReactNode
  modal: ReactNode
}>

export default function Layout(props: RootLayoutProps) {
  return (
    <>
      <div className="flex">
        <SidePanel
          links={[
            {
              href: "/",
              title: "Home",
              icon: "home",
            },
            {
              href: "/profile",
              title: "Profile",
              icon: "profile",
            },
            {
              href: "/users",
              title: "Users",
              icon: "users",
            },
            {
              href: "/collections",
              title: "Collections",
              icon: "database",
            },
            {
              href: "/content",
              title: "Content",
              icon: "posts-carousel",
            },
            {
              href: "/media",
              title: "Media",
              icon: "photo",
            },
            {
              href: "/settings",
              title: "Settings",
              icon: "gear",
            },
          ]}
        />
        <main className="flex-1">
          <NextTopLoader showSpinner={false} />
          {props.children}
        </main>
      </div>
      {props.modal}
    </>
  )
}
