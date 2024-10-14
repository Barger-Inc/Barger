import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react"
import { Icon, type IconProps } from "./icon"
import { PrimitiveButton } from "./privitive-button"

type ButtonProps = {
  before?: ReactNode
  after?: ReactNode
  leadingIcon?: IconProps
  trailingIcon?: IconProps
  icon?: IconProps
  label?: string
} & ComponentPropsWithoutRef<typeof PrimitiveButton>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    before,
    after,
    leadingIcon,
    trailingIcon,
    icon,
    label,
    ...otherProps
  } = props

  return (
    <PrimitiveButton {...otherProps}>
      {before}
      {leadingIcon && (
        <span className="mr-2">
          <Icon size={16} {...leadingIcon} />
        </span>
      )}
      {icon && (
        <span>
          <Icon size={16} {...icon} />
        </span>
      )}
      <span className="text-center w-full">{label}</span>
      {trailingIcon && (
        <span className="ml-2">
          <Icon size={16} {...trailingIcon} />
        </span>
      )}
      {after}
    </PrimitiveButton>
  )
})
