import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { Icon } from "@/shared/ui/icon"
import { getIconProps } from "@/shared/utils/get-icon-props"
import { Text } from "@radix-ui/themes"

type FieldCardProps = {
  title: string
  description: string
  icon: IconResolvable
  onClick?: () => void
}

export const FieldCard = (props: FieldCardProps) => {
  return (
    <div className="flex flex-col gap-1 group" onClick={props.onClick}>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-1 border border-grayA-8 group-hover:bg-grayA-5">
        <Icon
          {...getIconProps(props.icon, { size: 16 })}
          className="bg-accentA-11"
        />
        <Text
          size="2"
          weight="medium"
          className="text-gray-11"
          children={props.title}
        />
      </div>
      <Text size="1" className="text-gray-11" children={props.description} />
    </div>
  )
}
