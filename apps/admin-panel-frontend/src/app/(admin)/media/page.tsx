import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1>Media Page</h1>
      <Link
        className="block"
        href={"/media/1"}
        children="Open media preview 1"
      />
      <Link
        className="block"
        href={"/media/2"}
        children="Open media preview 2"
      />
    </div>
  )
}
