import type { FillIconName } from "@/shared/types/icon-name"
import { Icon } from "@/shared/ui/icon"
import { Box, Card, Flex, Inset, Text } from "@radix-ui/themes"

interface OnboardingCardProps {
  title: string
  description: string
  icon: FillIconName
  image: string
}

export const OnboardingCard = (props: OnboardingCardProps) => {
  return (
    <Box maxWidth="518px">
      <Card>
        <Inset side="top">
          <img src={props.image} />
        </Inset>

        <Flex gap="4" align="center">
          <div className="hidden sm:flex">
            <div className="size-14 rounded rounded-4 grid place-items-center bg-accent-5">
              <Icon variant={"fill"} name={props.icon} size={24} />
            </div>
          </div>

          <Flex height="70px" direction="column" justify="center">
            <Text size="6" weight="medium">
              {props.title}
            </Text>
            <Text size="2" className="text-gray-11" weight="regular">
              {props.description}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
