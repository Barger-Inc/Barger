import { useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"

export interface User {
  id: string
  displayName: string
  firstName: string
  lastName: string
  email: string
  role: string
  isBlocked: boolean
  password?: string
  confirmPassword?: string
}

export const useFormUser = ({ user }: { user?: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues: user })

  const [role, setRole] = useState(user?.role)
  const [isBlocked, setIsBlocked] = useState(user?.isBlocked ?? false)

  const onSubmit: SubmitHandler<User> = (data) => {
    if (role) data.role = role
    data.isBlocked = isBlocked

    // TODO: logic
    // biome-ignore lint/suspicious/noConsoleLog: should be removed when the API is implemented
    console.log("Form data:", data)
  }

  return {
    type: user?.id ? "edit" : ("create" as const),
    register,
    handleSubmit,
    errors,
    role,
    setRole,
    isBlocked,
    setIsBlocked,
    onSubmit,
  }
}
