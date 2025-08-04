import { gql } from 'graphql-request';
import { PARTNER_FIELDS } from './fragments';

export const ALL_PARTNERS_QUERY = gql`
  ${PARTNER_FIELDS}
  query AllPartners {
    allPartner {
      ...PartnerFields
    }
  }
`;
