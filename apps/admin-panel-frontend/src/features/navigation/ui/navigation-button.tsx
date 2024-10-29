import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { getIconProps } from "@/shared/utils/get-icon-props"
import { Text } from "@radix-ui/themes"
import Link from "next/link"
import type { ComponentProps } from "react"

type NavigationButtonProps = {
  icon: IconResolvable
  href: string
  title: string
  isMinified?: boolean
  isActive?: boolean
  disableGhostArea?: boolean
} & ComponentProps<typeof Link>

export const NavigationButton = (props: NavigationButtonProps) => {
  const { icon, title, isMinified, isActive, href, disableGhostArea, ...rest } =
    props

  return (
    <Link
      {...rest}
      key={href}
      href={href}
      className={cn(
        "group/nav-item cursor-default",
        !disableGhostArea && "-mx-8 -my-2 px-8 py-2"
      )}
    >
      <div
        className={cn(
          "px-2 h-10 flex gap-4 rounded-[6px] items-center text-gray-11",
          !isActive &&
            "group-hover/nav-item:bg-gray-4 group-active/nav-item:bg-gray-5",
          isActive &&
            "bg-accent-4 text-accent-11 group-active/nav-item:bg-accent-5"
        )}
      >
        <Icon {...getIconProps(icon)} variant={isActive ? "fill" : "stroke"} />
        {!isMinified && <Text size={"3"} children={title} />}
      </div>
    </Link>
  )
}
