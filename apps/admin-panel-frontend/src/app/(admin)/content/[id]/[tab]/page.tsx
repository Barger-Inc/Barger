import { mockCollections } from "@/app/(admin)/content/mock"
import { CollectionFieldCell } from "@/features/collection/ui/collection-field-cell"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { Heading, IconButton, TabNav, Table, TextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

type Props = {
  params: {
    id: string
    tab: "planned" | "published"
  }
}

export default function Page(props: Props) {
  const t = useTranslations("content")

  const collectionId = Number(props.params.id)
  const collection = mockCollections.find(({ id }) => id === collectionId)

  const collectionFields = [
    {
      name: "cover",
      type: "media",
    },
    {
      name: "name",
      type: "text",
    },
    {
      name: "link",
      type: "link",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "boolean",
      type: "boolean",
    },
  ] as const

  type CollectionContent = {
    [key in (typeof collectionFields)[number]["name"]]?: unknown
  } & {
    id: number
  }

  const collectionContent: CollectionContent = {
    id: 1,
    name: "Content 1",
    link: "https://google.com",
    cover: "/onboarding/onboarding.png",
    price: 1200,
    boolean: true,
  }

  const collectionData = Array.from({ length: 50 }).fill(
    collectionContent
  ) as CollectionContent[]

  if (!collection) return "Not Found"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <Heading className="flex-1" size="7" children={collection.title} />
          <Link
            href={`/content/${collectionId}/new`}
            className="hidden sm:block"
          >
            <Button
              className="w-full"
              leadingIcon={"plus"}
              size={3}
              label={t("addContent")}
            />
          </Link>
        </div>
        <div className="flex gap-2 sm:hidden">
          {mockCollections.map((collection) => (
            <Link
              key={collection.id}
              className="cursor-default"
              href={`/content/${collection.id}/${props.params.tab}`}
            >
              <Button
                size={2}
                variant="soft"
                color={collection.id === collectionId ? "indigo" : "gray"}
                label={collection.title}
              />
            </Link>
          ))}
        </div>
        <div className="sm:flex">
          <TabNav.Root>
            {["planned", "published"].map((tab) => (
              <TabNav.Link key={tab} asChild active={tab === props.params.tab}>
                <Link
                  href={`/content/${collectionId}/${tab}`}
                  className="cursor-default"
                  children={t(`tabs.${tab}`)}
                />
              </TabNav.Link>
            ))}
          </TabNav.Root>
        </div>
        <div className="flex gap-2">
          <TextField.Root
            className="w-full sm:w-[320px]"
            variant="surface"
            size="3"
            placeholder={t("searchPlaceholder")}
          >
            <TextField.Slot>
              <Icon name={"magnifier"} size={16} />
            </TextField.Slot>
          </TextField.Root>
          <IconButton size="3" variant="soft">
            <Icon name={"tuning"} size={18} variant={"fill"} />
          </IconButton>
          <IconButton size="3" variant="soft">
            <Icon name={"pencil"} size={18} variant={"fill"} />
          </IconButton>
        </div>
      </div>
      <Table.Root variant="surface" size="3" className="overflow-auto">
        <Table.Header>
          <Table.Row>
            {collectionFields.map((field) => (
              <Table.ColumnHeaderCell key={field.name} children={field.name} />
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {collectionData.map((content) => (
            <Table.Row key={content.id} align="center">
              {collectionFields.map((field) => (
                <Table.Cell key={field.name}>
                  <CollectionFieldCell
                    type={field.type}
                    // @ts-expect-error
                    value={content[field.name]}
                  />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <div className="fixed left-0 bottom-0 right-0 bg-gray-1 p-4 z-10 sm:hidden">
        <Link href={`/content/${collectionId}/new`}>
          <Button
            className="w-full"
            leadingIcon={"plus"}
            size={4}
            label={t("addContent")}
          />
        </Link>
      </div>
    </div>
  )
}
