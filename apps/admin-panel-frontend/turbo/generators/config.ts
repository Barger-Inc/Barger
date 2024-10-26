import fs from "node:fs"
import type { PlopTypes } from "@turbo/gen"

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("icons", {
    description: "Generate icon types",
    prompts: [
      // ...
    ],
    actions: [
      {
        type: "modify",
        path: "src/shared/types/icon-name.ts",
        transform(template, data, cfg) {
          const path = "./apps/admin-panel-frontend/public/icons"
          const files = fs.readdirSync(path)

          return [
            "export type StrokeIconName =",
            ...files
              .filter((file) => file.includes("stroke"))
              .map((file) => {
                const name = file.replace("-stroke.svg", "")
                return `  | "${name}"`
              }),
            "\nexport type FillIconName =",
            ...files
              .filter((file) => file.includes("fill"))
              .map((file) => {
                const name = file.replace("-fill.svg", "")
                return `  | "${name}"`
              }),
          ].join("\n")
        },
      },
    ],
  })
}
