import { TextField } from "@/shared/ui/text-field"
import { Heading } from "@radix-ui/themes"
import { Button } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations("profile")

  return (
    <div className="flex flex-col gap-8 max-w-[720px]">
      <div className="flex flex-col gap-6">
        <Heading size="7" children={t("title")} />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row [&>*]:flex-1">
            <TextField label={t("firstName")} />
            <TextField label={t("lastName")} />
          </div>

          <TextField label={t("displayName")} />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Heading size="5" weight="medium" children={t("security")} />

        <div className="flex flex-col gap-2 sm:flex-row sm:[&>*]:flex-1">
          <Button size="3" variant="soft" children={t("changeEmail")} />
          <Button size="3" variant="soft" children={t("changePassword")} />
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 p-4 sm:static sm:p-0">
        <Button size="3" className="w-full sm:w-auto" children={t("save")} />
      </div>
    </div>
  )
}
