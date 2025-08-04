import { gql } from 'graphql-request';
import { CENTER_FIELDS } from './fragments/index';

export const CENTER_BY_ID_QUERY = gql`
  ${CENTER_FIELDS}
  query CenterById($id: ID!) {
    Center(id: $id) {
      ...CenterFields
    }
  }
`;
