"use client"

import type { User } from "@/features/user/model/use-form-user"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { Badge, Heading, IconButton, Table, TextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

const mockedUsers: User[] = [
  {
    id: 1,
    displayName: "Проверочный",
    firstName: "Константин",
    lastName: "Text",
    email: "example@gmail.com",
    role: 1,
    isBlocked: false,
  },
  {
    id: 2,
    displayName: "Короткий",
    firstName: "Константин",
    lastName: "Text",
    email: "example@gmail.com",
    role: 1,
    isBlocked: false,
  },
  {
    id: 3,
    displayName: "Text",
    firstName: "Константин",
    lastName: "Text",
    email: "example@gmail.com",
    role: 1,
    isBlocked: false,
  },
]

export default function Page() {
  const t = useTranslations("users")

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="sm:flex block sm:justify-between sm:items-center gap-3">
        <Heading size="7" children={t("title")} />
        <Link href={"/settings/users/new"}>
          <Button
            size="3"
            variant="soft"
            className="hidden sm:flex"
            leadingIcon={"add-square"}
            label={t("addUser")}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <TextField.Root
            variant="surface"
            size="3"
            placeholder={t("searchPlaceholder")}
            className="w-80"
          >
            <TextField.Slot>
              <Icon name="magnifier" size={16} />
            </TextField.Slot>
          </TextField.Root>
          <IconButton size="3" variant="soft">
            <Icon name="tuning" variant="fill" size={18} />
          </IconButton>
        </div>
        <Table.Root variant="surface" size="3" className="overflow-auto">
          <Table.Header>
            <Table.Row align="center" className="[&>*]:truncate">
              <Table.ColumnHeaderCell children={t("table.displayName")} />
              <Table.ColumnHeaderCell children={t("table.fullName")} />
              <Table.ColumnHeaderCell children={t("table.email")} />
              <Table.ColumnHeaderCell children={t("table.role")} />
              <Table.ColumnHeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {mockedUsers.map((user) => (
              <Table.Row
                key={user.id}
                align="center"
                className="relative [&>*]:truncate"
              >
                <Table.RowHeaderCell children={user.displayName} />
                <Table.Cell children={`${user.firstName} ${user.lastName}`} />
                <Table.Cell children={user.email} />
                <Table.Cell>
                  <Badge size="1" variant="soft" children={user.role} />
                </Table.Cell>
                <Table.Cell className="flex gap-2">
                  <Link href={`/settings/users/${user.id}/edit`}>
                    <IconButton size="1" variant="soft">
                      <Icon name="pen-new-square" size={16} />
                    </IconButton>
                  </Link>
                  {/* TODO: blocking button */}
                  <IconButton size="1" variant="soft">
                    <Icon name="trash-bin" size={16} />
                  </IconButton>
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
        <Link href={"/settings/users/new"}>
          <Button
            size="4"
            className="flex sm:hidden w-full"
            leadingIcon={"add-square"}
            label={t("addUser")}
          />
        </Link>
      </div>
    </div>
  )
}
