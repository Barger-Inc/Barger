import type { StrokeIconName } from "@/shared/types/icon-name"
import type { IconResolvable } from "../types/icon-resolvable"
import type { IconProps } from "../ui/icon"

export const getIconProps = (
  opts: IconResolvable,
  fallback: Omit<IconProps, "name" | "variant">
): IconProps => {
  if (typeof opts === "string")
    return {
      ...fallback,
      name: opts as StrokeIconName,
    }

  return {
    ...fallback,
    ...opts,
  }
}
