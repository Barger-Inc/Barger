import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { Icon } from "@/shared/ui/icon"
import { getIconProps } from "@/shared/utils/get-icon-props"
import { memo } from "react"

type ButtonIconProps = {
  variant?: "leading" | "trailing"
  icon: IconResolvable
}

export const ButtonIcon = memo((props: ButtonIconProps) => {
  const variant = props.variant ?? "leading"

  return (
    <span className={variant === "leading" ? "mr-2" : "ml-2"}>
      <Icon {...getIconProps(props.icon, { size: 16 })} />
    </span>
  )
})
