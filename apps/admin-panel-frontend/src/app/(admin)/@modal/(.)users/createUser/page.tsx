import { FormCreateUser } from "@/features/user/ui/form-create-user";
import { Button } from "@/shared/ui/button"
import { ModalBody } from "@/shared/ui/modal-body"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  return (
    <ModalRoot>
      <ModalHeader title={`${t("users.modal.create_user")}`} />
      <ModalBody>
        <FormCreateUser/>
      </ModalBody>
      <ModalFooter>
        <Button label={`${t("users.modal.save")}`} />
      </ModalFooter>
    </ModalRoot>
  );
}
