import {
  mockCollectionFields,
  mockCollections,
} from "@/app/(admin)/content/mock"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { Link } from "@/shared/ui/link"
import { Heading, IconButton, Table } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

type Props = {
  params: {
    id: string
  }
}

export default function Page(props: Props) {
  const t = useTranslations("collections")

  const collectionId = Number(props.params.id)
  const collection = mockCollections.find(({ id }) => id === collectionId)

  if (!collection) return "Not found"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
        <div className="flex flex-1 items-center gap-4">
          <Heading size="7" children={collection.title} />
          <IconButton variant="ghost" color="gray" size="1">
            <Icon
              size={20}
              name="pencil"
              variant="fill"
              className="bg-gray-12"
            />
          </IconButton>
        </div>
        <Button
          leadingIcon={"trash-bin"}
          color="red"
          variant="outline"
          size="3"
          label={t("delete")}
        />
      </div>
      <Table.Root variant="surface" size="3" className="overflow-auto">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell children={t("fieldsTable.name")} />
            <Table.ColumnHeaderCell children={t("fieldsTable.type")} />
          </Table.Row>
        </Table.Header>
        <Table.Body
          children={mockCollectionFields.map((field) => (
            <Table.Row key={field.name} align="center">
              <Table.Cell>{field.name}</Table.Cell>
              <Table.Cell>{t(`fieldType.${field.type}`)}</Table.Cell>
            </Table.Row>
          ))}
        />
      </Table.Root>
      <Link
        href={`/collections/${collectionId}/fields/new`}
        className="hidden sm:block"
      >
        <Button
          leadingIcon="plus"
          size={3}
          variant="soft"
          label={t("addField")}
        />
      </Link>
      <div className="fixed left-0 bottom-0 right-0 bg-gray-1 p-4 z-10 sm:hidden">
        <Link href={`/content/${collectionId}/fields/new`}>
          <Button
            className="w-full"
            leadingIcon="plus"
            size={4}
            label={t("addField")}
          />
        </Link>
      </div>
    </div>
  )
}
