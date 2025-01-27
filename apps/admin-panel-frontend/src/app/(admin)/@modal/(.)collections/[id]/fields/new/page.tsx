"use client"

import { useFormCollectionField } from "@/features/collection/lib/use-form-collection-field"
import { FormCollectionField } from "@/features/collection/ui/form-collection-field"
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function Page() {
  const t = useTranslations("collections.createField")

  const [step, setStep] = useState(0)

  const formCollectionField = useFormCollectionField({
    type: "create",
  })

  return (
    <ModalRoot>
      <ModalHeader title={t("title")} />
      <ModalBody>
        <FormCollectionField
          form={formCollectionField}
          step={step}
          onChangeStep={setStep}
        />
      </ModalBody>
      {(step !== 0 || step === 1) && (
        <ModalFooter>
          {step !== 0 && (
            <Button
              variant="soft"
              color="gray"
              label={t("back")}
              onClick={() => setStep((prev) => prev - 1)}
            />
          )}
          {step === 1 && <Button label={t("save")} />}
        </ModalFooter>
      )}
    </ModalRoot>
  )
}
