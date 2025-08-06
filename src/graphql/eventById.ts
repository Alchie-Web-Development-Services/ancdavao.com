import { gql } from 'graphql-request';
import { EVENT_FIELDS } from './fragments/index';

export const EVENT_BY_ID_QUERY = gql`
  ${EVENT_FIELDS}
  query EventById($id: ID!) {
    Event(id: $id) {
      ...EventFields
    }
  }
`;
