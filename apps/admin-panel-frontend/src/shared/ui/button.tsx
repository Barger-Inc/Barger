import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useMemo,
} from "react"
import type { IconResolvable } from "../types/icon-resolvable"
import { cn } from "../utils"
import { getIconProps } from "../utils/get-icon-props"
import { Icon } from "./icon"
import { PrimitiveButton } from "./privitive-button"

type ButtonProps = {
  before?: ReactNode
  after?: ReactNode
  leadingIcon?: IconResolvable
  trailingIcon?: IconResolvable
} & (
  | {
      icon?: IconResolvable
      label?: undefined
    }
  | {
      icon?: undefined
      label?: string
    }
) &
  ComponentPropsWithoutRef<typeof PrimitiveButton>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      before,
      after,
      leadingIcon,
      trailingIcon,
      icon,
      label,
      ...otherProps
    } = props

    const memoizedLeadingIcon = useMemo(
      () =>
        leadingIcon && (
          <span className="mr-2">
            <Icon {...getIconProps(leadingIcon, { size: 16 })} />
          </span>
        ),
      [leadingIcon]
    )

    const memoizedIcon = useMemo(
      () => icon && <Icon {...getIconProps(icon, { size: 16 })} />,
      [icon]
    )

    const memoizedTrailingIcon = useMemo(
      () =>
        trailingIcon && (
          <span className="ml-2">
            <Icon {...getIconProps(trailingIcon, { size: 16 })} />
          </span>
        ),
      [trailingIcon]
    )

    return (
      <PrimitiveButton
        {...otherProps}
        ref={ref}
        className={cn(props.icon && "w-9 px-0", otherProps.className)}
      >
        {before}
        {memoizedLeadingIcon}
        {memoizedIcon}
        {label && <span className="text-center w-full">{label}</span>}
        {memoizedTrailingIcon}
        {after}
      </PrimitiveButton>
    )
  }
)
