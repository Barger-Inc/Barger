import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

const x = ["ru", "en"]

export default getRequestConfig(async () => {
  let locale = cookies().get("preferredLanguage")?.value

  if (!x.includes(locale ?? "en")) {
    locale = "en"
  }

  try {
    return {
      locale,
      messages: (await import(`../locales/${locale}.json`)).default,
    }
  } catch (error) {
    console.error(`Ошибка загрузки файла перевода для ${locale}:`, error)
    return {
      locale: "en",
      messages: (await import(`../locales/en.json`)).default,
    }
  }
})
