import { Button } from "@/shared/ui/button"
import { Heading } from "@radix-ui/themes"

export default function Page() {
  return (
    <div className="p-8 flex flex-col gap-4 items-start">
      <Heading size={"6"} weight={"medium"} children={"Hello"} />

      <Button leadingIcon={"settings"} label="Click me" />
    </div>
  )
}
