"use client"

import { Icon } from "@/shared/ui/icon"
import { Button, Text } from "@radix-ui/themes"
import { useState } from "react"

export default function Page() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [showCheckboxes, setShowCheckboxes] = useState(false)
  const [selectedRows, setSelectedRows] = useState(new Array(3).fill(false))
  const [selectAll, setSelectAll] = useState(false)
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
    if (!isEditMode) {
      setShowCheckboxes(true)
    } else {
      setShowCheckboxes(false)
    }
  }
  const toggleSelectAll = () => {
    const newSelectedRows = selectedRows.map(() => !selectAll)
    setSelectedRows(newSelectedRows)
    setSelectAll(!selectAll)
  }
  const handleRowSelect = (index: number) => {
    const newSelectedRows = [...selectedRows]
    newSelectedRows[index] = !newSelectedRows[index]
    setSelectedRows(newSelectedRows)
    setSelectAll(newSelectedRows.every(Boolean))
  }
  const rolesData = [
    { name: "Chris", description: "Описание для Chris", userCount: 10 },
    { name: "Alex", description: "Описание для Alex", userCount: 20 },
    { name: "Jordan", description: "Описание для Jordan", userCount: 30 },
  ]
  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-center h-10">
        <span className="rt-Text rt-r-size-7 rt-r-weight-bold">Роли</span>
        {isEditMode ? (
          <Button
            data-accent-color
            className="hidden sm:flex px-[16px] hover:cursor-pointer bg-transparent text-red-10 border border-solid border-red-500"
          >
            <Icon
              name={"settings-recycle"}
              size={16}
              className="mr-2 text-primary-foreground"
              variant={"fill"}
            />
            <Text> удалить выбранное </Text>
          </Button>
        ) : (
          <Button
            data-accent-color
            className="hidden sm:flex px-[16px] hover:cursor-pointer"
          >
            <Icon
              name={"add-square"}
              size={16}
              className="mr-2 text-primary-foreground"
            />
            <Text> Добавить роль </Text>
          </Button>
        )}
      </div>
      <div className="flex items-center py-6">
        <form className="flex px-[4px] items-center text-center border rounded-3 border-gray-6 min-w-24 max-w-[313px] h-10">
          <Button
            type="submit"
            className="p-0 hover:cursor-pointer flex items-center justify-center bg-transparent"
          >
            <Icon
              name={"magnifier"}
              size={16}
              className="text-primary-foreground"
            />
          </Button>
          <input
            type="search"
            id="roles-search"
            name="roles-search"
            placeholder="Поиск"
            maxLength={24}
            className="focus:outline-none ml-2 max-w-60"
          />
        </form>
        <Button
          data-accent-color
          className="p-0 rt-reset rt-Basebutton rt-r-size-2 rt-variant-soft rt-button w-10 h-10 mx-[10px] hover:cursor-pointer"
        >
          <Icon
            name={"tuning"}
            size={18}
            className="text-primary-foreground"
            variant={"fill"}
          />
        </Button>
        {isEditMode ? (
          <Button
            data-accent-color
            onClick={toggleEditMode}
            className="p-0 rt-reset  w-10 h-10 hover:cursor-pointer "
          >
            <Icon
              name={"edit"}
              size={18}
              className="text-primary-foreground "
              variant={"fill"}
            />
          </Button>
        ) : (
          <Button
            data-accent-color
            onClick={toggleEditMode}
            className="p-0 rt-reset rt-Basebutton rt-r-size-2 rt-variant-soft rt-button w-10 h-10 hover:cursor-pointer"
          >
            <Icon
              name={"settings-edit"}
              size={18}
              className="text-primary-foreground"
              variant={"fill"}
            />
          </Button>
        )}
      </div>
      <table className="min-w-full border-collapse border border-gray-100 ">
        <thead className="text-white ">
          <tr className="bg-blue-3">
            {showCheckboxes && (
              <th scope="col" className="px-1 md:px-4 py-2 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="cursor-pointer"
                />
              </th>
            )}
            <th scope="col" className="px-1 md:px-4 py-2 text-left">
              Название
            </th>
            <th scope="col" className="px-1 md:px-4 py-2 text-left">
              Описание
            </th>
            <th scope="col" className="px-1 md:px-4 py-2 text-left">
              Количество пользователей
            </th>
          </tr>
        </thead>
        <tbody>
          {rolesData.map((role, index) => (
            <tr className="border" key={index}>
              {showCheckboxes && (
                <td className="px-1 md:px-4 py-2 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows[index]}
                    onChange={() => handleRowSelect(index)}
                    className="cursor-pointer"
                  />
                </td>
              )}
              <td className="px-1 md:px-4 py-2 text-left">{role.name}</td>
              <td className="px-1 md:px-4 py-2 text-left">
                {role.description}
              </td>
              <td className="px-1 md:px-4 py-2 text-left">{role.userCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="fixed bottom-0 left-0 right-0 p-4 ">
        {isEditMode ? (
          <Button
            data-accent-color
            className="sm:hidden px-[16px] hover:cursor-pointer w-full bg-transparent text-red-10 border border-solid border-red-500 mx-auto"
          >
            <Icon
              name={"settings-recycle"}
              size={16}
              className="mr-2 text-primary-foreground"
              variant={"fill"}
            />
            <Text className="text-nowrap"> удалить выбранное </Text>
          </Button>
        ) : (
          <Button
            data-accent-color
            className="sm:hidden px-[16px] hover:cursor-pointer w-full"
          >
            <Icon
              name={"settings-plus"}
              size={16}
              className="mr-2 text-primary-foreground"
              variant={"fill"}
            />
            <Text className="text-nowrap"> Добавить роль </Text>
          </Button>
        )}
      </div>
    </div>
  )
}
