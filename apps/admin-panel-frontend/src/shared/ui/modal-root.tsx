"use client"

import { ModalContext } from "@/shared/contexts/modal"
import { cn } from "@/shared/utils/cn"
import { useRouter } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"

type ModalRootProps = {
  children: ReactNode
  isOpen?: boolean
  onIsOpenChange?: (isOpen: boolean) => void
  maxWidth?: number
}

export const ModalRoot = (props: ModalRootProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] =
    props.isOpen === undefined ? useState(true) : [props.isOpen, () => {}]
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) setIsAnimating(true)
  }, [isOpen])

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false)

      if (!props.onIsOpenChange) router.back()
    }
  }

  if (!isAnimating && !isOpen) return null

  return (
    <ModalContext.Provider
      value={{
        onIsOpenChange:
          props.onIsOpenChange ??
          (() => {
            setIsOpen(false)
          }),
      }}
    >
      <div
        className={cn(
          "absolute flex justify-center inset-0 items-end sm:bg-opacity-50 sm:items-center",
          isOpen && "bg-modal-opening",
          !isOpen && "bg-modal-closing"
        )}
        onClick={() =>
          props.onIsOpenChange ? props.onIsOpenChange(false) : setIsOpen(false)
        }
      >
        <div
          className={cn(
            "flex flex-col p-1 gap-1 bg-gray-2 rounded-t-5 w-full max-w-[580px] z-10 rounded-b-none sm:rounded-5 sm:border-gray-6 sm:border sm:border-solid",
            props.maxWidth && "max-w-[--max-width]",
            isOpen && "modal-opening",
            !isOpen && "modal-closing"
          )}
          style={{ "--max-width": `${props.maxWidth}px` }}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    </ModalContext.Provider>
  )
}
