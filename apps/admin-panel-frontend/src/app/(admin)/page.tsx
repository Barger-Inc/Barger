import { Button } from "@/shared/ui/button"

export default function Page() {
  return (
    <div className="p-4">
      <h1>Home Page</h1>

      <div className="flex gap-2">
        <Button
          leadingIcon={{
            name: "attach",
          }}
          trailingIcon={{
            name: "attach",
          }}
          label="Click me"
        />

        <Button
          variant={"secondary"}
          label="123"
          leadingIcon={{
            name: "attach",
          }}
        />
      </div>
    </div>
  )
}
