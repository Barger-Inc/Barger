import { ModalCloseButton } from "@/shared/ui/modal-close-button"
import { Heading } from "@radix-ui/themes"

type ModalHeaderProps = {
  title: string
}

export const ModalHeader = (props: ModalHeaderProps) => (
  <div className="flex p-4 w-full justify-between items-center">
    <Heading weight="medium" className="text-accent-11" size="5">
      {props.title}
    </Heading>
    <ModalCloseButton />
  </div>
)
