"use client"

import { type User, useFormUser } from "@/features/user/lib/use-form-user"
import { Button } from "@/shared/ui/button"
import { FormField } from "@/shared/ui/form-field"
import { TextField } from "@/shared/ui/text-field"
import { Checkbox, Select, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

type EditUserProps = {
  user?: User
}

export const FormUser = ({ user }: EditUserProps) => {
  const t = useTranslations("users.user")

  const {
    type,
    register,
    handleSubmit,
    role,
    setRole,
    isBlocked,
    setIsBlocked,
    onSubmit,
  } = useFormUser({ user })

  const fillForSelectRole = [
    {
      value: "admin",
      name: "Администратор",
    },
    {
      value: "editor",
      name: "Редактор",
    },
    {
      value: "photographer",
      name: "Фотограф",
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2 sm:[&>*]:flex-1">
          <TextField
            type="email"
            label={t("email")}
            placeholder={t("email")}
            {...register("email", { required: true })}
          />
          <TextField
            label={t("displayName")}
            placeholder={t("displayName")}
            {...register("displayName", { required: true })}
          />
        </div>

        <div className="flex gap-2 [&>*]:flex-1">
          <TextField
            label={t("firstName")}
            placeholder={t("firstName")}
            {...register("firstName", { required: true })}
          />
          <TextField
            label={t("lastName")}
            placeholder={t("lastName")}
            {...register("lastName", { required: true })}
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

        {type === "edit" && (
          <>
            <Text as="label" size="2" className="flex gap-2 items-center">
              <Checkbox
                defaultChecked={isBlocked}
                onCheckedChange={() => setIsBlocked(!isBlocked)}
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
          </>
        )}

        {type === "create" && (
          <div className={"flex flex-col gap-2 sm:flex-row sm:[&>*]:flex-1"}>
            <TextField
              type="password"
              label={t("password")}
              placeholder={t("password")}
              {...register("password", { required: true })}
            />
            <TextField
              type="password"
              label={t("confirmPassword")}
              placeholder={t("confirmPassword")}
              {...register("confirmPassword", { required: true })}
            />
          </div>
        )}
      </div>
    </form>
  )
}
