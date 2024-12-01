import {
  mockCollectionFields,
  mockCollections,
} from "@/app/(admin)/content/mock"
import { CollectionFieldCell } from "@/features/collection/ui/collection-field-cell"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { Link } from "@/shared/ui/link"
import { Heading, IconButton, TabNav, Table, TextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

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

  type CollectionContent = {
    [key in (typeof mockCollectionFields)[number]["name"]]?: unknown
  } & {
    id: number
  }

  const collectionContent: CollectionContent = {
    slug: "content-1",
    publishedAt: "2023-01-01",
    id: 1,
    name: "Content 1",
    link: "https://google.com",
    cover: "/onboarding/onboarding.png",
    price: 1200,
    soldOut: true,
  }

  const collectionData = Array.from({ length: 50 }).map((_, i) => ({
    ...collectionContent,
    id: i + 1,
    slug: `content-${i + 1}`,
    name: `Content ${i + 1}`,
    price: Math.ceil(Math.random() * 10000),
  })) as CollectionContent[]

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
          <Table.Row
            children={mockCollectionFields.map((field) => (
              <Table.ColumnHeaderCell key={field.name} children={field.name} />
            ))}
          />
        </Table.Header>
        <Table.Body
          children={collectionData.map((content) => (
            <Table.Row key={content.id} align="center">
              {mockCollectionFields.map((field) => (
                <Table.Cell key={field.name}>
                  <Link
                    href={`/content/edit/${content.id}`}
                    className={"-m-4 p-4 block"}
                    legacyBehavior={field.type === "link"}
                  >
                    <CollectionFieldCell
                      type={field.type}
                      // @ts-expect-error
                      value={content[field.name]}
                    />
                  </Link>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        />
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
