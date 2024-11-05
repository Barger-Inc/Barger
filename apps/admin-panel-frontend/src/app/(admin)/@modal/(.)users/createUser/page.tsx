import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { MediaPreview } from "@/widgets/media-preview"
import { CreateUser } from "@/widgets/create-user"
import { ModalForm } from "@/shared/ui/modal-form"

export default function Page({ params: { id } }: { params: { id: number } }) {

  return (
    <ModalRoot>
      <ModalHeader title="Создание пользователя" />
      <ModalBody>
        <CreateUser/>
      </ModalBody>
      <ModalFooter>
        <Button label="Сохранить" />
      </ModalFooter>
    </ModalRoot>
  )
}
