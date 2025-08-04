import { gql } from 'graphql-request';
import { DOCUMENT_FIELDS } from './fragments/index';

export const ALL_DOCUMENTS_QUERY = gql`
  ${DOCUMENT_FIELDS}
  query AllDocuments {
    allDocument {
      ...DocumentFields
    }
  }
`;
