import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface FormValues {
  email: string
  display_name: string
  fname: string
  lname: string
  role: string
  blocked: boolean
}

interface User {
  id: string
  display_name: string
  fname_and_lname: string
  email: string
  role: string
  blocked: boolean
}

type EditUserProps = {
  user: User
}

export const useEditUserForm = ({ user }: EditUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: user.email,
      display_name: user.display_name,
      fname: user.fname_and_lname.split(" ")[0] || "",
      lname: user.fname_and_lname.split(" ")[1] || "",
    },
  })

  const [role, setRole] = useState(user.role)
  const [blocked, setBlocked] = useState<boolean>(user.blocked)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.role = role
    data.blocked = blocked
    console.log("Form data:", data)
  }

  return {
    register,
    handleSubmit,
    errors,
    role,
    setRole,
    blocked,
    setBlocked,
    onSubmit,
  }
}
