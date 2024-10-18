"use client"

import { Dialog } from "@radix-ui/themes"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const DialogUncontrolled = (props: Dialog.RootProps) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  return (
    <Dialog.Root
      {...props}
      open={open}
      onOpenChange={() => {
        setOpen(!open)
        setTimeout(() => router.back(), 300)
      }}
    />
  )
}
