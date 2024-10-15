import type { IconProps } from "../ui/icon"

export const getIconProps = (
  opts: IconProps | string,
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
