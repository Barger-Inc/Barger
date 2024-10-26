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
        "fixed inset-0  bg-opacity-50 flex justify-center items-center " +
        (props.isOpen ? "bg_molda_opening" : "bg_molda_closening")
      }
    >
      <div
        className={
          "flex flex-col p-1 gap-1 bg-[#F6F9FE] border border-solid border-[#D2DBE7] rounded-[5px] max-w-[572px] z-10 " +
          (props.isOpen ? "modal-opening" : "modal-closening")
        }
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="">{props.header}</div>
        <div className="p-4 bg-[#FBFCFE] border border-solid border-[#D2DBE7] rounded-[6px]">
          {props.children}
        </div>
        <div className="">{props.footer}</div>
      </div>
    </div>
  );
};
