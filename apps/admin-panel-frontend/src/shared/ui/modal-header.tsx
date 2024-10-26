import { Heading, IconButton } from "@radix-ui/themes"
import { Icon } from "./icon"

type ModalHeaderProps = {
  isOpen: any
  title: string
}

export const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className="flex p-4 w-full justify-between items-center">
      <Heading weight="medium" className="text-indigo-10" size="5">
        {props.title}
      </Heading>
      <IconButton size={"2"} variant="soft" color="gray" className="bg-grayA-3 cursor-pointer" onClick={props.isOpen}>
				<Icon name={"cross"} size={10}/>
      </IconButton>
    </div>
  )
}
