import { TextField } from '../shared/ui/text-field';
import { Badge, Separator, Text } from '@radix-ui/themes';
type MediaPreviewProps = {
  id: number
}

export const MediaPreview = (props: MediaPreviewProps) => {
  return (
    <div className="flex">
      <div className="overflow-hidden">
        <img className="w-full max-h-84 object-cover" src="/mediaImg/loadMediaPreview.png" alt="" />
      </div>
      <div className="ml-4">
        <div>
          <TextField label='Название' />
        </div>
        <Separator className="my-2.5 w-full" />
        <div className="grid grid-cols-2">
          <div className="flex justify-between items-center min-w-[248px]">
            <Text
              size="3"
              weight="medium"
              className="text-gray-12"
              children="Разрешение" />
            <Badge className="bg-accent-alpha-3 text-accent-alpha-11">
              1920x1080
            </Badge>
          </div>
          <div className="flex justify-between items-center min-w-[248px]">
            <Text
              size="3"
              weight="medium"
              className="text-gray-12"
              children="Вид" />
            <Badge className="bg-accent-alpha-3 text-accent-alpha-11 uppercase">
              jpeg
            </Badge>
          </div>
          <div className="flex justify-between items-center min-w-[248px]">
            <Text
              size="3"
              weight="medium"
              className="text-gray-12"
              children="Размер" />
            <Badge className="bg-accent-alpha-3 text-accent-alpha-11">
              500 кб
            </Badge>
          </div>
          <div className="flex justify-between items-center min-w-[248px]">
            <Text
              size="3"
              weight="medium"
              className="text-gray-12"
              children="Дата" />
            <Badge className="bg-accent-alpha-3 text-accent-alpha-11">
              27/10/2024
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
