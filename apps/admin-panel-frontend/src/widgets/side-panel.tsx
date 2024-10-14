import { buttonVariants } from "@/shared/ui/button"
import { cn } from "@/shared/utils"
import Link from "next/link"

type SidePanelProps = {
  links: {
    href: string
    title: string
  }[]
}

export const SidePanel = (props: SidePanelProps) => {
  return (
    <div className="w-64 border-border border-r h-screen flex flex-col p-2">
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
  )
}
