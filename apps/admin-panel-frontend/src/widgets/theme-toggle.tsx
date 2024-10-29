"use client"

import { Icon } from "@/shared/ui/icon"
import { DropdownMenu, IconButton } from "@radix-ui/themes"
import { useTheme } from "next-themes"
import type { ComponentProps } from "react"

type ThemeToggleProps = {
  variant?: ComponentProps<typeof IconButton>["variant"]
}

export const ThemeToggle = (props: ThemeToggleProps) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton size={"3"} variant={props.variant ?? "soft"}>
          <Icon size={18} name={"sun"} className="dark:hidden" />
          <Icon size={18} name={"moon"} className="hidden dark:block" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("system")}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
