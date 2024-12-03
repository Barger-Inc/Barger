"use client"

import withDefaultProps from "@/shared/hoc/with-default-props"
import { Icon } from "@/shared/ui/icon"
import { Switch, Text, TextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

export type CollectionFieldInputProps = {
  type: string
  value?: unknown
  name: string
  onChange?: (value: unknown) => void
} & (
  | {
      type: "text"
      value?: string
      onChange?: (value: string) => void
    }
  | {
      type: "link"
      value?: string
      onChange?: (value: string) => void
    }
  | {
      type: "media"
      value?: string
      onChange?: (value: string) => void
    }
  | {
      type: "number"
      value?: number
      onChange?: (value: number) => void
    }
  | {
      type: "boolean"
      value?: boolean
      onChange?: (value: boolean) => void
    }
)

const Label = withDefaultProps(Text, {
  as: "label",
  size: "2",
  weight: "medium",
  className: "flex flex-col gap-2",
})

export const CollectionFieldInput = (props: CollectionFieldInputProps) => {
  const t = useTranslations("collections")

  switch (props.type) {
    case "text":
    case "link":
      return (
        <Label>
          {props.name}
          <TextField.Root />
        </Label>
      )
    case "number":
      return (
        <Label>
          {props.name}
          <TextField.Root type={"number"} />
        </Label>
      )
    case "media":
      return (
        <Label>
          {props.name}
          <div className="px-3 py-8 gap-2 bg-surface border border-grayA-7 rounded-2 grid place-items-center">
            <Icon className="bg-grayA-11" name={"gallery-add"} />
            <Text
              className="text-grayA-11"
              children={t("mediaDragAndDropPlaceholder")}
            />
          </div>
        </Label>
      )
    case "boolean":
      return (
        <Label>
          {props.name}
          <Switch
            checked={props.value}
            onChange={(e) => props.onChange?.(e.currentTarget.value)}
          />
        </Label>
      )
  }
}
