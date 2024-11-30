import { mockCollections } from "@/app/(admin)/content/mock"
import { SecondarySidePanel } from "@/features/navigation/ui/secondary-side-panel"
import { useTranslations } from "next-intl"
import type { ReactNode } from "react"

export default function Layout(props: { children: ReactNode }) {
  const t = useTranslations("content")

  return (
    <div className="-m-4 sm:-m-8 flex h-[calc(100%+64px)]">
      <div className="hidden sm:block min-w-[260px] sm:border-r sm:border-gray-6">
        <SecondarySidePanel
          title={t("title")}
          links={mockCollections.map((collection) => ({
            title: collection.title,
            href: `/content/${collection.id}/planned`,
          }))}
        />
      </div>
      <div className="p-4 sm:p-8 w-full overflow-scroll">{props.children}</div>
    </div>
  )
}
