import { FormEditUser } from "@/features/user/ui/form-edit-user";

export default function Page() {
  
  const user = {
    id: "1",
    display_name: "Text",
    fname_and_lname: "Text text",
    email: "Text",
    role: "badge",
    blocked: false,
  };

  return <FormEditUser user={user} />;
}
