"use client"

import { NavigationButton } from "@/features/navigation/ui/navigation-button"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { Button, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

const links = ["tokens", "media", "language", "roles", "users"]

export default function Layout(props: { children: ReactNode }) {
  const pathname = usePathname()
  const isRoot = pathname === "/settings"

  const t = useTranslations("settingsSidePanel")

  return (
    <div className="-m-4 sm:-m-8 flex h-[calc(100%+64px)]">
      {/* TODO: move to separate component */}
      <div
        className={cn(
          "w-full sm:w-[260px] sm:border-r sm:border-gray-6 p-4 sm:p-8 flex flex-col gap-3",
          !isRoot && "hidden sm:flex"
        )}
      >
        <Text size="7" weight="bold" children={t("title")} />
        <div className="w-full h-px rounded-full bg-gray-6" />

        {links.map((link) => (
          <NavigationButton
            key={link}
            href={`/settings/${link}`}
            title={t(`links.${link}`)}
          />
        ))}
      </div>

      <div className={cn("p-4 sm:p-8", isRoot && "hidden sm:block")}>
        <div className="sm:hidden pb-3">
          <Link href={"/settings"}>
            <Button variant={"ghost"} color={"gray"}>
              <Icon name={"arrow-left-alt"} variant={"fill"} />
              Настройки
            </Button>
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  )
}
