"use client"

import { useFormCollectionField } from "@/features/collection/lib/use-form-collection-field"
import { FormCollectionField } from "@/features/collection/ui/form-collection-field"
import { useState } from "react"

export default function Page() {
  const formCollectionField = useFormCollectionField({
    type: "create",
  })

  const [step, setStep] = useState(0)

  return (
    <FormCollectionField
      form={formCollectionField}
      step={step}
      onChangeStep={setStep}
    />
  )
}
