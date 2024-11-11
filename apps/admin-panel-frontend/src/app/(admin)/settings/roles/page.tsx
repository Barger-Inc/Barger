"use client"

import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import {
  Checkbox,
  Heading,
  IconButton,
  Table,
  TextField,
} from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { useCallback, useState } from "react"

const rolesData = [
  { id: 1, name: "Chris", description: "Описание для Chris", userCount: 10 },
  { id: 2, name: "Alex", description: "Описание для Alex", userCount: 20 },
  { id: 3, name: "Jordan", description: "Описание Jordan", userCount: 30 },
]

export default function Page() {
  const t = useTranslations("settingsRoles")

  const [mode, setMode] = useState<"view" | "select">("view")
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
  }, [isAllRolesSelected])

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

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <Heading className="flex-1" size="7" children={t("title")} />
        <Button
          className="hidden sm:flex"
          size="3"
          variant="soft"
          color={mode === "select" ? "red" : "indigo"}
          leadingIcon={mode === "select" ? "trash-bin" : "add-square"}
          label={t(mode === "select" ? "deleteSelected" : "addRole")}
        />
      </div>

      <div className="flex items-center gap-2">
        <TextField.Root variant="surface" size="3" placeholder={t("search")}>
          <TextField.Slot>
            <Icon name={"magnifier"} size={16} />
          </TextField.Slot>
        </TextField.Root>

        <IconButton size="3" variant="soft">
          <Icon name={"tuning"} size={18} variant={"fill"} />
        </IconButton>

        <IconButton
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
              <Table.RowHeaderCell children={role.name} />
              <Table.Cell children={role.description} />
              <Table.Cell children={role.userCount} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <div className="fixed sm:hidden bottom-0 left-0 right-0 p-4">
        <Button
          className="w-full"
          size="3"
          color={mode === "select" ? "red" : "indigo"}
          leadingIcon={mode === "select" ? "trash-bin" : "add-square"}
          label={t(mode === "select" ? "deleteSelected" : "addRole")}
        />
      </div>
    </div>
  )
}
