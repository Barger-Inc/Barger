import { Heading } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

export default function Page() {
  const translation = useTranslations("profile")

  return(
    <div>
      <Heading size="7" className="mb-6">{translation("title")}</Heading>
      <div className="flex-col">
        <div className="sm:flex sm:gap-2">
        <div className="mb-4">
          <Text size="2" as="label" htmlFor="label1" weight="medium">{translation("name")}</Text>
          <Box maxWidth="100%" className="sm:w-[320px]">
		        <TextField.Root size="2" placeholder={translation("placeholder")} id="label1"/>
	        </Box>
        </div>
        <div className="mb-4">
          <Text size="2" as="label" htmlFor="label1" weight="medium">{translation("surname")}</Text>
          <Box maxWidth="100%" className="sm:w-[320px]">
		        <TextField.Root size="2" placeholder={translation("placeholder")} id="label1"/>
	        </Box>
        </div>
        </div>
        <div>
          <Text size="2" as="label" htmlFor="label1" weight="medium">{translation("nickname")}</Text>
          <Box className="sm:w-[648px]" maxWidth="100%">
		        <TextField.Root size="2" placeholder={translation("placeholder")} id="label1"/>
	        </Box>
        </div>
      </div>
      <div className="mt-8">
        <Text size="5" weight="medium">{translation("security")}</Text>
        <div className="mt-6 flex-col sm:flex-row">
          <Button className="mb-2 w-full sm:w-[324px] sm:mr-2" size="3" variant="soft">{translation("email")}</Button>
          <Button className="w-full sm:w-[324px]" size="3" variant="soft">{translation("password")}</Button>
        </div>
      </div>
      <Button size="3" variant="solid" className="w-full absolute inset-x-0 bottom-0 mb-4 sm:static sm:mt-8 sm:w-auto">{translation("save")}</Button>
    </div>
  )
}
