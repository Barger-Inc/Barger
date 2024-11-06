import { Text } from "@radix-ui/themes";
import { SwitchPasswordVisability } from "@/shared/ui/change-password/switch-password-visability";
import { useTranslations } from "next-intl";

export const ChangePassword = () =>{
  const translation = useTranslations("change-password-modal")

  return(
    <div>
      <div className="mb-4">
          <Text size="2" as="label" htmlFor="label1" weight="medium">{translation("current-password")}</Text>
          <SwitchPasswordVisability />
        </div>
        <div className="mb-4">
          <Text size="2" as="label" htmlFor="label1" weight="medium">{translation("new-password")}</Text>
          <SwitchPasswordVisability />
        </div>
        <div className="mb-4">
          <Text size="2" as="label" htmlFor="label1" weight="medium">{translation("password-again")}</Text>
          <SwitchPasswordVisability />
        </div>
    </div>
  )
}