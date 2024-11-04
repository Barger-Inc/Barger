
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { MediaPreview } from "@/widgets/media-preview"
import { EditUser } from "@/widgets/edit-user"

export default function Page({ params: { id } }: { params: { id: number } }) {

  const user = {
    id: "1",
    display_name: "Text",
    fname_and_lname: "Text text",
    email: "Text",
    role: "badge",
    blocked: false,
  };

  return (
    <ModalRoot>
      <ModalHeader title="Редактирование пользователя" />
      <ModalBody>
        <EditUser user={user}/>
      </ModalBody>
      <ModalFooter>
        <Button label="Сохранить" />
      </ModalFooter>
    </ModalRoot>
  )
}
