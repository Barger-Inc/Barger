import { ContentEdit } from "@/features/content/ui/content-edit"

type Props = {
  params: {
    id: string
  }
}

export default function Page(props: Props) {
  return <ContentEdit collectionId={Number(props.params.id)} />
}
