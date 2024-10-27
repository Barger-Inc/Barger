import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations()

  return (
    <div className="p-4">
      <h1>{t("home")}</h1>
    </div>
  )
}
