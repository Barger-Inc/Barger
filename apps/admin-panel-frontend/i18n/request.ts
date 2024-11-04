import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

const availableLanguages = ["ru", "en"]

export default getRequestConfig(async () => {
  let locale = cookies().get("preferredLanguage")?.value ?? "en"

  if (!availableLanguages.includes(locale)) locale = "en"

  try {
    return {
      locale,
      messages: (await import(`../locales/${locale}.json`)).default,
    }
  } catch (error) {
    console.error(`Error loading translation ${locale} file`, error)

    return {
      locale: "en",
      messages: (await import("../locales/en.json")).default,
    }
  }
})
