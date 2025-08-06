import { gql } from 'graphql-request';
import { BENEFICIARY_FIELDS } from './fragments/index';

export const BENEFICIARY_BY_ID_QUERY = gql`
  ${BENEFICIARY_FIELDS}
  query BeneficiaryById($id: ID!) {
    Beneficiary(id: $id) {
      ...BeneficiaryFields
    }
  }
`;
