import { useTranslations } from "next-intl"
import { onBoardingCard } from "@/shared/ui/onboarding-card" // Измените импорт на onBoardingCard
import { Heading, IconButton } from "@radix-ui/themes"
import { Icon } from "@/shared/ui/icon"

export default function Page({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations()

  const cardData = [
    {
      id: 1,
      title: "Туториалы",
      description: "Пошаговые инструкции, чтобы использовать Barger",
      iconSrc: "",
      imageSrc: "",
    },
    {
      id: 2,
      title: "Блог",
      description: "Узнайте последние новости о Barger",
      iconSrc: "",
      imageSrc: "",
    },
    {
      id: 3,
      title: "Документация",
      description: "Узнайте, как использовать Barger CMS",
      iconSrc: "",
      imageSrc: "",
    },
  ]

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-10">
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
    </>
  )
}
