import { Button } from "@/shared/ui/button"

export default function Page() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button
        leadingIcon={{
          name: "attach",
          color: "black",
        }}
        label="Click me"
      />
    </div>
  )
}
