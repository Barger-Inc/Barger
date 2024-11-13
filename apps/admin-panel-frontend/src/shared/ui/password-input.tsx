"use client"

import { TextField } from "@/shared/ui/text-field"
import { TextField as PrimitiveTextField } from "@radix-ui/themes"
import { IconButton } from "@radix-ui/themes"
import { forwardRef, useState } from "react"
import { Icon } from "./icon"

type PasswordInputProps = {
  label?: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible((prev) => !prev)

    return (
      <TextField
        ref={ref}
        label={props.label}
        size={"2"}
        type={isVisible ? "text" : "password"}
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
    )
  }
)
