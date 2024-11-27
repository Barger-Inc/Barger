import { useChangePasswordForm } from "@/features/user/lib/use-change-password-form"
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { PasswordInput } from "@/shared/ui/password-input"

export const MIN_PASSWORD_LENGTH = 8

import { useTranslations } from "next-intl"

type ChangePasswordProps = {
  variant?: "page" | "modal"
}

export const ChangePassword = (props: ChangePasswordProps) => {
  const variant = props.variant ?? "page"
  const t = useTranslations("changePasswordModal")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useChangePasswordForm()

  const onSubmit: Parameters<typeof handleSubmit>[0] = (data) =>
    console.log(data)

  const saveButton = (
    <Button type={"submit"} label={t("save")} className="self-start" />
  )

  const body = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"flex flex-col gap-4"}>
        <PasswordInput
          label={t("currentPassword")}
          autoComplete={"current-password webauthn"}
          errorMessage={errors.currentPassword?.message}
          {...register("currentPassword", { required: t("requiredField") })}
        />
        <PasswordInput
          label={t("newPassword")}
          autoComplete={"new-password webauthn"}
          errorMessage={errors.newPassword?.message}
          {...register("newPassword", {
            required: t("requiredField"),
            minLength: {
              value: MIN_PASSWORD_LENGTH,
              message: t("minPasswordLength", { length: MIN_PASSWORD_LENGTH }),
            },
          })}
        />
        <PasswordInput
          label={t("confirmPassword")}
          autoComplete={"new-password webauthn"}
          errorMessage={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: t("requiredField"),
            validate: (value, { newPassword }) => {
              if (value !== newPassword) return t("passwordsDontMatch")
            },
          })}
        />

        {variant === "page" && saveButton}
      </div>
    </form>
  )

  if (variant === "page") return body

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalRoot>
        <ModalHeader title={t("title")} />
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{saveButton}</ModalFooter>
      </ModalRoot>
    </form>
  )
}
