import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { Icon } from "@/shared/ui/icon"
import { cn } from "@/shared/utils"
import { getIconProps } from "@/shared/utils/get-icon-props"
import { Text } from "@radix-ui/themes"
import Link from "next/link"

type NavigationButtonProps = {
  icon: IconResolvable
  href: string
  title: string
  isMinified?: boolean
  isActive?: boolean
}

export const NavigationButton = (props: NavigationButtonProps) => {
  return (
    <Link
      key={props.href}
      href={props.href}
      className={cn(
        "px-2 h-10 flex gap-4 rounded-[6px] items-center cursor-default text-gray-11",
        !props.isActive && "hover:bg-gray-4",
        props.isActive && "bg-accent-4 text-accent-11"
      )}
    >
      <Icon {...getIconProps(props.icon, { size: 24 })} />
      {!props.isMinified && <Text size={"3"} children={props.title} />}
    </Link>
  )
}
