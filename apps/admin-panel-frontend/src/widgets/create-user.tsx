"use client";

import {
  TextField,
  Text,
  Select,
} from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  display_name: string;
  fname: string;
  lname: string;
  role: string;
  password: string;
  confirmPassword: string;
}

export const CreateUser = () => {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
        <Select.Root size="2">
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
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <div className="flex flex-col gap-2 w-full">
          <Text size="2" weight="medium">
            {t("users.modal.password")}
          </Text>
          <TextField.Root
            placeholder={t("users.modal.password")}
            {...register("password", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Text size="2" weight="medium">
            {t("users.modal.repeat_password")}
          </Text>
          <TextField.Root
          placeholder={t("users.modal.repeat_password")}
          {...register("confirmPassword", {
            required: "Пожалуйста, повторите пароль",
            validate: (value) =>
              value === password || `${t("users.modal.passwords_required")}`,
          })}
        />
        {errors.confirmPassword && <p>{t("users.modal.passwords_confirm")}</p>}
        </div>
      </div>
      <input type="submit"/>
    </form>
  );
};
