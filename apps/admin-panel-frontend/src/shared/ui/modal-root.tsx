"use client"
import { type ReactNode, useEffect, useState } from "react"
import { cn } from "../utils/cn"

type ModalRootProps = {
  header: ReactNode
  footer: ReactNode
  children: ReactNode
  isOpen: boolean
}
export const ModalRoot = (props: ModalRootProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (props.isOpen) {
      setIsAnimating(true)
    }
  }, [props.isOpen])

  const handleAnimationEnd = () => {
    if (!props.isOpen) {
      setIsAnimating(false)
    }
  }

  if (!isAnimating && !props.isOpen) return null
  return (
    <div
      className={cn(
        "fixed flex justify-center inset-0 items-end sm:bg-opacity-50 sm:items-center",
        props.isOpen && "bg-modal-opening",
        !props.isOpen && "bg-modal-closing"
      )}
    >
      <div
        className={cn(
          "flex flex-col p-1 gap-1 bg-gray-2 rounded-t-5 max-w-[580px] z-10 rounded-b-none sm:rounded-5 sm:border-gray-6 sm:border sm:border-solid",
          props.isOpen && "modal-opening",
          !props.isOpen && "modal-closing"
        )}
        onAnimationEnd={handleAnimationEnd}
      >
        {props.header}
        <div className="p-4 bg-gray-1 border border-solid border-gray-6 rounded-4">
          {props.children}
        </div>
        {props.footer}
      </div>
    </div>
  )
}
