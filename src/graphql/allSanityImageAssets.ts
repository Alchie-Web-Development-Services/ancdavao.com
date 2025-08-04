import { gql } from 'graphql-request';
import { SANITY_IMAGE_ASSET_FIELDS } from './fragments/index';

export const ALL_SANITY_IMAGE_ASSETS_QUERY = gql`
  ${SANITY_IMAGE_ASSET_FIELDS}
  query AllSanityImageAssets {
    allSanityImageAsset {
      ...SanityImageAssetFields
    }
  }
`;
