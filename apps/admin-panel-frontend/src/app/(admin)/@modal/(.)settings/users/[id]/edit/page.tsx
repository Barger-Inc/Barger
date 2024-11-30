import { FormUser } from "@/features/user/ui/form-user"
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useTranslations } from "next-intl"

export default function Page({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations("users.user")

  return (
    <ModalRoot>
      <ModalHeader title={t("editUserTitle")} />
      <ModalBody>
        <FormUser
          user={{
            id: Number(id),
            displayName: "Text",
            firstName: "Text text",
            lastName: "Text text",
            email: "Text",
            role: 1,
            isBlocked: false,
          }}
        />
      </ModalBody>
      <ModalFooter>
        <Button label={t("save")} />
      </ModalFooter>
    </ModalRoot>
  )
}
