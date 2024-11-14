"use client"; // This line marks the component as a Client Component

import { Button } from "@/shared/ui/button";
import { TextField } from "@/shared/ui/text-field";
import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";
import { FormField } from "@/shared/ui/form-field";
import {
  Checkbox,
  Table,
  TextArea,
} from "@radix-ui/themes";
import { type Role } from "../model/use-form-role";

interface Permissions {
  [category: string]: {
    [permission: string]: {
      allowed: boolean;
    };
  };
}

export const FormRole = () => {
  const permissionsList = ["Создание", "Публикация", "Обновление", "Чтение", "Удаление"];
  const categories = ["Новости", "Товары", "Объявления"];

  const t = useTranslations("settingsRoles");
  
  const { register, handleSubmit, control } = useForm<Role>({
    defaultValues: {
      name: "",
      description: "",
      permissions: categories.reduce<Permissions>((acc, category) => {
        acc[category] = permissionsList.reduce((permAcc, permission) => {
          permAcc[permission] = { allowed: false }; 
          return permAcc;
        }, {} as { [key: string]: { allowed: boolean } }); 
        return acc;
      }, {} as Permissions), 
    },
  });

  const onSubmit = (data: Role) => {
    console.log("Form data:", data);
 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <TextField
          label={t("name")}
          placeholder={t("name")}
          {...register("name", { required: true })}
        />
        <FormField label={t("description")}>
          <TextArea 
            placeholder={t("description")} 
            {...register("description", { required: true })} 
          />
        </FormField>
        
        <Table.Root variant="surface" size="3" className="overflow-auto">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              {permissionsList.map((permission) => (
                <Table.ColumnHeaderCell key={permission}>
                  {permission}
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {categories.map((category) => (
              <Table.Row key={category}>
                <Table.Cell className="font-bold">{category}</Table.Cell>
                {permissionsList.map((permission) => (
                  <Table.Cell key={permission}>
                    <Controller
                      name={`permissions.${category}.${permission}.allowed`}
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      )}
                    />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

      </div>
    </form>
  );
};
