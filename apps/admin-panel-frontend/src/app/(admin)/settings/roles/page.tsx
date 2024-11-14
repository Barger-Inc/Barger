"use client" // This line marks the component as a Client Component

import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import Link from "next/link"
import {
  Checkbox,
  Heading,
  IconButton,
  Table,
  TextField,
} from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { Children, useCallback, useState } from "react"

const initialRolesData = [
  { id: 1, name: "Chris", description: "Описание для Chris", userCount: 10 },
  { id: 2, name: "Alex", description: "Описание для Alex", userCount: 20 },
  { id: 3, name: "Jordan", description: "Описание Jordan", userCount: 30 },
]

export default function Page() {
  const t = useTranslations("settingsRoles")

  const [mode, setMode] = useState<"view" | "select">("view")
  const [rolesData, setRolesData] = useState(initialRolesData)
  const [selectedRolesId, setSelectedRolesId] = useState<number[]>([])
  const [isAllRolesSelected, setIsAllRolesSelected] = useState(false)

  const toggleEditMode = useCallback(
    () => setMode((prev) => (prev === "view" ? "select" : "view")),
    []
  )

  const toggleIsAllRolesSelected = useCallback(() => {
    setIsAllRolesSelected((prev) => !prev)
    setSelectedRolesId(
      isAllRolesSelected ? [] : rolesData.map((role) => role.id)
    )
  }, [isAllRolesSelected, rolesData])

  const onRoleSelect = useCallback(
    (roleId: number) => () => {
      setSelectedRolesId((prev) =>
        prev.includes(roleId)
          ? prev.filter((id) => id !== roleId)
          : [...prev, roleId]
      )
    },
    []
  )

  const deleteSelectedRoles = useCallback(() => {
    setRolesData((prev) =>
      prev.filter((role) => !selectedRolesId.includes(role.id))
    )
    setSelectedRolesId([])
    setIsAllRolesSelected(false)
  }, [selectedRolesId])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <Heading className="flex-1" size="7" children={t("title")} />
        {mode === "view" ? (
          <Link href={"/settings/roles/CreateRole"}>
            <Button
              className="hidden sm:flex cursor-pointer"
              size="3"
              variant="soft"
              color="indigo"
              leadingIcon="plus"
              label={t("addRole")}
            />
          </Link>
        ) : (
          <Button
            className="hidden sm:flex cursor-pointer"
            size="3"
            variant="soft"
            color="red"
            leadingIcon="trash-bin"
            label={t("deleteSelected")}
            onClick={deleteSelectedRoles}
          />
        )}
      </div>

      <div className="flex items-center gap-2">
        <TextField.Root variant="surface" size="3" placeholder={t("search")}>
          <TextField.Slot>
            <Icon name={"magnifier"} size={16} />
          </TextField.Slot>
        </TextField.Root>

        <IconButton size="3" variant="soft" className="cursor-pointer">
          <Icon name={"tuning"} size={18} variant={"fill"} />
        </IconButton>

        <IconButton
          className="cursor-pointer"
          size="3"
          variant={mode === "select" ? "solid" : "soft"}
          onClick={toggleEditMode}
        >
          <Icon name={"pencil"} size={18} variant={"fill"} />
        </IconButton>
      </div>

      <Table.Root variant="surface" size="3" className="overflow-auto">
        <Table.Header>
          <Table.Row>
            {mode === "select" && (
              <Table.ColumnHeaderCell>
                <Checkbox
                  checked={isAllRolesSelected}
                  onCheckedChange={toggleIsAllRolesSelected}
                />
              </Table.ColumnHeaderCell>
            )}
            <Table.ColumnHeaderCell children={t("name")} />
            <Table.ColumnHeaderCell children={t("description")} />
            <Table.ColumnHeaderCell children={t("numberOfUsers")} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rolesData.map((role) => (
            <Table.Row key={role.id}>
              {mode === "select" && (
                <Table.RowHeaderCell>
                  <Checkbox
                    checked={
                      isAllRolesSelected || selectedRolesId.includes(role.id)
                    }
                    onCheckedChange={onRoleSelect(role.id)}
                  />
                </Table.RowHeaderCell>
              )}
              <Table.RowHeaderCell>
                <Link
                  href={`/settings/roles/${role.id}/edit`}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {role.name}
                </Link>
              </Table.RowHeaderCell>
              <Table.Cell children={role.description} />
              <Table.Cell children={role.userCount} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <div className="fixed sm:hidden bottom-0 left-0 right-0 p-4">
        {mode === "view" ? (
          <Link href={"/settings/roles/CreateRole"}>
            <Button
              className="w-full cursor-pointer"
              size="3"
              color="indigo"
              leadingIcon="plus"
              label={t("addRole")}
            />
          </Link>
        ) : (
          <Button
            className="w-full cursor-pointer"
            size="3"
            color="red"
            leadingIcon="trash-bin"
            label={t("deleteSelected")}
            onClick={deleteSelectedRoles}
          />
        )}
      </div>
    </div>
  )
}
