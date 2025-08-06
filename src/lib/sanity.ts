import { GraphQLClient } from 'graphql-request';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2023-08-01";

export const SANITY_GRAPHQL_URL = `https://${projectId}.api.sanity.io/${apiVersion}/graphql/${dataset}/default`;

if (!projectId || !dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET");
}

export const client = new GraphQLClient(SANITY_GRAPHQL_URL,{
  headers: {
    Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
  },
});

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
});

export function urlFor(source: SanityImageSource) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}
