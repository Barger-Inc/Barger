import { TextField as PrimitiveTextField, Text } from "@radix-ui/themes"

type TextFieldProps = {
  label: string
} & PrimitiveTextField.RootProps

export const TextField = (props: TextFieldProps) => {
  if (!props.label) return <PrimitiveTextField.Root size="2" {...props} />

  const { label, ...otherProps } = props

  return (
    <Text size="2" as="label" weight="medium" className={"flex flex-col gap-2"}>
      <span children={label} />
      <PrimitiveTextField.Root size="2" {...otherProps} />
    </Text>
  )
}
