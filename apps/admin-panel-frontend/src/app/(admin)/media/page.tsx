import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1>Media Page</h1>
      <Link href={"/media/preview"} children="Open modal" />
    </div>
  )
}
