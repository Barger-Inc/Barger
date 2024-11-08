"use client"

import { Button } from "@/shared/ui/button"
import { FormField } from "@/shared/ui/form-field"
import { TextField } from "@/shared/ui/text-field"
import { Checkbox, Select, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { useEditUserForm } from "../model/use-form-edit-user"

interface User {
  id: string
  display_name: string
  fname_and_lname: string
  email: string
  role: string
  blocked: boolean
}

type EditUserProps = {
  user: User
}

export const FormEditUser = ({ user }: EditUserProps) => {
  const t = useTranslations("users.user")

  const {
    register,
    handleSubmit,
    role,
    setRole,
    blocked,
    setBlocked,
    onSubmit,
  } = useEditUserForm({ user })

  const fillForSelectRole = [
    {
      value: "admin",
      name: "Администратор",
    },
    {
      value: "user",
      name: "Пользователь",
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2 sm:[&>*]:flex-1">
          <TextField
            label={t("email")}
            placeholder={t("email")}
            {...register("email", { required: true })}
          />
          <TextField
            label={t("display_name")}
            placeholder={t("modal.display_name")}
            {...register("display_name", { required: true })}
          />
        </div>

        <div className="flex gap-2 [&>*]:flex-1">
          <TextField
            label={t("firstName")}
            placeholder={t("firstName")}
            {...register("fname", { required: true })}
          />
          <TextField
            label={t("lastName")}
            placeholder={t("lastName")}
            {...register("lname", { required: true })}
          />
        </div>

        <FormField label={t("role")}>
          <Select.Root size="2" defaultValue={role} onValueChange={setRole}>
            <Select.Trigger />
            <Select.Content>
              {fillForSelectRole.map((role) => (
                <Select.Item key={role.value} value={role.value}>
                  {role.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </FormField>

        <Text as="label" size="2" className="flex gap-2 items-center">
          <Checkbox
            defaultChecked={blocked}
            onCheckedChange={() => setBlocked(!blocked)}
          />
          {t("isBlocked")}
        </Text>

        <Button
          size="2"
          variant="soft"
          color="gray"
          leadingIcon={"key"}
          className="flex w-fit"
          label={t("editPassword")}
        />
      </div>
    </form>
  )
}
