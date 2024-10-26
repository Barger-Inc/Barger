"use client"

import { createContext, useContext } from "react"

export const ModalContext = createContext<{
  onIsOpenChange: (isOpen: boolean) => void
}>({
  onIsOpenChange: () => {},
})

export const useModal = () => useContext(ModalContext)
