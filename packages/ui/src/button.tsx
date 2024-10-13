"use client"

import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>
}
