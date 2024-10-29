export const setCookie = (name: string, value: string, days = 365) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export const getCookie = (name: string) => {
  if (typeof document === "undefined") return null // Check for server-side

  const cookies = document.cookie.split(";")

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim())
    if (cookieName === name) return cookieValue
  }

  return null
}
