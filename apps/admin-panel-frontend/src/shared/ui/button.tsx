import type { IconResolvable } from "@/shared/types/icon-resolvable"
import { ButtonIcon } from "@/shared/ui/button-icon"
import { Button as PrimitiveButton } from "@radix-ui/themes"
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react"

type ButtonProps = ComponentPropsWithoutRef<typeof PrimitiveButton> & {
  before?: ReactNode
  after?: ReactNode
  leadingIcon?: IconResolvable
  trailingIcon?: IconResolvable
  label?: string
  size?: 1 | 2 | 3 | 4 | "1" | "2" | "3" | "4"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { before, after, leadingIcon, trailingIcon, label, ...otherProps } =
      props

    return (
      <PrimitiveButton
        {...otherProps}
        size={props.size?.toString() as "1" | "2" | "3" | "4"}
        ref={ref}
      >
        {before}
        {leadingIcon && (
          <ButtonIcon
            size={props.size}
            variant={"leading"}
            icon={leadingIcon}
          />
        )}
        {label && <span children={label} />}
        {trailingIcon && (
          <ButtonIcon
            size={props.size}
            variant={"trailing"}
            icon={trailingIcon}
          />
        )}
        {after}
      </PrimitiveButton>
    )
  }
)
