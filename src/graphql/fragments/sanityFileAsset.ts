import { gql } from 'graphql-request';

export const SANITY_FILE_ASSET_FIELDS = gql`
  fragment SanityFileAssetFields on SanityFileAsset {
    _id
    _type
    originalFilename
    url
    mimeType
  }
`;
