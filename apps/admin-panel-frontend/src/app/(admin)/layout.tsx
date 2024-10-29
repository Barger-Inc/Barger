import { sidePanelLinks } from "@/features/navigation/lib/side-panel-links"
import { SidePanel } from "@/widgets/side-panel"
import { SidePanelTrigger } from "@/widgets/side-panel-trigger"
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
      <div className="flex flex-col sm:flex-row bg-gray-2 h-screen">
        <div className="hidden sm:flex">
          <SidePanel links={sidePanelLinks} />
        </div>
        <div className="sm:hidden p-4">
          <SidePanelTrigger />
        </div>
        <div className="sm:p-2 sm:pl-0 flex flex-1 max-h-screen overflow-hidden">
          <main className="flex-1 rounded-6 border-t sm:border border-gray-6 bg-gray-1 overflow-scroll overscroll-contain p-4 sm:p-8">
            {SHOW_TOP_LOADER && <NextTopLoader showSpinner={false} />}
            {props.children}
          </main>
        </div>
      </div>
      {props.modal}
    </>
  )
}
