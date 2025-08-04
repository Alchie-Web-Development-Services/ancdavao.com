import { gql } from 'graphql-request';
import { AUTHOR_FIELDS } from './fragments';

export const ALL_AUTHORS_QUERY = gql`
  ${AUTHOR_FIELDS}
  query AllAuthors {
    allAuthor {
      ...AuthorFields
      email
    }
  }
`;
