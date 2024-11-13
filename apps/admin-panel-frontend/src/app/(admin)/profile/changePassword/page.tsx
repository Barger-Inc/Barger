"use client"

import { Button } from "@/shared/ui/button"
import { ChangePassword } from "@/widgets/change-password"
import { useTranslations } from "next-intl"

export default function Page() {
  // TODO: это не модалка, поэтому changePasswordModal не уместно
  const t = useTranslations("changePasswordModal")

  return (
    <div>
      <ChangePassword />
      <Button label={t("save")} />
    </div>
  )
}
