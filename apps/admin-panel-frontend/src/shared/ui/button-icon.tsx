import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { Icon } from "@/shared/ui/icon"
import { getIconProps } from "@/shared/utils/get-icon-props"
import { memo } from "react"

type ButtonIconProps = {
  variant?: "leading" | "trailing"
  icon: IconResolvable
  size?: 1 | 2 | 3 | 4
}

const iconSizes = {
  1: 16,
  2: 16,
  3: 18,
  4: 20,
}

export const ButtonIcon = memo((props: ButtonIconProps) => {
  const size = props.size ?? 2

  return <Icon {...getIconProps(props.icon, { size: iconSizes[size] })} />
})
