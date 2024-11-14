import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { FormRole } from "@/features/role/ui/form-role"
import { useTranslations } from "next-intl"

export default function Page({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations("settingsRoles")

  const role = {
    id,
    name: "Text",
    description: "Text Text",
    create: false,
    publication: false,
    updates: false,
    reading: false,
    delete: false,
  }

  return (
    <ModalRoot>
      <ModalHeader title={t("editRole")} />
      <ModalBody>
        <FormRole role={role} />
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
