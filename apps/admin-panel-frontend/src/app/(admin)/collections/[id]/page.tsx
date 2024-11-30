import { useTranslations } from "next-intl"

type Props = {
  params: {
    id: string
  }
}

export default function Page(props: Props) {
  const t = useTranslations("collections")

  return <div className="flex flex-col gap-6">123</div>
}
