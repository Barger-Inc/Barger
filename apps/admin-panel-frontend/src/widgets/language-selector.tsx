"use client"

import { Button } from "@/shared/ui/button"
import { getCookie, setCookie } from "@/shared/utils/cookies"
import { DropdownMenu } from "@radix-ui/themes"
import { useEffect, useState } from "react"

export const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = getCookie("preferredLanguage")
    if (savedLanguage) setCurrentLanguage(savedLanguage)
  }, [])

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    setCookie("preferredLanguage", language)

    window.location.reload()
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button label={currentLanguage} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        {["en", "ru"].map((language) => (
          <DropdownMenu.Item
            key={language}
            onClick={() => handleLanguageChange(language)}
          >
            {language}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
