"use client"

import { Icon } from "@/shared/ui/icon"
import { DropdownMenu, IconButton, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import type { ComponentProps } from "react"

type ThemeToggleProps = {
  variant?: ComponentProps<typeof IconButton>["variant"]
}

export const ThemeToggle = (props: ThemeToggleProps) => {
  const { setTheme } = useTheme()
  const t = useTranslations("themeToggle")

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger>
        <IconButton size={"3"} variant={props.variant ?? "soft"}>
          <Icon size={18} name={"sun"} className="dark:hidden" />
          <Icon size={18} name={"moon"} className="hidden dark:block" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        {["light", "dark", "system"].map((theme) => (
          <DropdownMenu.Item key={theme} onClick={() => setTheme(theme)}>
            <Text size="3" children={t(theme)} />
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
