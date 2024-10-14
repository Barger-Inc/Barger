import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Input value={"123"} />
      <Button children="Test" />
    </div>
  )
}
