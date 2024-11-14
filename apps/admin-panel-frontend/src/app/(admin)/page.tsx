"use client"
import { useTranslations } from "next-intl"
import { OnboardingCard } from "@/shared/ui/onboarding-card"
import { Flex, Heading, IconButton } from "@radix-ui/themes"
import { Icon } from "@/shared/ui/icon"

export default function Page({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations()

  const cardData = [
    {
      id: 1,
      title: "Туториалы",
      description: "Пошаговые инструкции, чтобы использовать Barger",
      iconSrc: () => <Icon name="play" variant="fill" size={24} />,
      imageSrc: "/onboarding/onboarding.png",
    },
    {
      id: 2,
      title: "Блог",
      description: "Узнайте последние новости о Barger",
      iconSrc: () => <Icon name="document" variant="fill" size={24} />,
      imageSrc: "/onboarding/onboarding.png",
    },
    {
      id: 3,
      title: "Документация",
      description: "Узнайте, как использовать Barger CMS",
      iconSrc: () => <Icon name="code" variant="fill" size={24} />,
      imageSrc: "/onboarding/onboarding.png",
    },
  ]

  return (
    <>
      <Flex direction="column" gap="5">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <Heading className="font-bold text-2xl">Добро пожаловать</Heading>
          <div className="flex gap-4 ">
            <IconButton size="4" variant="soft">
              <Icon name="discord" variant="fill" size={25} />
            </IconButton>
            <IconButton size="4" variant="soft">
              <Icon name="vk" variant="fill" size={25} />
            </IconButton>
            <IconButton size="4" variant="soft">
              <Icon name="youtube" variant="fill" size={25} />
            </IconButton>
            <IconButton size="4" variant="soft">
              <Icon name="github" variant="fill" size={25} />
            </IconButton>
          </div>
        </div>
        <div>
          <div className="flex gap-1 flex-wrap">
          
            {cardData.map((card, i) => (
              <OnboardingCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                iconSrc={card.iconSrc}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </div>
      </Flex>
    </>
  )
}
