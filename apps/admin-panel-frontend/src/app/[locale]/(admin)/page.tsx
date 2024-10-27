"use client";
import TranslationsProvider from "@/shared/providers/translations-provider";
import { Button } from "@/shared/ui/button";
import { ModalBody } from "@/shared/ui/modal-body";
import { ModalFooter } from "@/shared/ui/modal-footer";
import { ModalHeader } from "@/shared/ui/modal-header";
import { ModalRoot } from "@/shared/ui/modal-root";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <h1>Home Page</h1>

      <div className="flex gap-2">
        <Button
          variant={"ghost"}
          label="open modal"
          onClick={() => setIsModalOpen(true)}
        />
        <ModalRoot isOpen={isModalOpen} onIsOpenChange={setIsModalOpen}>
          <ModalHeader title="Modal title" />
          <ModalBody>
            <p>Test modal</p>
          </ModalBody>
          <ModalFooter>
            <Button variant={"outline"} label="Отменить" />
            <Button label="Сохранить" />
          </ModalFooter>
        </ModalRoot>
      </div>
    </div>
  );
}
