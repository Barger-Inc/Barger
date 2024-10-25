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
  return (
    <Link
      {...props}
      key={props.href}
      href={props.href}
      className={cn(
        "group/nav-item cursor-default",
        !props.disableGhostArea && "-mx-8 -my-2 px-8 py-2"
      )}
    >
      <div
        className={cn(
          "px-2 h-10 flex gap-4 rounded-[6px] items-center text-gray-11",
          !props.isActive &&
            "group-hover/nav-item:bg-gray-4 group-active/nav-item:bg-gray-5",
          props.isActive &&
            "bg-accent-4 text-accent-11 group-active/nav-item:bg-accent-5"
        )}
      >
        <Icon {...getIconProps(props.icon, { size: 24 })} />
        {!props.isMinified && <Text size={"3"} children={props.title} />}
      </div>
    </Link>
  )
}
