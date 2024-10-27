import { MediaPreview } from "@/widgets/media-preview"

export default function Page({
  params: { id },
}: {
  params: {
    id: number
  }
}) {
  return <MediaPreview id={id} />
}
