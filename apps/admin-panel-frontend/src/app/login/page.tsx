"use client"

import { isValidEmail } from "@/features/auth/lib/is-valid-email"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { TextField } from "@/shared/ui/text-field"
import { Callout, Heading, IconButton } from "@radix-ui/themes"
import { TextField as PrimitiveTextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import logo from "../../assets/logo.svg"

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
      <div className="flex flex-col gap-6 w-[400px] rounded-5 p-4 sm:border sm:border-gray-6 sm:bg-gray-2">
        <Heading size="7" className="flex justify-center items-center gap-2.5">
          <Image
            className="size-10 rounded-3"
            src={logo}
            alt=""
            draggable={false}
          />
          <span>Barger</span>
        </Heading>

        <div className="flex flex-col gap-4">
          {isEmailValid === false && (
            <Callout.Root size="1" color="red" variant="surface">
              <Callout.Icon>
                <Icon size={16} name={"info-circle"} variant="fill" />
              </Callout.Icon>
              <Callout.Text children={t("error")} />
            </Callout.Root>
          )}

          <TextField
            label={t("email")}
            placeholder={t("enterEmail")}
            value={email}
            onChange={handleEmailChange}
          />

          <TextField
            label={t("password")}
            placeholder={t("enterPassword")}
            type={isPasswordVisible ? "text" : "password"}
          >
            <PrimitiveTextField.Slot side="right">
              <IconButton
                color={"gray"}
                variant="ghost"
                onClick={togglePasswordVisibility}
              >
                <Icon
                  size={16}
                  name={isPasswordVisible ? "eye" : "eye-closed"}
                />
              </IconButton>
            </PrimitiveTextField.Slot>
          </TextField>

          <Button
            label={t("login")}
            size="2"
            variant="solid"
            className="self-end hidden sm:block"
          />

          <Button
            label={t("login")}
            size="4"
            variant="solid"
            className="sm:hidden"
          />
        </div>
      </div>
    </div>
  )
}
