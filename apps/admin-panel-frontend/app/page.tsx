"use client"
import { Button } from "@repo/ui/button"
import { useCarControllerGetAll } from "@repo/api/generate"

export default function Home() {
  const { data } = useCarControllerGetAll()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button appName="lol">asd</Button>

      {data &&
        data.map((car) => {
          return <div>{car.number}</div>
        })}
    </div>
  )
}
