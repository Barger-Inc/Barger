import type { StrokeIconName } from "@/shared/types/icon-name"
import { Icon } from "@/shared/ui/icon"
import { Text } from "@radix-ui/themes"

interface OnboardingCardProps {
  title: string
  description: string
  icon: StrokeIconName
  image: string
}

export const OnboardingCard = (props: OnboardingCardProps) => {
  return (
    <div className="bg-gray-3 border border-gray-7 rounded-6 overflow-hidden">
      <img
        src={props.image}
        alt=""
        className="w-full max-h-[280px] object-cover"
      />
      <div className="flex items-center p-4 gap-4">
        <div className="hidden sm:grid size-14 rounded-4 place-items-center bg-accent-5">
          <Icon name={props.icon} className="bg-accent-11" size={24} />
        </div>
        <div className="flex flex-col flex-1">
          <Text size="6" weight="medium" children={props.title} />
          <Text
            size="2"
            className="text-gray-11"
            children={props.description}
          />
        </div>
      </div>
    </div>
  )
}
