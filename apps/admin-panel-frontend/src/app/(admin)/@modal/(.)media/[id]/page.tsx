import { DialogContent } from "@/shared/ui/dialog"
import { DialogUncontrolled } from "@/shared/ui/dialog-uncontrolled"
import { MediaPreview } from "@/widgets/media-preview"

const Page = async ({
  params: { id },
}: {
  params: {
    id: number
  }
}) => {
  return (
    <DialogUncontrolled>
      <DialogContent>
        <MediaPreview id={id} />
      </DialogContent>
    </DialogUncontrolled>
  )
}

export default Page
