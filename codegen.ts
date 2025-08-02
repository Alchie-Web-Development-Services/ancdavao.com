import type { CodegenConfig } from '@graphql-codegen/cli';
import { SANITY_GRAPHQL_URL } from "./src/lib/sanity";

const config: CodegenConfig = {
  overwrite: true,
  schema: SANITY_GRAPHQL_URL,
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
        "typescript-graphql-request",
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