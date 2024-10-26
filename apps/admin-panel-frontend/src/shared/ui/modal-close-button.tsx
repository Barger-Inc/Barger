"use client"

import { useModal } from "@/shared/contexts/modal"
import { Icon } from "@/shared/ui/icon"
import { IconButton } from "@radix-ui/themes"

export const ModalCloseButton = () => {
  const modal = useModal()

  return (
    <IconButton
      size="2"
      variant="soft"
      color="gray"
      onClick={() => modal.onIsOpenChange(false)}
    >
      <Icon name={"cross"} size={10} />
    </IconButton>
  )
}
