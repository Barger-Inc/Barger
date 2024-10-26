import logo from "@/assets/logo.svg"
import { Icon } from "@/shared/ui/icon"
import { Heading, IconButton } from "@radix-ui/themes"
import Image from "next/image"

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
        <Image
          className="size-10 rounded-2"
          src={logo}
          alt=""
          draggable={false}
        />
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
