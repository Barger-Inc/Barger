import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export interface Role {
  name: string;
  description: string;
  permissions: {
    [key: string]: {
      allowed: boolean;
    };
  }; 
}

export const useFormRole = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Role>();

  const [currentRole, setCurrentRole] = useState<string>(""); 
  const [currentDescription, setCurrentDescription] = useState<string>(""); 
  const [currentPermissions, setCurrentPermissions] = useState<{ [key: string]: { allowed: boolean } }>({}); 

  const onSubmit: SubmitHandler<Role> = (data) => {
    data.name = currentRole; 
    data.description = currentDescription;
    data.permissions = currentPermissions; 

    console.log("Form data:", data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit), 
    errors,
    role: currentRole, 
    setRole: setCurrentRole, 
    description: currentDescription,
    setDescription: setCurrentDescription,
    permissions: currentPermissions,
    setPermissions: setCurrentPermissions,
  };
};
