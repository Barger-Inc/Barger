import { mockCollections } from "@/app/(admin)/content/mock"
import { CollectionFieldInput } from "@/features/collection/ui/collection-field-input"
import { IsDraftCard } from "@/features/content/ui/is-draft-card"
import { Icon } from "@/shared/ui/icon"
import { Badge, Button, Heading, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

type Props = {
  params: {
    id: string
  }
}

export default function Page(props: Props) {
  const t = useTranslations("content")

  const collectionId = Number(props.params.id)
  const collection = mockCollections.find(({ id }) => id === collectionId)

  const collectionFields = [
    { name: "cover", type: "media" },
    { name: "name", type: "text" },
    { name: "link", type: "link" },
    { name: "price", type: "number" },
    { name: "boolean", type: "boolean" },
  ] as const

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Link href={`/content/${collectionId}/planned`}>
          <Button variant="ghost" color="gray" className="gap-2">
            <Icon name="arrow-left-alt" className="w-2" variant="fill" />
            {collection?.title}
          </Button>
        </Link>
        <Heading size="7" children={t("newContent")} />
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
