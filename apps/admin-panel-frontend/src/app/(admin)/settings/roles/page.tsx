"use client";
import { useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { Button, Text, IconButton, Table, TextField } from "@radix-ui/themes"
import { useTranslations } from "next-intl"
import Link from "next/link"
import type { ReactNode } from "react"

export default function Page(props: { children: ReactNode }) {
  const tRoles = useTranslations("settingsRoles");
  const tSidePanel = useTranslations("settingsSidePanel");
  const [isEditMode, setIsEditMode] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Array(3).fill(false));
  const [selectAll, setSelectAll] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setShowCheckboxes(!isEditMode);
  };

  const toggleSelectAll = () => {
    const newSelectedRows = selectedRows.map(() => !selectAll);
    setSelectedRows(newSelectedRows);
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (index: number) => {
    const newSelectedRows = [...selectedRows];
    newSelectedRows[index] = !newSelectedRows[index];
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.every(Boolean));
  };

  const rolesData = [
    { name: "Chris", description: "Описание для Chris", userCount: 10 },
    { name: "Alex", description: "Описание для Alex", userCount: 20 },
    { name: "Jordan", description: "Описание для Jordan", userCount: 30 },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-center h-10">
        
        <Text className="rt-Text rt-r-size-7 rt-r-weight-bold" size="3" weight="bold"   children={tSidePanel("links.roles")} />
        {isEditMode ? (
          <IconButton size="4" variant="soft" className=" hidden sm:flex px-[16px] hover:cursor-pointer bg-transparent text-red-10 border border-solid border-red-500 w-[228px] h-10" >
            <Icon
              name={"trash-bin"}
              size={16}
              className="mr-2 text-primary-foreground"
              variant={"stroke"}
            />
           <Text className="text-nowrap" size="3"  children={tRoles("deleteSelected")} />
          </IconButton>
        ) : (
          <IconButton size="3" variant="soft" className="hidden sm:flex px-[16px] hover:cursor-pointer w-[184px] h-10  bg-accent-9 " >
            <Icon
              name={"add-square"}
              size={16}
              className="mr-2 text-primary-foreground bg-accent-contrast"
              variant={"stroke"}
            />
              <Text className="text-accent-contrast" size="3"  children={tRoles("addRole")} />
          </IconButton>
        )}
      </div>
      <div className="flex items-center py-6">
        <TextField.Root
          variant="surface"
          size="3"
          placeholder={tRoles("search")}
          className=""
        >
          <TextField.Slot>
            <Icon name={"magnifier"} size={16} className="text-primary-foreground" variant={"stroke"} />
          </TextField.Slot>
        </TextField.Root>
        <IconButton size="3" variant="soft" className="ml-2 hover:cursor-pointer">
          <Icon name={"tuning"}
            size={18}
            className="text-primary-foreground"
            variant={"fill"} />
        </IconButton>

        {isEditMode ? (

          <IconButton size="3" variant="soft" className="p-0 ml-2 rt-r-size-2   hover:cursor-pointer bg-accent-9 color:currentcolor " onClick={toggleEditMode}>
            <Icon name={"pencil"}
              size={18}
              className="text-primary-foreground  bg-accent-contrast "
              variant={"fill"} />
          </IconButton>

        ) : (
          <IconButton size="3" variant="soft" className="p-0 rt-reset rt-Basebutton rt-r-size-2 ml-2  hover:cursor-pointer " onClick={toggleEditMode}>
            <Icon name={"pencil"}
              size={18}
              className="text-primary-foreground"
              variant={"fill"} />
          </IconButton>
        )}

      </div>
      <Table.Root className="min-w-full border-collapse rounded-3 overflow-hidden border-y border-x">
        <Table.Header>
          <Table.Row className="bg-blue-3 text-white ">
            {showCheckboxes && (
              <Table.ColumnHeaderCell>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="cursor-pointer"
                />
              </Table.ColumnHeaderCell>
            )}
            <Table.ColumnHeaderCell children={tRoles("name")}/>
            <Table.ColumnHeaderCell children={tRoles("description")}/>
            <Table.ColumnHeaderCell children={tRoles("numberOfUsers")}/>
          </Table.Row>
        </Table.Header >
        <Table.Body>
          {rolesData.map((role, index) => (
            <Table.Row key={index} className="">
              {showCheckboxes && (
                <Table.RowHeaderCell>
                  <input
                    type="checkbox"
                    checked={selectedRows[index]}
                    onChange={() => handleRowSelect(index)}
                    className="cursor-pointer"
                  />
                </Table.RowHeaderCell>
              )}
              <Table.RowHeaderCell>{role.name}</Table.RowHeaderCell>
              <Table.Cell>{role.description}</Table.Cell>
              <Table.Cell>{role.userCount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <div className="fixed bottom-0 left-0 right-0 p-4 ">

        {isEditMode ? (

          <IconButton size="3" variant="soft" className="sm:hidden px-[16px] hover:cursor-pointer w-full bg-transparent text-red-10 border border-solid border-red-500 mx-auto"  >
            <Icon
              name={"trash-bin"}
              size={16}
              className="mr-2 text-primary-foreground"
              variant={"stroke"}
            />
             <Text className="text-nowrap" size="4"  children={tRoles("deleteSelected")} />
          </IconButton>
        ) : (
          <IconButton size="3" variant="soft" className="sm:hidden px-[16px] hover:cursor-pointer w-full bg-accent-9"  >
            <Icon
              name={"add-square"}
              size={16}
              className="mr-2 text-primary-foreground bg-accent-contrast"
              variant={"stroke"}
            />
            <Text className="text-nowrap text-accent-contrast" size="3" children={tRoles("addRole")}/> 
          </IconButton>
        )}
      </div>
    </div>
  );
}
