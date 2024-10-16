"use client"

import { Dialog } from "@/shared/ui/dialog"
import { useRouter } from "next/navigation"
import { type ComponentPropsWithoutRef, useState } from "react"

export const DialogUncontrolled = (
  props: ComponentPropsWithoutRef<typeof Dialog>
) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  return (
    <Dialog
      {...props}
      open={open}
      onOpenChange={() => {
        setOpen(!open)
        setTimeout(() => router.back(), 300)
      }}
    />
  )
}
