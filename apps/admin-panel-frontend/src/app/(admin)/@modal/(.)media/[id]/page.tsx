import { DialogUncontrolled } from "@/shared/ui/dialog-uncontrolled"
import { MediaPreview } from "@/widgets/media-preview"
import { Dialog } from "@radix-ui/themes"

const Page = async ({
  params: { id },
}: {
  params: {
    id: number
  }
}) => {
  return (
    <DialogUncontrolled>
      <Dialog.Content>
        <MediaPreview id={id} />
      </Dialog.Content>
    </DialogUncontrolled>
  )
}

export default Page
