import { TextField as PrimitiveTextField, Text } from "@radix-ui/themes"

type TextFieldProps = {
  label?: string
  caption?: string
} & PrimitiveTextField.RootProps

export const TextField = (props: TextFieldProps) => {
  if (!props.label && !props.caption)
    return <PrimitiveTextField.Root size="2" {...props} />

  const { label, ...otherProps } = props

  return (
    <Text size="2" as="label" weight="medium" className={"flex flex-col gap-2"}>
      {props.label && <span children={label} />}
      <PrimitiveTextField.Root size="2" {...otherProps} />
      {props.caption && (
        <Text
          as="span"
          size="1"
          className="text-gray-11"
          children={props.caption}
        />
      )}
    </Text>
  )
}
