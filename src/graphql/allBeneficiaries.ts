import { gql } from 'graphql-request';
import { BENEFICIARY_FIELDS } from './fragments/index';

export const ALL_BENEFICIARIES_QUERY = gql`
  ${BENEFICIARY_FIELDS}
  query AllBeneficiaries {
    allBeneficiary {
      ...BeneficiaryFields
    }
  }
`;
