"use client"

import { NavigationButton } from "@/features/navigation/ui/navigation-button"
import type { IconName } from "@/shared/types/icon-name"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { Button, Heading } from "@radix-ui/themes"
import { useState } from "react"

type SidePanelProps = {
  links: {
    href: string
    title: string
    icon: IconName
  }[]
}

export const SidePanel = (props: SidePanelProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <div className={cn("h-screen w-[260px]", isCollapsed && "w-[104px]")} />
      <div
        className={cn(
          "fixed w-[260px] border-gray-6 border-r h-screen flex flex-col p-8",
          isCollapsed && "w-[104px]"
        )}
      >
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-[#3341FB] rounded-[6px]" />
            <Heading size={"7"} weight={"bold"} children={"Barger"} />
          </div>

          <div className="flex flex-col gap-3">
            {props.links.map((link, i) => (
              <NavigationButton key={link.href} {...link} isActive={i === 0} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start">
          {/* <ThemeToggle /> */}
          <Button variant="soft" size={"3"}>
            <Icon name="exit" size={18} />
            Выйти
          </Button>
        </div>
      </div>
    </>
  )
}
