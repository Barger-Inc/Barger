import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { MediaPreview } from "@/widgets/media-preview"

export default function Page({ params: { id } }: { params: { id: number } }) {
  return (
    <ModalRoot>
      <ModalHeader title="Загрузка медиа" />
      <ModalBody>
        <MediaPreview id={id} />
      </ModalBody>
      <ModalFooter>
        <Button variant={"outline"} label="Отменить" />
        <Button label="Сохранить" />
      </ModalFooter>
    </ModalRoot>
  )
}
