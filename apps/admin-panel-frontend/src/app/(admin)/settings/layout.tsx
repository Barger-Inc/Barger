"use client"
import { SecondarySidePanel } from "@/features/navigation/ui/secondary-side-panel"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { Button } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

const links = ["roles", "users"]

export default function Layout(props: { children: ReactNode }) {
  const pathname = usePathname()
  const isRoot = pathname === "/settings"

  const t = useTranslations("settingsSidePanel")

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
          links={links.map((link) => ({
            title: t(`links.${link}`),
            href: `/settings/${link}`,
          }))}
        />
      </div>

      <div
        className={cn(
          "p-4 sm:p-8 overflow-hidden flex-1",
          isRoot && "hidden sm:block"
        )}
      >
        <div className="sm:hidden pb-3">
          <Link href={"/settings"}>
            <Button variant={"ghost"} color={"gray"} className={"gap-2"}>
              <Icon
                name={"arrow-left-alt"}
                className={"w-2"}
                variant={"fill"}
              />
              {t("title")}
            </Button>
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  )
}
