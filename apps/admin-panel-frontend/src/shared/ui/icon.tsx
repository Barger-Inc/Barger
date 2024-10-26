import type { FillIconName, StrokeIconName } from "@/shared/types/icon-name"
import { cn } from "@/shared/utils/cn"
import type { ClassValue } from "clsx"
import { type CSSProperties, useMemo } from "react"

export type IconProps = {
  size?: number
  color?: string
  className?: ClassValue
} & (
  | {
      variant: "stroke"
      name: StrokeIconName
    }
  | {
      variant: "fill"
      name: FillIconName
    }
  | {
      variant?: undefined | null
      name: StrokeIconName
    }
)

export const Icon = (props: IconProps) => {
  const size = props.size ?? 24

  const styles = useMemo<CSSProperties>(
    () => ({
      "--size": `${size}px`,
      maskImage: `url(/icons/${props.name}-${props.variant ?? "stroke"}.svg)`,
      maskPosition: "center center",
      maskSize: "var(--size)",
      color: props.color ?? "currentcolor",
    }),
    [size, props.variant, props.name, props.color]
  )

  return (
    <span
      className={cn("block size-[var(--size)] bg-current", props.className)}
      style={styles}
    />
  )
}
