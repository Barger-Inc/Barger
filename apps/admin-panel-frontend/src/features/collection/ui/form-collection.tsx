import { TextField } from "@/shared/ui/text-field"
import { useTranslations } from "next-intl"

export const FormCollection = () => {
  const t = useTranslations("collections.createCollection")

  return (
    <div>
      <TextField label={t("name")} />
    </div>
  )
}
