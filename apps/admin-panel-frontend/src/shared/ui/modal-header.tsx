import cross from "./../../../public/icons/cross.svg";
import { Heading, IconButton } from "@radix-ui/themes";
import Image from "next/image";

type ModalHeaderProps = {
  isOpen: any;
  title: string;
};

export const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className="container flex p-4 w-full justify-between items-center">
      <Heading weight="medium" className="text-blue-100" size="5">
        {props.title}
      </Heading>
      <IconButton className="bg-gray-100 cursor-pointer" onClick={props.isOpen}>
        <Image src={cross} alt="cross" />
      </IconButton>
    </div>
  );
};
