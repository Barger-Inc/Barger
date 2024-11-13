import { defineConfig } from "orval"

export default defineConfig({
  client: {
    input: "./src/schema.yaml",
    output: {
      target: "./src/generate",
      schemas: "./src/lib",
      client: "react-query",
      biome: true,
      mode: "tags",
      override: {
        mutator: {
          path: "./src/api-instance.ts",
          name: "createInstance",
        },
      },
    },
  },
})
