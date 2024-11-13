"use client"

import withDefaultProps from "@/shared/hoc/with-default-props"
import { TextField } from "@/shared/ui/text-field"
import { TextField as PrimitiveTextField } from "@radix-ui/themes"
import { IconButton } from "@radix-ui/themes"
import { Text } from "@radix-ui/themes"
import { type ComponentPropsWithoutRef, forwardRef, useState } from "react"
import { Icon } from "./icon"

const ErrorCaption = withDefaultProps(Text, {
  color: "red",
  size: "1",
})

type PasswordInputProps = {
  label?: string
  errorMessage?: string
} & ComponentPropsWithoutRef<typeof PrimitiveTextField.Root>

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const { label, errorMessage, ...otherProps } = props

    // TODO: make hook useSwitch or smth
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => setIsVisible((prev) => !prev)

    return (
      <div className="flex flex-col gap-1">
        <TextField
          ref={ref}
          label={label}
          type={isVisible ? "text" : "password"}
          {...otherProps}
        >
          <PrimitiveTextField.Slot side="right">
            <IconButton variant="ghost" color="gray" onClick={toggleVisibility}>
              <Icon
                size={16}
                name={isVisible ? "eye-open" : "eye-closed"}
                variant={"stroke"}
              />
            </IconButton>
          </PrimitiveTextField.Slot>
        </TextField>
        {errorMessage && <ErrorCaption children={errorMessage} />}
      </div>
    )
  }
)
