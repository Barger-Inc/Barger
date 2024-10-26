"use client";
import { ReactNode, useEffect, useState } from "react";

type ModalProps = {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  isOpen: boolean;
};
export const Modal = (props: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (props.isOpen) {
      setIsAnimating(true);
    }
  }, [props.isOpen]);

  const handleAnimationEnd = () => {
    if (!props.isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isAnimating && !props.isOpen) return null;
  return (
    <div
      className={
        "fixed flex justify-center inset-0 items-end sm:bg-opacity-50 sm:items-center " +
        (props.isOpen ? "bg-molda-opening" : "bg-molda-closing")
      }
    >
      <div
        className={
          "flex flex-col p-1 gap-1 bg-gray-2 rounded-t-[5px] max-w-[580px] z-10 rounded-b-none sm:rounded-5 sm:border-gray-6 sm:border sm:border-solid " +
          (props.isOpen ? "modal-opening" : "modal-closing")
        }
        onAnimationEnd={handleAnimationEnd}
      >
        {props.header}
        <div className="p-4 bg-gray-1 border border-solid border-gray-6 rounded-4">
          {props.children}
        </div>
        {props.footer}
      </div>
    </div>
  );
};
