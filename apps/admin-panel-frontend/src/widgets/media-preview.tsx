import { useTransform } from 'framer-motion';
import { TextField } from '../shared/ui/text-field';
import { Badge, Separator, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
type MediaPreviewProps = {
  id: number
}

export const MediaPreview = (props: MediaPreviewProps) => {
  const t = useTranslations("mediaPreview")
  

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="overflow-hidden">
        <img className="w-full max-h-84 object-cover" src="/mediaImg/loadMediaPreview.png" alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <TextField label='Название' />
        <Separator className="w-full" />
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex justify-between items-center">
            <Text
              size="2"
              weight="medium"
              children={t("resolution")} />
            <Badge>
              1920x1080
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text
              size="2"
              weight="medium"
              children="Вид" />
            <Badge className="uppercase">
              jpeg
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text
              size="2"
              weight="medium"
              children="Размер" />
            <Badge>
              500 кб
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text
              size="2"
              weight="medium"
              children="Дата" />
            <Badge>
              27/10/2024
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
