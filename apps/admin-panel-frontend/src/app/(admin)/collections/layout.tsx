"use client"

import { mockCollections } from "@/app/(admin)/content/mock"
import { SecondarySidePanel } from "@/features/navigation/ui/secondary-side-panel"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { Link } from "@/shared/ui/link"
import { cn } from "@/shared/utils"
import { Button as PrimitiveButton } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

export default function Layout(props: { children: ReactNode }) {
  const pathname = usePathname()
  const isRoot = pathname === "/collections"

  const t = useTranslations("collections")

  return (
    <div className="-m-4 sm:-m-8 flex h-[calc(100%+64px)]">
      <div
        className={cn(
          "w-full sm:w-[260px] sm:border-r sm:border-gray-6",
          !isRoot && "hidden sm:block"
        )}
      >
        <SecondarySidePanel
          title={t("title")}
          links={mockCollections.map((collection) => ({
            title: collection.title,
            href: `/collections/${collection.id}`,
            isActive: pathname.includes(`/collections/${collection.id}`),
          }))}
          after={
            <Button
              className="self-start"
              variant="soft"
              size="3"
              leadingIcon="plus"
              label={t("create")}
            />
          }
        />
      </div>
      <div
        className={cn(
          "p-4 sm:p-8 overflow-hidden flex-1",
          isRoot && "hidden sm:block"
        )}
      >
        <div className="sm:hidden pb-3">
          <Link href={"/collections"}>
            <PrimitiveButton
              variant={"ghost"}
              color={"gray"}
              className={"gap-2"}
            >
              <Icon
                name={"arrow-left-alt"}
                className={"w-2"}
                variant={"fill"}
              />
              {t("title")}
            </PrimitiveButton>
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  )
}
