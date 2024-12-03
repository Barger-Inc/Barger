"use client"
import withDefaultProps from "@/shared/hoc/with-default-props"
import { Button } from "@/shared/ui/button"
import { Icon } from "@/shared/ui/icon"
import { TextField } from "@/shared/ui/text-field"
import { Callout, Heading, IconButton } from "@radix-ui/themes"
import { TextField as PrimitiveTextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { type ChangeEvent, useCallback, useState } from "react"
import logo from "../../assets/logo.svg"

// TODO: add logic for appearing error callout
const SHOW_CALLOUT = false

export default function Auth() {
  const t = useTranslations("login")

  const [email, setEmail] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  }, [])

  const togglePasswordVisibility = useCallback(
    () => setIsPasswordVisible((prev) => !prev),
    []
  )

  const AuthButton = withDefaultProps(Button, {
    size: "2",
    label: t("login"),
  })

  return (
    <div className="grid place-items-center h-screen bg-gray-1">
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

        <form className="flex flex-col gap-4">
          {SHOW_CALLOUT && (
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
            required={true}
            autoComplete={"email webauthn"}
          />

          <TextField
            label={t("password")}
            placeholder={t("enterPassword")}
            type={isPasswordVisible ? "text" : "password"}
            required={true}
            autoComplete={"current-password webauthn"}
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

          <AuthButton type="submit" className="self-end hidden sm:block" />
          <AuthButton type="submit" size="4" className="sm:hidden" />
        </form>
      </div>
    </div>
  )
}
