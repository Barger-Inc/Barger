'use client'

import { useTranslations } from "next-intl"
import { OnboardingCard } from "@/shared/ui/onboarding-card"
import { Flex, Heading, IconButton } from "@radix-ui/themes"
import { Icon } from "@/shared/ui/icon"


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

export default function Page() {
const t = useTranslations("home")
  return (
    <>
      <Flex direction="column" gap="5">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <Heading className="font-bold text-2xl" children={t("Welcome")}/>
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
