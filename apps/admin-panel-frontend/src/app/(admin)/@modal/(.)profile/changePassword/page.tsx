"use client"

import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { ChangePassword } from "@/widgets/change-password"
import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations("changePasswordModal")

  return (
    <ModalRoot>
      <ModalHeader title={t("title")} />
      <ModalBody>
        <ChangePassword />
      </ModalBody>
      <ModalFooter>
        <Button label={t("save")} onClick={() => {}} />
      </ModalFooter>
    </ModalRoot>
  )
}
