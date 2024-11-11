"use client"

import { useTranslations } from "next-intl"
import { Heading, IconButton, Callout } from "@radix-ui/themes"
import { Button } from "@/shared/ui/button"
import { TextField } from "@/shared/ui/text-field"
import { Icon } from "@/shared/ui/icon"
import { TextField as PrimitiveTextField } from "@radix-ui/themes"
import logo from "../../assets/logo.svg"
import Image from "next/image"
import React, { useState } from "react"
import { isValidEmail } from "@/features/auth/lib/is-valid-email"

export default function Auth() {
  const t = useTranslations("login")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsEmailValid(isValidEmail(value))
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-1">
      <div className="flex flex-col w-[400px] rounded-5 p-4 sm:border sm:border-gray-6 sm:bg-gray-2">
        <Heading
          size="7"
          className="mb-6 flex justify-center items-center gap-2.5"
        >
          <Image
            className="size-10 rounded-3"
            src={logo}
            alt="logo"
            draggable={false}
          />
          <span>Barger</span>
        </Heading>

        {isEmailValid === false && (
          <Callout.Root
            size={"1"}
            color="red"
            variant="surface"
            className="mb-4"
          >
            <Callout.Icon>
              <Icon name={"info-circle"} variant="fill" />
            </Callout.Icon>
            <Callout.Text>{t("error")}</Callout.Text>
          </Callout.Root>
        )}

        <TextField
          label={t("email")}
          placeholder={t("enterEmail")}
          value={email}
          onChange={handleEmailChange}
          className="mb-4"
        />

        <TextField
          label={t("password")}
          placeholder={t("enterPassword")}
          type={isPasswordVisible ? "text" : "password"}
          className="mb-4 flex items-center"
        >
          <PrimitiveTextField.Slot side="right">
            <IconButton
              className="mr-1 text-gray-11"
              variant="ghost"
              size={"1"}
              onClick={togglePasswordVisibility}
            >
              <Icon name={isPasswordVisible ? "eye" : "eye-closed"} />
            </IconButton>
          </PrimitiveTextField.Slot>
        </TextField>

        <Button
          label={t("login")}
          size="2"
          variant="solid"
          className="self-end w-full sm:w-[66px]"
        />
      </div>
    </div>
  )
}
