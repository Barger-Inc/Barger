"use client"

import type { IconName } from "@/shared/types/icon-name"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { buttonVariants } from "@/shared/ui/privitive-button"
import { cn } from "@/shared/utils"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

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
      <div className={cn("h-screen w-64", isCollapsed && "w-20")} />
      <div
        className={cn(
          "fixed w-64 border-border border-r h-screen flex flex-col p-2",
          isCollapsed && "w-20"
        )}
      >
        <div className="flex gap-2 items-center px-3 pb-2">
          <Button
            variant={"outline"}
            icon={{ name: "menu" }}
            onClick={() => {
              setIsCollapsed(!isCollapsed)
            }}
          />
          {!isCollapsed && <h1>Barger</h1>}
        </div>

        <div className="flex flex-col flex-1">
          {props.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              children={
                <>
                  {link.icon && (
                    <Icon name={link.icon} size={16} className="mr-2" />
                  )}
                  {!isCollapsed && <span>{link.title}</span>}
                </>
              }
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                "justify-start"
              )}
            />
          ))}
        </div>

        <ThemeToggle />
      </div>
    </>
  )
}
