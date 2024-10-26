import type { ReactNode } from "react"

type ModalBodyProps = {
  children?: ReactNode
}

export const ModalBody = (props: ModalBodyProps) => (
  <div className="p-4 bg-gray-1 border border-solid border-gray-6 rounded-4">
    {props.children}
  </div>
)
