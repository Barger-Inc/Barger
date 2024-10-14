import { SidePanel } from "@/widgets/side-panel"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <SidePanel />
      <div>{children}</div>
    </div>
  )
}
