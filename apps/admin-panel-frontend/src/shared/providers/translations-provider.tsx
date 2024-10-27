"use client"

import { ReactNode } from "react"
import initTranslations from "@/app/i18n"
import { createInstance } from "i18next"
import { I18nextProvider } from "react-i18next"

type TranslationsProviderProps = {
  children?: ReactNode
  locale?: string
  namespaces?: Array<string>
  resources?: any
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
  ...props
}: TranslationsProviderProps) {
  const i18n = createInstance()

  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
