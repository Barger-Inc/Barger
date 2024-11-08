"use client"

import { Icon } from "@/shared/ui/icon"
import {
  Badge,
  Button,
  Heading,
  IconButton,
  Switch,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

type Props = {
  params: {
    locale: string
  }
}

const fillOfTable = [
  {
    id: "1",
    display_name: "Text",
    fname_and_lname: "Text text",
    email: "Text",
    role: "badge",
    blocked: false,
  },
  {
    id: "2",
    display_name: "Text",
    fname_and_lname: "Text text",
    email: "Text",
    role: "badge",
    blocked: false,
  },
  {
    id: "3",
    display_name: "Text",
    fname_and_lname: "Text text",
    email: "Text",
    role: "badge",
    blocked: false,
  },
]

export default function Page({ params: { locale } }: Props) {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="sm:flex block sm:justify-between sm:items-center gap-3">
        <Heading as="h1" size="7">
          {t("users.title")}
        </Heading>
        <Link href={"/users/createUser"}>
          <Button size="3" variant="soft" className="hidden sm:flex">
            <Icon name="add-square" size={18} />
            <Text>{t("users.add_user")}</Text>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <TextField.Root
            variant="surface"
            size="3"
            placeholder={`${t("users.search")}`}
            className="w-[313px]"
          >
            <TextField.Slot>
              <Icon name="magnifer" size={16} />
            </TextField.Slot>
          </TextField.Root>
          <IconButton size="3" variant="soft">
            <Icon name="tuning" variant="fill" />
          </IconButton>
        </div>
        <Table.Root variant="surface" size="3" className="overflow-auto">
          <Table.Header>
            <Table.Row align="center">
              <Table.ColumnHeaderCell>
                {t("users.table.display_name")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.fname_and_lname")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.email")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.role")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.blocked")}
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                {t("users.table.actions")}
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {fillOfTable.map((user, index) => (
              <Table.Row align="center" key={index}>
                <Table.RowHeaderCell>
                  <Link
                    href={`/users/edit/${user.id}`}
                    className="underline cursor-pointer"
                  >
                    {user.display_name}
                  </Link>
                </Table.RowHeaderCell>

                <Table.Cell>{user.fname_and_lname}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Badge size="1" variant="soft">
                    <Text>{user.role}</Text>
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Switch
                    size="2"
                    variant="classic"
                    defaultChecked={user.blocked}
                  />
                </Table.Cell>
                <Table.Cell>
                  <IconButton variant="soft">
                    <Icon name="trash-bin" size={24} />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4">
        <Link href={"/users/new"}>
          <Button size="4" variant="solid" className="flex sm:hidden w-full">
            <Icon name="add-square" size={20} />
            <Text>{t("users.add_user")}</Text>
          </Button>
        </Link>
      </div>
    </div>
  )
}
