"use client"

import { Icon } from "@/shared/ui/icon"
import {
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes"
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
  const t = useTranslations("users")

  const {
    register,
    handleSubmit,
    errors,
    role,
    setRole,
    blocked,
    setBlocked,
    onSubmit,
  } = useEditUserForm({ user })

  const fillForSelectRole = [
    {
      value: "badge",
      name: "badge",
    },
    {
      value: "user",
      name: "Пользователь",
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("modal.email")}
            </Text>
            <TextField.Root
              placeholder={t("modal.email")}
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("modal.display_name")}
            </Text>
            <TextField.Root
              placeholder={t("modal.display_name")}
              {...register("display_name", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("modal.fname")}
            </Text>
            <TextField.Root
              placeholder={t("modal.fname")}
              {...register("fname", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("modal.lname")}
            </Text>
            <TextField.Root
              placeholder={t("modal.lname")}
              {...register("lname", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Text size="2" weight="medium">
            {t("modal.role")}
          </Text>
          <Select.Root size="2" defaultValue={role} onValueChange={setRole}>
            <Select.Trigger />
            <Select.Content>
              {fillForSelectRole.map((role, index) => (
                <Select.Item key={index} value={role.value}>
                  {role.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
        <Text as="label" size="2">
          <Flex as="span" gap="2">
            <Checkbox
              defaultChecked={blocked}
              onCheckedChange={() => setBlocked(!blocked)}
            />
            {t("modal.blocked")}
          </Flex>
        </Text>
        <Button
          size="2"
          variant="soft"
          color="gray"
          className="flex w-fit"
          type="button"
        >
          <Icon name="key" size={16} />
          <Text size="2" weight="medium">
            {t("modal.edit_password")}
          </Text>
        </Button>
      </div>
      <input type="submit" />
    </form>
  )
}
