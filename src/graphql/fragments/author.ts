import { gql } from 'graphql-request';

export const AUTHOR_FIELDS = gql`
  fragment AuthorFields on Author {
    firstName
    lastName
  }
`;
