import { FormRole } from "@/features/role/ui/form-role";
const role = {
  id: 1, 
  name: "Text",
  description: "Text Text",
  permissions: {
    create: { allowed: false }, 
    publish: { allowed: false },
    update: { allowed: false },
    read: { allowed: false }, 
    delete: { allowed: false },
  },
};

export default function Page() {
  return <FormRole />
}
