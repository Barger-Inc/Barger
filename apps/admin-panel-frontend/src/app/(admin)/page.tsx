"use client"
import { ModalFooter } from "@/shared/ui/modal-footer"
import { ModalHeader } from "@/shared/ui/modal-header"
import { Button } from "@/shared/ui/button"
import { ModalRoot } from "@/shared/ui/modal-root"
import { useState } from "react"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="p-4">
      <h1>Home Page</h1>

      <div className="flex gap-2">
        <Button
          variant={"ghost"}
          label="open modal"
          onClick={() => setIsModalOpen(true)}
        />
        <ModalRoot
          isOpen={isModalOpen}
          header={
            <ModalHeader
              title="Modal title"
              onClose={() => setIsModalOpen(false)}
            />
          }
          footer={
            <ModalFooter
              children={
                <>
                  <Button variant={"outline"} label="Отменить" />
                  <Button label="Сохранить" />
                </>
              }
            />
          }
        >
          <p className="text-accent-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ModalRoot>
      </div>
    </div>
  )
}
