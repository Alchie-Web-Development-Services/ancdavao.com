import { gql } from "graphql-request";
import { SANITY_FILE_ASSET_FIELDS } from "./fragments/index";

export const SANITY_FILE_ASSET_BY_ID_QUERY = gql`
  ${SANITY_FILE_ASSET_FIELDS}
  query SanityFileAssetById($id: ID!) {
    SanityFileAsset(id: $id) {
      ...SanityFileAssetFields
    }
  }
`;
