import { SecondarySidePanel } from "@/features/navigation/ui/secondary-side-panel"
import { useTranslations } from "next-intl"
import type { ReactNode } from "react"

const collections = [
  {
    id: 1,
    title: "Новости",
  },
  {
    id: 2,
    title: "Объявления",
  },
] as const

export default function Layout(props: { children: ReactNode }) {
  const t = useTranslations("content")

  return (
    <div className="-m-4 sm:-m-8 flex h-[calc(100%+64px)]">
      <div className="hidden sm:block w-[260px] sm:border-r sm:border-gray-6">
        <SecondarySidePanel
          title={t("title")}
          links={collections.map((collection) => ({
            title: collection.title,
            href: `/content/${collection.id}`,
          }))}
        />
      </div>
      <div className="p-4">{props.children}</div>
    </div>
  )
}
