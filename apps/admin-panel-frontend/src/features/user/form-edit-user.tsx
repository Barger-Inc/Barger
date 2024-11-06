"use client";

import { Icon } from "@/shared/ui/icon";
import {
  TextField,
  Text,
  Select,
  Checkbox,
  Flex,
  Button,
} from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface User {
  id: string;
  display_name: string;
  fname_and_lname: string;
  email: string;
  role: string;
  blocked: boolean;
}

type EditUserProps = {
  user: User;
};

interface FormValues {
  email: string;
  display_name: string;
  fname: string;
  lname: string;
  role: string;
  blocked: boolean;
}

export const FormEditUser = ({ user }: EditUserProps) => {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: user.email,
      display_name: user.display_name,
      fname: user.fname_and_lname.split(" ")[0] || "",
      lname: user.fname_and_lname.split(" ")[1] || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.role = role;
    data.blocked = blocked;
    console.log("Form data:", data);
  };

  const fillForSelectRole = [
    {
      value: "badge",
      name: "badge",
    },
    {
      value: "user",
      name: "Пользователь",
    },
  ];

  const [role, setRole] = useState(user.role);
  const [blocked, setBlocked] = useState<boolean>(user.blocked);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("users.modal.email")}
            </Text>
            <TextField.Root
              placeholder={t("users.modal.email")}
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("users.modal.display_name")}
            </Text>
            <TextField.Root
              placeholder={t("users.modal.display_name")}
              {...register("display_name", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("users.modal.fname")}
            </Text>
            <TextField.Root
              placeholder={t("users.modal.fname")}
              {...register("fname", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Text size="2" weight="medium">
              {t("users.modal.lname")}
            </Text>
            <TextField.Root
              placeholder={t("users.modal.lname")}
              {...register("lname", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Text size="2" weight="medium">
            {t("users.modal.role")}
          </Text>
          <Select.Root size="2" defaultValue={role} onValueChange={setRole}>
          <Select.Trigger  />
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
            <Checkbox defaultChecked={blocked} onCheckedChange={() => setBlocked(!blocked)} />
            {t("users.modal.blocked")}
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
          {t("users.modal.edit_password")}
          </Text>
        </Button>
      </div>
      <input type="submit"  />
    </form>
  );
};
