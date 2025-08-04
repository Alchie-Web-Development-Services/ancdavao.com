import { gql } from 'graphql-request';
import { SANITY_IMAGE_ASSET_FIELDS } from './fragments/index';

export const SANITY_IMAGE_ASSET_BY_ID_QUERY = gql`
  ${SANITY_IMAGE_ASSET_FIELDS}
  query SanityImageAssetById($id: ID!) {
    SanityImageAsset(id: $id) {
      ...SanityImageAssetFields
    }
  }
`;
