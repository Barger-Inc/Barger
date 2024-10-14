import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <Input />
      <Button children="Test" />
    </div>
  )
}
