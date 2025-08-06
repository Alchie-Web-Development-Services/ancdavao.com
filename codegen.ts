import type { CodegenConfig } from "@graphql-codegen/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2023-08-01";

const SANITY_GRAPHQL_URL = `https://${projectId}.api.sanity.io/${apiVersion}/graphql/${dataset}/default`;

const config: CodegenConfig = {
  overwrite: true,
  schema: SANITY_GRAPHQL_URL,
  documents: "./src/graphql/**/*.ts",
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        {
          add: {
            content: "/* eslint-disable */\n// @ts-nocheck",
          },
        },
        "typescript",
        "typescript-operations",
      ],
      config: {
        rawRequest: true,
        skipTypename: true,
      },
    },
    "./src/generated/graphql.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
