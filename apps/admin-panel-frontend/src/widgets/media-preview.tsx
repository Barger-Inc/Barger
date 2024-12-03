import { useTransform } from "framer-motion"
import { TextField } from "../shared/ui/text-field"
import { Badge, Separator, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { format } from "date-fns/format"
type MediaPreviewProps = {
  id: number
  width: number
  height: number
  extension: string
  size: number
  date: Date
  url: string
}

export const MediaPreview = (props: MediaPreviewProps) => {
  const t = useTranslations("mediaPreview")

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="overflow-hidden">
        <img
          className="w-full max-h-84 object-cover"
          src={props.url}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <TextField label="Название" />
        <Separator className="w-full" />
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium" children={t("resolution")} />
            <Badge>{props.width}x{props.height}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium" children="Вид" />
            <Badge className="uppercase">{props.extension}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium" children="Размер" />
            <Badge>{props.size} кб</Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium" children="Дата" />
            <Badge>{format(props.date, "dd.MM.yyyy")}</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
