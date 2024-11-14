"use client"

import { Icon } from "@/shared/ui/icon"
import { OnboardingCard } from "@/shared/ui/onboarding-card"
import { Flex, Heading, IconButton } from "@radix-ui/themes"
import { useTranslations } from "next-intl"

const cards = [
  {
    name: "tutorials",
    icon: "play",
    image: "/onboarding/onboarding.png",
  },
  {
    name: "blog",
    icon: "document",
    image: "/onboarding/onboarding.png",
  },
  {
    name: "docs",
    icon: "code",
    image: "/onboarding/onboarding.png",
  },
] as const

export default function Page() {
  const t = useTranslations("home")

  return (
    <Flex direction="column" gap="5">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <Heading weight="bold" size="7" children={t("welcome")} />
        <div className="flex gap-3">
          <IconButton size="3" variant="soft">
            <Icon name="discord" variant="fill" size={18} />
          </IconButton>
          <IconButton size="3" variant="soft">
            <Icon name="vk" variant="fill" size={18} />
          </IconButton>
          <IconButton size="3" variant="soft">
            <Icon name="youtube" variant="fill" size={18} />
          </IconButton>
          <IconButton size="3" variant="soft">
            <Icon name="github" variant="fill" size={18} />
          </IconButton>
        </div>
      </div>
      <div>
        <div className="flex gap-4 flex-wrap">
          {cards.map((card) => (
            <OnboardingCard
              key={card.name}
              title={t(`onboarding.${card.name}.title`)}
              description={t(`onboarding.${card.name}.description`)}
              icon={card.icon}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </Flex>
  )
}
