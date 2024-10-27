import initTranslations from "@/app/i18n"
import { SidePanel } from "@/widgets/side-panel"
import NextTopLoader from "nextjs-toploader"
import type { ReactNode } from "react"

const SHOW_TOP_LOADER = false

type RootLayoutProps = Readonly<{
  children: ReactNode
  modal: ReactNode,
	locale: string
}>

export default async function Layout(props: RootLayoutProps) {
	const { t } = await initTranslations(props.locale, [''])

  return (
    <>
      <div className="flex bg-gray-2">
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
        <div className={"p-3 pl-0 flex flex-1 max-h-screen overflow-hidden"}>
          <main className="flex-1 rounded-6 border border-gray-6 bg-gray-1 overflow-scroll overscroll-contain">
            {SHOW_TOP_LOADER && <NextTopLoader showSpinner={false} />}
            {props.children}
          </main>
        </div>
      </div>
      {props.modal}
    </>
  )
}
