import { gql } from 'graphql-request';
import { DOCUMENT_FIELDS } from './fragments';

export const DOCUMENT_BY_ID_QUERY = gql`
  ${DOCUMENT_FIELDS}
  query DocumentById($id: ID!) {
    Document(id: $id) {
      ...DocumentFields
    }
  }
`;
