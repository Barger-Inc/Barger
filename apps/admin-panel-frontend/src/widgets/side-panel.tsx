"use client"

import { NavigationButton } from "@/features/navigation/ui/navigation-button"
import type { SidePanelLink } from "@/shared/types/side-panel-link"
import { Header } from "@/shared/ui/header"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { Button, IconButton } from "@radix-ui/themes"
import { usePathname } from "next/navigation"
import { useState } from "react"

type SidePanelProps = {
  headerVariant?: "logo" | "hamburger"
  links: SidePanelLink[]
  onClose?: () => void
}

export const SidePanel = (props: SidePanelProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const headerVariant = props.headerVariant ?? "logo"

  const route = `/${usePathname().split("/")[1]}`

  return (
    <>
      <div
        className={cn(
          "h-screen w-[260px] transition-[width]",
          isCollapsed && "w-[105px]"
        )}
      />
      <div
        className={cn(
          "overflow-hidden fixed w-[260px] transition-[width] bg-gray-2",
          isCollapsed && "w-[105px]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={cn(
            "w-[260px] h-screen flex flex-col p-4 pb-8 sm:px-8 sm:pt-[38px] sm:pb-[28px] group",
            isCollapsed && "w-[105px]"
          )}
        >
          <div
            className="invisible sm:group-hover:visible absolute right-1 top-[38px] h-10 text-gray-11 hover:bg-gray-4 active:bg-gray-5 rounded-3 grid place-items-center"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Icon
              name="minimize"
              variant="fill"
              className={cn(
                "transition-transform",
                isCollapsed && "rotate-180"
              )}
            />
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <Header
              variant={headerVariant}
              onClose={props.onClose}
              hideHeading={isCollapsed}
            />

            <div className={"bg-gray-6 rounded-full w-full h-px"} />

            <div className="flex flex-col gap-3">
              {props.links.map((link, i) => {
                return (
                  <NavigationButton
                    key={link.href}
                    {...link}
                    isActive={route === link.href}
                    isMinified={isCollapsed}
                    onClick={props.onClose}
                  />
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            {isCollapsed ? (
              <IconButton variant="soft" size={"3"}>
                <Icon name="exit" size={18} />
              </IconButton>
            ) : (
              <Button className="px-[11px]" variant="soft" size={"3"}>
                <Icon name="exit" size={18} />
                Выйти
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
