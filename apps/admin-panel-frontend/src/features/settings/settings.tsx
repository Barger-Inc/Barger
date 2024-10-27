"use client"
import { useTranslation } from "react-i18next"
import en from "@repo/leng/en"
import LanguageChanger from "@/widgets/LanguageChanger"

export function Settings() {
  const { t } = useTranslation()

  return (
    <div>
      Client Component
      <div>{t("HELLO")}</div>
      <LanguageChanger />
    </div>
  )
}
