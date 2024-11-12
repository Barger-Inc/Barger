import { Box, Card, Flex, Text, IconButton } from "@radix-ui/themes"

interface оnBoardingCardProps {
  id: number | string
  title: string
  description: string
  iconSrc: string
  imageSrc: string
}

export const onBoardingCard = ({
  id,
  title,
  description,
  iconSrc,
  imageSrc,
}: оnBoardingCardProps) => {
  return (
    <Box maxWidth="240px">
      <Card>
        <img src={imageSrc} alt="Картинка для карточки" /> {}
        <Flex gap="3" align="center">
          <img src={iconSrc} alt="Картинка для карточки" />{" "}
          <Box>
            <Text as="div" size="2" weight="bold">
              {title}
            </Text>
            <Text as="div" size="2" color="gray">
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
