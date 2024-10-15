import type { PlopTypes } from "@turbo/gen"
import fs from "node:fs"

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
            "export type IconName =",
            ...files.map((file) => {
              const name = file.replace(".svg", "")
              return `  | "${name}"`
            }),
          ].join("\n")
        },
      },
    ],
  })
}
