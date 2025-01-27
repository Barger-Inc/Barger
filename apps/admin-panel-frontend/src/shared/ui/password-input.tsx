"use client"
import { TextField } from "@/shared/ui/text-field"
import {
  IconButton,
  TextField as PrimitiveTextField,
  Text,
} from "@radix-ui/themes"
import { type ComponentPropsWithoutRef, forwardRef, useState } from "react"
import { Icon } from "./icon"

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
            <IconButton
              type="button"
              variant="ghost"
              color="gray"
              onClick={toggleVisibility}
            >
              <Icon
                size={16}
                name={isVisible ? "eye-open" : "eye-closed"}
                variant={"stroke"}
              />
            </IconButton>
          </PrimitiveTextField.Slot>
        </TextField>
        {errorMessage && (
          <Text size={"2"} color={"red"} children={errorMessage} />
        )}
      </div>
    )
  }
)
