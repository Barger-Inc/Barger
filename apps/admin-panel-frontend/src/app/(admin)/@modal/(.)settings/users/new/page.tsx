import { FormUser } from "@/features/user/ui/form-user"
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations("users.user")

  return (
    <ModalRoot>
      <ModalHeader title={`${t("createUserTitle")}`} />
      <ModalBody>
        <FormUser />
      </ModalBody>
      <ModalFooter>
        <Button label={`${t("save")}`} />
      </ModalFooter>
    </ModalRoot>
  )
}
