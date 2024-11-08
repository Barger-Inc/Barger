import type { ComponentType } from "react"

type WithDefaultProps<P> = Partial<P> & Omit<P, keyof P>

function withDefaultProps<P>(
  Component: ComponentType<P>,
  defaultProps: Partial<P>
) {
  type Props = WithDefaultProps<P>

  return (props: Props) => <Component {...defaultProps} {...(props as P)} />
}

export default withDefaultProps
