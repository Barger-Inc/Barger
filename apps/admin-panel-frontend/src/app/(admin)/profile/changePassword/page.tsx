"use client"

import { ChangePassword } from "@/widgets/change-password"
import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export default function Page() {
  const t = useTranslations("change-password-modal")
  const [currentPassword, setcurrentPassword] = useState<string | null>(null)
  const [newPassword, setnewPassword] = useState<string | null>(null)
  const [passwordAgain, setpasswordAgain] = useState<string | null>(null)

  const router = useRouter()

  const routefun = () => {
    router.back()
  }

  return (
    <div>
      <ChangePassword
        onUpdate={(currentPassword, newPassword, passwordAgain) => {
          setcurrentPassword(currentPassword)
          setnewPassword(newPassword)
          setpasswordAgain(passwordAgain)
        }}
      />
      <Button
        label={t("save")}
        onClick={() => {
          routefun()
        }}
      />
    </div>
  )
}
