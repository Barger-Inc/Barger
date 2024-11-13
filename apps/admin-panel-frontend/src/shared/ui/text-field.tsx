import { TextField as PrimitiveTextField, Text } from "@radix-ui/themes"
import { forwardRef } from "react"

type TextFieldProps = PrimitiveTextField.RootProps & {
  label?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    if (!props.label) return <PrimitiveTextField.Root ref={ref} {...props} />

    const { label, ...otherProps } = props

    return (
      <Text
        size="2"
        as="label"
        weight="medium"
        className={"flex flex-col gap-2"}
      >
        <span children={label} />
        <PrimitiveTextField.Root ref={ref} {...otherProps} />
      </Text>
    )
  }
)
