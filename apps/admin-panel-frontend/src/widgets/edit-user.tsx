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
import { useForm } from "react-hook-form";

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

export const EditUser = ({ user }: EditUserProps) => {
  const t = useTranslations();

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: user.email,
      display_name: user.display_name,
      fname: user.fname_and_lname.split(" ")[0] || "",
      lname: user.fname_and_lname.split(" ")[1] || "",
      role: user.role,
      blocked: user.blocked,
    },
  });

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

  return (
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
        <Select.Root size="2" defaultValue={user.role}>
          <Select.Trigger {...register("role", { required: true })} />
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
          <Checkbox defaultChecked={user.blocked} {...register("blocked")} />
          Заблокировать
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
          Изменить пароль
        </Text>
      </Button>
    </div>
  );
};
