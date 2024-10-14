import { type ComponentPropsWithoutRef, forwardRef } from "react"
import { Icon, type IconProps } from "./icon"
import { PrimitiveButton } from "./privitive-button"

type ButtonProps = {
  leadingIcon?: IconProps
  trailingIcon?: IconProps
  label?: string
} & ComponentPropsWithoutRef<typeof PrimitiveButton>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const { leadingIcon, trailingIcon, label, ...otherProps } = props

  return (
    <PrimitiveButton {...otherProps}>
      {leadingIcon && (
        <span className="pr-2">
          <Icon size={16} {...leadingIcon} />
        </span>
      )}
      <span>{label}</span>
      {trailingIcon && (
        <span className="ml-auto pr-2">
          <Icon size={16} {...trailingIcon} />
        </span>
      )}
    </PrimitiveButton>
  )
})
