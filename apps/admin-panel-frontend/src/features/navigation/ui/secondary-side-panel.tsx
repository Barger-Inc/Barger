import { NavigationButton } from "@/features/navigation/ui/navigation-button"
import type { SidePanelLink } from "@/shared/types/side-panel-link"
import { Text } from "@radix-ui/themes"
import type { ReactNode } from "react"

type SecondarySidePanelProps = {
  title: ReactNode
  links: SidePanelLink[]
  after?: ReactNode
}

export const SecondarySidePanel = (props: SecondarySidePanelProps) => {
  return (
    <div className={"p-4 sm:p-8 flex flex-col gap-3"}>
      <Text size="7" weight="bold" children={props.title} />
      <div className="w-full h-px rounded-full bg-gray-6" />
      {props.links.map((link) => (
        <NavigationButton
          key={link.href}
          href={link.href}
          title={link.title}
          isActive={link.isActive}
          prefetch={link.prefetch}
        />
      ))}
      {props.after}
    </div>
  )
}
