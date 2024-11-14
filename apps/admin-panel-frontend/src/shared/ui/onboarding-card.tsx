import { Box, Card, Flex, Text, IconButton, Inset } from "@radix-ui/themes"

interface OnboardingCardProps {
  id: number | string
  title: string
  description: string
  iconSrc: React.ReactNode
  imageSrc: string
}

export const OnboardingCard = ({
  title,
  description,
  iconSrc,
  imageSrc,
}: OnboardingCardProps) => {
  return (
    <Box maxWidth="518px">
      <Card>
        <Inset side="top">
          <img src={imageSrc} alt="Обложка карточки" />
        </Inset>

        <Flex gap="4" align="center">
          <div className="hidden sm:flex">
            <div className="size-14 rounded rounded-4 grid place-items-center bg-accent-5">
              {iconSrc}
            </div>
          </div>

          <Flex height="70px" direction="column" justify="center">
            <Text size="6" weight="medium">
              {title}
            </Text>
            <Text size="2" className="text-gray-11" weight="regular">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
