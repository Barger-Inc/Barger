import { mockCollections } from "@/app/(admin)/content/mock"
import { CollectionFieldInput } from "@/features/collection/ui/collection-field-input"
import { IsDraftCard } from "@/features/content/ui/is-draft-card"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import {
  Badge,
  Heading,
  Button as PrimitiveButton,
  Text,
} from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

type ContentEditProps = {
  collectionId: number
}

export const ContentEdit = (props: ContentEditProps) => {
  const t = useTranslations("content")

  const collectionId = Number(props.collectionId)
  const collection = mockCollections.find(({ id }) => id === collectionId)

  const collectionFields = [
    { name: "cover", type: "media" },
    { name: "name", type: "text" },
    { name: "link", type: "link" },
    { name: "price", type: "number" },
    { name: "boolean", type: "boolean" },
  ] as const

  return (
    <div className="flex flex-col gap-4 pb-24 sm:pb-0">
      <div className="flex flex-col gap-2">
        <Link href={`/content/${collectionId}/planned`}>
          <PrimitiveButton variant="ghost" color="gray" className="gap-2">
            <Icon name="arrow-left-alt" className="w-2" variant="fill" />
            {collection?.title}
          </PrimitiveButton>
        </Link>
        <div className="flex">
          <Heading size="7" className="flex-1" children={t("newContent")} />
          <div className="fixed bottom-0 left-0 right-0 p-4 *:flex-1 z-10 bg-gray-1 sm:static sm:p-0 sm:*:flex-auto flex gap-4">
            <Button
              leadingIcon={"trash-bin"}
              color="red"
              variant="outline"
              size="3"
              label={t("delete")}
            />
            <Button size="3" label={t("save")} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <Text className="w-24 text-gray-11" children={t("created")} />
          <Text children={"21 days ago"} />
          <Badge children={"Author"} />
        </div>
        <div className="flex gap-3 items-center">
          <Text className="w-24 text-gray-11" children={t("edited")} />
          <Text children={"1 hour ago"} />
          <Badge children={"Author"} />
        </div>
      </div>
      <IsDraftCard />
      <div className="max-w-3xl flex flex-col gap-4">
        {collectionFields.map((field) => (
          <CollectionFieldInput
            key={field.name}
            type={field.type}
            name={field.name}
          />
        ))}
      </div>
    </div>
  )
}
