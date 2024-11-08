"use client"

import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import {
  Badge,
  Heading,
  IconButton,
  Switch,
  Table,
  TextField,
} from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

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

export default function Page() {
  const t = useTranslations("users")

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="sm:flex block sm:justify-between sm:items-center gap-3">
        <Heading size="7" children={t("title")} />
        <Link href={"/users/new"}>
          <Button
            size="3"
            variant="soft"
            className="hidden sm:flex"
            leadingIcon={"add-square"}
            label={t("add_user")}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <TextField.Root
            variant="surface"
            size="3"
            placeholder={`${t("search")}`}
            className="w-[313px]"
          >
            <TextField.Slot>
              <Icon name="magnifer" size={16} />
            </TextField.Slot>
          </TextField.Root>
          <IconButton size="3" variant="soft">
            <Icon name="tuning" variant="fill" size={18} />
          </IconButton>
        </div>
        <Table.Root variant="surface" size="3" className="overflow-auto">
          <Table.Header>
            <Table.Row align="center">
              <Table.ColumnHeaderCell children={t("table.display_name")} />
              <Table.ColumnHeaderCell children={t("table.fname_and_lname")} />
              <Table.ColumnHeaderCell children={t("table.email")} />
              <Table.ColumnHeaderCell children={t("table.role")} />
              <Table.ColumnHeaderCell children={t("table.blocked")} />
              <Table.ColumnHeaderCell children={t("table.actions")} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {fillOfTable.map((user) => (
              <Table.Row align="center" key={user.id} className="relative">
                <Table.RowHeaderCell children={user.display_name} />
                <Table.Cell children={user.fname_and_lname} />
                <Table.Cell children={user.email} />
                <Table.Cell>
                  <Badge size="1" variant="soft" children={user.role} />
                </Table.Cell>
                <Table.Cell>
                  <Switch
                    size="2"
                    variant="classic"
                    defaultChecked={user.blocked}
                  />
                </Table.Cell>
                <Table.Cell className="flex gap-2">
                  <Link href={`/users/${user.id}/edit`}>
                    <IconButton size="1" variant="soft">
                      <Icon name="pen-new-square" size={16} />
                    </IconButton>
                  </Link>
                  <IconButton size="1" variant="soft">
                    <Icon name="trash-bin" size={16} />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4">
        <Link href={"/users/new"}>
          <Button
            size="4"
            className="flex sm:hidden w-full"
            leadingIcon={"add-square"}
            label={t("add_user")}
          />
        </Link>
      </div>
    </div>
  )
}
