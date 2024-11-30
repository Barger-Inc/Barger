import type { FillIconName, StrokeIconName } from "@/shared/types/icon-name"

export type SidePanelLink = {
  href: string
  title: string
  icon?: StrokeIconName & FillIconName
}
