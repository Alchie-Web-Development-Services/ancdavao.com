import { gql } from 'graphql-request';

export const DOCUMENT_FIELDS = gql`
  fragment DocumentFields on Document {
    _id
    _type
  }
`;
