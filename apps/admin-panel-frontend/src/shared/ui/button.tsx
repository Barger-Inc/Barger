import { Button as PrimitiveButton } from "@radix-ui/themes";
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useMemo,
} from "react";
import type { IconResolvable } from "../types/icon-resolvable";
import { getIconProps } from "../utils/get-icon-props";
import { Icon } from "./icon";

type ButtonProps = {
  before?: ReactNode;
  after?: ReactNode;
  leadingIcon?: IconResolvable;
  trailingIcon?: IconResolvable;
  label?: string;
} & ComponentPropsWithoutRef<typeof PrimitiveButton>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { before, after, leadingIcon, trailingIcon, label, ...otherProps } =
      props;

    const memoizedLeadingIcon = useMemo(
      () =>
        leadingIcon && (
          <span className="mr-2">
            <Icon {...getIconProps(leadingIcon, { size: 16 })} />
          </span>
        ),
      [leadingIcon]
    );

    const memoizedTrailingIcon = useMemo(
      () =>
        trailingIcon && (
          <span className="ml-2">
            <Icon {...getIconProps(trailingIcon, { size: 16 })} />
          </span>
        ),
      [trailingIcon]
    );

    return (
      <PrimitiveButton {...otherProps} ref={ref}>
        {before&&before}
        {memoizedLeadingIcon&&memoizedLeadingIcon}
        {label && <span className="text-center w-full">{label}</span>}
        {memoizedTrailingIcon &&memoizedTrailingIcon}
        {after&&after}
      </PrimitiveButton>
    );
  }
);
