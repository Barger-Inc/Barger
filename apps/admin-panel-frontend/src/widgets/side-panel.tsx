import { buttonVariants } from "@/shared/ui/button"
import { cn } from "@/shared/utils"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

type SidePanelProps = {
  links: {
    href: string
    title: string
  }[]
}

export const SidePanel = (props: SidePanelProps) => {
  return (
    <div className="w-64 border-border border-r h-screen flex flex-col p-2">
      <div className="flex flex-col flex-1">
        {props.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            children={link.title}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
              "justify-start"
            )}
          />
        ))}
      </div>

      <ThemeToggle />
    </div>
  )
}
