import { gql } from 'graphql-request';
import { PARTNER_FIELDS } from './fragments/index';

export const PARTNER_BY_ID_QUERY = gql`
  ${PARTNER_FIELDS}
  query PartnerById($id: ID!) {
    Partner(id: $id) {
      ...PartnerFields
    }
  }
`;
