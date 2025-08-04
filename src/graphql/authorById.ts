import { gql } from 'graphql-request';
import { AUTHOR_FIELDS } from './fragments/index';

export const AUTHOR_BY_ID_QUERY = gql`
  ${AUTHOR_FIELDS}
  query AuthorById($id: ID!) {
    Author(id: $id) {
      ...AuthorFields
      email
    }
  }
`;
