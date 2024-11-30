import { FormCollection } from "@/features/collection/ui/form-collection"
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations("collections.createCollection")

  return (
    <ModalRoot>
      <ModalHeader title={t("title")} />
      <ModalBody>
        <FormCollection />
      </ModalBody>
      <ModalFooter>
        <Button label={t("save")} />
      </ModalFooter>
    </ModalRoot>
  )
}
