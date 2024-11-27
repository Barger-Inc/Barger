import type { ComponentProps, FC } from "react"

export default function withDefaultProps<P extends FC>(
  Component: P,
  defaultProps: Partial<ComponentProps<P>>
) {
  return (props: Partial<ComponentProps<P>>) => (
    <Component {...defaultProps} {...props} />
  )
}
