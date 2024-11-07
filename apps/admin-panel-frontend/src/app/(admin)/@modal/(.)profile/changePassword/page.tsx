'use client'

import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { ChangePassword } from "@/widgets/change-password"
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const t = useTranslations("change-password-modal")
  const [currentPassword, setcurrentPassword]=useState<string|null>(null)
  const [newPassword, setnewPassword]=useState<string|null>(null)
  const [passwordAgain, setpasswordAgain]=useState<string|null>(null)

  const router=useRouter();
  
  const routefun=()=>{
    router.back()
  }

  return (
    <ModalRoot>
      <ModalHeader title={t("title")} />
      <ModalBody>
        <ChangePassword
          onUpdate={(currentPassword, newPassword, passwordAgain) =>{
            setcurrentPassword(currentPassword)
            setnewPassword(newPassword)
            setpasswordAgain(passwordAgain)
          }}
        />
      </ModalBody>
      <ModalFooter>
        <Button variant={"outline"} label={t("undo")} />
        <Button label={t("save")} 
          onClick={()=>{routefun()}}
        />
      </ModalFooter>
    </ModalRoot>
  )
}