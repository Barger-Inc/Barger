import { PasswordInput } from "@/shared/ui/password-input"
import { useTranslations } from "next-intl"

type ChangePasswordProps = {
  onUpdate?: (
    currentPassword: string,
    newPassword: string,
    passwordAgain: string
  ) => void
}

export const ChangePassword = (props: ChangePasswordProps) => {
  const t = useTranslations("changePasswordModal")

  return (
    <div className={"flex flex-col gap-4"}>
      <PasswordInput label={t("current-password")} />
      <PasswordInput label={t("new-password")} />
      <PasswordInput label={t("password-again")} />
    </div>
  )
}
