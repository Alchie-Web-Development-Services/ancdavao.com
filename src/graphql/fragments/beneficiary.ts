import { gql } from 'graphql-request';

export const BENEFICIARY_FIELDS = gql`
  fragment BeneficiaryFields on Beneficiary {
    _id
    _type
    firstName
    lastName
    nickname
    pseudoName
  }
`;
