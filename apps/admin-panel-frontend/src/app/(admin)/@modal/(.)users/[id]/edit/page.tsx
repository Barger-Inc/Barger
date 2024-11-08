import { FormEditUser } from "@/features/user/ui/form-edit-user"
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useTranslations } from "next-intl"

export default function Page({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations()

  const user = {
    id,
    display_name: "Text",
    fname_and_lname: "Text text",
    email: "Text",
    role: "badge",
    blocked: false,
  }

  return (
    <ModalRoot>
      <ModalHeader title={`${t("users.modal.edit_user")}`} />
      <ModalBody>
        <FormEditUser user={user} />
      </ModalBody>
      <ModalFooter>
        <Button label={`${t("users.modal.save")}`} />
      </ModalFooter>
    </ModalRoot>
  )
}
