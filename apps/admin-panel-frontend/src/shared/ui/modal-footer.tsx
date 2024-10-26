import { ReactNode } from "react";

type ModalHeaderProps = {
  children: ReactNode;
};
export const ModalFooter = (props: ModalHeaderProps) => {
  return (
    <div className="flex gap-[8px] p-4 w-full max-w-[572px] justify-end items-center">
      {props.children}
    </div>
  );
};
