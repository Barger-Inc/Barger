import { OnboardingCard } from "@/shared/ui/onboarding-card"
import { SocialMediaIconButton } from "@/shared/ui/social-media-icon-button"
import { Heading } from "@radix-ui/themes"
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
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <Heading weight="bold" size="7" children={t("title")} />
        <div className="flex gap-3">
          <SocialMediaIconButton name={"discord"} />
          <SocialMediaIconButton name={"vk"} />
          <SocialMediaIconButton name={"youtube"} />
          <SocialMediaIconButton name={"github"} />
        </div>
      </div>
      <div>
        <div
          className="grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
          children={cards.map((card) => (
            <OnboardingCard
              key={card.name}
              title={t(`onboarding.${card.name}.title`)}
              description={t(`onboarding.${card.name}.description`)}
              icon={card.icon}
              image={card.image}
            />
          ))}
        />
      </div>
    </div>
  )
}
