import { ReactNode } from "react"

type ModalFooterProps = {
  children: ReactNode
}
export const ModalFooter = (props: ModalFooterProps) => {
  return (
    <div className="flex gap-2 p-4 w-full justify-end items-center">
      {props.children}
    </div>
  )
}
