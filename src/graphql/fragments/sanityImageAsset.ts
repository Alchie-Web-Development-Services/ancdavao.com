import { gql } from "graphql-request";

export const SANITY_IMAGE_ASSET_FIELDS = gql`
  fragment SanityImageAssetFields on SanityImageAsset {
    _id
    _type
    originalFilename
    url
    mimeType
  }
`;
