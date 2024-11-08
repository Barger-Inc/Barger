import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

interface FormValues {
  email: string
  display_name: string
  fname: string
  lname: string
  role: string
  password: string
  confirmPassword: string
}

export const useCreateUserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()

  const password = watch("password")

  const [role, setRole] = useState("badge")

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.role = role
    console.log("Form data:", data)
  }

  return {
    register,
    handleSubmit,
    errors,
    password,
    role,
    setRole,
    onSubmit,
  }
}
