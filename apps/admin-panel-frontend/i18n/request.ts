import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

const x = ["ru", "en"]

export default getRequestConfig(async () => {
  let locale = cookies().get("preferredLanguage")?.value

  if (!x.includes(locale ?? "en")) {
    locale = "en"
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
