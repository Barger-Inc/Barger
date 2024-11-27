import { Avatar, Link, Switch } from "@radix-ui/themes"

export type CollectionFieldCellProps = {
  type: string
  value: unknown
} & (
  | {
      type: "text"
      value: string
    }
  | {
      type: "link"
      value: string
    }
  | {
      type: "media"
      value: string
    }
  | {
      type: "number"
      value: number
    }
  | {
      type: "boolean"
      value: boolean
    }
)

export const CollectionFieldCell = (props: CollectionFieldCellProps) => {
  switch (props.type) {
    case "text":
      return props.value
    case "link":
      return (
        <Link
          href={props.value}
          target={"_blank"}
          children={props.value.replace(/http(s)?:\/\//, "")}
        />
      )
    case "media":
      return (
        <Avatar draggable={false} size="3" src={props.value} fallback={""} />
      )
    case "number":
      return props.value
    case "boolean":
      return <Switch checked={props.value} />
    default:
      return null
  }
}
