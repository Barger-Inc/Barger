"use client"

import { type SubmitHandler, useForm } from "react-hook-form"

export interface CollectionField {
  displayName: string
  apiName: string
  type: string
  required?: boolean
  options: {}
}

type UseFormCollectionField = {
  type: "edit" | "create"
  field?: CollectionField
}

export const useFormCollectionField = (opts: UseFormCollectionField) => {
  const form = useForm<CollectionField>({ defaultValues: opts.field })

  const onSubmit: SubmitHandler<CollectionField> = (data) => {
    console.info("Form data:", data)
  }

  return {
    type: opts.type,
    onSubmit,
    ...form,
  }
}
