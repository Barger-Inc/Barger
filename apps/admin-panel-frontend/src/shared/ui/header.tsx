import { Icon } from "@/shared/ui/icon"
import { Heading, IconButton } from "@radix-ui/themes"

type HeaderProps = {
  variant?: "logo" | "hamburger"
  hideHeading?: boolean
  onClose?: () => void
}

export const Header = (props: HeaderProps) => {
  const variant = props.variant ?? "logo"

  return (
    <div className="flex items-center gap-2">
      {variant === "logo" && (
        <div className="size-10 bg-[#3341FB] rounded-[6px]" />
      )}

      {variant === "hamburger" && (
        <IconButton
          size={"3"}
          variant={"soft"}
          color={"gray"}
          onClick={props.onClose}
        >
          <Icon name={"hamburger"} />
        </IconButton>
      )}

      {!props.hideHeading && (
        <Heading size={"7"} weight={"bold"} children={"Barger"} />
      )}
    </div>
  )
}
