import { Box, Card, Flex, Text, IconButton, Inset } from "@radix-ui/themes"
import { Icon } from "./icon"

interface OnboardingCardProps {
  id: number | string
  title: string
  description: string
  iconSrc: string
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
    <Box maxWidth="518px">
      <Card>
      <Inset  side="top" pb="current">
			<img src={imageSrc} alt="Обложка карточки"/>
		</Inset>
        
        <Flex gap="2" align="center">
        <IconButton size="4" variant="soft">
          <img src={iconSrc} alt="r" />
            </IconButton>
          <Box height="64px">
            <Text as="div" size="6" weight="medium">
              {title}
            </Text>
            <Text as="div" size="2" color="gray" weight="regular">
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
