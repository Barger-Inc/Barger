import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { MediaPreview } from "@/widgets/media-preview"
import { FormRole } from "@/features/role/ui/form-role"
import { useTranslations } from "next-intl"
export default function Page() {
  const t = useTranslations("settingsRoles")
  return (
    <ModalRoot>
      <ModalHeader title={t("createRole")} />
      <ModalBody>
        <FormRole />
      </ModalBody>
      <ModalFooter>
        <Button label={t("saveRole")} className="sm:hidden w-full" />
        <Button
          label={t("saveRole")}
          className="hidden sm:flex items-center cursor-pointer"
        />
      </ModalFooter>
    </ModalRoot>
  )
}
