import { SwitchPasswordVisability } from "@/shared/ui/change-password/switch-password-visability"
import { Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { useRef } from "react"

type ChangePasswordProps = {
  onUpdate: (
    currentPassword: string,
    newPassword: string,
    passwordAgain: string
  ) => void
}

export const ChangePassword = (props: ChangePasswordProps) => {
  const t = useTranslations("change-password-modal")
  const currentPasswordRef = useRef<HTMLInputElement>(null)
  const newPasswordRef = useRef<HTMLInputElement>(null)
  const passwordAgainRef = useRef<HTMLInputElement>(null)

  const onUpdated = () => {
    const currentPassword = currentPasswordRef.current?.value
    const newPassword = newPasswordRef.current?.value
    const passwordAgain = passwordAgainRef.current?.value

    if (
      !currentPassword ||
      !newPassword ||
      !passwordAgain ||
      newPassword !== passwordAgain
    )
      return

    props.onUpdate(currentPassword, newPassword, passwordAgain)
  }

  return (
    <div>
      <div className="mb-4">
        <Text size="2" as="label" htmlFor="label1" weight="medium">
          {t("current-password")}
        </Text>
        <SwitchPasswordVisability
          passwordref={currentPasswordRef}
          onupdate={onUpdated}
        />
      </div>
      <div className="mb-4">
        <Text size="2" as="label" htmlFor="label1" weight="medium">
          {t("new-password")}
        </Text>
        <SwitchPasswordVisability
          passwordref={newPasswordRef}
          onupdate={onUpdated}
        />
      </div>
      <div className="mb-4">
        <Text size="2" as="label" htmlFor="label1" weight="medium">
          {t("password-again")}
        </Text>
        <SwitchPasswordVisability
          passwordref={passwordAgainRef}
          onupdate={onUpdated}
        />
      </div>
    </div>
  )
}
