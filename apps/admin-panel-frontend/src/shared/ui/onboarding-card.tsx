import { Box, Card, Flex, Text, IconButton, Inset } from "@radix-ui/themes"
import { Icon } from "./icon"

interface OnboardingCardProps {
  id: number | string
  title: string
  description: string
  iconSrc: () => JSX.Element
  imageSrc: string
}

export const OnboardingCard = ({
  id,
  title,
  description,
  iconSrc,
  imageSrc,
}: OnboardingCardProps) => {
  return (
    <Box maxWidth="518px" >
      <Card className="bg-gray-200">
        <Inset side="top" pb="current">
          <img src={imageSrc} alt="Обложка карточки" />
        </Inset>

        <Flex gap="4" align="center">
          <div className="hidden sm:flex">
            <IconButton size="4" variant="soft">
              {iconSrc()}
            </IconButton>
          </div>

          <Flex height="70px" display="flex" direction="column" justify="center">
            <Text as="div" size="6" weight="medium">
              {title}
            </Text>
            <Text as="div" size="2" color="gray" weight="regular">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
