import withDefaultProps from "@/shared/hoc/with-default-props"
import { Button as DefaultButton } from "@/shared/ui/button"
import { TextField } from "@/shared/ui/text-field"
import { Heading } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Button = withDefaultProps(DefaultButton, { size: "3" })
const SoftButton = withDefaultProps(Button, { variant: "soft" })

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

        <div className="flex flex-col gap-2 sm:flex-row sm:[&>*]:flex-1 sm:[&>*>*]:w-full">
          <Link href={"/profile/changeEmail"}>
            <SoftButton label={t("changeEmail")} />
          </Link>
          <Link href={"/profile/changePassword"}>
            <SoftButton label={t("changePassword")} />
          </Link>
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 p-4 sm:static sm:p-0">
        <Button size="3" className="w-full sm:w-auto" label={t("save")} />
      </div>
    </div>
  )
}
