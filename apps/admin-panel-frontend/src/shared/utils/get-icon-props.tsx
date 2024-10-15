import type { IconResolvable } from "../types/icon-resolvable"
import type { IconProps } from "../ui/icon"

export const getIconProps = (
  opts: IconResolvable,
  fallback: Omit<IconProps, "name">
): IconProps => {
  if (typeof opts === "string")
    return {
      ...fallback,
      name: opts,
    }

  return {
    ...fallback,
    ...opts,
  }
}
