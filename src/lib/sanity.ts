import { GraphQLClient } from 'graphql-request';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2023-08-01";

const SANITY_GRAPHQL_URL = `https://${projectId}.api.sanity.io/${apiVersion}/graphql/${dataset}/default`;

export const client = new GraphQLClient(SANITY_GRAPHQL_URL,{
    headers: {
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
  });
