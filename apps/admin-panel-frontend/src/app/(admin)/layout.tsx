import { SidePanel } from "@/widgets/side-panel"
import NextTopLoader from "nextjs-toploader"
import type { ReactNode } from "react"

const SHOW_TOP_LOADER = false

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
              icon: "home-2",
            },
            {
              href: "/collections",
              title: "Collections",
              icon: "folder-open",
            },
            {
              href: "/content",
              title: "Content",
              icon: "pen-new-square",
            },
            {
              href: "/media",
              title: "Media",
              icon: "wallpaper",
            },
            {
              href: "/profile",
              title: "Profile",
              icon: "user-circle",
            },
            {
              href: "/users",
              title: "Users",
              icon: "users-group-two",
            },
            {
              href: "/settings",
              title: "Settings",
              icon: "settings",
            },
          ]}
        />
        <main className="flex-1">
          {SHOW_TOP_LOADER && <NextTopLoader showSpinner={false} />}
          {props.children}
        </main>
      </div>
      {props.modal}
    </>
  )
}
