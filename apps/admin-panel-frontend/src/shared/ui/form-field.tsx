import { Text } from "@radix-ui/themes";
import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  children: ReactNode;
};

export const FormField = (props: FormFieldProps) => {
  if (!props.label) return props.children;

  return (
    <Text size="2" as="label" weight="medium" className={"flex flex-col gap-2"}>
      <span children={props.label} />
      {props.children}
    </Text>
  );
};
