// TODO: move this components to widgets folder

"use client"

import { TextField } from "@radix-ui/themes"
import { IconButton } from "@radix-ui/themes"
import { type ChangeEventHandler, type RefObject, useState } from "react"
import { Icon } from "../icon"

type SwitchPasswordVisabilityProps = {
  passwordref: RefObject<HTMLInputElement>
  onupdate: ChangeEventHandler<HTMLInputElement>
}

export const SwitchPasswordVisability = (
  props: SwitchPasswordVisabilityProps
) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setisPasswordVisible((prevState) => !prevState)
  }

  return (
    <TextField.Root
      size="2"
      type={isPasswordVisible ? "text" : "password"}
      ref={props.passwordref}
      onChange={props.onupdate}
    >
      <TextField.Slot side="right">
        <IconButton
          variant="ghost"
          color={"gray"}
          onClick={togglePasswordVisibility}
        >
          <Icon
            name={isPasswordVisible ? "openeye" : "closedeye"}
            variant={"stroke"}
          />
        </IconButton>
      </TextField.Slot>
    </TextField.Root>
  )
}
