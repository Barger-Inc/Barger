import { LanguageSelector } from "@/widgets/language-selector"

type Props = {
  params: {
    locale: string
  }
}

export default function Page({ params: { locale } }: Props) {
  return (
    <div>
      Settings Page
      <LanguageSelector />
    </div>
  )
}
