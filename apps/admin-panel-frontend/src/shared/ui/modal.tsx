"use client"

import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

type ModalProps = {
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  const router = useRouter()

  return (
    <div
      className="fixed inset-0 bg-black/50 grid place-items-center backdrop-blur-sm"
      onClick={router.back}
    >
      <div>{props.children}</div>
    </div>
  )
}
