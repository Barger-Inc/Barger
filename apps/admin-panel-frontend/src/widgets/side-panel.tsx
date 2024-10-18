"use client"

import type { IconName } from "@/shared/types/icon-name"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { Button, IconButton } from "@radix-ui/themes"
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
          {/* TODO: Change component */}
          <IconButton
            variant={"outline"}
            onClick={() => {
              setIsCollapsed(!isCollapsed)
            }}
          >
            <Icon size={16} name="home" />
          </IconButton>
          {!isCollapsed && <h1>Barger</h1>}
        </div>

        <div className="flex flex-col flex-1">
          {props.links.map((link) => (
            <div key={link.href} className="relative flex flex-col">
              <Button className="!m-0" variant="ghost" asChild>
                <Link
                  href={link.href}
                  className="flex !gap-[var(--button-ghost-padding-x)] !justify-start"
                >
                  <Icon size={24} name={link.icon} />
                  {!isCollapsed && <span children={link.title} />}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </>
  )
}
