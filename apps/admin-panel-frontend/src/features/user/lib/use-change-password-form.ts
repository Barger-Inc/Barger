import { useForm } from "react-hook-form"

type Inputs = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export const useChangePasswordForm = () => {
  return useForm<Inputs>()
}
