'use client'

import { Text } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import { useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { Icon } from "../icon";

type SwitchPasswordVisibilityProps = {
  passwordRef: React.RefObject<HTMLInputElement>;
  onUpdate: React.ChangeEventHandler<HTMLInputElement>
}

export const SwitchPasswordVisibility = (props: SwitchPasswordVisibilityProps) =>{ 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };
  
  return(
    <Box maxWidth="100%" className="sm:w-full">
		  <TextField.Root size="2" placeholder="" id="label1" type={isPasswordVisible ? 'text' : 'password'} ref={props.passwordref} onChange={props.onupdate}>
      <TextField.Slot pr="2" side="right">
				<IconButton size="1" variant="ghost" onClick={togglePasswordVisibility}>
          <Icon name={isPasswordVisible ? "openeye" : "closedeye"} variant={"stroke"} color="gray"/>
				</IconButton>
			</TextField.Slot>
      </TextField.Root>
	  </Box>
  )
}