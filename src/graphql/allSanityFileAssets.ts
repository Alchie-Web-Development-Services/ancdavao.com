import { gql } from 'graphql-request';
import { SANITY_FILE_ASSET_FIELDS } from './fragments/index';

export const ALL_SANITY_FILE_ASSETS_QUERY = gql`
  ${SANITY_FILE_ASSET_FIELDS}
  query AllSanityFileAssets {
    allSanityFileAsset {
      ...SanityFileAssetFields
    }
  }
`;
