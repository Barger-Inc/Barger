"use client"

import Link from "next/link"
import MediaCard from "../../../features/media/ui/media-card";
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
import { Children, useCallback, useState } from "react"

const initialRolesData = [
  { id: 1, name: "Chris", description: "Описание для Chris", userCount: 10 },
  { id: 2, name: "Alex", description: "Описание для Alex", userCount: 20 },
  { id: 3, name: "Jordan", description: "Описание Jordan", userCount: 30 },
]

export default function Page() {

  const t = useTranslations("settingsRoles")
  //const t = useTranslations("media")

  const [mode, setMode] = useState<"view" | "select">("view")
  const [rolesData, setRolesData] = useState(initialRolesData)
  const [selectedRolesId, setSelectedRolesId] = useState<number[]>([])
  const [isAllRolesSelected, setIsAllRolesSelected] = useState(false)

  const toggleEditMode = useCallback(
    () => setMode((prev) => (prev === "view" ? "select" : "view")),
    []
  )

  const toggleIsAllMediaSelected = useCallback(() => {
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
    <div>
      <div className="flex items-center">
        <Heading className="flex-1" size="7" children="Галерея" />
        {mode === "view" ? (
          <Link href={"/media/loadMedia"}>
            <Button
              className="hidden sm:flex cursor-pointer"
              size={3}
              variant="soft"
              color="indigo"
              leadingIcon="plus"
              label={t("addRole")}
            />
          </Link>
        ) : (
          <Button
            className="hidden sm:flex cursor-pointer"
            size={3}
            variant="soft"
            color="red"
            leadingIcon="trash-bin"
            label={t("deleteSelected")}
            onClick={deleteSelectedRoles}
          />
        )}
      </div>
      <div className="flex items-center gap-2 my-[24px]">
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
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <div className="fixed sm:hidden bottom-0 left-0 right-0 p-4">
        {mode === "view" ? (
          <Link href={"/media/loadMedia"}>
            <Button
              className="w-full cursor-pointer"
              size={3}
              color="indigo"
              leadingIcon="plus"
              label={t("addRole")}
            />
          </Link>
        ) : (
          <Button
            className="w-full cursor-pointer"
            size={3}
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
