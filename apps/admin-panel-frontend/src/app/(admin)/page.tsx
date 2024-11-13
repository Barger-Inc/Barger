'use client'
import { useTranslations } from "next-intl"
import { OnboardingCard } from "@/shared/ui/onboarding-card"
import { Flex, Heading, IconButton } from "@radix-ui/themes"
import { Icon } from "@/shared/ui/icon"
import onboarding from "../../../public/onboarding/onboarding.png"

export default function Page({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations()

  const cardData = [
    {
      id: 1,
      title: "Туториалы",
      description: "Пошаговые инструкции, чтобы использовать Barger",
      iconSrc: "",
      imageSrc: "/onboarding/onboarding.png",
    },
    {
      id: 2,
      title: "Блог",
      description: "Узнайте последние новости о Barger",
      iconSrc: "",
      imageSrc: "/onboarding/onboarding.png",
    },
    {
      id: 3,
      title: "Документация",
      description: "Узнайте, как использовать Barger CMS",
      iconSrc: "/icons/document.svg",
      imageSrc: "/onboarding/onboarding.png",
    },
  ]

  return (
    <>
      <Flex direction="column" gap="5">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <Heading className="font-bold text-2xl">Добро пожаловать</Heading>
          <div className="flex gap-10 ">
            <IconButton size="4" variant="soft">
              <Icon name="discord" variant="fill" size={24} />
            </IconButton>
            <IconButton size="4" variant="soft">
              <Icon name="vk" variant="fill" size={24} />
            </IconButton>
            <IconButton size="4" variant="soft">
              <Icon name="youtube" variant="fill" size={24} />
            </IconButton>
            <IconButton size="4" variant="soft">
              <Icon name="github" variant="fill" size={24} />
            </IconButton>
          </div>
        </div>
        <div>
          <Flex gap="1" wrap="wrap">
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
          </Flex >

        </div>
      </Flex>


    </>
  )
}
