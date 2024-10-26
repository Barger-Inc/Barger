import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { ButtonIcon } from "@/shared/ui/button-icon"
import { Button as PrimitiveButton } from "@radix-ui/themes"
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react"

type ButtonProps = {
  before?: ReactNode
  after?: ReactNode
  leadingIcon?: IconResolvable
  trailingIcon?: IconResolvable
  label?: string
} & ComponentPropsWithoutRef<typeof PrimitiveButton>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { before, after, leadingIcon, trailingIcon, label, ...otherProps } =
      props

    return (
      <PrimitiveButton {...otherProps} ref={ref}>
        {before}
        {leadingIcon && <ButtonIcon variant={"leading"} icon={leadingIcon} />}
        {label && <span className="text-center w-full">{label}</span>}
        {trailingIcon && (
          <ButtonIcon variant={"trailing"} icon={trailingIcon} />
        )}
        {after}
      </PrimitiveButton>
    )
  }
)
