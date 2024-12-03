"use client"

import { fieldTypes } from "@/features/collection/lib/field-types"
import type { useFormCollectionField } from "@/features/collection/lib/use-form-collection-field"
import { FieldCard } from "@/features/collection/ui/field-card"
import { TextField } from "@/shared/ui/text-field"
import { Checkbox, Heading, Progress, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import { Controller } from "react-hook-form"

type FormCollectionFieldProps = {
  form: ReturnType<typeof useFormCollectionField>
  step: number
  onChangeStep: (step: number) => void
}

export const FormCollectionField = (props: FormCollectionFieldProps) => {
  const { register, control, ...form } = props.form
  const [step, setStep] = [props.step, props.onChangeStep]

  const t = useTranslations("collections.createField")
  const tf = useTranslations("collections.field")

  const progress = <Progress value={step === 0 ? 0 : (100 / 2) * step} />

  if (step === 0) {
    return (
      <div className="flex flex-col gap-4">
        {progress}
        <Heading children={t("chooseType")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <>
                {fieldTypes.map((type) => (
                  <FieldCard
                    key={type.name}
                    title={tf(`${type.name}.name`)}
                    description={tf(`${type.name}.description`)}
                    icon={type.icon}
                    onClick={() => {
                      field.onChange(type.name)
                      setStep(1)
                    }}
                  />
                ))}
              </>
            )}
          />
        </div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="flex flex-col gap-4">
        {progress}
        <Heading children={t("setupType")} />
        <div className="flex gap-4 *:flex-1">
          <TextField
            {...register("displayName")}
            label={t("displayName")}
            caption={t("displayNameHint")}
            placeholder={t("displayNamePlaceholder")}
          />
          <TextField
            {...register("apiName")}
            label={t("apiName")}
            caption={t("apiNameHint")}
            placeholder={t("apiNamePlaceholder")}
          />
        </div>
        <Text as="label" size="2" className="flex gap-2">
          <Checkbox />
          {t("isRequired")}
        </Text>
      </div>
    )
  }
}
