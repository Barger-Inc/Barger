import { Button } from "@/shared/ui/button"

export default function Page() {
  return (
    <div className="p-4">
      <h1>Home Page</h1>

      <div className="flex gap-2">
        <Button
          leadingIcon={{
            name: "attach",
            color: "black",
          }}
          trailingIcon={{
            name: "attach",
            color: "black",
          }}
          label="Click me"
        />

        <Button
          icon={{
            name: "attach",
            color: "black",
          }}
        />
      </div>
    </div>
  )
}
