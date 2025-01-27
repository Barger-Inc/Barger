import { Button } from "@/shared/ui/button"
import { Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

type IsDraftCardProps = {
  isDraft?: boolean
}

export const IsDraftCard = (props: IsDraftCardProps) => {
  const t = useTranslations(`content.draftCard.${props.isDraft ?? false}`)

  return (
    <div className="bg-accent-3 border border-accentA-6 flex flex-col sm:items-center sm:flex-row gap-2 max-w-[640px] w-full p-4 rounded-4">
      <div className="sm:flex-1 flex flex-col">
        <Text size="3" weight="medium" children={t("title")} />
        <Text size="2" className="text-gray-11" children={t("description")} />
      </div>
      <div className="flex">
        <Button size="3" variant="soft" label={t("button")} />
      </div>
    </div>
  )
}
