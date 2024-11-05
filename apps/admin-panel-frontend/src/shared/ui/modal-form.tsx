import type { ReactNode } from "react";
import { ModalRoot } from "./modal-root";
import { ModalBody } from "./modal-body";

type ModalFormProps = {
  header: ReactNode;
  children?: ReactNode;
  footer: ReactNode;
  target: () => void;
};

export const ModalForm = (props: ModalFormProps) => (
  <ModalRoot>
    <form onSubmit={props.target}>
      {props.header}
      <ModalBody>{props.children}</ModalBody>
      {props.footer}
    </form>
  </ModalRoot>
);
