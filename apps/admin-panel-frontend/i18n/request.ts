import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

const availableLanguages = ["ru", "en"]

export default getRequestConfig(async () => {
  let locale = cookies().get("preferredLanguage")?.value ?? "ru"

  if (!availableLanguages.includes(locale)) locale = "ru"

  try {
    return {
      locale,
      messages: (await import(`../locales/${locale}.json`)).default,
    }
  } catch (error) {
    console.error(`Error loading translation ${locale} file`, error)

    return {
      locale: "ru",
      messages: (await import("../locales/ru.json")).default,
    }
  }
})
