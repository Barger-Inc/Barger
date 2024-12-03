import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { MediaPreview } from "@/widgets/media-preview"

export default function Page({ params: { id } }: { params: { id: number } }) {
  return (
    <ModalRoot maxWidth={1080}>
      <ModalHeader title="Загрузка медиа" />
      <ModalBody>
        <MediaPreview id={id} width={1920} height={1080} extension={"jpeg"} size={500} date={new Date()} url={"/mediaImg/loadMediaPreview.png"} />
      </ModalBody>
      <ModalFooter>
        <Button
          className="hidden sm:block"
          color="gray"
          variant={"soft"}
          label="Отменить"
        />
        <Button className="hidden sm:block" label="Сохранить" />
        <Button
          className="sm:hidden flex-1"
          size={"4"}
          color="gray"
          variant={"soft"}
          label="Отменить"
        />
        <Button className="sm:hidden flex-1" size={"4"} label="Сохранить" />
      </ModalFooter>
    </ModalRoot>
  )
}
