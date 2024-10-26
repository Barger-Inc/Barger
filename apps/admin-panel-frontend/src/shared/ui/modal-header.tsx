import { Heading, IconButton } from "@radix-ui/themes"
import { Icon } from "./icon"

type ModalHeaderProps = {
  onClose: () => void
  title: string
}

export const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className="flex p-4 w-full justify-between items-center">
      <Heading weight="medium" className="text-accent-11" size="5">
        {props.title}
      </Heading>
      <IconButton
        size={"2"}
        variant="soft"
        color="gray"
        onClick={props.onClose}
      >
        <Icon name={"cross"} size={10} />
      </IconButton>
    </div>
  )
}
